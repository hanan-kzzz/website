import os, re

# 1. Update about.html in both locations: Remove .hero-trust-chips
about_files = ['about.html', 'metals-and-fibres-website/about.html']
chips_pattern = re.compile(r'\s*<!-- Technical Trust Highlights -->\s*<div class="hero-trust-chips">.*?</div>\s*</div>', re.DOTALL)

for f in about_files:
    if os.path.exists(f):
        txt = open(f, encoding='utf-8').read()
        # Find hero-trust-chips block
        # Match from <!-- Technical Trust Highlights --> or <div class="hero-trust-chips"> down to its closing </div>
        cleaned = re.sub(r'\s*<!-- Technical Trust Highlights -->\s*<div class="hero-trust-chips">[\s\S]*?</div>\s*(?=</div>)', '\n', txt)
        if cleaned != txt:
            open(f, 'w', encoding='utf-8').write(cleaned)
            print(f'Successfully removed hero-trust-chips from {f}')
        else:
            # Try matching just the div
            cleaned2 = re.sub(r'\s*<div class="hero-trust-chips">[\s\S]*?</div>\s*(?=</div>)', '\n', txt)
            if cleaned2 != txt:
                open(f, 'w', encoding='utf-8').write(cleaned2)
                print(f'Successfully removed hero-trust-chips (pattern 2) from {f}')
            else:
                print(f'Pattern did not match in {f}')

# 2. Update js/main.js in both locations: Add counting animation function
js_files = ['js/main.js', 'metals-and-fibres-website/js/main.js']

counter_code = '''
// Animated Counting Numbers for Metrics Strip
function initMetricCounters() {
  const metricValues = document.querySelectorAll('.metric-val');
  if (!metricValues.length) return;

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function startCounter(el) {
    const rawText = el.textContent.trim();
    const match = rawText.match(/^([0-9]+)(.*)$/);
    if (!match) return; // e.g., "Class A" is not a number, keep as text

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const duration = 1800; // 1.8s smooth counting duration
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(targetNum * easeOutExpo(progress));

      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${targetNum}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  // Observe all .metrics-strip and .metrics-grid elements with IntersectionObserver
  const strips = document.querySelectorAll('.metrics-strip, .metrics-grid');
  if ('IntersectionObserver' in window && strips.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.metric-val');
          items.forEach((item, idx) => {
            // Set initial 0 before starting counter
            const raw = item.textContent.trim();
            const m = raw.match(/^([0-9]+)(.*)$/);
            if (m) {
              item.textContent = `0${m[2] || ''}`;
            }
            setTimeout(() => {
              startCounter(item);
            }, idx * 120);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    strips.forEach(strip => observer.observe(strip));
  } else {
    metricValues.forEach(el => startCounter(el));
  }
}
'''

for f in js_files:
    if os.path.exists(f):
        txt = open(f, encoding='utf-8').read()
        if 'initMetricCounters' not in txt:
            # Add call in DOMContentLoaded
            txt = txt.replace("initFloatingActions();", "initFloatingActions();\n  initMetricCounters();", 1)
            # Add function at end
            txt = txt + '\n' + counter_code
            open(f, 'w', encoding='utf-8').write(txt)
            print(f'Successfully added counter animation to {f}')
        else:
            print(f'Counter animation already in {f}')

# 3. Add tabular-nums to CSS
css_files = ['css/main.css', 'metals-and-fibres-website/css/main.css']
for f in css_files:
    if os.path.exists(f):
        txt = open(f, encoding='utf-8').read()
        if 'font-variant-numeric: tabular-nums' not in txt:
            txt = txt.replace('.metric-val {', '.metric-val {\n  font-variant-numeric: tabular-nums;', 1)
            open(f, 'w', encoding='utf-8').write(txt)
            print(f'Added tabular-nums to {f}')
