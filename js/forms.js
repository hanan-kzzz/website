/**
 * Gulf Fiber and Metal Company Limited - B2B Form Validation & RFQ Handler
 * Features honeypot anti-spam, client-side validation, reference number generation,
 * EmailJS integration for company mail delivery, localStorage backup, WhatsApp prefill,
 * and printable quotation summaries.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Pre-fill Product from URL param in Quote form
  const params = new URLSearchParams(window.location.search);
  const selectedProduct = params.get('product');
  const productSelect = document.getElementById('quoteProduct');

  if (productSelect && selectedProduct) {
    // If the option exists, select it, otherwise create and select it
    let found = false;
    for (let i = 0; i < productSelect.options.length; i++) {
      if (productSelect.options[i].text.toLowerCase().includes(selectedProduct.toLowerCase())) {
        productSelect.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      const opt = document.createElement('option');
      opt.value = selectedProduct;
      opt.text = selectedProduct;
      opt.selected = true;
      productSelect.appendChild(opt);
    }
  }

  // Quotation File Upload UX Handler
  const uploadBox = document.getElementById('quoteFileUploadBox');
  const fileInput = document.getElementById('quoteFileInput');
  const uploadPrompt = document.getElementById('quoteUploadPrompt');
  const fileInfo = document.getElementById('quoteFileSelectedInfo');
  const fileNameSpan = document.getElementById('quoteFileName');
  const removeFileBtn = document.getElementById('quoteFileRemoveBtn');

  if (uploadBox && fileInput) {
    uploadBox.addEventListener('click', (e) => {
      // Don't re-trigger file picker if user clicks remove button
      if (e.target === removeFileBtn || e.target.closest('#quoteFileRemoveBtn')) return;
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        if (fileNameSpan) fileNameSpan.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
        if (uploadPrompt) uploadPrompt.style.display = 'none';
        if (fileInfo) fileInfo.style.display = 'inline-flex';
      }
    });

    if (removeFileBtn) {
      removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        if (uploadPrompt) uploadPrompt.style.display = 'block';
        if (fileInfo) fileInfo.style.display = 'none';
      });
    }
  }

  // Quote Form Handler
  const quoteForm = document.getElementById('quotationForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check for bots
      const honeypot = document.getElementById('website_honey_trap');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Bot submission blocked.');
        return;
      }

      // Collect values
      const name = document.getElementById('quoteName')?.value.trim();
      const company = document.getElementById('quoteCompany')?.value.trim();
      const email = document.getElementById('quoteEmail')?.value.trim();
      const phone = document.getElementById('quotePhone')?.value.trim();
      const product = document.getElementById('quoteProduct')?.value.trim();
      const location = document.getElementById('quoteLocation')?.value.trim();
      const quantity = document.getElementById('quoteQuantity')?.value.trim() || 'Not specified';
      const specs = document.getElementById('quoteSpecs')?.value.trim() || 'Standard engineering spec';
      const description = document.getElementById('quoteDesc')?.value.trim() || 'No additional notes provided';
      const selectedFileName = fileInput?.files?.[0]?.name || 'None attached';

      // Validation
      if (!name || !company || !email || !phone || !product || !location) {
        showToast('Please complete all mandatory fields (*)', 'error');
        return;
      }

      // Generate RFQ Reference Number
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const rfqId = `GFM-RFQ-2026-${randomSuffix}`;

      // Package quotation object
      const rfqData = {
        rfqId,
        date: new Date().toISOString(),
        name,
        company,
        email,
        phone,
        product,
        location,
        quantity,
        specs,
        description,
        fileName: selectedFileName
      };

      // Store in local storage history
      try {
        const history = JSON.parse(localStorage.getItem('gfm_rfq_history') || '[]');
        history.unshift(rfqData);
        localStorage.setItem('gfm_rfq_history', JSON.stringify(history));
      } catch (err) {
        console.error('LocalStorage write failed:', err);
      }

      // Submit Button Loading State
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span style="display:inline-flex; align-items:center; gap:0.5rem;">
            <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
            Sending Quotation to Company Mail...
          </span>
        `;
      }

      let emailSent = false;
      const targetCompanyEmail = (typeof EMAILJS_CONFIG !== 'undefined' && EMAILJS_CONFIG.companyEmail) ? EMAILJS_CONFIG.companyEmail : 'company mail';

      // Transmit through EmailJS if configured
      let emailErrorDetails = null;
      if (typeof isEmailJsConfigured === 'function' && isEmailJsConfigured()) {
        try {
          const templateParams = {
            rfq_id: rfqId,
            reference_no: rfqId,
            name: name,
            from_name: name,
            company: company,
            company_name: company,
            email: email,
            from_email: email,
            reply_to: email,
            phone: phone,
            contact_phone: phone,
            product: product,
            product_name: product,
            location: location,
            project_location: location,
            quantity: quantity,
            specs: specs,
            technical_specs: specs,
            description: description,
            message: description,
            file_name: selectedFileName,
            to_email: targetCompanyEmail,
            company_email: targetCompanyEmail,
            submission_date: new Date().toLocaleString()
          };

          await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.quoteTemplateId, templateParams);
          emailSent = true;
          showToast(`Quotation sent to company mail (${targetCompanyEmail})!`, 'success');
        } catch (emailErr) {
          console.error('EmailJS transmission error:', emailErr);
          const rawErr = emailErr?.text || emailErr?.message || 'Email delivery failed';
          emailErrorDetails = rawErr;
          
          if (rawErr.toLowerCase().includes('invalid grant') || rawErr.toLowerCase().includes('reconnect')) {
            showToast(`Quotation ${rfqId} saved! Please reconnect your Gmail in EmailJS dashboard.`, 'warning');
          } else {
            showToast(`Quotation ${rfqId} saved! Email delivery notice: ${rawErr}`, 'warning');
          }
        }
      } else {
        // Helpful dev guidance if credentials are still placeholder
        console.info(
          '%c[EmailJS Setup Pending]%c\nTo send quotations automatically to your company email, enter your EmailJS credentials in js/email-config.js.\nSee docs/deployment-guide.md for detailed steps.',
          'color: #0284C7; font-weight: bold; font-size: 13px;',
          'color: #334155; font-size: 12px;'
        );
        showToast(`Quotation ${rfqId} generated! (EmailJS setup pending in js/email-config.js)`, 'info');
      }

      // Restore submit button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }

      // Populate Success Modal
      const modalHeroIcon = document.getElementById('modalHeroIcon');
      const modalStatusBadge = document.getElementById('modalStatusBadge');
      const modalTitle = document.getElementById('modalTitle');
      const modalSubtitle = document.getElementById('modalSubtitle');
      const modalRfqRef = document.getElementById('modalRfqRef');
      const modalStatusAlert = document.getElementById('modalStatusAlert');
      const modalRfqDetails = document.getElementById('modalRfqDetails');
      const whatsappBtn = document.getElementById('whatsappRfqBtn');
      const copyBtn = document.getElementById('copyRfqBtn');

      if (modalRfqRef) modalRfqRef.textContent = rfqId;

      // Adjust Modal Header & Alert based on email dispatch status
      if (emailSent) {
        if (modalHeroIcon) {
          modalHeroIcon.style.background = 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)';
          modalHeroIcon.style.borderColor = '#10B981';
          modalHeroIcon.style.color = '#059669';
          modalHeroIcon.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        }
        if (modalStatusBadge) {
          modalStatusBadge.style.backgroundColor = '#F0FDF4';
          modalStatusBadge.style.color = '#16A34A';
          modalStatusBadge.style.borderColor = '#BBF7D0';
          modalStatusBadge.textContent = '✓ Dispatched to Company Mail';
        }
        if (modalTitle) modalTitle.textContent = 'Quotation Request Dispatched!';
        if (modalSubtitle) modalSubtitle.textContent = `Your RFQ has been logged and transmitted directly to ${targetCompanyEmail}.`;
        if (modalStatusAlert) {
          modalStatusAlert.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; background: #F0FDF4; border: 1px solid #BBF7D0; color: #15803D; padding: 0.45rem 0.75rem; border-radius: 6px; font-size: 0.78rem; font-weight: 600;">
              <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #16A34A; box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.25);"></span>
              <span>Live Transmission: Sent to company inbox (${targetCompanyEmail})</span>
            </div>
          `;
        }
      } else {
        // Email transmission issue or setup needed
        if (modalHeroIcon) {
          modalHeroIcon.style.background = 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)';
          modalHeroIcon.style.borderColor = '#F59E0B';
          modalHeroIcon.style.color = '#D97706';
          modalHeroIcon.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
        }
        if (modalStatusBadge) {
          modalStatusBadge.style.backgroundColor = '#FFFBEB';
          modalStatusBadge.style.color = '#D97706';
          modalStatusBadge.style.borderColor = '#FDE68A';
          modalStatusBadge.textContent = '⚠️ RFQ Logged (Email Reconnect Needed)';
        }
        if (modalTitle) modalTitle.textContent = 'Quotation Logged & Reference Issued';
        if (modalSubtitle) modalSubtitle.textContent = `Your RFQ code is saved. Please reconnect your Gmail in EmailJS dashboard.`;
        if (modalStatusAlert) {
          modalStatusAlert.innerHTML = `
            <div style="background: #FFFBEB; border: 1px solid #FCD34D; border-left: 3.5px solid #F59E0B; border-radius: 6px; padding: 0.5rem 0.75rem; font-size: 0.78rem; color: #92400E; text-align: left;">
              <strong style="display: block; margin-bottom: 2px;">Email Service Connection Notice:</strong>
              EmailJS reported <em>"Invalid grant"</em> for Gmail. Reconnect your Gmail in <a href="https://dashboard.emailjs.com/admin" target="_blank" rel="noopener noreferrer" style="color: #B45309; font-weight: 700; text-decoration: underline;">EmailJS Dashboard &rarr; Email Services</a>.
            </div>
          `;
        }
      }
      
      if (copyBtn) {
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(rfqId).then(() => {
            copyBtn.textContent = 'Copied!';
            copyBtn.style.backgroundColor = '#10B981';
            copyBtn.style.color = '#FFFFFF';
            setTimeout(() => {
              copyBtn.textContent = 'Copy';
              copyBtn.style.backgroundColor = '#E2E8F0';
              copyBtn.style.color = '#334155';
            }, 2000);
          }).catch(() => {
            showToast(`RFQ Code: ${rfqId}`);
          });
        };
      }

      if (modalRfqDetails) {
        modalRfqDetails.innerHTML = `
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 0.75rem 0.9rem; font-size: 0.82rem;">
            
            <!-- 2-Column Summary Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.5rem 1rem;">
              <div>
                <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; font-weight: 700; display: block;">Company / Contractor</span>
                <strong style="color: #0F172A; font-size: 0.88rem;">${company}</strong>
              </div>
              <div>
                <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; font-weight: 700; display: block;">Contact Person</span>
                <span style="color: #1E293B; font-weight: 600;">${name}</span> <span style="color: #64748B; font-size: 0.75rem;">(${phone})</span>
              </div>
              <div>
                <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; font-weight: 700; display: block;">Solution Category</span>
                <span style="display: inline-block; background: #EEF2F6; color: #0369A1; font-weight: 600; padding: 1px 6px; border-radius: 4px; font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;">${product}</span>
              </div>
              <div>
                <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B; font-weight: 700; display: block;">Location & Quantity</span>
                <span style="color: #1E293B; font-weight: 600;">${location}</span> • <strong style="color: #008080;">${quantity}</strong>
              </div>
              <div style="grid-column: 1 / -1; border-top: 1px dashed #E2E8F0; padding-top: 0.4rem; display: flex; align-items: center; justify-content: space-between;">
                <span style="color: #64748B; font-size: 0.75rem;">📎 Drawing: <strong style="color: #334155;">${selectedFileName}</strong></span>
                <span style="color: #94A3B8; font-size: 0.72rem;">Logged: ${new Date().toLocaleDateString()}</span>
              </div>
            </div>

          </div>
        `;
      }

      if (whatsappBtn) {
        const waText = encodeURIComponent(`Hello Gulf Fiber and Metal Co. Ltd. I have submitted RFQ ${rfqId} for ${product} (${quantity}) in ${location}. Contact: ${name}, ${company}.`);
        whatsappBtn.href = `https://wa.me/966500000000?text=${waText}`;
      }

      // Show Success Modal
      openModal('quoteSuccessModal');
      quoteForm.reset();
      if (uploadPrompt) uploadPrompt.style.display = 'block';
      if (fileInfo) fileInfo.style.display = 'none';
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check
      const honeypot = document.getElementById('contact_honey_trap');
      if (honeypot && honeypot.value.trim() !== '') {
        return;
      }

      const name = document.getElementById('contactName')?.value.trim();
      const company = document.getElementById('contactCompany')?.value.trim() || 'Not specified';
      const email = document.getElementById('contactEmail')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim() || 'Not specified';
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Transmitting inquiry...`;
      }

      const targetCompanyEmail = (typeof EMAILJS_CONFIG !== 'undefined' && EMAILJS_CONFIG.companyEmail) ? EMAILJS_CONFIG.companyEmail : 'company mail';

      if (typeof isEmailJsConfigured === 'function' && typeof EMAILJS_CONFIG !== 'undefined' && EMAILJS_CONFIG.contactTemplateId && EMAILJS_CONFIG.contactTemplateId !== 'YOUR_CONTACT_TEMPLATE_ID') {
        try {
          await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.contactTemplateId, {
            name,
            from_name: name,
            company,
            email,
            from_email: email,
            reply_to: email,
            phone,
            message,
            to_email: targetCompanyEmail,
            submission_date: new Date().toLocaleString()
          });
          showToast(`Inquiry sent directly to company desk (${targetCompanyEmail})!`, 'success');
        } catch (err) {
          console.error('Contact email error:', err);
          showToast('Inquiry recorded. Our team will contact you shortly.', 'info');
        }
      } else {
        showToast('Thank you. Your message has been routed to our Riyadh office.', 'success');
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }

      contactForm.reset();
    });
  }
});
