import sys

with open('css/main.css', 'r', encoding='utf-8') as f:
    css = f.read()

start_marker = '/* Mobile Toggle */'
end_marker = '/* ═════════════════════════════════════════════════════════════════\n   CORPORATE PROFILE & ABOUT PAGE UI ENHANCEMENTS'

idx_start = css.find(start_marker)
idx_end = css.find(end_marker)

if idx_start == -1 or idx_end == -1:
    print("Markers not found! start:", idx_start, "end:", idx_end)
    sys.exit(1)

replacement = """/* ==========================================================================
   MOBILE & RESPONSIVE NAVIGATION DRAWER SYSTEM
   ========================================================================== */

/* Body Lock when Drawer is Open */
body.drawer-open {
  overflow: hidden !important;
  touch-action: none;
}

body.drawer-open .floating-actions {
  opacity: 0 !important;
  pointer-events: none !important;
  visibility: hidden !important;
  transform: translateY(24px) scale(0.9);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Dark Backdrop Overlay */
.mobile-nav-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1100;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s ease;
  pointer-events: none;
}

.mobile-nav-backdrop.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* Mobile Toggle Hamburger Button */
.mobile-toggle {
  display: none;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  padding: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1E293B;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.mobile-toggle:hover {
  background: #F8FAFC;
  border-color: #CBD5E1;
  color: #B91C1C;
}

.mobile-toggle.active {
  background: #FEF2F2;
  border-color: #FECACA;
  color: #B91C1C;
}

.mobile-toggle .icon-close {
  display: none;
}

.mobile-toggle.active .icon-hamburger {
  display: none;
}

.mobile-toggle.active .icon-close {
  display: block;
}

/* Mobile Navigation Drawer Panel */
.mobile-nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(350px, 86vw);
  background: #FFFFFF;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 35px rgba(15, 23, 42, 0.18);
  transform: translateX(100%);
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-nav-drawer.open {
  transform: translateX(0);
}

/* Drawer Header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.15rem 1.25rem;
  border-bottom: 1px solid #F1F5F9;
  background: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 10;
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}

.drawer-brand img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: contain;
}

.drawer-brand .brand-name {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0F2942;
  line-height: 1.15;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.drawer-brand .brand-tagline {
  font-size: 0.625rem;
  font-weight: 600;
  color: #64748B;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 2px;
}

.drawer-close-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.drawer-close-btn:hover {
  background: #FEF2F2;
  color: #B91C1C;
  border-color: #FECACA;
}

/* Drawer Language Strip */
.drawer-lang-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: #F8FAFC;
  border-bottom: 1px solid #E2E8F0;
  font-size: 0.8125rem;
}

.drawer-lang-label {
  color: #64748B;
  font-weight: 600;
}

/* Drawer Navigation Links */
.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: 0.85rem 0.85rem 0.5rem;
  gap: 0.25rem;
  flex-grow: 1;
}

.mobile-nav-item,
.mobile-nav-links .nav-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  color: #1E293B;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.18s ease;
}

.mobile-nav-item .item-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #F1F5F9;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.18s ease;
}

.mobile-nav-item .item-text {
  flex-grow: 1;
}

.mobile-nav-item .item-arrow {
  color: #94A3B8;
  display: flex;
  align-items: center;
  transition: transform 0.18s ease, color 0.18s ease;
}

.mobile-nav-item:hover,
.mobile-nav-item:focus,
.mobile-nav-links .nav-link:hover {
  background: #F8FAFC;
  color: #B91C1C;
}

.mobile-nav-item:hover .item-icon {
  background: rgba(185, 28, 28, 0.08);
  color: #B91C1C;
}

.mobile-nav-item:hover .item-arrow {
  color: #B91C1C;
  transform: translateX(3px);
}

.mobile-nav-item.active,
.mobile-nav-links .nav-link.active {
  background: rgba(185, 28, 28, 0.07);
  color: #B91C1C;
  font-weight: 700;
}

.mobile-nav-item.active .item-icon {
  background: #B91C1C;
  color: #FFFFFF;
}

.mobile-nav-item.active .item-arrow {
  color: #B91C1C;
}

/* Drawer Call to Action Button */
.drawer-cta-wrapper,
.mobile-nav-cta {
  padding: 0.85rem 1.25rem;
  background: #FFFFFF;
  border-top: 1px solid #F1F5F9;
}

.drawer-quote-btn,
.mobile-nav-cta .btn-primary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 1.25rem;
  background: linear-gradient(135deg, #B91C1C 0%, #991B1B 100%);
  color: #FFFFFF;
  font-weight: 700;
  font-size: 0.92rem;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(185, 28, 28, 0.28);
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.drawer-quote-btn:hover,
.mobile-nav-cta .btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(185, 28, 28, 0.38);
  color: #FFFFFF;
}

.drawer-quote-btn .arrow-circle {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  flex-shrink: 0;
}

/* Drawer Quick Contact Footer */
.drawer-contact-footer {
  padding: 1rem 1.25rem 1.5rem;
  background: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  margin-top: auto;
}

.drawer-contact-title {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #64748B;
  letter-spacing: 0.06em;
  margin-bottom: 0.65rem;
}

.drawer-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}

.drawer-contact-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
  transition: all 0.18s ease;
}

.drawer-contact-card.whatsapp {
  color: #047857;
  border-color: rgba(16, 185, 129, 0.25);
  background: rgba(16, 185, 129, 0.05);
}

.drawer-contact-card.whatsapp:hover {
  background: rgba(16, 185, 129, 0.12);
}

.drawer-contact-card.phone {
  color: #0F2942;
  border-color: #CBD5E1;
}

.drawer-contact-card.phone:hover {
  background: #F1F5F9;
}

.drawer-location-tag {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  color: #64748B;
  line-height: 1.35;
}

.drawer-location-tag svg {
  color: #0284C7;
  flex-shrink: 0;
}

/* ==========================================================================
   RESPONSIVE MEDIA QUERIES (Mobile & Tablet Breakpoints)
   ========================================================================== */
@media (max-width: 920px) {
  .main-nav {
    display: none !important;
  }
  .mobile-toggle {
    display: inline-flex !important;
  }
  .site-header .btn-header-quote {
    display: none !important;
  }
}

@media (max-width: 768px) {
  /* Mobile Header Navigation Fit */
  .site-header {
    height: 64px;
  }
  .header-inner {
    height: 64px;
    padding-left: 0.85rem;
    padding-right: 0.85rem;
  }
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .brand-logo {
    gap: 0.55rem;
    min-width: 0;
    flex-shrink: 1;
  }
  .brand-logo img {
    height: 40px;
    width: 40px;
    flex-shrink: 0;
  }
  .brand-info {
    min-width: 0;
    overflow: hidden;
  }
  .brand-name {
    font-size: 0.95rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.15;
  }
  .brand-tagline {
    font-size: 0.625rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px;
  }
  .header-right {
    gap: 0.5rem;
    flex-shrink: 0;
  }
  .lang-badge {
    padding: 0.25rem 0.5rem;
    font-size: 0.78rem;
  }
  .lang-btn {
    font-size: 0.78rem;
    padding: 0.15rem 0.35rem;
  }

  /* Cinematic Hero Mobile Tuning */
  .hero-cinematic {
    padding: 3.75rem 0 2.75rem;
    min-height: auto;
    background-image: 
      linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.88) 100%), 
      url('../images/hero-cladding.jpg');
  }
  .hero-cinematic-title {
    font-size: clamp(1.85rem, 6.5vw, 2.75rem);
    line-height: 1.18;
    margin-bottom: 1rem;
  }
  .hero-cinematic-lead {
    font-size: 0.98rem;
    line-height: 1.55;
    margin-bottom: 1.75rem;
  }
  .hero-cinematic-actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 0.85rem;
  }
  .btn-pill-primary, .btn-pill-secondary {
    width: 100%;
    justify-content: center;
    padding: 0.85rem 1.25rem;
  }

  /* Metrics Strip 2x2 Clean Grid */
  .metrics-strip {
    padding: 1.75rem 0;
  }
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1.5rem 1rem !important;
  }
  .metric-item {
    border-right: none !important;
    border-bottom: none !important;
    padding: 0.5rem 0.25rem;
  }
  .metric-val {
    font-size: 1.85rem;
  }
  .metric-label {
    font-size: 0.75rem;
  }

  /* General Grid Stacks */
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr !important;
    gap: 1.25rem;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* Form Elements: prevent iOS zoom */
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="number"],
  select,
  textarea {
    font-size: 16px !important;
  }
}

@media (max-width: 420px) {
  .brand-logo img {
    height: 36px;
    width: 36px;
  }
  .brand-name {
    font-size: 0.88rem;
  }
  .brand-tagline {
    font-size: 0.58rem;
  }
  .header-inner {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

"""

new_css = css[:idx_start] + replacement + css[idx_end:]

with open('css/main.css', 'w', encoding='utf-8') as f:
    f.write(new_css)

print("Updated css/main.css successfully!")
