import os

new_cta_html = '''  <!-- Technical Inquiry Callout -->
  <section class="section" style="padding-top: 1rem;">
    <div class="container">
      <div class="mfg-cta-box reveal-scale">
        <div class="mfg-cta-mesh"></div>
        <div class="mfg-cta-inner">
          <span class="mfg-cta-badge">
            <span class="pulse-dot"></span>
            Factory Consultation &amp; RFQ
          </span>
          <h2 class="mfg-cta-title">Discuss Manufacturing Feasibility with our Riyadh Engineers</h2>
          <p class="mfg-cta-lead">
            We evaluate your architectural CAD/BIM shop drawings, custom mould tooling geometries, fire rating requirements, and resin compatibility for projects across Saudi Arabia.
          </p>
          <div class="mfg-cta-actions">
            <a href="quote.html" class="btn btn-mfg-primary">
              <span>Submit Manufacturing RFQ</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" class="btn btn-mfg-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>WhatsApp Technical Desk</span>
            </a>
            <a href="tel:+966110000000" class="btn btn-mfg-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Plant Office</span>
            </a>
          </div>
          <div class="mfg-cta-trust">
            <div class="mfg-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>24-Hour Engineering Feasibility Review</span>
            </div>
            <div class="mfg-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Physical Material Swatches in Riyadh</span>
            </div>
            <div class="mfg-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>SASO &amp; ASTM Standards Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>'''

for path in ['manufacturing.html', 'metals-and-fibres-website/manufacturing.html']:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        start_tag = '<!-- Technical Inquiry Callout -->'
        end_tag = '<!-- Minimal Dark Footer'
        idx1 = content.find(start_tag)
        idx2 = content.find(end_tag)
        if idx1 != -1 and idx2 != -1:
            updated = content[:idx1] + new_cta_html + '\n\n  ' + content[idx2:]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(updated)
            print(f"Updated CTA section in {path}")
        else:
            print(f"Could not find markers in {path}")
