import os

js_files = ['js/main.js', 'metals-and-fibres-website/js/main.js']

improved_counter = '''
// Animated Counting Numbers for Metrics Strip
function initMetricCounters() {
  const metricValues = document.querySelectorAll('.metric-val');
  if (!metricValues.length) return;

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function startCounter(el) {
    if (el.__hasCounted) return;
    el.__hasCounted = true;

    const rawText = el.getAttribute('data-original-val') || el.textContent.trim();
    const match = rawText.match(/^([0-9]+)(.*)$/);
    if (!match) return; // e.g. "Class A" remains text

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const duration = 1800; // 1.8s smooth count
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

  // Pre-save original values so resets or re-triggers don't lose data
  metricValues.forEach(item => {
    item.setAttribute('data-original-val', item.textContent.trim());
  });

  const containers = document.querySelectorAll('.metrics-strip');
  const observeTargets = containers.length ? containers : document.querySelectorAll('.metrics-grid');

  if ('IntersectionObserver' in window && observeTargets.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.metric-val');
          items.forEach((item, idx) => {
            const raw = item.getAttribute('data-original-val');
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
    }, { threshold: 0.15 });

    observeTargets.forEach(el => observer.observe(el));
  } else {
    metricValues.forEach(el => startCounter(el));
  }
}
'''

for f in js_files:
    if os.path.exists(f):
        txt = open(f, encoding='utf-8').read()
        # Replace existing initMetricCounters implementation
        start_idx = txt.find('// Animated Counting Numbers for Metrics Strip')
        if start_idx != -1:
            txt = txt[:start_idx] + improved_counter.strip()
        else:
            txt = txt.replace('initFloatingActions();', 'initFloatingActions();\n  initMetricCounters();', 1)
            txt = txt + '\n' + improved_counter
        open(f, 'w', encoding='utf-8').write(txt)
        print(f'Updated {f} with bulletproof counter logic.')
