import os

new_about_body = '''  <!-- Page Hero Banner -->
  <div class="page-hero page-hero-about">
    <div class="container">
      <div class="page-hero-header reveal-up">
        <div class="hero-breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">Corporate Profile</span>
        </div>
        <span class="page-hero-badge">
          <span class="pulse-dot"></span>
          Saudi Vision 2030 Local Content &bull; Riyadh Industrial Plant
        </span>
        <h1>
          Engineering Next-Generation <span class="hero-gradient-text">GRP Architectural Solutions</span>
        </h1>
        <p class="section-lead">
          Gulf Fiber and Metal Company Limited (Nahas Malee) specializes in high-precision Glass Reinforced Plastic (GRP) envelopes, structural pillar covers, and custom composite fabrication engineered for Saudi Arabia's demanding architectural sector.
        </p>
        <div class="hero-trust-pills">
          <span class="hero-trust-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ASTM E84 Class 1 Fire Rated
          </span>
          <span class="hero-trust-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Barcol &amp; Ultrasound Verified
          </span>
          <span class="hero-trust-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Al Farazdaq St. Riyadh Plant
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Executive Floating Metrics Strip -->
  <div class="metrics-strip-wrapper">
    <div class="container">
      <div class="metrics-card-floating reveal-up">
        <div class="metrics-grid">
          <div class="metric-item">
            <div class="metric-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <span class="metric-val">15+</span>
            <span class="metric-label">Years Engineering Experience</span>
            <span class="metric-sub">Proven Track Record in KSA</span>
          </div>
          <div class="metric-item">
            <div class="metric-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </div>
            <span class="metric-val">75%</span>
            <span class="metric-label">Lighter Than Concrete &amp; Stone</span>
            <span class="metric-sub">Substructure Cost Reductions</span>
          </div>
          <div class="metric-item">
            <div class="metric-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </div>
            <span class="metric-val">55&deg;C</span>
            <span class="metric-label">Desert Thermal Tolerance</span>
            <span class="metric-sub">Zero UV Degradation or Chalking</span>
          </div>
          <div class="metric-item">
            <div class="metric-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span class="metric-val">100%</span>
            <span class="metric-label">Salinity &amp; Chemical Immunity</span>
            <span class="metric-sub">Marine &amp; Industrial Certified</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content Section: Company Overview -->
  <section class="section about-overview-section">
    <div class="container">
      <div class="grid-2 reveal-up" style="align-items: start; gap: 3.5rem;">
        <div>
          <span class="section-eyebrow">Company Overview</span>
          <h2 class="section-title" style="margin-bottom: 1.25rem;">A Focused B2B Composite Fabricator in Riyadh</h2>
          <p class="about-lead-text">
            Gulf Fiber and Metal Company Limited operates from its corporate facility located on <strong>Al Farazdaq Street in Riyadh, Saudi Arabia</strong>. We specialize in the design, tooling, moulding, and custom fabrication of high-performance Glass Reinforced Plastic (GRP) products tailored to the demanding engineering standards of the Kingdom's construction sector.
          </p>
          <p class="about-body-text">
            Composite materials play a transformative role in contemporary architecture and municipal civil engineering. By delivering material systems that are up to 75% lighter than precast concrete or natural stone, completely impervious to coastal salinity and chemical oxidation, and capable of enduring continuous 55&deg;C desert surface temperatures, Gulf Fiber and Metal delivers long-term durability with minimal lifecycle maintenance.
          </p>

          <!-- Feature Checklist -->
          <div class="about-feature-list">
            <div class="about-feature-item">
              <div class="about-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div class="about-feature-text">
                <strong>Precision CNC Mould Tooling &amp; Plug Making</strong>
                <span>Custom parametric curvature, 3D textured facades, fluted column wraps, and Islamic heritage mashrabiya panels.</span>
              </div>
            </div>

            <div class="about-feature-item">
              <div class="about-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div class="about-feature-text">
                <strong>Engineered for Saudi Desert &amp; Marine Climates</strong>
                <span>Formulated with UV absorbers and non-hygroscopic resins to prevent surface chalking, blistering, or delamination.</span>
              </div>
            </div>

            <div class="about-feature-item">
              <div class="about-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div class="about-feature-text">
                <strong>Comprehensive Technical Submittals &amp; Shop Drawings</strong>
                <span>Complete structural engineering calculations, dead-load assessments, wind suction evaluations, and ASTM test certificates.</span>
              </div>
            </div>
          </div>

          <!-- Data Governance Card -->
          <div class="governance-card reveal-scale">
            <div class="governance-card-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <h4 class="governance-card-title">Data Governance &amp; Integrity Policy</h4>
            </div>
            <p class="governance-card-desc">
              In accordance with strict client transparency standards, all technical capabilities and specifications displayed across this website represent verified engineering benchmarks and proposed catalogue standards currently undergoing final client verification.
            </p>
          </div>
        </div>

        <!-- Right Column: Visual Showcase & Engineering Highlights -->
        <div class="showcase-container">
          <div class="showcase-img-wrap">
            <img src="images/hero-cladding.jpg" alt="Architectural GRP Cladding Riyadh">
            <div class="showcase-img-overlay">
              <span class="showcase-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; color: #38BDF8;"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Architectural Cladding &amp; 3D Facades
              </span>
              <span class="showcase-subtag">Commercial Envelopes &bull; Riyadh</span>
            </div>
          </div>

          <div class="philosophy-grid stagger-grid">
            <div class="philosophy-card reveal-up">
              <div class="philosophy-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              </div>
              <div class="philosophy-content">
                <h4>Manufacturing Philosophy</h4>
                <p>
                  Rigorous composite discipline combining structural fiber orientation, resin chemistry, and precision mould tooling for predictable tensile and fire performance.
                </p>
                <ul class="philosophy-bullets">
                  <li><span>Custom parametric tooling &amp; CNC plugs</span></li>
                  <li><span>Controlled 40:60 glass-to-resin structural ratio</span></li>
                </ul>
              </div>
            </div>

            <div class="philosophy-card reveal-up">
              <div class="philosophy-icon" style="background: rgba(5, 150, 105, 0.08); border-color: rgba(5, 150, 105, 0.2); color: #059669;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div class="philosophy-content">
                <h4>QA &amp; Testing Protocol</h4>
                <p>
                  Comprehensive inspection workflow verifying resin viscosity, ultrasound thickness, Barcol hardness, and post-cure thermal conditioning before site delivery.
                </p>
                <ul class="philosophy-bullets">
                  <li><span>Ultrasound laminate thickness verification</span></li>
                  <li><span>Barcol hardness indentation lab audits</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Engineering Advantages (4-Grid) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-eyebrow">Engineering Superiority</span>
        <h2 class="section-title">The GRP Composite Advantage</h2>
        <p class="section-lead">Why tier-1 contractors, architects, and consultants specify Glass Reinforced Plastic over traditional building materials.</p>
      </div>

      <div class="advantage-grid stagger-grid">
        <div class="advantage-card reveal-up">
          <div class="advantage-card-top">
            <div class="advantage-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="3" x2="12" y2="21"></line><path d="M18 7l4 4-4 4"></path><path d="M6 17l-4-4 4-4"></path></svg>
            </div>
            <span class="advantage-tag">Structural Load</span>
          </div>
          <h3 class="advantage-title">75% Weight Reduction</h3>
          <p class="advantage-desc">
            Slashes dead loads on superstructures and foundations. Eliminates heavy steel substructures and permits installation using smaller mobile cranes, drastically accelerating project timelines.
          </p>
          <div class="advantage-metric-pill">
            <span class="metric-pill-label">Dead Load</span>
            <span class="metric-pill-val"><strong>15–20 kg/m²</strong> vs 120 kg/m² Precast</span>
          </div>
        </div>

        <div class="advantage-card reveal-up">
          <div class="advantage-card-top">
            <div class="advantage-card-icon" style="background: rgba(5, 150, 105, 0.08); border-color: rgba(5, 150, 105, 0.2); color: #059669;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span class="advantage-tag" style="background: #ECFDF5; border-color: #A7F3D0; color: #065F46;">Corrosion Proof</span>
          </div>
          <h3 class="advantage-title">100% Saline &amp; Chemical Immunity</h3>
          <p class="advantage-desc">
            Completely unaffected by marine coastal salinity, atmospheric sulfur, or chemical washdowns. Zero spalling, rebar oxidation, or salt crystallization issues that plague conventional precast concrete.
          </p>
          <div class="advantage-metric-pill">
            <span class="metric-pill-label">Immunity</span>
            <span class="metric-pill-val"><strong>ASTM B117 &amp; ISO 12944</strong> Certified</span>
          </div>
        </div>

        <div class="advantage-card reveal-up">
          <div class="advantage-card-top">
            <div class="advantage-card-icon" style="background: rgba(99, 102, 241, 0.08); border-color: rgba(99, 102, 241, 0.2); color: #6366F1;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <span class="advantage-tag" style="background: #EEF2FF; border-color: #C7D2FE; color: #4338CA;">Parametric 3D</span>
          </div>
          <h3 class="advantage-title">Infinite Architectural Freedom</h3>
          <p class="advantage-desc">
            Moulded seamlessly into fluid compound curves, geometric origami panels, fluted column wraps, and traditional Najdi mashrabiya lattice patterns with zero visible joints.
          </p>
          <div class="advantage-metric-pill">
            <span class="metric-pill-label">Formability</span>
            <span class="metric-pill-val"><strong>Double-Curved &amp; 3D Parametric</strong></span>
          </div>
        </div>

        <div class="advantage-card reveal-up">
          <div class="advantage-card-top">
            <div class="advantage-card-icon" style="background: rgba(234, 88, 12, 0.08); border-color: rgba(234, 88, 12, 0.2); color: #EA580C;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
            </div>
            <span class="advantage-tag" style="background: #FFF7ED; border-color: #FED7AA; color: #C2410C;">Tested Fire Safety</span>
          </div>
          <h3 class="advantage-title">Class A Fire Retardancy</h3>
          <p class="advantage-desc">
            Formulated with specialized alumina trihydrate (ATH) flame-retardant resins conforming to ASTM E84 Class 1 and Saudi Civil Defense safety guidelines with low smoke toxicity emissions.
          </p>
          <div class="advantage-metric-pill">
            <span class="metric-pill-label">Compliance</span>
            <span class="metric-pill-val"><strong>ASTM E84 Class 1 / UL 723</strong></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Proposed Mission & Vision Framework -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-eyebrow">Strategic Direction</span>
        <h2 class="section-title">Mission, Vision &amp; Core Values</h2>
        <p class="section-lead">Proposed framework aligned with the Kingdom&rsquo;s industrial localization goals (Awaiting final client adoption).</p>
      </div>

      <div class="grid-3 stagger-grid">
        <!-- Mission Card -->
        <div class="value-card reveal-up value-card-mission">
          <div class="value-card-header">
            <div class="value-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
            </div>
            <span class="value-card-tag">Architectural Precision</span>
          </div>
          <h3 class="value-card-title">Our Mission</h3>
          <p class="value-card-desc">
            To provide Saudi Arabia's contracting and development sector with engineered composite architectural facades, pillar wraps, and industrial components that combine aesthetic freedom with structural longevity and fire safety.
          </p>
          <ul class="value-card-bullets">
            <li><span>Precision Shop Drawings &amp; Structural Calculations</span></li>
            <li><span>Custom Parametric Tooling for Architectural Facades</span></li>
            <li><span>Turnkey Engineered Submittals &amp; Site Support</span></li>
          </ul>
        </div>

        <!-- Vision Card -->
        <div class="value-card reveal-up value-card-vision">
          <div class="value-card-header">
            <div class="value-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <span class="value-card-tag">Vision 2030 Partner</span>
          </div>
          <h3 class="value-card-title">Our Vision</h3>
          <p class="value-card-desc">
            To establish Gulf Fiber and Metal as a primary domestic composite partner of choice for major landmark developments, commercial towers, municipal civil transit projects, and industrial plants across Riyadh and the GCC.
          </p>
          <ul class="value-card-bullets">
            <li><span>Saudi Vision 2030 Local Content Alignment</span></li>
            <li><span>Preferred Fabricator for Riyadh Landmark Towers</span></li>
            <li><span>Next-Gen High-Capacity In-House CNC Milling</span></li>
          </ul>
        </div>

        <!-- Quality Commitment Card -->
        <div class="value-card reveal-up value-card-quality">
          <div class="value-card-header">
            <div class="value-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span class="value-card-tag">Zero Defect Policy</span>
          </div>
          <h3 class="value-card-title">Quality Commitment</h3>
          <p class="value-card-desc">
            Zero compromises on material ratios, resin grade purity, and structural anchoring safety. We adhere strictly to verified physical dimensions, structural shop drawings, and tested fire performance criteria.
          </p>
          <ul class="value-card-bullets">
            <li><span>Barcol Hardness &amp; Resin Viscosity Lab Audits</span></li>
            <li><span>Ultrasound Laminate Thickness Verification</span></li>
            <li><span>Batch Traceability &amp; Material Test Reports</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Physical Verification Callout (Office Ribbon) -->
  <section class="section" style="padding-top: 0;">
    <div class="container">
      <div class="office-ribbon reveal-scale">
        <div class="office-ribbon-accent"></div>
        <div class="office-ribbon-pattern"></div>
        <div class="office-ribbon-content">
          <div class="office-ribbon-info">
            <span class="badge badge-verified office-ribbon-badge">
              <span class="pulse-dot"></span>
              Verified Corporate Listing &bull; Riyadh Head Office &amp; Plant
            </span>
            <h2 class="office-ribbon-title">Physical Location on Al Farazdaq Street, Riyadh</h2>
            <div class="office-ribbon-details">
              <div class="office-ribbon-detail-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Al Farazdaq Street, Riyadh, Kingdom of Saudi Arabia</span>
              </div>
              <div class="office-ribbon-detail-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Sun &ndash; Thu: 8:00 AM &ndash; 5:30 PM (Direct Technical Reviews)</span>
              </div>
              <div class="office-ribbon-detail-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>CAD / BIM Shop Drawings &amp; Physical Material Swatches Available</span>
              </div>
            </div>
          </div>
          <div class="office-ribbon-actions">
            <a href="https://maps.app.goo.gl/xMrUYhAomJYPqUns5" target="_blank" rel="noopener noreferrer" class="office-ribbon-btn office-ribbon-btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>View on Google Maps</span>
            </a>
            <a href="contact.html" class="office-ribbon-btn office-ribbon-btn-primary">
              <span>Connect with Riyadh Desk</span>
              <span class="office-ribbon-btn-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>'''

for path in ['about.html', 'metals-and-fibres-website/about.html']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_tag = '<!-- Page Hero Banner -->'
    end_tag = '<!-- Minimal Dark Footer'
    idx1 = content.find(start_tag)
    idx2 = content.find(end_tag)
    
    if idx1 != -1 and idx2 != -1:
        updated = content[:idx1] + new_about_body + '\n\n  ' + content[idx2:]
        with open(path, 'w', encoding='utf-8') as f:
            f.write(updated)
        print(f"Updated {path}")
    else:
        print(f"Markers not found in {path}")
