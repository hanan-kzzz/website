path = 'metals-and-fibres-animated/js/main.js'
txt = open(path, encoding='utf-8').read()

new_features_code = '''
  /* ═════════════════════════════════════════════════════════════════
     13. TOTAL UI/UX UPGRADE: MOTION, SCROLL REVEAL & COMPACT HEADER
     ═════════════════════════════════════════════════════════════════ */
  
  // A. Scroll Reading Progress, Compact Sticky Header & Scroll Spy
  function setupScrollMotionAndHeader() {
    const progressBar = document.getElementById('scrollProgress');
    const header = document.getElementById('siteHeader');
    const dockCircle = document.getElementById('dockScrollCircle');
    const navItems = document.querySelectorAll('.nav-links .nav-item');
    const sections = ['hero', 'philosophy', 'showcase', 'process', 'calculator', 'contact'];

    let ticking = false;

    function onScroll() {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (winScroll / docHeight) * 100 : 0;

      // Update Top Progress Bar
      if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
      }

      // Compact Sticky Header on Scroll
      if (header) {
        header.classList.toggle('header-scrolled', winScroll > 60);
      }

      // Update Floating Dock Circular Progress Ring
      if (dockCircle) {
        const offset = 144 - (144 * (scrolled / 100));
        dockCircle.style.strokeDashoffset = `${Math.max(0, offset)}`;
      }

      // Scroll Spy for Nav Links
      let currentSectionId = '';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          const bottom = top + el.offsetHeight;
          if (winScroll >= top && winScroll < bottom) {
            currentSectionId = id;
          }
        }
      });

      if (currentSectionId) {
        navItems.forEach((item) => {
          const href = item.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            item.classList.add('active-nav');
          } else {
            item.classList.remove('active-nav');
          }
        });
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  // B. Scroll-Triggered Reveal System
  function setupScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal-init');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // C. Animated Numeric Statistic Counters
  function setupStatisticCounters() {
    const counterElements = document.querySelectorAll('.metric-number[data-target]');
    const metricSection = document.querySelector('.hero-metrics-grid');
    if (!metricSection || !counterElements.length) return;

    let hasAnimated = false;

    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCount(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVal = Math.round(target * easeOutExpo(progress));

            el.innerHTML = `${currentVal}<span class="metric-unit">${suffix}</span>`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.innerHTML = `${target}<span class="metric-unit">${suffix}</span>`;
            }
          }

          requestAnimationFrame(updateCount);
        });

        playUiSound(440, 0.15, 'triangle');
      }
    }, { threshold: 0.25 });

    counterObserver.observe(metricSection);
  }

  // D. Interactive 3D Card Tilt & Surface Spotlight
  function setup3DCardTiltAndSpotlight() {
    const cards = document.querySelectorAll('.magnetic-card, .metric-card');

    cards.forEach((card) => {
      // Inject spotlight element if missing
      if (!card.querySelector('.card-spotlight')) {
        const spotlight = document.createElement('div');
        spotlight.className = 'card-spotlight';
        card.appendChild(spotlight);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const rotY = ((x / rect.width) - 0.5) * 10;
        const rotX = -((y / rect.height) - 0.5) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  // E. Floating Quick-Dock Interactions
  function setupFloatingDock() {
    const dockTop = document.getElementById('dockScrollTop');
    if (dockTop) {
      dockTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        playUiSound(900, 0.05, 'triangle');
      });
    }
  }
'''

# Find DOMContentLoaded block and insert new initializations
old_init = '''  document.addEventListener('DOMContentLoaded', () => {
    setupCursorHover();
    setupMagneticPhysics();
    setupFilters();
    setupModalEvents();
    setupCalculator();
    setupCopyEmail();
    setupMobileDrawer();
    setupLanguageSwitch();

    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', toggleSound);
    }
  });'''

new_init = '''  document.addEventListener('DOMContentLoaded', () => {
    setupCursorHover();
    setupMagneticPhysics();
    setupFilters();
    setupModalEvents();
    setupCalculator();
    setupCopyEmail();
    setupMobileDrawer();
    setupLanguageSwitch();
    setupScrollMotionAndHeader();
    setupScrollReveals();
    setupStatisticCounters();
    setup3DCardTiltAndSpotlight();
    setupFloatingDock();

    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', toggleSound);
    }
  });'''

if 'setupScrollMotionAndHeader' not in txt:
    # Insert functions before DOMContentLoaded
    target = '  /* ═════════════════════════════════════════════════════════════════\n     13. INITIALIZATION ON DOM READY'
    txt = txt.replace(target, new_features_code + '\n' + target, 1)
    txt = txt.replace(old_init, new_init, 1)

open(path, 'w', encoding='utf-8').write(txt)
print('Updated metals-and-fibres-animated/js/main.js successfully with all motion systems.')
