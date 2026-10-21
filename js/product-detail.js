/**
 * Gulf Fiber and Metal Company Limited - Advanced Product Detail Controller
 * Manages dynamic rendering, interactive CAD/Photo view switching, lightbox zoom,
 * technical tabs, clipboard copy, datasheet export, and seamless EN/AR bilingual support.
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'grp-traditional-cladding';

  let currentViewMode = 'photo'; // 'photo' | 'cad'

  // Icon SVG dictionary for clean micro-icons
  const ICONS = {
    feather: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
    shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    thermometer: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>',
    zap: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    flame: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>'
  };

  // Toast Notification Controller
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('pdpToast');
    const msg = document.getElementById('pdpToastMsg');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function getProduct() {
    if (typeof PRODUCTS_DATA === 'undefined') return null;
    return PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  }

  function renderProduct() {
    const product = getProduct();
    if (!product) return;

    const isAr = document.documentElement.lang === 'ar';
    const prodName = isAr ? product.nameAr : product.name;
    const prodCatName = isAr ? product.categoryNameAr : product.categoryName;
    const prodLeadText = isAr ? product.shortDescAr : product.shortDesc;
    const prodFullText = isAr ? product.fullDescAr : product.fullDesc;

    // 1. Page Title
    document.title = `${prodName} | Gulf Fiber and Metal Co. Ltd.`;

    // 2. Breadcrumbs
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = prodName;

    // 3. Header Metas & Title
    const prodCategory = document.getElementById('prodCategory');
    const prodBadge = document.getElementById('prodBadge');
    const prodBadgeText = document.getElementById('prodBadgeText');
    const prodSku = document.getElementById('prodSku');
    const prodTitle = document.getElementById('prodTitle');
    const prodLead = document.getElementById('prodLead');

    if (prodCategory) prodCategory.textContent = prodCatName;
    if (prodSku) prodSku.textContent = `SKU: ${product.sku || 'GFM-GRP'}`;
    if (prodTitle) prodTitle.textContent = prodName;
    if (prodLead) prodLead.textContent = prodLeadText;

    if (prodBadge && prodBadgeText) {
      const isVerified = product.status === 'Verified';
      prodBadge.className = `pdp-badge-status ${isVerified ? 'status-verified' : 'status-proposed'}`;
      prodBadgeText.textContent = isAr 
        ? (isVerified ? 'معتمد للمشاريع' : 'معيار مقترح للمراجعة')
        : (isVerified ? 'Verified Spec' : 'Proposed Benchmark');
    }

    // 4. Media Viewer & Switcher
    const prodImage = document.getElementById('prodImage');
    const btnViewPhoto = document.getElementById('btnViewPhoto');
    const btnViewCad = document.getElementById('btnViewCad');

    function updateMediaSrc() {
      if (!prodImage) return;
      if (currentViewMode === 'cad' && product.cadImage) {
        prodImage.src = product.cadImage;
        prodImage.style.objectFit = 'contain';
        prodImage.style.padding = '1.5rem';
        prodImage.style.backgroundColor = '#FFFFFF';
        if (btnViewCad) btnViewCad.classList.add('active');
        if (btnViewPhoto) btnViewPhoto.classList.remove('active');
      } else {
        prodImage.src = product.image;
        prodImage.style.objectFit = 'cover';
        prodImage.style.padding = '0';
        prodImage.style.backgroundColor = '#F1F5F9';
        if (btnViewPhoto) btnViewPhoto.classList.add('active');
        if (btnViewCad) btnViewCad.classList.remove('active');
      }
      prodImage.alt = `${prodName} - ${currentViewMode === 'cad' ? 'CAD Drawing' : 'Site View'}`;
    }

    updateMediaSrc();

    if (btnViewPhoto) {
      btnViewPhoto.onclick = (e) => {
        e.stopPropagation();
        currentViewMode = 'photo';
        updateMediaSrc();
      };
    }

    if (btnViewCad) {
      btnViewCad.onclick = (e) => {
        e.stopPropagation();
        currentViewMode = 'cad';
        updateMediaSrc();
      };
    }

    // 5. Key Metrics Grid
    const metricGrid = document.getElementById('prodMetricGrid');
    if (metricGrid && product.highlights && product.highlights.length) {
      metricGrid.innerHTML = product.highlights.map(h => {
        const iconSvg = ICONS[h.icon] || ICONS.shield;
        const label = isAr ? (h.labelAr || h.label) : h.label;
        return `
          <div class="pdp-metric-box">
            <div class="pdp-metric-icon">${iconSvg}</div>
            <span class="pdp-metric-value">${h.value}</span>
            <span class="pdp-metric-label">${label}</span>
          </div>
        `;
      }).join('');
    }

    // 6. Overview & Applications
    const prodDesc = document.getElementById('prodDesc');
    if (prodDesc) prodDesc.textContent = prodFullText;

    const prodApplications = document.getElementById('prodApplications');
    if (prodApplications) {
      const apps = isAr ? product.applicationsAr : product.applications;
      prodApplications.innerHTML = apps.map(app => `
        <li class="pdp-app-item">
          <span class="pdp-app-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </span>
          <span>${app}</span>
        </li>
      `).join('');
    }

    // 7. Specs Table
    const prodSpecsTable = document.getElementById('prodSpecsTable');
    if (prodSpecsTable && product.specifications) {
      prodSpecsTable.innerHTML = Object.entries(product.specifications).map(([key, val]) => `
        <tr>
          <th>${key}</th>
          <td><strong>${val}</strong></td>
        </tr>
      `).join('');
    }

    // 8. Dimensions, Finishes & Fixing
    const prodDimensions = document.getElementById('prodDimensions');
    const prodFinishes = document.getElementById('prodFinishes');
    const prodFixing = document.getElementById('prodFixing');

    if (prodDimensions) prodDimensions.textContent = isAr ? (product.dimensionsAr || product.dimensions) : product.dimensions;
    if (prodFinishes) prodFinishes.textContent = isAr ? (product.finishesAr || product.finishes) : product.finishes;
    if (prodFixing) prodFixing.textContent = isAr ? (product.fixingMethodAr || product.fixingMethod) : product.fixingMethod;

    // 9. Dynamic CTA Links (Quote & WhatsApp)
    const quoteUrl = `quote.html?product=${encodeURIComponent(product.name)}`;
    const prodQuoteBtnTop = document.getElementById('prodQuoteBtnTop');
    const prodQuoteBtnBottom = document.getElementById('prodQuoteBtnBottom');
    if (prodQuoteBtnTop) prodQuoteBtnTop.href = quoteUrl;
    if (prodQuoteBtnBottom) prodQuoteBtnBottom.href = quoteUrl;

    const waMsg = encodeURIComponent(`Hello Gulf Fiber and Metal Company. I would like to inquire about specifications and pricing for: ${product.name} (SKU: ${product.sku || product.id}).`);
    const waUrl = `https://wa.me/966500000000?text=${waMsg}`;
    const prodWhatsappBtnBottom = document.getElementById('prodWhatsappBtnBottom');
    if (prodWhatsappBtnBottom) prodWhatsappBtnBottom.href = waUrl;

    // 10. Localized Static UI Labels
    updateLocalizedLabels(isAr);

    // 11. Render Related Products
    renderRelatedProducts(product, isAr);
  }

  function updateLocalizedLabels(isAr) {
    const setTxt = (id, en, ar) => {
      const el = document.getElementById(id);
      if (el) el.textContent = isAr ? ar : en;
    };

    setTxt('txtBackCatalog', 'Back to Catalogue', 'العودة لكتالوج المنتجات');
    setTxt('txtSaudiMade', 'Riyadh Factory Direct', 'صناعة سعودية - الرياض');
    setTxt('txtRequestQuote', 'Request Quotation', 'طلب تسعيرة رسمية');
    setTxt('txtDatasheetBtn', 'Datasheet (PDF)', 'المواصفات (PDF)');
    setTxt('txtViewPhoto', 'Site Installation', 'التنفيذ الميداني');
    setTxt('txtViewCad', 'CAD Schematic', 'المخطط الهندسي (CAD)');
    setTxt('txtClickZoom', 'Click to expand', 'انقر للتكبير');
    setTxt('txtEngOverview', 'Engineering Overview', 'نظرة هندسية عامة');
    setTxt('txtTargetApps', 'Target Applications & Environments', 'التطبيقات والمجالات المستهدفة');

    // Tabs
    setTxt('tabTitleSpecs', 'Material Specs', 'المواصفات المادية');
    setTxt('tabTitleDimensions', 'Dimensions & Fixing', 'الأبعاد وطريقة التثبيت');
    setTxt('tabTitleFinishes', 'Surface Finishes', 'التشطيبات والطلاءات');
    setTxt('tabTitleTesting', 'Compliance', 'المعايير والاختبارات');

    // Table
    setTxt('txtPropsTitle', 'Material & Mechanical Properties', 'الخواص المادية والميكانيكية');
    setTxt('txtPropsSubtitle', 'Tested in accordance with ASTM and BS international composite standards.', 'تم الاختبار وفق معايير الجمعية الأمريكية لاختبار المواد (ASTM) والمواصفات البريطانية (BS).');
    setTxt('txtCopyTable', 'Copy Table', 'نسخ الجدول');

    // Dimensions Pane
    setTxt('txtDimTitle', 'Dimensions & Sizing Envelopes', 'الأبعاد والمقاسات الهندسية');
    setTxt('txtFixingTitle', 'Structural Fixing & Anchorage Method', 'نظام التثبيت والربط الإنشائي');
    setTxt('txtJointTitle', 'Factory-Engineered Concealed Interlocking Joint', 'فواصل تعشيق مصنعية مخفية ومحكمة');
    setTxt('txtJointDesc', 'Precision factory returns with internal tongue-and-groove or gasketed expansion lines ensure zero visible screw heads on finished architectural sightlines while compensating for thermal expansion.', 'حواف مصنعية دقيقة بنظام التعشيق وفواصل التمدد المطاطية لضمان خلو الأسطح الظاهرة من أي مسامير مع استيعاب التمدد والانكماش الحراري.');

    // Finishes
    setTxt('txtFinishesOverview', 'Coatings & Gelcoat Systems', 'أنظمة الجل كوت والطلاء الخارجي');
    setTxt('swatchGlossName', 'High-Gloss Gelcoat', 'جل كوت عالي اللمعان');
    setTxt('swatchGlossDesc', 'Ultra-smooth mirror surface, non-porous, highly resistant to washdown chemicals and transit concourse grime.', 'سطح أملس كالمرآة، غير مسامي، ومقاوم للغسيل الكيماوي والأتربة في صالات الترانزيت.');
    setTxt('swatchMatteName', 'Architectural Satin Matte', 'مطفي حريري معماري');
    setTxt('swatchMatteDesc', 'Sophisticated anti-glare diffused surface, ideal for shopping mall interior atriums and commercial tower reception lobbies.', 'سطح مانع للتوهج، مثالي لبهو المجمعات التجارية وردهات الاستقبال في الأبراج الإدارية.');
    setTxt('swatchMicaName', 'Metallic Mica Iridescent', 'بريق الميكا المعدني');
    setTxt('swatchMicaDesc', 'Micro-particle metallic flake suspension creating visual depth comparable to anodized titanium and bronze.', 'حبيبات معدنية مجهرية تضفي عمقاً بصرياً مماثلاً للتيتانيوم والبرونز المعالج.');
    setTxt('swatchTravertineName', 'Travertine & Stone Texture', 'ملمس الحجر والترافرتين');
    setTxt('swatchTravertineDesc', 'Natural limestone & Riyadh stone tactile fidelity with 75% structural weight reduction versus heavy precast.', 'محاكاة حجر الرياض والحجر الجيري الطبيعي مع خفض 75% من الوزن مقارنة بالخرسانة مسبقة الصب.');
    setTxt('txtRalNote', 'Custom RAL Classic, Design & NCS color matching available upon client project specification.', 'مطابقة تامة لكافة ألوان كود RAL و NCS المعتمدة وفق مواصفات استشاري المشروع.');

    // Testing
    setTxt('txtTestingTitle', 'Standardized Testing & Composite Quality Assurance', 'الفحوصات المعيارية وضمان الجودة');
    setTxt('txtTestingDesc', 'Every production batch undergoes stringent laboratory testing in Riyadh to verify resin polymer cross-linking, reinforcement uniformity, and structural integrity.', 'تخضع كل دفعة إنتاجية في مصنع الرياض لاختبارات معملية دقيقة للتحقق من تشابك البوليمر وانتظام الألياف والصلابة الإنشائية.');

    // Procurement Card
    setTxt('txtProcureBadge', '⚡ 4-Hour Estimating Desk', '⚡ استجابة تسعير خلال 4 ساعات عمل');
    setTxt('txtProcureTitle', 'Procuring this Product for a Project?', 'هل تود طلب هذا المنتج لمشروعك؟');
    setTxt('txtProcureDesc', 'Our Riyadh estimating desk provides dimensioned CAD shop drawings, material test certs, submittal packages, and formal BOQ pricing for contractors and consultants across Saudi Arabia.', 'يقدم فريق التسعير الهندسي بالرياض مخططات ورش تفصيلية، شهادات اعتماد المواد، ملفات الاعتماد الفني، وعروض أسعار رسمية متوافقة مع جداول الكميات.');
    setTxt('txtTrust1', 'Free CAD Shop Drawings', 'مخططات CAD تفصيلية');
    setTxt('txtTrust2', 'Full Submittal Dossier', 'ملف اعتماد استشاري متكامل');
    setTxt('txtTrust3', 'Factory-Direct Riyadh Supply', 'توريد مباشر من مصنع الرياض');
    setTxt('txtBtnQuoteBottom', 'Request Formal Project Quotation', 'طلب تسعيرة رسمية للمشروع');
    setTxt('txtBtnWaBottom', 'Chat with Estimator', 'محادثة المهندس عبر واتساب');

    // Related
    setTxt('txtRelatedEyebrow', 'Complementary Solutions', 'حلول هندسية متكاملة');
    setTxt('txtRelatedTitle', 'Related Engineering Products', 'منتجات هندسية ذات صلة');
  }

  function renderRelatedProducts(currentProduct, isAr) {
    const relatedContainer = document.getElementById('relatedProductsGrid');
    if (!relatedContainer || typeof PRODUCTS_DATA === 'undefined') return;

    const related = PRODUCTS_DATA.filter(p => p.id !== currentProduct.id).slice(0, 3);
    relatedContainer.innerHTML = related.map(rel => `
      <div class="product-card">
        <div class="product-img-wrap">
          <img src="${rel.image}" alt="${isAr ? rel.nameAr : rel.name}" loading="lazy">
        </div>
        <div class="product-body">
          <span class="product-category-tag">${isAr ? rel.categoryNameAr : rel.categoryName}</span>
          <h4 class="product-title" style="margin-top: 0.35rem; font-size: 1.05rem;">${isAr ? rel.nameAr : rel.name}</h4>
          <p class="product-desc" style="-webkit-line-clamp: 2;">${isAr ? rel.shortDescAr : rel.shortDesc}</p>
          <div class="product-actions" style="margin-top: auto;">
            <a href="product-detail.html?id=${rel.id}" class="btn-pill btn-pill-white" style="width: 100%; justify-content: center;">
              ${isAr ? 'عرض المواصفات والمخططات' : 'View Specs & Drawings'}
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // INTERACTIVE TAB SYSTEM
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.pdp-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetTab = btn.getAttribute('data-tab');
      const paneMap = {
        tabSpecs: 'paneSpecs',
        tabDimensions: 'paneDimensions',
        tabFinishes: 'paneFinishes',
        tabTesting: 'paneTesting'
      };

      document.querySelectorAll('.pdp-tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });

      const activePane = document.getElementById(paneMap[targetTab]);
      if (activePane) activePane.classList.add('active');
    });
  });

  // ==========================================================================
  // LIGHTBOX MODAL (EXPAND IMAGE / CAD DRAWING)
  // ==========================================================================
  const mediaViewer = document.getElementById('pdpMediaViewer');
  const lightbox = document.getElementById('pdpLightbox');
  const lightboxImg = document.getElementById('pdpLightboxImg');
  const lightboxCaption = document.getElementById('pdpLightboxCaption');
  const lightboxClose = document.getElementById('pdpLightboxClose');

  if (mediaViewer && lightbox && lightboxImg) {
    mediaViewer.addEventListener('click', () => {
      const product = getProduct();
      if (!product) return;
      const isAr = document.documentElement.lang === 'ar';
      const imgSrc = currentViewMode === 'cad' && product.cadImage ? product.cadImage : product.image;
      
      lightboxImg.src = imgSrc;
      lightboxCaption.textContent = `${isAr ? product.nameAr : product.name} — ${currentViewMode === 'cad' ? (isAr ? 'المخطط الهندسي' : 'CAD Engineering Schematic') : (isAr ? 'التنفيذ الميداني' : 'Site Installation View')}`;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ==========================================================================
  // COPY SPECIFICATIONS (BOQ / TENDER HELPER)
  // ==========================================================================
  function copySpecsToClipboard() {
    const product = getProduct();
    if (!product) return;
    const isAr = document.documentElement.lang === 'ar';

    let specText = `====================================================\n`;
    specText += `${isAr ? product.nameAr : product.name} (SKU: ${product.sku || product.id})\n`;
    specText += `Gulf Fiber & Metal Co. Ltd. (Riyadh, Saudi Arabia)\n`;
    specText += `====================================================\n\n`;
    specText += `[MATERIAL & MECHANICAL SPECIFICATIONS]\n`;

    if (product.specifications) {
      for (const [key, val] of Object.entries(product.specifications)) {
        specText += `• ${key}: ${val}\n`;
      }
    }

    specText += `\n[DIMENSIONS & SIZING]: ${product.dimensions}\n`;
    specText += `[SURFACE FINISHES]: ${product.finishes}\n`;
    specText += `[STRUCTURAL FIXING]: ${product.fixingMethod}\n`;
    specText += `\nFor project inquiries, contact: info@gulffiber.sa / +966 11 000 0000\n`;

    navigator.clipboard.writeText(specText).then(() => {
      showToast(isAr ? '✓ تم نسخ المواصفات الهندسية بنجاح إلى الحافظة' : '✓ Specifications copied to clipboard for tender submittal');
    }).catch(() => {
      showToast(isAr ? 'تعذر النسخ تلقائياً' : 'Could not copy to clipboard');
    });
  }

  const btnCopySpecsTop = document.getElementById('btnCopySpecsTop');
  const btnCopyTable = document.getElementById('btnCopyTable');
  if (btnCopySpecsTop) btnCopySpecsTop.addEventListener('click', copySpecsToClipboard);
  if (btnCopyTable) btnCopyTable.addEventListener('click', copySpecsToClipboard);

  // ==========================================================================
  // DATASHEET PRINT (PDF EXPORT)
  // ==========================================================================
  const prodPdfBtn = document.getElementById('prodPdfBtn');
  if (prodPdfBtn) {
    prodPdfBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================================================
  // SHARE LINK
  // ==========================================================================
  const btnShareTop = document.getElementById('btnShareTop');
  if (btnShareTop) {
    btnShareTop.addEventListener('click', () => {
      const product = getProduct();
      const isAr = document.documentElement.lang === 'ar';
      const title = product ? (isAr ? product.nameAr : product.name) : document.title;
      const url = window.location.href;

      if (navigator.share) {
        navigator.share({ title, url }).catch(() => {});
      } else {
        navigator.clipboard.writeText(url).then(() => {
          showToast(isAr ? '✓ تم نسخ رابط المنتج' : '✓ Product link copied to clipboard');
        });
      }
    });
  }

  // Language Change Listener
  window.addEventListener('languageChanged', renderProduct);

  // Initial Run
  renderProduct();
});
