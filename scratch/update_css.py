import os

new_about_features_and_philosophy = '''/* ── Company Overview: Feature Checklist & Compliance ── */
.about-feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin: 1.75rem 0;
}

.about-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1.15rem;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.15rem 1.35rem;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-feature-item:hover {
  background: #FFFFFF;
  border-color: #93C5FD;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  transform: translateX(4px);
}

.about-feature-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
  border: 1px solid #A7F3D0;
  color: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.12);
}

.about-feature-icon svg {
  width: 16px !important;
  height: 16px !important;
  stroke-width: 2.5;
}

.about-feature-text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.about-feature-text strong {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.35;
}

.about-feature-text span {
  font-size: 0.865rem;
  color: #64748B;
  line-height: 1.55;
}

/* Certified Governance Card */
.governance-card {
  background: linear-gradient(135deg, #F0F9FF 0%, #F8FAFC 100%);
  border: 1px solid #BAE6FD;
  border-left: 4px solid #0284C7;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.06);
}

.governance-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.governance-card-header svg {
  width: 20px !important;
  height: 20px !important;
  color: #0284C7;
  flex-shrink: 0;
}

.governance-card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0369A1;
  letter-spacing: -0.01em;
  margin: 0;
}

.governance-card-desc {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}'''

new_philosophy = '''.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.philosophy-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 1.5rem 1.35rem;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.philosophy-card:hover {
  border-color: #BAE6FD;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
  transform: translateY(-3px);
}

.philosophy-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%);
  border: 1px solid rgba(2, 132, 199, 0.18);
  color: #0284C7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.philosophy-icon svg {
  width: 20px !important;
  height: 20px !important;
}

.philosophy-content h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0F2942;
  margin-bottom: 0.65rem;
  line-height: 1.35;
}

.philosophy-content p {
  font-size: 0.865rem;
  color: #64748B;
  line-height: 1.65;
  margin: 0;
}'''

new_advantages = '''/* ── The GRP Composite Advantage (4-Card Engineering Grid) ── */
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.advantage-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 1.85rem 1.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.advantage-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0284C7, #38BDF8);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-6px);
  border-color: #BAE6FD;
  box-shadow: 0 18px 36px -8px rgba(2, 132, 199, 0.16);
}

.advantage-card:hover::before {
  opacity: 1;
}

.advantage-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.35rem;
}

.advantage-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(14, 165, 233, 0.04) 100%);
  border: 1px solid rgba(2, 132, 199, 0.18);
  color: #0284C7;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.advantage-card:hover .advantage-card-icon {
  transform: scale(1.08);
}

.advantage-card-icon svg {
  width: 20px !important;
  height: 20px !important;
}

.advantage-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0369A1;
  background: #F0F9FF;
  border: 1px solid #BAE6FD;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-pill);
}

.advantage-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0F2942;
  line-height: 1.35;
  margin-bottom: 0.75rem;
  letter-spacing: -0.015em;
}

.advantage-desc {
  font-size: 0.885rem;
  color: #64748B;
  line-height: 1.65;
  flex-grow: 1;
  margin-bottom: 1.35rem;
}

.advantage-metric-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.775rem;
  color: #475569;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  margin-top: auto;
}

.advantage-metric-pill span {
  color: #64748B;
  font-weight: 600;
}

.advantage-metric-pill strong {
  color: #0284C7;
  font-weight: 700;
}'''

new_values = '''/* ── Strategic Direction: Mission, Vision & Core Values ── */
.value-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transition: height 0.3s ease;
}

.value-card-mission::before {
  background: linear-gradient(90deg, #0284C7, #38BDF8);
}

.value-card-vision::before {
  background: linear-gradient(90deg, #059669, #34D399);
}

.value-card-quality::before {
  background: linear-gradient(90deg, #0F2942, #3B82F6);
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 42px -10px rgba(15, 23, 42, 0.12);
}

.value-card:hover::before {
  height: 6px;
}

.value-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
}

.value-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.value-card:hover .value-card-icon {
  transform: scale(1.08);
}

.value-card-mission .value-card-icon {
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(56, 189, 248, 0.05) 100%);
  border: 1px solid rgba(2, 132, 199, 0.2);
  color: #0284C7;
}

.value-card-vision .value-card-icon {
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%);
  border: 1px solid rgba(5, 150, 105, 0.2);
  color: #059669;
}

.value-card-quality .value-card-icon {
  background: linear-gradient(135deg, rgba(15, 41, 66, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%);
  border: 1px solid rgba(15, 41, 66, 0.18);
  color: #0F2942;
}

.value-card-icon svg {
  width: 22px !important;
  height: 22px !important;
}

.value-card-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
}

.value-card-mission .value-card-tag {
  color: #0369A1;
  background: #F0F9FF;
  border: 1px solid #BAE6FD;
}

.value-card-vision .value-card-tag {
  color: #065F46;
  background: #ECFDF5;
  border: 1px solid #A7F3D0;
}

.value-card-quality .value-card-tag {
  color: #0F2942;
  background: #F1F5F9;
  border: 1px solid #CBD5E1;
}

.value-card-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 0.85rem;
  letter-spacing: -0.015em;
}

.value-card-desc {
  font-size: 0.925rem;
  color: #64748B;
  line-height: 1.7;
  margin-bottom: 1.35rem;
}

.value-card-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding-top: 1.15rem;
  border-top: 1px solid #F1F5F9;
  margin-top: auto;
}

.value-card-bullets li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.84rem;
  color: #475569;
  font-weight: 500;
}

.value-card-bullets li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.value-card-mission .value-card-bullets li::before {
  background: #0284C7;
}

.value-card-vision .value-card-bullets li::before {
  background: #059669;
}

.value-card-quality .value-card-bullets li::before {
  background: #0F2942;
}'''

