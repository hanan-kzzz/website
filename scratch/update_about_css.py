import os

new_metrics_css = '''/* ── Executive Performance Metrics Strip ── */
.metrics-strip {
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  padding: 2.75rem 0;
  position: relative;
  box-shadow: 0 4px 16px -4px rgba(15, 23, 42, 0.03);
}

.metrics-strip-wrapper {
  position: relative;
  z-index: 10;
  margin-top: -3.25rem;
  padding-bottom: 2rem;
}

.metrics-card-floating {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  box-shadow: 0 20px 45px -12px rgba(15, 23, 42, 0.09), 0 4px 12px rgba(15, 23, 42, 0.03);
  padding: 2rem 1.25rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.75rem 1.25rem;
  position: relative;
  border-right: 1px solid #F1F5F9;
  transition: transform 0.25s ease;
}

.metric-item:last-child {
  border-right: none;
}

.metric-item:hover {
  transform: translateY(-4px);
}

.metric-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(56, 189, 248, 0.05) 100%);
  border: 1px solid rgba(2, 132, 199, 0.18);
  color: #0284C7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  transition: transform 0.25s ease, background 0.25s ease;
}

.metric-item:hover .metric-icon-wrap {
  transform: scale(1.1);
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.16) 0%, rgba(56, 189, 248, 0.1) 100%);
}

.metric-icon-wrap svg {
  width: 20px !important;
  height: 20px !important;
}

.metric-val {
  font-size: clamp(2.35rem, 3.2vw, 3.1rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #0F2942 20%, #0284C7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.35rem;
}

.metric-label {
  font-size: 0.9rem;
  color: #1E293B;
  font-weight: 700;
  line-height: 1.35;
  max-width: 220px;
  margin-bottom: 0.25rem;
}

.metric-sub {
  font-size: 0.775rem;
  color: #64748B;
  font-weight: 500;
  line-height: 1.4;
}'''

new_hero_about_css = '''.page-hero-about {
  background-color: #071324;
  background-image: 
    radial-gradient(ellipse 70% 60% at 85% 35%, rgba(2, 132, 199, 0.32) 0%, transparent 65%),
    linear-gradient(90deg, #071324 0%, rgba(7, 19, 36, 0.95) 42%, rgba(7, 19, 36, 0.68) 75%, rgba(7, 19, 36, 0.28) 100%),
    url('../images/hero-cladding.jpg');
  background-position: center right;
  border-bottom: 1px solid rgba(2, 132, 199, 0.25);
}

.page-hero-about .hero-breadcrumb a:hover {
  color: #38BDF8;
}

.page-hero-about .hero-breadcrumb .breadcrumb-current {
  color: #38BDF8;
}

.page-hero-about .page-hero-badge {
  color: #38BDF8;
  background: rgba(2, 132, 199, 0.16);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 0 24px rgba(2, 132, 199, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.page-hero-about .page-hero-badge .pulse-dot {
  background-color: #38BDF8;
  box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.8);
}

.page-hero-about .hero-gradient-text {
  color: #38BDF8;
  background: linear-gradient(135deg, #60A5FA 0%, #38BDF8 50%, #0284C7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 14px rgba(56, 189, 248, 0.45));
}

.hero-trust-pills {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.75rem;
}

.hero-trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.45rem 1.05rem;
  border-radius: var(--radius-pill);
  font-size: 0.8125rem;
  font-weight: 600;
  color: #F1F5F9;
  letter-spacing: 0.01em;
}

.hero-trust-pill svg {
  color: #38BDF8;
  stroke-width: 2.5;
  flex-shrink: 0;
}'''

new_overview_and_advantage_helpers = '''.about-lead-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #334155;
  margin-bottom: 1.15rem;
  font-weight: 500;
}

.about-body-text {
  font-size: 0.925rem;
  line-height: 1.7;
  color: #64748B;
  margin-bottom: 1.5rem;
}

.philosophy-bullets {
  list-style: none;
  padding: 0;
  margin: 0.85rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-top: 0.75rem;
  border-top: 1px dashed #E2E8F0;
}

.philosophy-bullets li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #475569;
  font-weight: 600;
}

.philosophy-bullets li::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #0284C7;
  flex-shrink: 0;
}

.metric-pill-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748B;
}

.metric-pill-val {
  font-size: 0.8rem;
  color: #334155;
  font-weight: 500;
}

.metric-pill-val strong {
  color: #0284C7;
  font-weight: 700;
}'''

for path in ['css/main.css', 'metals-and-fibres-website/css/main.css']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update metrics section
    start_m = '/* ── Executive Performance Metrics Strip ── */'
    end_m = '/* ── Company Overview: Feature Checklist & Compliance ── */'
    p1 = content.find(start_m)
    p2 = content.find(end_m)
    if p1 != -1 and p2 != -1:
        content = content[:p1] + new_metrics_css + '\n\n' + content[p2:]
    else:
        print(f"Warning: could not find metrics block in {path}")

    # 2. Update page-hero-about
    start_hero = '.page-hero-about {'
    end_hero = '.page-hero-manufacturing {'
    p3 = content.find(start_hero)
    p4 = content.find(end_hero)
    if p3 != -1 and p4 != -1:
        content = content[:p3] + new_hero_about_css + '\n\n' + content[p4:]
    else:
        print(f"Warning: could not find hero-about block in {path}")

    # 3. Add helpers before responsive section or near overview
    if '.about-lead-text' not in content:
        insert_marker = '/* ── Visual Showcase & Philosophy Cards ── */'
        p5 = content.find(insert_marker)
        if p5 != -1:
            content = content[:p5] + new_overview_and_advantage_helpers + '\n\n' + content[p5:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated styles in {path}")
