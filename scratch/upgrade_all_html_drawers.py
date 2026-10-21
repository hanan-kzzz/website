import os
import re

html_files = [
    'index.html',
    'about.html',
    'products.html',
    'industries.html',
    'projects.html',
    'manufacturing.html',
    'contact.html',
    'quote.html',
    'product-detail.html',
    'index-corporate.html'
]

mobile_toggle_old_pattern = re.compile(
    r'<button type="button" class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu">\s*<svg width="22" height="22" viewBox="0 0 24 24"[^>]*>.*?</svg>\s*</button>',
    re.DOTALL
)

mobile_toggle_new = """<button type="button" class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="icon-hamburger">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </span>
          <span class="icon-close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </span>
        </button>"""

mobile_drawer_old_pattern = re.compile(
    r'(<!-- Mobile Drawer Menu -->\s*<div class="mobile-nav-drawer" id="mobileDrawer">.*?</div>\s*</div>)',
    re.DOTALL
)

def build_drawer_html(active_page):
    active_class = lambda p: ' active' if p == active_page else ''
    
    return f"""  <!-- Mobile Navigation Backdrop -->
  <div class="mobile-nav-backdrop" id="mobileBackdrop" aria-hidden="true"></div>

  <!-- Mobile Drawer Menu -->
  <aside class="mobile-nav-drawer" id="mobileDrawer" aria-label="Mobile Navigation" aria-hidden="true">
    <div class="drawer-header">
      <a href="index.html" class="drawer-brand" aria-label="Nahas Malee - Gulf Fiber and Metal Company Limited">
        <img src="images/logo-nahas-malee.jpg" alt="Nahas Malee - Gulf Fiber and Metal Logo">
        <div class="brand-info">
          <span class="brand-name" data-i18n="brandName">NAHAS MALEE</span>
          <span class="brand-tagline" data-i18n="brandSub">Gulf Fiber &amp; Metal Co.</span>
        </div>
      </a>
      <button type="button" class="drawer-close-btn" id="mobileDrawerClose" aria-label="Close navigation menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <!-- Language Selector inside Drawer -->
    <div class="drawer-lang-strip">
      <span class="drawer-lang-label" data-i18n="selectLanguage">Language</span>
      <div class="lang-badge">
        <button type="button" class="lang-btn active" data-lang="en">EN</button>
        <span style="color: #CBD5E1;">|</span>
        <button type="button" class="lang-btn" data-lang="ar">عربي</button>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="mobile-nav-links">
      <a href="index.html" class="mobile-nav-item{active_class('home')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </span>
        <span class="item-text" data-i18n="navHome">Home</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>

      <a href="about.html" class="mobile-nav-item{active_class('about')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </span>
        <span class="item-text" data-i18n="navAbout">About Us</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>

      <a href="products.html" class="mobile-nav-item{active_class('products')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </span>
        <span class="item-text" data-i18n="navProducts">Products &amp; Solutions</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>

      <a href="industries.html" class="mobile-nav-item{active_class('industries')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
        </span>
        <span class="item-text" data-i18n="navIndustries">Industries</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>

      <a href="projects.html" class="mobile-nav-item{active_class('projects')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </span>
        <span class="item-text" data-i18n="navProjects">Projects</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>

      <a href="manufacturing.html" class="mobile-nav-item{active_class('manufacturing')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </span>
        <span class="item-text" data-i18n="navManufacturing">Manufacturing</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>

      <a href="contact.html" class="mobile-nav-item{active_class('contact')}">
        <span class="item-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </span>
        <span class="item-text" data-i18n="navContact">Contact Us</span>
        <span class="item-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </a>
    </nav>

    <!-- Prominent Quote CTA -->
    <div class="drawer-cta-wrapper">
      <a href="quote.html" class="drawer-quote-btn">
        <span data-i18n="requestQuoteDrawer">Request an Engineering Quote</span>
        <span class="arrow-circle">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </a>
    </div>

    <!-- Quick Direct Contact Links -->
    <div class="drawer-contact-footer">
      <div class="drawer-contact-title" data-i18n="quickContact">Direct Inquiries</div>
      <div class="drawer-contact-grid">
        <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" class="drawer-contact-card whatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span>WhatsApp</span>
        </a>
        <a href="tel:+966500000000" class="drawer-contact-card phone">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span data-i18n="directCall">Call Directly</span>
        </a>
      </div>
      <div class="drawer-location-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span data-i18n="factoryLocation">Al Farazdaq St, Riyadh, Saudi Arabia</span>
      </div>
    </div>
  </aside>"""

file_to_active = {
    'index.html': 'home',
    'index-corporate.html': 'home',
    'about.html': 'about',
    'products.html': 'products',
    'product-detail.html': 'products',
    'industries.html': 'industries',
    'projects.html': 'projects',
    'manufacturing.html': 'manufacturing',
    'contact.html': 'contact',
    'quote.html': 'quote'
}

for fname in html_files:
    if not os.path.exists(fname):
        print(f"Skipping {fname} (not found)")
        continue
    
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace mobile toggle
    new_content, count1 = mobile_toggle_old_pattern.subn(mobile_toggle_new, content)
    
    # 2. Replace drawer
    active_key = file_to_active.get(fname, '')
    new_drawer = build_drawer_html(active_key)
    new_content, count2 = mobile_drawer_old_pattern.subn(new_drawer, new_content)

    if count1 == 0:
        print(f"Warning: Toggle pattern didn't match in {fname}")
    if count2 == 0:
        print(f"Warning: Drawer pattern didn't match in {fname}")

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Updated {fname}: toggle={count1}, drawer={count2}")
