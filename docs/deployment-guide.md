# Deployment & Handover Guide
**Gulf Fiber and Metal Company Limited Website**  
**Technology:** Pure Semantic HTML5, Modular CSS3, Vanilla JavaScript (Zero Build Steps)

---

## 1. Local Testing & Verification

Because this website is built with clean, standards-compliant HTML, CSS, and modern JavaScript, there are no dependencies to install, no `npm build` required, and no compilation overhead.

### Method A: Direct File Open
You can double-click `index.html` to open and preview the entire website in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Method B: Local HTTP Server (Recommended)
To test under full HTTP protocol simulation:
```bash
# Using Python (standard on most systems):
python -m http.server 8080

# Or using Node.js:
npx serve .
```
Then navigate to: `http://localhost:8080`

---

## 2. Production Web Hosting Deployment Options

### Option 1: Standard cPanel / Apache / Nginx Web Hosting (Common in Saudi Arabia)
1. Log into your hosting cPanel or Webmin dashboard.
2. Open **File Manager** and navigate to your domain's document root (typically `public_html/`).
3. Upload all files and folders from this project:
   - `index.html`, `about.html`, `products.html`, `product-detail.html`, `industries.html`, `projects.html`, `manufacturing.html`, `contact.html`, `quote.html`
   - `robots.txt`, `sitemap.xml`
   - `css/` directory
   - `js/` directory
   - `images/` directory
4. Ensure file permissions are set to `644` for files and `755` for directories.
5. Your website is immediately live!

### Option 2: Cloudflare Pages / Netlify / Vercel
1. Connect your Git repository or drag-and-drop the project folder directly into the Cloudflare Pages / Netlify dashboard.
2. Set Build Command: *(Leave blank - no build step required)*
3. Set Output Directory: `.` (or root `/`)
4. Click **Deploy**. Deploy completes in under 5 seconds with global CDN distribution and automated SSL.

### Option 3: GitHub Pages
1. Push this directory to your GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`.
4. Click **Save**.

---

## 3. Connecting the B2B RFQ Form to EmailJS (Live Email Delivery)

The RFQ quotation system is integrated with **EmailJS** (`@emailjs/browser`) allowing quotation submissions to be sent directly to your company inbox or test email without requiring backend server code.

### EmailJS Setup Steps (5 Minutes):

1. **Create an EmailJS Account:**
   - Sign up or log in at [emailjs.com](https://www.emailjs.com/).

2. **Add an Email Service:**
   - Go to **Email Services** > **Add New Service**.
   - Select your provider (Gmail, Outlook, Zoho, or Custom SMTP).
   - Connect your company or testing email account.
   - Copy your **Service ID** (e.g. `service_abcdefg`).

3. **Create an Email Template:**
   - Go to **Email Templates** > **Create New Template**.
   - Configure the template settings:
     - **To Email:** `{{to_email}}` (or directly type your company/test email)
     - **Subject:** `New Quotation RFQ - {{rfq_id}} - {{company}}`
     - **Reply-To:** `{{reply_to}}`
   - **For an attractive executive corporate design:**
     Open [`email-template.html`](file:///c:/Users/hanan/Documents/websites%20of%20metels%20fibres/email-template.html), copy the entire HTML code, and paste it into the EmailJS template editor's "Source Code" (`<>`) view.
     It includes:
     - Corporate navy & teal gradient banner
     - RFQ badge and verified submission alert
     - Clean 2-column client specification table
     - Engineering scope table with icons & tags
     - One-click reply and WhatsApp dispatch action buttons
     - Formal company accreditation footer (Riyadh, KSA)
   - Click **Save** and copy your **Template ID** (e.g. `template_1234567`).

4. **Get Your Public Key:**
   - Go to **Account** > **API Keys** / **General**.
   - Copy your **Public Key** (e.g. `AbCdEf123456789`).

5. **Insert Credentials in the Project:**
   - Open [`js/email-config.js`](file:///c:/Users/hanan/Documents/websites%20of%20metels%20fibres/js/email-config.js) and fill in:
     ```javascript
     const EMAILJS_CONFIG = {
       publicKey: "YOUR_PUBLIC_KEY",
       serviceId: "YOUR_SERVICE_ID",
       quoteTemplateId: "YOUR_TEMPLATE_ID",
       companyEmail: "your-email@company.com" // Test or company inbox
     };
     ```

### Available Template Variables:
| Variable | Description |
| :--- | :--- |
| `{{rfq_id}}` / `{{reference_no}}` | Unique quotation code (e.g. `GFM-RFQ-2026-8492`) |
| `{{name}}` / `{{from_name}}` | Requester's full name |
| `{{company}}` / `{{company_name}}` | Company / contractor name |
| `{{email}}` / `{{from_email}}` / `{{reply_to}}` | Requester's corporate email |
| `{{phone}}` / `{{contact_phone}}` | Contact telephone number |
| `{{product}}` / `{{product_name}}` | Selected GRP product category |
| `{{location}}` / `{{project_location}}`| Project site city / region |
| `{{quantity}}` | Estimated volume, area, or units |
| `{{specs}}` / `{{technical_specs}}` | Fire rating, resin type, RAL colors |
| `{{description}}` / `{{message}}` | Detailed scope of work |
| `{{file_name}}` | Name of attached CAD/PDF drawing |
| `{{to_email}}` / `{{company_email}}` | Company / test recipient email |
| `{{submission_date}}` | Date and time submitted |

---

## 4. Post-Handover Maintenance
- **Adding Products:** Open `js/products-data.js` and append a new product object following the existing structure. It will automatically appear in the filterable catalogue, category counts, and detail views.
- **Updating Contact Information:** Update the top-bar and footer links in the HTML files or `js/i18n.js` dictionary.