new_mfg_cta = '''/* Engineering Feasibility Consultation Box */
.mfg-cta-box {
  background: radial-gradient(ellipse at 85% 10%, rgba(14, 165, 233, 0.18) 0%, transparent 60%),
              radial-gradient(ellipse at 15% 90%, rgba(45, 212, 191, 0.15) 0%, transparent 60%),
              linear-gradient(145deg, #09121E 0%, #0F2033 100%);
  border-radius: 20px;
  padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 50px -12px rgba(2, 6, 23, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.mfg-cta-mesh {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
  opacity: 0.6;
}

.mfg-cta-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.mfg-cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 1rem;
  background: rgba(45, 212, 191, 0.12);
  border: 1px solid rgba(45, 212, 191, 0.35);
  color: #2DD4BF;
  font-size: 0.785rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-pill);
  margin-bottom: 1.25rem;
}

.mfg-cta-badge .pulse-dot {
  width: 7px;
  height: 7px;
  background: #2DD4BF;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 8px #2DD4BF;
}

.mfg-cta-title {
  color: #FFFFFF;
  font-size: clamp(1.75rem, 3.5vw, 2.45rem);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.15rem;
  letter-spacing: -0.02em;
}

.mfg-cta-lead {
  color: #CBD5E1;
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2.25rem auto;
}

.mfg-cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.25rem;
}

.btn-mfg-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
  color: #FFFFFF !important;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.95rem 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px -4px rgba(14, 165, 233, 0.45);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}

.btn-mfg-primary:hover {
  background: linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%);
  transform: translateY(-2px);
  box-shadow: 0 16px 32px -4px rgba(14, 165, 233, 0.55);
  color: #FFFFFF !important;
}

.btn-mfg-primary svg {
  transition: transform 0.25s ease;
}

.btn-mfg-primary:hover svg {
  transform: translateX(4px);
}

.btn-mfg-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #F8FAFC !important;
  font-weight: 600;
  font-size: 0.925rem;
  padding: 0.95rem 1.65rem;
  border-radius: 12px;
  transition: all 0.25s ease;
  text-decoration: none;
}

.btn-mfg-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
  color: #FFFFFF !important;
}

.mfg-cta-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  flex-wrap: wrap;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.mfg-trust-item {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.84rem;
  color: #94A3B8;
  font-weight: 500;
}

.mfg-trust-item svg {
  color: #2DD4BF;
  width: 16px !important;
  height: 16px !important;
  stroke-width: 2.5;
  flex-shrink: 0;
}'''

for path in ['css/main.css', 'metals-and-fibres-website/css/main.css']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace about-features
    start1 = '/* ── Company Overview: Feature Checklist & Compliance ── */'
    end1 = '/* ── Visual Showcase & Philosophy Cards ── */'
    p1 = content.find(start1)
    p2 = content.find(end1)
    if p1 != -1 and p2 != -1:
        content = content[:p1] + new_about_features_and_philosophy + '\n\n' + content[p2:]
    else:
        print(f"Warning: could not find feature checklist block in {path}")

    # 2. Replace philosophy
    start2 = '.philosophy-grid {'
    end2 = '/* ── The GRP Composite Advantage (4-Card Engineering Grid) ── */'
    p3 = content.find(start2)
    p4 = content.find(end2)
    if p3 != -1 and p4 != -1:
        content = content[:p3] + new_philosophy + '\n\n' + content[p4:]
    else:
        print(f"Warning: could not find philosophy block in {path}")

    # 3. Replace advantages
    start3 = '/* ── The GRP Composite Advantage (4-Card Engineering Grid) ── */'
    end3 = '/* ── Strategic Direction: Mission, Vision & Core Values ── */'
    p5 = content.find(start3)
    p6 = content.find(end3)
    if p5 != -1 and p6 != -1:
        content = content[:p5] + new_advantages + '\n\n' + content[p6:]
    else:
        print(f"Warning: could not find advantage block in {path}")

    # 4. Replace values
    start4 = '/* ── Strategic Direction: Mission, Vision & Core Values ── */'
    end4 = '/* Responsive adjustments for Corporate / About */'
    p7 = content.find(start4)
    p8 = content.find(end4)
    if p7 != -1 and p8 != -1:
        content = content[:p7] + new_values + '\n\n' + content[p8:]
    else:
        print(f"Warning: could not find values block in {path}")

    # 5. Replace mfg-cta
    start5 = '/* Engineering Feasibility Consultation Box */'
    end5 = '/* ─────────────────────────────────────────────────────────────\n   MANUFACTURING RESPONSIVE MEDIA QUERIES'
    p9 = content.find(start5)
    p10 = content.find(end5)
    if p9 != -1 and p10 != -1:
        content = content[:p9] + new_mfg_cta + '\n\n' + content[p10:]
    else:
        # Try alternate end
        end5_alt = '/* ─────────────────────────────────────────────────────────────'
        p10_alt = content.find(end5_alt, p9)
        if p9 != -1 and p10_alt != -1:
            content = content[:p9] + new_mfg_cta + '\n\n' + content[p10_alt:]
        else:
            print(f"Warning: could not find mfg-cta block in {path}")

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated styles in {path}")
