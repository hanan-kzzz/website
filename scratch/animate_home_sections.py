import os, re

# 1. Update CSS in both locations
css_additions = '''
/* ═════════════════════════════════════════════════════════════════
   TOTAL HOMEPAGE SCROLL REVEAL & INTERACTIVE MOTION SUITE
   ═════════════════════════════════════════════════════════════════ */

/* Base animation states */
.reveal-up {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-fade {
  opacity: 0;
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity;
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.96);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-left {
  opacity: 0;
  transform: translateX(-28px);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-right {
  opacity: 0;
  transform: translateX(28px);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

/* Triggered State */
.is-revealed {
  opacity: 1 !important;
  transform: translateY(0) translateX(0) scale(1) !important;
}

/* Stagger Delays for Grids */
.stagger-grid > *:nth-child(1) { transition-delay: 0.06s; }
.stagger-grid > *:nth-child(2) { transition-delay: 0.14s; }
.stagger-grid > *:nth-child(3) { transition-delay: 0.22s; }
.stagger-grid > *:nth-child(4) { transition-delay: 0.30s; }
.stagger-grid > *:nth-child(5) { transition-delay: 0.38s; }
.stagger-grid > *:nth-child(6) { transition-delay: 0.46s; }

/* ── Hero Cinematic Keyframe Entrance on Load ── */
.hero-cinematic {
  position: relative;
  overflow: hidden;
}

.hero-cinematic-title {
  animation: heroTitleEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-cinematic-lead {
  animation: heroLeadEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.hero-cinematic .hero-actions {
  animation: heroActionsEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}

@keyframes heroTitleEntrance {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroLeadEntrance {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroActionsEntrance {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Product Card Interactive Hover Enhancements ── */
.product-card {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease;
  will-change: transform, box-shadow;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.14);
  border-color: #CBD5E1;
}

.product-card .product-img-wrap {
  overflow: hidden;
  position: relative;
}

.product-card .product-img-wrap img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.product-card:hover .product-img-wrap img {
  transform: scale(1.07);
}

/* ── Industry Cards Hover Enhancements ── */
.card {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px -10px rgba(2, 132, 199, 0.12);
  border-color: #BAE6FD;
}

.card .card-icon {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.25s ease,
              color 0.25s ease;
}

.card:hover .card-icon {
  transform: scale(1.12) rotate(3deg);
  background: #E0F2FE;
  color: #0284C7;
}

/* ── Office Ribbon Animated Flow Border ── */
.office-ribbon-accent {
  background: linear-gradient(90deg, #0284C7, #38BDF8, #F59E0B, #0284C7);
  background-size: 250% auto;
  animation: borderFlowAnimation 5s linear infinite;
}

@keyframes borderFlowAnimation {
  0% { background-position: 0% center; }
  100% { background-position: 250% center; }
}

.office-ribbon-btn-primary .office-ribbon-btn-arrow svg {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.office-ribbon-btn-primary:hover .office-ribbon-btn-arrow svg {
  transform: translateX(4px);
}

[dir="rtl"] .office-ribbon-btn-primary:hover .office-ribbon-btn-arrow svg {
  transform: translateX(-4px);
}
'''

for css_file in ['css/main.css', 'metals-and-fibres-website/css/main.css']:
    if os.path.exists(css_file):
        txt = open(css_file, encoding='utf-8').read()
        if 'TOTAL HOMEPAGE SCROLL REVEAL' not in txt:
            txt += '\n' + css_additions
            open(css_file, 'w', encoding='utf-8').write(txt)
            print(f'Added scroll reveal & motion CSS to {css_file}')

# 2. Update JS in both locations
js_additions = '''
// Universal Scroll Reveal Animations for Sections & Cards
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}
'''

for js_file in ['js/main.js', 'metals-and-fibres-website/js/main.js']:
    if os.path.exists(js_file):
        txt = open(js_file, encoding='utf-8').read()
        if 'initScrollAnimations' not in txt:
            txt = txt.replace('initMetricCounters();', 'initMetricCounters();\n  initScrollAnimations();', 1)
            txt += '\n' + js_additions
            open(js_file, 'w', encoding='utf-8').write(txt)
            print(f'Added initScrollAnimations to {js_file}')

# 3. Update HTML in both locations (index.html & metals-and-fibres-website/index.html)
def update_index_html(html_file):
    if not os.path.exists(html_file): return
    txt = open(html_file, encoding='utf-8').read()

    # Metrics Strip
    txt = txt.replace('class="metrics-strip"', 'class="metrics-strip reveal-up"', 1)

    # Product section header
    txt = txt.replace(
        '<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">',
        '<div class="reveal-up" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">',
        1
    )

    # Product grid & cards
    txt = txt.replace('class="grid-3"', 'class="grid-3 stagger-grid"', 1)
    txt = txt.replace('class="product-card"', 'class="product-card reveal-up"')

    # Industries section header
    txt = txt.replace('class="section-header text-center"', 'class="section-header text-center reveal-up"', 1)
    # Industries grid
    txt = txt.replace('class="grid-2"', 'class="grid-2 stagger-grid"', 1)
    # Replace the 4 industry cards
    txt = txt.replace(
        '<div class="card" style="display: flex; gap: 1.5rem; align-items: flex-start;">',
        '<div class="card reveal-up" style="display: flex; gap: 1.5rem; align-items: flex-start;">'
    )

    # Office Ribbon
    txt = txt.replace('class="office-ribbon"', 'class="office-ribbon reveal-scale"', 1)
    txt = txt.replace('class="office-ribbon-info"', 'class="office-ribbon-info reveal-left"', 1)
    txt = txt.replace('class="office-ribbon-actions"', 'class="office-ribbon-actions reveal-right"', 1)

    # Footer
    txt = txt.replace('class="footer-top-row"', 'class="footer-top-row reveal-up"', 1)

    open(html_file, 'w', encoding='utf-8').write(txt)
    print(f'Updated animation classes in {html_file}')

update_index_html('index.html')
update_index_html('metals-and-fibres-website/index.html')
