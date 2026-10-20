/**
 * Gulf Fiber and Metal Company Limited - EmailJS Integration Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Log in or sign up at https://dashboard.emailjs.com/
 * 2. Add an Email Service (e.g. Gmail, Outlook, SMTP) -> copy your Service ID.
 * 3. Create an Email Template -> copy your Template ID.
 *    In your Email Template settings:
 *      - To Email: {{to_email}} (or enter your test/company email directly)
 *      - Subject: New RFQ Quotation Request - {{rfq_id}} - {{company}}
 *      - Reply-To: {{reply_to}}
 * 4. Go to Account > General (or API Keys) -> copy your Public Key.
 * 5. Fill in the values below:
 */

const EMAILJS_CONFIG = {
  // EmailJS Public Key (Account > Public Key)
  publicKey: "mB1v3-HtafpNAiRdv",

  // EmailJS Service ID (Email Services > Service ID)
  serviceId: "service_ptgouc9",

  // EmailJS Quotation Template ID (Email Templates > Template ID)
  quoteTemplateId: "template_ijqo4hg",

  // Optional: Contact Form Template ID
  contactTemplateId: "template_ijqo4hg",

  // Your company or test email address where quotation requests should be sent
  companyEmail: "h40376814@gmail.com"
};

/**
 * Checks whether valid EmailJS credentials have been provided.
 */
function isEmailJsConfigured() {
  return (
    typeof emailjs !== 'undefined' &&
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.quoteTemplateId &&
    EMAILJS_CONFIG.quoteTemplateId !== 'YOUR_TEMPLATE_ID'
  );
}

// Auto-initialize EmailJS if keys are provided
if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
  try {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  } catch (err) {
    console.warn('EmailJS initialization warning:', err);
  }
}
