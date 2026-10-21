/**
 * Metals & Fibres (Nahas Malee) - High-Integrity Architectural Composites
 * Motion & Interaction Controller (Inspired by bdsn.club)
 */

(function () {
  'use strict';

  /* ═════════════════════════════════════════════════════════════════
     01. PRODUCT SPECIFICATION DATASET
     ═════════════════════════════════════════════════════════════════ */
  const PRODUCTS_DATA = {
    'cladding-trad': {
      category: 'ARCHITECTURAL CLADDING',
      title: 'GRP Traditional & Heritage Cladding Panels',
      image: 'images/prod-cladding.jpg',
      desc: 'Architecturally engineered GRP exterior cladding panels replicating traditional regional masonry and fluted textures with 75% deadweight reduction compared to precast concrete or natural stone.',
      specs: {
        'Resin Matrix': 'Isophthalic / Fire-retardant vinyl ester',
        'Reinforcement': 'Multi-axial E-Glass continuous woven fabric',
        'Tensile Strength': '70 – 110 MPa (ASTM D638)',
        'Flexural Strength': '130 – 180 MPa (ASTM D790)',
        'Specific Gravity': '1.50 – 1.80 g/cm³',
        'Fire Rating': 'Class 1 / Class A flame spread (< 25)',
        'Thermal Service': '-20°C to +85°C continuous'
      },
      applications: [
        'Heritage and cultural center facades (Diriyah & Historic Jeddah style)',
        'Commercial building exterior rainscreen envelopes',
        'Civic gateways, ceremonial entrance portals, and perimeter walls'
      ]
    },
    'pillar-covers': {
      category: 'STRUCTURAL PILLAR COVERS',
      title: 'GRP Interlocking Column & Pillar Envelopes',
      image: 'images/prod-pillar.jpg',
      desc: 'High-precision two-piece and four-piece circular or fluted column cladding systems designed with concealed interlocking joints and internal anchor collars.',
      specs: {
        'Diameters Available': 'Ø300mm to Ø1800mm custom cast',
        'Resin Formulation': 'High-impact isophthalic composite',
        'Barcol Hardness': '48 – 52 (ASTM D2583)',
        'Impact Energy': '> 25 kJ/m² (Charpy unnotched)',
        'Wall Thickness': '4.5mm – 8.0mm nominal',
        'Joint System': 'Concealed shiplap return with SS316 fasteners'
      },
      applications: [
        'Airport concourses, high-speed rail terminals, and transit hubs',
        'Shopping malls, hotel grand atriums, and commercial lobbies',
        'Exterior shaded colonnades and monumental porticos'
      ]
    },
    'facade-mashrabiya': {
      category: 'PARAMETRIC 3D ENVELOPES',
      title: 'GRP 3D Facades & Mashrabiya Sunshade Screens',
      image: 'images/prod-facade.jpg',
      desc: 'Custom three-dimensional parametric screens and micro-perforated mashrabiya panels engineered to reduce solar heat gain while creating intricate architectural shadows.',
      specs: {
        'UV Stabilization': 'ASTM G154 Accelerated Weathering > 3000 hrs',
        'Wind Load Resistance': 'Engineered up to 160 km/h positive/negative load',
        'Thermal Conductivity': '0.15 W/m·K (high thermal insulation barrier)',
        'Finish Treatment': 'Anti-graffiti satin isophthalic gelcoat',
        'Deflection Limit': 'L/240 under maximum service wind gust'
      },
      applications: [
        'Solar shading envelopes for LEED and Mostadam certified towers',
        'Contemporary architectural feature screens and ventilation grilles',
        'Geometric parking structure facade disguises'
      ]
    },
    'water-tanks': {
      category: 'MODULAR LIQUID CONTAINMENT',
      title: 'GRP Modular Sectional Panel Water Tanks',
      image: 'images/prod-tank.jpg',
      desc: 'Food-grade hot press moulded sectional water containment panels meeting international hygiene criteria, completely immune to algae growth and chemical corrosion.',
      specs: {
        'Panel Sizes': '1000x1000mm, 1000x500mm, 500x500mm modules',
        'Internal Reinforcement': 'Grade 316 Stainless Steel tie-rods',
        'External Structure': 'Hot-dip galvanized structural steel skids',
        'Hygiene Standard': 'WRAS certified non-toxic food-grade formulation',
        'Operating Pressure': 'Hydrostatically verified to 2.5x working head'
      },
      applications: [
        'Potable water reserves for commercial high-rises and healthcare towers',
        'Emergency firefighting static storage reserves',
        'Industrial water treatment and agricultural reservoirs'
      ]
    },
    'canopies-underpass': {
      category: 'CIVIL & TRANSPORTATION CEILINGS',
      title: 'GRP Architectural Canopies & Underpasses',
      image: 'images/prod-canopy.jpg',
      desc: 'Heavy-duty lightweight composite ceiling and soffit systems engineered for vibrational dampening, zero acoustic reverberation, and high wash-down durability.',
      specs: {
        'Fatigue Resistance': 'High-cycle cyclic wind gust certified',
        'Moisture Absorption': '< 0.20% (24 hrs immersion)',
        'Fire Classification': 'Class 1 BS 476 Part 7 / ASTM E84 Class A',
        'Sub-frame': 'Extruded 6063-T6 aluminum modular suspension grid'
      },
      applications: [
        'Metro rail station passenger platform canopies',
        'Highway vehicular tunnels and underpass ceiling cladding',
        'Covered pedestrian walkways and stadium concourse soffits'
      ]
    },
    'custom-fabrication': {
      category: 'BESPOKE COMPOSITE FABRICATION',
      title: 'Bespoke Architectural Domes, Cornices & Sculptures',
      image: 'images/prod-custom.jpg',
      desc: 'One-off complex geometric domes, minaret caps, structural kiosks, and ornamental cornices precision-machined from 5-axis 3D CAD master models.',
      specs: {
        'Dimensional Tolerance': '± 1.5mm across 6-meter span',
        'Geometry Freedom': 'Organic double-curvature and compound organic surfaces',
        'Surface Finishes': 'Stone texture, polished metallic, or bespoke RAL',
        'Mould Technology': 'High-density tooling foam with epoxy skins'
      },
      applications: [
        'Mosque domes, ceremonial pavilions, and decorative cornices',
        'Security guard kiosks and luxury retail concession cabins',
        'Custom civic monuments and outdoor sculptural landmarks'
      ]
    }
  };

  /* ═════════════════════════════════════════════════════════════════
     02. BILINGUAL TRANSLATION STRINGS (EN / AR)
     ═════════════════════════════════════════════════════════════════ */
  const I18N_DATA = {
    en: {
      statusLive: "ACCEPTING MEGA-PROJECT TENDERS • RIYADH KSA",
      navAdvantage: "ADVANTAGE",
      navProducts: "SOLUTIONS",
      navProcess: "MANUFACTURING",
      navCalculator: "ESTIMATOR",
      navContact: "CONTACT",
      ctaRfq: "REQUEST RFQ",
      heroBadge: "ARCHITECTURAL COMPOSITES & ADVANCED GRP ENGINEERING",
      heroSubHeading: "PRECISION ENVELOPES FOR SAUDI ARABIA’S HORIZON.",
      heroLead: "Ditching structural precision is an offense. Gulf Fiber and Metal Company Limited (Nahas Malee) fuses isophthalic polymer chemistry with monumental architectural facades — delivering 75% weight reduction, SASO certified fire safety, and permanent desert thermal immunity.",
      heroCtaExplore: "EXPLORE SOLUTIONS",
      heroCtaEstimate: "CALCULATE SPECS",
      metric1Title: "Years Engineering",
      metric1Sub: "Proven Track Record in KSA",
      metric2Title: "Weight Reduction",
      metric2Sub: "Lighter than Concrete / Stone",
      metric3Title: "Desert Thermal Rating",
      metric3Sub: "Zero UV Chalking or Warping",
      metric4Title: "Corrosion Immunity",
      metric4Sub: "Salinity & Chemical Proof",
      manifestoTag: "[01 // ENGINEERING PHILOSOPHY]",
      manifestoQuote: "“Why burden monumental architecture with 80 tons of precast concrete, when 15 tons of engineered GRP provides double the tensile resilience, zero salinity decay, and total geometric freedom?”",
      manifestoRole: "CHIEF COMPOSITE SYSTEMS ENGINEER",
      manifestoP1: "Architecture in the Gulf region cannot rely on conventional heavy materials that corrode in coastal humidity or degrade under harsh desert ultraviolet radiation. At Gulf Fiber and Metal, we treat composite fabrication as high-performance industrial craft.",
      manifestoP2: "Every mould, panel, and column envelope is formulated with bespoke isophthalic resin chemistries and multi-axial fiberglass fabrics, delivering structures that outlast concrete by decades while cutting transportation dead-loads and substructure costs in half.",
      compHeading: "ENGINEERED MATRIX: GRP VS. TRADITIONAL MATERIALS",
      compSub: "Verified against ASTM standard specifications",
      compColParam: "Performance Parameter",
      compColGrp: "M&F Engineered GRP",
      compColConcrete: "Precast Concrete / GRC",
      compColAcp: "Aluminum Composite (ACP)",
      compRow1: "Structural Deadweight",
      compRow2: "3D Geometric Flexibility",
      compRow3: "Desert UV & Heat (55°C)",
      compRow4: "Marine & Salinity Immunity",
      compRow5: "Installation Velocity",
      showcaseTag: "[02 // ARCHITECTURAL SOLUTIONS]",
      showcaseCount: "8 ENGINEERED SYSTEMS AVAILABLE",
      showcaseTitle: "FABRICATED FOR MONUMENTS & INFRASTRUCTURE.",
      showcaseDesc: "Hover over any engineered product to inspect dimensional tolerances, mechanical specifications, and architectural applications.",
      filterAll: "ALL (08)",
      filterCladding: "CLADDING",
      filterPillars: "PILLAR COVERS",
      filterFacade: "3D FACADES",
      filterTanks: "WATER TANKS",
      filterCustom: "CUSTOM FABRICATION",
      prod1Title: "GRP Traditional & Heritage Cladding Panels",
      prod1Desc: "Architectural exterior cladding reproducing historical Arabian textures with 75% structural dead-load reduction over stone.",
      prod2Title: "GRP Interlocking Pillar & Column Covers",
      prod2Desc: "Precision two-piece and four-piece circular or fluted column wraps with concealed mechanical fasteners and zero visible screws.",
      prod3Title: "GRP 3D Facades & Mashrabiya Sunshades",
      prod3Desc: "Custom three-dimensional parametric screens and perforated solar shading envelopes engineered for high thermal loads.",
      prod4Title: "GRP Modular Sectional Panel Water Tanks",
      prod4Desc: "Food-grade hot press moulded sectional water containment panels for commercial towers, hospitals, and industrial reserves.",
      prod5Title: "GRP Architectural Canopies & Underpasses",
      prod5Desc: "Corrosion-proof, high-impact composite ceiling and soffit panels designed for railway concourses, metro stations, and vehicular tunnels.",
      prod6Title: "Bespoke Architectural Composite Fabrication",
      prod6Desc: "Custom complex geometric domes, kiosks, cornices, and decorative sculptures fabricated from digital 3D models.",
      btnInspect: "INSPECT SPECIFICATIONS",
      processTag: "[03 // THE PRODUCTION PROTOCOL]",
      processHeading: "FROM COMPUTATIONAL CAD TO MONUMENTAL REALITY.",
      processSub: "Our multi-stage production protocol ensures that every composite element meets exacting aerospace-grade structural thresholds.",
      step1Title: "Computational Tooling & Master Mould Engineering",
      step1Desc: "Translation of architectural BIM/CAD models into high-density CNC-machined polyurethane and epoxy master tooling. Sub-millimeter repeatable surface tolerances.",
      step2Title: "Multi-Axial Fiber Layup & Isophthalic Gelcoating",
      step2Desc: "Application of marine-grade isophthalic NPG gelcoats (min 600 microns) followed by multi-axial stitched E-glass reinforcements and fire-retardant vinyl ester resin infusion.",
      step3Title: "Robotic Trimming & Sub-Frame Integration",
      step3Desc: "High-speed diamond abrasive robotic trimming of panel perimeters. Structural cleats, concealed bracket inserts, and drainage weep slots factory bonded.",
      step4Title: "SASO Quality Audit & Mechanical Load Testing",
      step4Desc: "Batch coupons tested for Barcol hardness, flexural modulus, and water absorption. Complete visual inspection ensuring uniform color tone (Delta E < 0.8).",
      calcTag: "[04 // ESTIMATE & RFQ BUILDER]",
      calcTitle: "INTERACTIVE RFQ SPECIFICATION BUILDER",
      calcDesc: "Tune your project parameters to compute estimated deadweight savings, panel thickness, and lead time in real time.",
      lblSystem: "Structural System Type",
      lblArea: "Project Surface Area",
      lblFire: "Fire Safety Rating Requirement",
      lblFinish: "Architectural Finish Texture",
      resDeadweight: "Estimated Total Weight",
      resThickness: "Recommended Nominal Thickness",
      resLead: "Fabrication Lead Time",
      btnCopyRfq: "DISPATCH RFQ TO NAHAS MALEE",
      btnCopyClipboard: "COPY ESTIMATE TO CLIPBOARD",
      calcDisclaimer: "*Estimates are preliminary calculations. Detailed structural shop drawings and anchor load calculations are provided upon official tender submission.",
      footerTag: "[05 // COMMENCE FABRICATION]",
      footerHeading: "LET’S ENGINEER SOMETHING MONUMENTAL.",
      footerSub: "Have a project in Riyadh, Jeddah, NEOM, or the wider GCC? Our composite engineering team is ready to review your architectural BIM and shop drawings.",
      contactEmailLabel: "OFFICIAL TENDER EMAIL",
      contactPhoneLabel: "TELEPHONE & WHATSAPP",
      contactHQLabel: "HEADQUARTERS & PLANT",
      backToTop: "BACK TO TOP"
    },
    ar: {
      statusLive: "نستقبل مناقصات المشاريع الكبرى • الرياض، المملكة العربية السعودية",
      navAdvantage: "المميزات",
      navProducts: "الحلول الهندسية",
      navProcess: "التصنيع",
      navCalculator: "حاسبة المواصفات",
      navContact: "اتصل بنا",
      ctaRfq: "طلب تسعيرة",
      heroBadge: "مركبات معمارية وهندسة متقدمة للألياف الزجاجية (GRP)",
      heroSubHeading: "أغلفة معمارية فائقة الدقة لأفق المملكة العربية السعودية.",
      heroLead: "التخلي عن الدقة الهيكلية خطيئة هندسية. تدمج شركة مصنع النحاس والملي المحدودة (نحاس ملي) كيمياء بوليمرات الأيزوفثاليك مع الواجهات المعمارية العملاقة — لتوفير خفض وزن بنسبة 75٪، ومقاومة معتمدة من ساسو للحرائق، وثبات صحراوي دائم.",
      heroCtaExplore: "استكشف الحلول الهندسية",
      heroCtaEstimate: "احسب المواصفات",
      metric1Title: "سنوات من الخبرة الهندسية",
      metric1Sub: "سجل حافل في كبرى مشاريع المملكة",
      metric2Title: "تخفيض في الوزن الهيكلي",
      metric2Sub: "أخف بنسبة 75٪ من الخرسانة والحجر",
      metric3Title: "تحمل درجات الحرارة الصحراوية",
      metric3Sub: "صمود تام دون بهتان أو تشقق حتى 55°م",
      metric4Title: "مناعة تامة ضد التآكل",
      metric4Sub: "مقاومة 100٪ للأملاح والكيماويات",
      manifestoTag: "[01 // الفلسفة الهندسية]",
      manifestoQuote: "“لماذا نثقل المباني الشاهقة بـ 80 طناً من الخرسانة مسبقة الصب، بينما يمكن لـ 15 طناً من الفيبرجلاس المعالج أن يمنحك ضعف مرونة الشد، ومناعة تامة ضد الرطوبة والأملاح، وحرية هندسية مطلقة؟”",
      manifestoRole: "كبير مهندسي أنظمة المواد المركبة",
      manifestoP1: "لا يمكن للهندسة المعمارية في منطقة الخليج الاعتماد على المواد التقليدية الثقيلة التي تتآكل بفعل الرطوبة الساحلية أو تتدهور تحت الأشعة فوق البنفسجية الحارقة. في شركة الألياف والمعادن، نتعامل مع تصنيع المركبات كحرفة صناعية عالية الأداء.",
      manifestoP2: "كل قالب ولوح وغطاء عمود يتم تشكيله بتركيبات كيميائية مخصصة من راتنجات الأيزوفثاليك وأقمشة الألياف الزجاجية متعددة المحاور، لتقديم هياكل تعيش عقوداً أطول وتخفض تكاليف النقل والهياكل الحاملة إلى النصف.",
      compHeading: "مقارنة هندسية: الفيبرجلاس (GRP) مقابل المواد التقليدية",
      compSub: "تم التحقق منها وفق معايير ASTM القياسية",
      compColParam: "المعيار الهيكلي",
      compColGrp: "فيبرجلاس M&F المتطور",
      compColConcrete: "خرسانة مسبقة الصب / GRC",
      compColAcp: "ألواح الألومنيوم المركب (ACP)",
      compRow1: "الوزن الميت للهيكل",
      compRow2: "مرونة التشكيل ثلاثي الأبعاد",
      compRow3: "مقاومة الأشعة والحرارة (55°م)",
      compRow4: "المناعة البحرية ضد الأملاح",
      compRow5: "سرعة التنفيذ والتركيب",
      showcaseTag: "[02 // الحلول المعمارية]",
      showcaseCount: "8 أنظمة هندسية معتمدة",
      showcaseTitle: "مصنعة لتخليد الصروح والبنية التحتية.",
      showcaseDesc: "مرر المؤشر فوق أي منتج لفحص التفاوتات البعدية والمواصفات الميكانيكية وتطبيقات التركيب.",
      filterAll: "الكل (08)",
      filterCladding: "التكسيات",
      filterPillars: "أغطية الأعمدة",
      filterFacade: "واجهات ثلاثية الأبعاد",
      filterTanks: "خزانات المياه",
      filterCustom: "تصنيع مخصص",
      prod1Title: "ألواح التكسية التراثية والتقليدية من الفيبرجلاس",
      prod1Desc: "تكسيات خارجية تستحضر النقوش التراثية العريقة مع خفض الأحمال الهيكلية بنسبة 75٪ مقارنة بالحجر الطبيعي.",
      prod2Title: "أغطية الأعمدة المعمارية المتداخلة من الفيبرجلاس",
      prod2Desc: "أنظمة تغليف أعمدة دائرية أو مضلعة بنظام تعشيق متخفٍ ومثبتات ميكانيكية غير ظاهرة.",
      prod3Title: "واجهات 3D وشاشات المشربية العازلة للشمس",
      prod3Desc: "شاشات بارامترية ثلاثية الأبعاد مصممة لخفض الكسب الحراري الشمسي ومقاومة الرياح الشديدة.",
      prod4Title: "خزانات المياه المقطعية المعيارية من الفيبرجلاس",
      prod4Desc: "ألواح كبس حراري مطابقة لمعايير مياه الشرب الصحية للأبراج التجارية والمستشفيات والمنشآت الحيوية.",
      prod5Title: "المظلات والأسقف المعمارية للأنفاق ومحطات القطار",
      prod5Desc: "أسقف مركبة خفيفة الوزن وممتصة للاهتزازات، مصممة لتحمل حركة المرور والرياح في محطات المترو والأنفاق.",
      prod6Title: "التصنيع المعماري المخصص للمركبات والقباب",
      prod6Desc: "قباب ومقرنصات وأكشاك مجسمة معقدة هندسياً يتم تصنيعها عبر قوالب CNC خماسية المحاور.",
      btnInspect: "فحص المواصفات الهندسية",
      processTag: "[03 // بروتوكول التصنيع]",
      processHeading: "من نماذج CAD الرقمية إلى أرض الواقع.",
      processSub: "يضمن بروتوكول التصنيع متعدد المراحل تلبية كل عنصر لأعلى معايير السلامة الهيكلية.",
      step1Title: "هندسة القوالب الرئيسية وتفريز CNC",
      step1Desc: "تحويل المخططات الرقمية ونماذج BIM إلى قوالب إيبوكسي عالية الكثافة بدقة تقل عن ملليمتر واحد.",
      step2Title: "التصفيف متعدد المحاور ورش طبقة الجيلكوت",
      step2Desc: "تطبيق جيلكوت أيزوفثاليك بحري (600 ميكرون) متبوعاً بأقمشة E-glass متعددة الاتجاهات وراتنجات فينيل إستر المقاومة للحريق.",
      step3Title: "التشذيب الآلي وتثبيت المرابط الهيكلية",
      step3Desc: "قص الحواف بدقة باستخدام رؤوس الألماس الروبوتية، ودمج مرابط التثبيت المخفية المصنوعة من ستانلس ستيل SS316.",
      step4Title: "تدقيق جودة SASO واختبار الأحمال الميكانيكية",
      step4Desc: "اختبار عينات التشغيل لصلادة باركول ومعامل الانحناء وامتصاص الماء، وفحص ثبات اللون تحت إضاءة محاكية لشمس الصحراء.",
      calcTag: "[04 // حاسبة المواصفات والتسعير]",
      calcTitle: "حاسبة مواصفات طلب عرض السعر (RFQ)",
      calcDesc: "حدد معايير مشروعك لحساب التوفير في الوزن الهيكلي وسمك اللوح المقترح ومدة التوريد التقريبية.",
      lblSystem: "نوع النظام الهيكلي",
      lblArea: "المساحة الإجمالية للمشروع",
      lblFire: "تصنيف مقاومة الحريق المطلوب",
      lblFinish: "الملمس والتشطيب المعماري",
      resDeadweight: "الوزن الإجمالي التقديري",
      resThickness: "السمك الاسمي الموصى به",
      resLead: "مدة التصنيع المقدرة",
      btnCopyRfq: "إرسال طلب التسعير إلى نحاس ملي",
      btnCopyClipboard: "نسخ المواصفات إلى الحافظة",
      calcDisclaimer: "*النتائج حسابات تقديرية أولية. يتم تقديم المخططات التنفيذية وحسابات أحمال الرياح والتثبيت المعتمدة عند تقديم وثائق المناقصة الرسمية.",
      footerTag: "[05 // ابدأ التصنيع]",
      footerHeading: "دعنا نصنع صرحاً معمارياً استثنائياً.",
      footerSub: "هل لديك مشروع في الرياض، جدة، نيوم، أو دول الخليج؟ فريقنا الهندسي جاهز لمراجعة المخططات الهندسية.",
      contactEmailLabel: "البريد الرسمي للمناقصات",
      contactPhoneLabel: "الهاتف والواتساب",
      contactHQLabel: "المقر الرئيسي والمصنع",
      backToTop: "العودة للأعلى"
    }
  };

  let currentLang = 'en';

  /* ═════════════════════════════════════════════════════════════════
     03. WEB AUDIO SYNTHESIZER (bdsn.club subtle clicks)
     ═════════════════════════════════════════════════════════════════ */
  let audioCtx = null;
  let isSoundEnabled = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playUiSound(freq = 900, duration = 0.025, type = 'sine') {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function toggleSound() {
    initAudio();
    isSoundEnabled = !isSoundEnabled;
    document.body.classList.toggle('sound-enabled', isSoundEnabled);
    const label = document.getElementById('soundLabel');
    if (label) {
      label.textContent = isSoundEnabled ? 'AUDIO ON' : 'AUDIO OFF';
    }
    if (isSoundEnabled) {
      playUiSound(600, 0.08, 'triangle');
    }
  }

  /* ═════════════════════════════════════════════════════════════════
     04. CUSTOM CURSOR & MAGNETIC PHYSICS
     ═════════════════════════════════════════════════════════════════ */
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorText = document.getElementById('cursorText');

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  // Lerp Animation Loop for Trailing Ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states & custom text
  function setupCursorHover() {
    const interactiveElements = document.querySelectorAll('a, button, .magnetic-btn, .magnetic-card, [data-cursor]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const customLabel = el.getAttribute('data-cursor');
        if (customLabel) {
          document.body.classList.add('cursor-labeled');
          if (cursorText) cursorText.textContent = customLabel;
        } else {
          document.body.classList.add('cursor-active');
        }
        playUiSound(1100, 0.015, 'sine');
      });

      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active', 'cursor-labeled');
        if (cursorText) cursorText.textContent = '';
      });
    });
  }

  // Magnetic Pull Physics
  function setupMagneticPhysics() {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.25;
        const deltaY = (e.clientY - centerY) * 0.25;

        btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  /* ═════════════════════════════════════════════════════════════════
     05. LIVE RIYADH CLOCK
     ═════════════════════════════════════════════════════════════════ */
  function updateRiyadhClock() {
    const clockEl = document.getElementById('liveClock');
    if (!clockEl) return;

    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Riyadh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const riyadhTimeStr = formatter.format(now);
      clockEl.textContent = `RIYADH ${riyadhTimeStr} AST`;
    } catch (e) {
      // Fallback
    }
  }
  setInterval(updateRiyadhClock, 1000);
  updateRiyadhClock();

  /* ═════════════════════════════════════════════════════════════════
     06. CATEGORY FILTER SYSTEM
     ═════════════════════════════════════════════════════════════════ */
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.prod-card');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        playUiSound(800, 0.04, 'triangle');

        const selectedCat = btn.getAttribute('data-cat');
        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-cat');
          if (selectedCat === 'all' || cardCat === selectedCat) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ═════════════════════════════════════════════════════════════════
     07. TECHNICAL SPECIFICATIONS MODAL
     ═════════════════════════════════════════════════════════════════ */
  const specModal = document.getElementById('specModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalCat = document.getElementById('modalCat');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsTable = document.getElementById('modalSpecsTable');
  const modalAppList = document.getElementById('modalAppList');
  const modalCtaBtn = document.getElementById('modalCtaBtn');

  function openProductModal(prodId) {
    const data = PRODUCTS_DATA[prodId];
    if (!data || !specModal) return;

    modalCat.textContent = data.category;
    modalTitle.textContent = data.title;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalDesc.textContent = data.desc;

    // Build specs table
    modalSpecsTable.innerHTML = '';
    for (const [key, val] of Object.entries(data.specs)) {
      const row = document.createElement('div');
      row.className = 'spec-entry';
      row.innerHTML = `<span class="spec-k">${key}</span><span class="spec-v">${val}</span>`;
      modalSpecsTable.appendChild(row);
    }

    // Build app list
    modalAppList.innerHTML = '';
    data.applications.forEach((app) => {
      const li = document.createElement('li');
      li.textContent = app;
      modalAppList.appendChild(li);
    });

    specModal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
    playUiSound(700, 0.05, 'triangle');
  }

  function closeProductModal() {
    if (!specModal) return;
    specModal.classList.remove('modal-active');
    document.body.style.overflow = '';
    playUiSound(500, 0.03, 'sine');
  }

  function setupModalEvents() {
    const inspectButtons = document.querySelectorAll('.open-modal-btn');
    inspectButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const prodId = btn.getAttribute('data-prod');
        openProductModal(prodId);
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeProductModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);
    if (modalCtaBtn) {
      modalCtaBtn.addEventListener('click', () => {
        closeProductModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && specModal.classList.contains('modal-active')) {
        closeProductModal();
      }
    });
  }

  /* ═════════════════════════════════════════════════════════════════
     08. INTERACTIVE ESTIMATE & RFQ BUILDER
     ═════════════════════════════════════════════════════════════════ */
  const calcSystem = document.getElementById('calcSystem');
  const calcArea = document.getElementById('calcArea');
  const areaDisplay = document.getElementById('areaDisplay');
  const resWeight = document.getElementById('resWeight');
  const resSaved = document.getElementById('resSaved');
  const resThickness = document.getElementById('resThickness');
  const resLead = document.getElementById('resLead');
  const btnCopySpecs = document.getElementById('btnCopySpecs');
  const btnDispatchQuote = document.getElementById('btnDispatchQuote');

  const SYSTEM_WEIGHTS = {
    cladding: { kgPerSqm: 11, precastSqm: 65, thickness: '5.5 mm nominal', baseDays: 14 },
    pillars: { kgPerSqm: 14, precastSqm: 75, thickness: '6.0 mm nominal', baseDays: 18 },
    facade: { kgPerSqm: 12, precastSqm: 70, thickness: '5.0 mm nominal', baseDays: 20 },
    tanks: { kgPerSqm: 18, precastSqm: 110, thickness: '8.0 mm heavy duty', baseDays: 15 },
    custom: { kgPerSqm: 15, precastSqm: 80, thickness: '6.5 mm compound', baseDays: 25 }
  };

  function updateEstimate() {
    if (!calcSystem || !calcArea) return;

    const system = calcSystem.value || 'cladding';
    const area = parseInt(calcArea.value, 10) || 500;
    const config = SYSTEM_WEIGHTS[system] || SYSTEM_WEIGHTS.cladding;

    const isClassA = document.querySelector('input[name="fireRating"]:checked')?.value === 'classA';
    const weightMultiplier = isClassA ? 1.05 : 1.0;

    const totalWeight = Math.round(area * config.kgPerSqm * weightMultiplier);
    const precastWeight = Math.round(area * config.precastSqm);
    const savedWeight = precastWeight - totalWeight;
    const savedPercent = Math.round((savedWeight / precastWeight) * 100);

    const leadTimeDays = Math.round(config.baseDays + (area / 1000) * 4);

    if (areaDisplay) areaDisplay.textContent = `${area.toLocaleString()} m²`;
    if (resWeight) resWeight.textContent = `${totalWeight.toLocaleString()} kg`;
    if (resSaved) {
      resSaved.textContent = currentLang === 'ar'
        ? `يوفر ~${savedWeight.toLocaleString()} كجم مقارنة بالخرسانة (${savedPercent}٪)`
        : `Saves ~${savedWeight.toLocaleString()} kg vs Precast Concrete (${savedPercent}%)`;
    }
    if (resThickness) resThickness.textContent = config.thickness;
    if (resLead) {
      resLead.textContent = currentLang === 'ar'
        ? `${leadTimeDays} - ${leadTimeDays + 6} يوم عمل`
        : `${leadTimeDays} - ${leadTimeDays + 6} Working Days`;
    }
  }

  function setupCalculator() {
    if (calcArea) {
      calcArea.addEventListener('input', () => {
        updateEstimate();
        playUiSound(1200, 0.01, 'sine');
      });
    }

    if (calcSystem) {
      calcSystem.addEventListener('change', () => {
        updateEstimate();
        playUiSound(800, 0.03, 'triangle');
      });
    }

    const radioPills = document.querySelectorAll('.radio-pill input[type="radio"]');
    radioPills.forEach((radio) => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.radio-pill').forEach((p) => p.classList.remove('active'));
        radio.closest('.radio-pill').classList.add('active');
        updateEstimate();
        playUiSound(900, 0.02, 'sine');
      });
    });

    const finishSelect = document.getElementById('calcFinish');
    if (finishSelect) {
      finishSelect.addEventListener('change', () => {
        updateEstimate();
        playUiSound(800, 0.03, 'triangle');
      });
    }

    // Copy Specs Button
    if (btnCopySpecs) {
      btnCopySpecs.addEventListener('click', () => {
        const system = calcSystem.options[calcSystem.selectedIndex].text;
        const area = calcArea.value;
        const fire = document.querySelector('input[name="fireRating"]:checked')?.value === 'classA' ? 'Class A (ASTM E84)' : 'Standard Isophthalic';
        const weight = resWeight.textContent;
        const lead = resLead.textContent;

        const specText = [
          'METALS & FIBRES (NAHAS MALEE) - PRELIMINARY RFQ SPECIFICATION',
          '==============================================================',
          `System: ${system}`,
          `Estimated Area: ${area} m²`,
          `Fire Safety Rating: ${fire}`,
          `Estimated Composite Deadweight: ${weight}`,
          `Fabrication Lead Time: ${lead}`,
          'Verification: SASO & ASTM Compliant Matrix',
          'Client Inquiry: info@nahasmalee.com | Riyadh, KSA',
          '=============================================================='
        ].join('\n');

        navigator.clipboard.writeText(specText).then(() => {
          showToast('Specification copied to clipboard!');
          playUiSound(1000, 0.06, 'triangle');
        }).catch(() => {
          showToast('Copied estimate successfully.');
        });
      });
    }

    // Dispatch RFQ Button (Mailto Pre-fill)
    if (btnDispatchQuote) {
      btnDispatchQuote.addEventListener('click', () => {
        const system = calcSystem.options[calcSystem.selectedIndex].text;
        const area = calcArea.value;
        const fire = document.querySelector('input[name="fireRating"]:checked')?.value === 'classA' ? 'Class A (ASTM E84)' : 'Standard Isophthalic';
        const subject = encodeURIComponent(`Tender RFQ: ${system} (${area} m²)`);
        const body = encodeURIComponent(
          `Dear Metals & Fibres (Nahas Malee) Engineering Team,\n\n` +
          `We wish to request a formal fabrication quotation and shop drawing review for the following parameters:\n\n` +
          `- System Type: ${system}\n` +
          `- Approximate Surface Area: ${area} m²\n` +
          `- Fire Rating Requirement: ${fire}\n` +
          `- Estimated Weight: ${resWeight.textContent}\n\n` +
          `Please provide the formal tender datasheet, pricing matrix, and anchor calculation details.\n\n` +
          `Best regards,\n[Your Name / Contracting Firm]`
        );
        window.location.href = `mailto:info@nahasmalee.com?subject=${subject}&body=${body}`;
      });
    }

    updateEstimate();
  }

  /* ═════════════════════════════════════════════════════════════════
     09. TOAST NOTIFICATION UTILITY
     ═════════════════════════════════════════════════════════════════ */
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toastPill');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('toast-visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('toast-visible');
    }, 3200);
  }

  /* ═════════════════════════════════════════════════════════════════
     10. COPY EMAIL & ACTIONS
     ═════════════════════════════════════════════════════════════════ */
  function setupCopyEmail() {
    const copyMailBtn = document.getElementById('copyMailBtn');
    if (copyMailBtn) {
      copyMailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('info@nahasmalee.com').then(() => {
          showToast('info@nahasmalee.com copied to clipboard!');
          const label = document.getElementById('copyMailLabel');
          if (label) {
            const original = label.textContent;
            label.textContent = 'COPIED!';
            setTimeout(() => { label.textContent = original; }, 2000);
          }
          playUiSound(1000, 0.05, 'triangle');
        });
      });
    }
  }

  /* ═════════════════════════════════════════════════════════════════
     11. MOBILE DRAWER NAVIGATION
     ═════════════════════════════════════════════════════════════════ */
  function setupMobileDrawer() {
    const toggle = document.getElementById('mobileMenuToggle');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (toggle) {
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('drawer-open');
        playUiSound(600, 0.03, 'sine');
      });
    }

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('drawer-open');
      });
    });
  }

  /* ═════════════════════════════════════════════════════════════════
     12. LANGUAGE TOGGLE (EN / AR)
     ═════════════════════════════════════════════════════════════════ */
  function switchLanguage(lang) {
    currentLang = lang;
    const isArabic = (lang === 'ar');
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
      if (isArabic) {
        langBtn.innerHTML = `<span class="lang-inactive">EN</span><span class="lang-divider">/</span><span class="lang-active">عربي</span>`;
      } else {
        langBtn.innerHTML = `<span class="lang-active">EN</span><span class="lang-divider">/</span><span class="lang-inactive">عربي</span>`;
      }
    }

    // Update all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    const dictionary = I18N_DATA[lang];

    i18nElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary && dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });

    updateEstimate();
    playUiSound(750, 0.04, 'sine');
  }

  function setupLanguageSwitch() {
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'ar' : 'en';
        switchLanguage(nextLang);
      });
    }
  }


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

  /* ═════════════════════════════════════════════════════════════════
     13. INITIALIZATION ON DOM READY
     ═════════════════════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
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
  });

})();
