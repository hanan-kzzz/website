/**
 * Gulf Fiber and Metal Company Limited - Bilingual Translation & RTL Engine
 * Provides seamless English and Arabic (RTL) switching across all pages.
 */

const I18N = {
  currentLang: localStorage.getItem('gfm_lang') || 'en',

  translations: {
    en: {
      siteTitle: "Nahas Malee | Gulf Fiber and Metal Company Limited",
      brandName: "NAHAS MALEE",
      brandSub: "Gulf Fiber & Metal Co.",
      locationBadge: "Al Farazdaq Street, Riyadh, Saudi Arabia",
      phoneLabel: "+966 11 000 0000 (Riyadh Office)",
      requestQuoteNav: "Request a Quote",
      requestQuoteDrawer: "Request an Engineering Quote",
      quickContact: "Direct Inquiries",
      directCall: "Call Directly",
      factoryLocation: "Al Farazdaq St, Riyadh, Saudi Arabia",
      selectLanguage: "Language",
      navHome: "Home",
      navAbout: "About",
      navProducts: "Products",
      navIndustries: "Industries",
      navProjects: "Projects",
      navManufacturing: "Manufacturing",
      navContact: "Contact",
      heroBadge: "Al Farazdaq St, Riyadh • Verified GRP Composite Fabricator",
      heroTitle1: "We Provide Engineered",
      heroTitle2: "GRP Architectural Solutions",
      heroHeadline: "We Provide Engineered GRP Architectural Solutions",
      heroSubtext: "Dedicated to manufacturing high-performance GRP architectural cladding, structural pillar covers, and custom composite fabrication engineered for Saudi Arabia.",
      btnExploreProducts: "Explore Products",
      btnRequestQuote: "Get a Quote",
      viewDetails: "View Specifications",
      quickQuote: "Quick Quote",
      verifiedTag: "Physical Listing Verified",
      proposedTag: "Proposed Catalogue Benchmark",
      missingNotice: "Client Data Review Framework Enabled",
      footerDesc: "Gulf Fiber and Metal Company Limited is an industrial GRP composite and metal fabrication company based on Al Farazdaq Street, Riyadh. We engineer durable architectural and civil solutions for contractors across the Kingdom.",
      footerQuickLinks: "Quick Navigation",
      footerProducts: "Product Range",
      footerContact: "Riyadh Facility & Contact",
      footerCopyright: "© 2026 Gulf Fiber and Metal Company Limited. All rights reserved.",
      legalNotice: "Website content structured for engineering review. Competitor trademarks and references retained solely for benchmark compliance.",
      footerBackToTop: "Top ↑",
      fabWhatsApp: "Chat on WhatsApp",
      fabPhone: "Call +966 50 000 0000",
      fabQuote: "Request a Quote",
      fabScrollTop: "Back to Top"
    },
    ar: {
      siteTitle: "نحاس ملي | شركة الخليج للألياف والمعادن المحدودة",
      brandName: "نحاس ملي",
      brandSub: "شركة الخليج للألياف والمعادن المحدودة",
      locationBadge: "شارع الفرزدق، الرياض، المملكة العربية السعودية",
      phoneLabel: "+966 11 000 0000 (مكتب الرياض)",
      requestQuoteNav: "طلب تسعيرة",
      requestQuoteDrawer: "طلب تسعيرة هندسية",
      quickContact: "تواصل مباشر",
      directCall: "اتصال مباشر",
      factoryLocation: "شارع الفرزدق، الرياض، المملكة العربية السعودية",
      selectLanguage: "اللغة",
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navProducts: "المنتجات",
      navIndustries: "القطاعات",
      navProjects: "المشاريع",
      navManufacturing: "التصنيع",
      navContact: "اتصل بنا",
      heroBadge: "شارع الفرزدق، الرياض • مصنّع فيبرجلاس (GRP) معتمد",
      heroTitle1: "نقدم حلولاً متطورة",
      heroTitle2: "لتطبيقات الفيبرجلاس (GRP) المعمارية",
      heroHeadline: "نقدم حلولاً هندسية متقدمة لتطبيقات الفيبرجلاس المعمارية",
      heroSubtext: "تصنيع متقدم لتكسيات الفيبرجلاس (GRP) المعمارية والتراثية، أغطية الأعمدة، والواجهات ثلاثية الأبعاد المقاومة للظروف المناخية في المملكة.",
      btnExploreProducts: "استكشف المنتجات",
      btnRequestQuote: "طلب تسعيرة فورية",
      viewDetails: "عرض المواصفات",
      quickQuote: "تسعيرة سريعة",
      verifiedTag: "تم التحقق من بيانات الموقع",
      proposedTag: "معيار مقترح بانتظار الاعتماد",
      missingNotice: "نظام تدقيق البيانات للمراجعة مفعّل",
      footerDesc: "شركة الخليج للألياف والمعادن المحدودة هي شركة صناعية متخصصة في تصنيع منتجات الفيبرجلاس والمعادن، مقرها شارع الفرزدق بالرياض، تبتكر حلولاً معمارية وهندسية متينة لقطاع المقاولات في المملكة.",
      footerQuickLinks: "روابط سريعة",
      footerProducts: "نطاق المنتجات",
      footerContact: "موقع الرياض والتواصل",
      footerCopyright: "© 2026 شركة الخليج للألياف والمعادن المحدودة. جميع الحقوق محفوظة.",
      legalNotice: "تمت صياغة المحتوى للمراجعة الهندسية الفنية. المراجع المعيارية مخصصة للتحقق وتطابق الاشتراطات.",
      footerBackToTop: "للأعلى ↑",
      fabWhatsApp: "تواصل عبر واتساب",
      fabPhone: "اتصل بنا: 0000 000 50 966+",
      fabQuote: "طلب تسعيرة سريعة",
      fabScrollTop: "العودة للأعلى"
    }
  },

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  },

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ar') return;
    this.currentLang = lang;
    localStorage.setItem('gfm_lang', lang);
    this.applyLanguage(lang);
    // Dispatch custom event for pages with dynamic content (catalogue, detail, forms)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },

  applyLanguage(lang) {
    const isAr = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    if (isAr) {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[lang] && this.translations[lang][key]) {
        el.textContent = this.translations[lang][key];
      }
    });

    // Update all elements with data-i18n-title attribute
    const titledElements = document.querySelectorAll('[data-i18n-title]');
    titledElements.forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (this.translations[lang] && this.translations[lang][key]) {
        const text = this.translations[lang][key];
        el.setAttribute('title', text);
        el.setAttribute('aria-label', text);
      }
    });

    // Update active state of language toggle buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },

  bindEvents() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) {
          this.setLanguage(targetLang);
        }
      }
    });
  },

  t(key) {
    return (this.translations[this.currentLang] && this.translations[this.currentLang][key]) || key;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
});
