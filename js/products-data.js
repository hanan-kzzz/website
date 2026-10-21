/**
 * Gulf Fiber and Metal Company Limited - Product Catalogue Data
 * High-Integrity Engineering & Architectural Composite Specifications
 * Categorized under: [VERIFIED], [PROPOSED], or [PENDING CLIENT REVIEW]
 */

const PRODUCTS_DATA = [
  {
    id: "grp-traditional-cladding",
    sku: "GFM-GRP-CLAD-01",
    name: "GRP Traditional & Heritage Cladding Panels",
    nameAr: "ألواح التكسية التراثية والتقليدية من الفيبرجلاس (GRP)",
    category: "cladding",
    categoryName: "Architectural Cladding",
    categoryNameAr: "التكسيات المعمارية",
    status: "Proposed",
    statusBadge: "Proposed Benchmark",
    featured: true,
    image: "images/prod-cladding.jpg",
    cadImage: "images/prod-cladding-traditional.svg",
    highlights: [
      { label: "Dead-Load Reduction", labelAr: "تخفيض الأحمال الهيكلية", value: "Up to 75%", icon: "feather" },
      { label: "Tensile Strength", labelAr: "مقاومة الشد", value: "70 - 110 MPa", icon: "shield" },
      { label: "Fire Resistance", labelAr: "مقاومة الحريق", value: "Class 1 / Class A", icon: "flame" },
      { label: "UV Durability", labelAr: "مقاومة الأشعة UV", value: "> 3000 hrs QUV", icon: "sun" }
    ],
    shortDesc: "Architecturally engineered GRP exterior cladding panels replicating traditional regional textures with lightweight durability and extreme UV resistance.",
    shortDescAr: "ألواح تكسية خارجية هندسية من الفيبرجلاس تعيد إحياء النقوش التراثية بخفة وزن فائقة ومقاومة قصوى للأشعة فوق البنفسجية.",
    fullDesc: "Manufactured for prestigious cultural, commercial, and hospitality projects across Saudi Arabia. These GRP traditional cladding panels offer architect-grade surface fidelity while reducing structural dead-loads by up to 75% compared to precast concrete or natural stone. Formulated with isophthalic resin systems and woven glass fiber reinforcements to withstand aggressive desert thermal cycling and high UV irradiance.",
    fullDescAr: "تم تصنيعها للمشاريع الثقافية والتجارية والفندقية المرموقة في المملكة العربية السعودية. توفر هذه الألواح دقة ملمس فائقة مع تقليل الأحمال الهيكلية بنسبة تصل إلى 75٪ مقارنة بالخرسانة مسبقة الصب أو الحجر الطبيعي. مصاغة بأنظمة راتنجات أيزوفثاليك وألياف زجاجية منسوجة لتحمل تقلبات درجات الحرارة الصحراوية الحادة والإشعاع الشمسي.",
    applications: [
      "Heritage and cultural center facades",
      "Commercial building exterior envelopes",
      "Traditional architectural restorations",
      "Civic gateways and perimeter walls"
    ],
    applicationsAr: [
      "واجهات المراكز التراثية والثقافية",
      "الأغلفة الخارجية للمباني التجارية",
      "ترميم المباني التاريخية والتراثية",
      "البوابات والأسوار المعمارية"
    ],
    specifications: {
      "Resin Matrix": "Isophthalic / Fire-retardant vinyl ester optional",
      "Reinforcement": "E-Glass chopped strand mat & woven roving multi-axial",
      "Specific Gravity": "1.50 - 1.80 g/cm³",
      "Tensile Strength": "70 - 110 MPa (ASTM D638)",
      "Flexural Strength": "130 - 180 MPa (ASTM D790)",
      "Fire Rating": "Class 1 / Class A flame spread available upon client formulation",
      "Thermal Conductivity": "0.15 - 0.20 W/m·K (Highly insulating)",
      "Water Absorption": "< 0.25% (24 hrs at 23°C)"
    },
    dimensions: "Standard panel modules up to 3000mm x 1500mm; custom molded geometries up to 6000mm. Thickness: 4mm to 8mm nominal.",
    dimensionsAr: "مقاسات قياسية حتى 3000 مم × 1500 مم؛ وتشكيلات مخصصة تصل حتى 6000 مم. السماكة الاسمية: من 4 مم إلى 8 مم.",
    finishes: "Textured heritage sand finish, aged plaster effect, fluted grooved, or smooth isophthalic gelcoat in bespoke RAL colors.",
    finishesAr: "ملمس رملي تراثي، مظهر جصي معتق، تمويجات مخددة، أو طلاء جل كوت أملس بمختلف ألوان كود RAL.",
    fixingMethod: "Concealed structural aluminum or hot-dip galvanized / SS316 sub-frame bracket assembly with thermal expansion allowances.",
    fixingMethodAr: "نظام تثبيت مخفي بمرابط ألمنيوم إنشائية أو فولاذ مجلفن بالغمس الساخن / ستانلس ستيل SS316 مع فواصل تمدد حراري مدروسة."
  },
  {
    id: "grp-pillar-covers",
    sku: "GFM-GRP-COL-02",
    name: "GRP Architectural Pillar & Column Covers",
    nameAr: "أغطية وتكسيات الأعمدة المعمارية من الفيبرجلاس (GRP)",
    category: "pillars",
    categoryName: "Pillar Covers",
    categoryNameAr: "أغطية الأعمدة",
    status: "Proposed",
    statusBadge: "Proposed Benchmark",
    featured: true,
    image: "images/prod-pillar.jpg",
    cadImage: "images/prod-pillar-covers.svg",
    highlights: [
      { label: "Weight vs Precast", labelAr: "مقارنة الوزن بالخرسانة", value: "8 - 12 kg/m (-80%)", icon: "feather" },
      { label: "Barcol Hardness", labelAr: "صلادة باركول", value: "45 - 50 (ASTM D2583)", icon: "shield" },
      { label: "Operating Temp", labelAr: "درجات حرارة التشغيل", value: "-20°C to +80°C", icon: "thermometer" },
      { label: "Impact Energy", labelAr: "مقاومة الصدمات", value: "> 25 kJ/m² (Charpy)", icon: "zap" }
    ],
    shortDesc: "Precision two-piece and four-piece interlocking GRP column cladding systems for interior and exterior architectural columns.",
    shortDescAr: "أنظمة تكسية وتغليف أعمدة من الفيبرجلاس بتعشيق دقيق (نصفين أو أربعة أجزاء) للأعمدة المعمارية الداخلية والخارجية.",
    fullDesc: "Designed to provide flawless cylindrical, square, or fluted column wraps around structural steel or concrete columns. Features factory-integrated joint returns and concealed mechanical fastening tabs that create clean, seamless architectural sightlines without visible screws. Impervious to moisture, floor-cleaning chemicals, and impact wear.",
    fullDescAr: "مصممة لتوفير تغليف أسطواني أو مربع أو مخدد حول الأعمدة الخرسانية أو الفولاذية الإنشائية. تتميز بفواصل تعشيق مصنعية مخفية ومرابط تثبيت داخلية تضمن مظهرًا معماريًا نقيًا دون مسامير ظاهرة، مع مقاومة كاملة للرطوبة والصدمات.",
    applications: [
      "Shopping mall and retail atriums",
      "Airport and railway transit concourses",
      "Commercial office tower reception lobbies",
      "Exterior shaded colonnades and hotel porticos"
    ],
    applicationsAr: [
      "بهو المجمعات التجارية والمولات",
      "صالات المطارات ومحطات القطار",
      "مداخل وردهات الأبراج المكتبية",
      "الممرات المظللة ومداخل الفنادق"
    ],
    specifications: {
      "Resin Matrix": "High-grade orthophthalic or isophthalic resin",
      "Reinforcement": "High-tensile E-glass continuous filament",
      "Impact Resistance": "> 25 kJ/m² (Charpy unnotched)",
      "Barcol Hardness": "45 - 50 (ASTM D2583)",
      "Service Temperature": "-20°C to +80°C continuous",
      "Weight Comparison": "Approx. 8-12 kg/m linear (vs 65 kg for precast)"
    },
    dimensions: "Internal diameters from Ø300mm to Ø1800mm; standard heights up to 4000mm per segment with concealed stacking joints.",
    dimensionsAr: "أقطار داخلية تبدأ من Ø300 مم إلى Ø1800 مم؛ ارتفاعات قياسية حتى 4000 مم للقطعة الواحدة مع فواصل تركيب مخفية.",
    finishes: "High-gloss mirror gelcoat, matte satin, metallic mica effect, or architectural travertine imitation.",
    finishesAr: "طلاء جل كوت عالي اللمعان، مطفي حريري، تأثير بريق الميكا المعدني، أو محاكاة حجر الترافرتين الطبيعي.",
    fixingMethod: "Internal clamp rings, galvanized steel framing collars, and elastomeric adhesive gasketed joint lines.",
    fixingMethodAr: "أطواق وحلقات تثبيت داخلية، أطواق تأطير فولاذية مجلفنة، وفواصل حشو مطاطية مانعة للاهتزاز."
  },
  {
    id: "grp-facade-elements",
    sku: "GFM-GRP-FAC-03",
    name: "GRP 3D Facade & Mashrabiya Sunshade Screens",
    nameAr: "عناصر الواجهات ثلاثية الأبعاد وشاشات المشربية (GRP)",
    category: "facade",
    categoryName: "Building Façade Elements",
    categoryNameAr: "عناصر الواجهات",
    status: "Proposed",
    statusBadge: "Proposed Benchmark",
    featured: true,
    image: "images/prod-facade.jpg",
    cadImage: "images/prod-facade-3d.svg",
    highlights: [
      { label: "Wind Load Rating", labelAr: "مقاومة الرياح", value: "Up to 3.5 kPa", icon: "shield" },
      { label: "Thermal Stability", labelAr: "الثبات الحراري", value: "20-25 × 10⁻⁶ /°C", icon: "thermometer" },
      { label: "UV Color Shift", labelAr: "تغير اللون بالأشعة", value: "Delta E < 1.5", icon: "sun" },
      { label: "Digital Tooling", labelAr: "النمذجة الرقمية", value: "Full CAD/BIM Ready", icon: "feather" }
    ],
    shortDesc: "Custom three-dimensional parametric facade panels and geometric sun-shading mashrabiya elements engineered for modern Saudi architecture.",
    shortDescAr: "ألواح واجهات ثلاثية الأبعاد وشاشات مشربية هندسية لحجب أشعة الشمس، مصممة للمشاريع المعمارية الحديثة في المملكة.",
    fullDesc: "Combining digital tooling and composite engineering, these 3D facade panels enable architects to realize complex undulating geometries, deep shadows, and intricate Islamic geometric perforations. GRP's exceptional tensile-to-weight ratio allows deep cantilevered geometric profiles without imposing heavy structural framing requirements.",
    fullDescAr: "من خلال الجمع بين النمذجة الرقمية وهندسة المركبات، تتيح هذه الألواح ثلاثية الأبعاد تنفيذ أشكال معقدة وتموجات ونقوش إسلامية مفرغة بدقة متناهية، مع توفير عزل حراري وتقليل استهلاك طاقة التكييف.",
    applications: [
      "Signature commercial and corporate headquarters",
      "Hospitality facades and luxury resort pavilions",
      "Solar shading envelope screens (Mashrabiya)",
      "High-rise architectural crown features"
    ],
    applicationsAr: [
      "واجهات المقرات الرئيسية والأبراج التجارية",
      "المنتجعات السياحية والمباني الفندقية الفاخرة",
      "كواسر الشمس وشاشات التظليل المعمارية",
      "تيجان ونهايات الأبراج المعمارية"
    ],
    specifications: {
      "Resin Matrix": "Fire-retardant isophthalic or vinyl ester composite",
      "Reinforcement": "Biaxial and triaxial engineered glass fabrics",
      "Wind Load Resistance": "Engineered up to 3.5 kPa static & gust pressure",
      "UV Degradation": "Delta E < 1.5 after 3,000 hrs QUV accelerated testing",
      "Thermal Expansion": "20 - 25 x 10⁻⁶ m/m/°C (Compatible with building substructures)"
    },
    dimensions: "Custom engineered to project BIM/CAD models. Typical modules: 1200 x 2400mm, 1500 x 3000mm, or bespoke single-piece units up to 4500mm.",
    dimensionsAr: "هندسة مخصصة تطابق نماذج BIM/CAD للمشروع. المقاسات النموذجية: 1200 × 2400 مم، 1500 × 3000 مم، أو قطع منفردة حتى 4500 مم.",
    finishes: "Architectural matte, micro-textured, high solar reflectance index (SRI) coatings to minimize heat absorption.",
    finishesAr: "تشطيب مطفي معماري، ملمس ميكروي ناعم، طلاءات ذات مؤشر انعكاس شمسي مرتفع (SRI) لتقليل امتصاص الحرارة.",
    fixingMethod: "Engineered three-way adjustable bracket assemblies anchoring to reinforced concrete slabs or primary steel framework.",
    fixingMethodAr: "مرابط ثلاثية المحاور قابلة للضبط الهندسي تثبت في بلاطات الخرسانة المسلحة أو الهياكل الفولاذية الرئيسية."
  },
  {
    id: "grp-canopies-underpass",
    sku: "GFM-GRP-CAN-04",
    name: "GRP Architectural Canopies & Underpass Wall Cladding",
    nameAr: "المظلات المعمارية وتكسيات جدران الأنفاق من الفيبرجلاس (GRP)",
    category: "canopies",
    categoryName: "Canopies & Infrastructure",
    categoryNameAr: "المظلات والأنفاق",
    status: "Proposed",
    statusBadge: "Proposed Benchmark",
    featured: true,
    image: "images/prod-canopy.jpg",
    cadImage: "images/prod-canopies-underpass.svg",
    highlights: [
      { label: "Tensile Modulus", labelAr: "معامل المرونة والشد", value: "8,000 - 11,000 MPa", icon: "shield" },
      { label: "Anti-Graffiti Coat", labelAr: "حماية من الكتابة", value: "Hydrophobic Gelcoat", icon: "feather" },
      { label: "Chemical Resistance", labelAr: "مقاومة الكيماويات", value: "Salts & Exhaust Gas", icon: "sun" },
      { label: "Acoustics", labelAr: "عزل صوتي متقدم", value: "Sound-Absorbing Core", icon: "zap" }
    ],
    shortDesc: "Vibration-proof, acoustic-dampening GRP wall panels for vehicular underpasses and cantilevered architectural entrance canopies.",
    shortDescAr: "ألواح جدارية مقاومة للاهتزازات والغازات للأنفاق المرورية، ومظلات معمارية كابولية مقاومة لعوامل الجو لمداخل المباني.",
    fullDesc: "Specially formulated to withstand the rigorous demands of civil infrastructure: constant vehicular exhaust gases, sulfur dioxide, acoustic road vibration, and extreme washdown pressure. Features integrated polyurethane core options for sound absorption and anti-graffiti surface chemistry allowing effortless maintenance.",
    fullDescAr: "مصممة خصيصًا لتلبية المتطلبات الصارمة لمشاريع البنية التحتية: مقاومة عوادم السيارات، ثاني أكسيد الكبريت، الاهتزازات الصوتية، ومقاومة الغسيل بالضغط العالي، مع خيارات العزل الصوتي وحماية الأسطح من الكتابة والتشويه.",
    applications: [
      "Highway vehicular tunnels and underpasses",
      "Metro station platform wall cladding",
      "Commercial building entrance cantilever canopies",
      "Covered pedestrian walkways and bridge soffits"
    ],
    applicationsAr: [
      "أنفاق الطرق السريعة وممرات المركبات السفلية",
      "تكسيات جدران محطات المترو والسكك الحديدية",
      "مظلات المداخل الكابولية للمباني الإدارية",
      "ممرات المشاة المغطاة وأسقف الجسور"
    ],
    specifications: {
      "Core Material": "Solid laminate or fire-resistant polyisocyanurate / balsa core",
      "Chemical Resistance": "Resistant to salts, hydrocarbons, dilute acids, and alkaline wash solutions",
      "Acoustic Properties": "Available with micro-perforated sound absorbing backing",
      "Tensile Modulus": "8,000 - 11,000 MPa",
      "Surface Maintenance": "Anti-graffiti hydrophobic gelcoat formulation"
    },
    dimensions: "Interlocking tongue-and-groove or gasketed reveal joints. Standard panel lengths up to 4500mm; widths 600mm - 1200mm.",
    dimensionsAr: "تعشيق بنظام اللسان والأخدود أو فواصل مغلقة بالحشيات. أطوال قياسية حتى 4500 مم وعرض 600 مم - 1200 مم.",
    finishes: "Semi-gloss traffic white, light reflective concrete grey, or anti-glare satin finish.",
    finishesAr: "أبيض مروري نصف لامع، رمادي خرساني عاكس للإضاءة، أو لمسة حريرية مانعة للتوهج.",
    fixingMethod: "Stainless steel grade 316 concealed mechanical brackets engineered for cyclic acoustic suction pressures.",
    fixingMethodAr: "مرابط ميكانيكية مخفية من الفولاذ المقاوم للصدأ SS316 مصممة لمقاومة ضغوط السحب الصوتية والهوائية المتكررة."
  },
  {
    id: "grp-sectional-water-tanks",
    sku: "GFM-GRP-TNK-05",
    name: "GRP Sectional Panel Water Storage Tanks",
    nameAr: "خزانات المياه المقطعية من ألواح الفيبرجلاس (GRP Panel Tanks)",
    category: "containment",
    categoryName: "Containment & Storage",
    categoryNameAr: "خزانات السوائل والتخزين",
    status: "Proposed",
    statusBadge: "Proposed Benchmark",
    featured: true,
    image: "images/prod-tank.jpg",
    cadImage: "images/prod-water-tanks.svg",
    highlights: [
      { label: "Storage Range", labelAr: "نطاق السعات", value: "1,000L - 5,000,000L+", icon: "feather" },
      { label: "Hygiene Compliance", labelAr: "مطابقة الاشتراطات الصحية", value: "WRAS / SASO Certified", icon: "shield" },
      { label: "Tie Rod Material", labelAr: "مادة الشدادات الداخلية", value: "SS316 Stainless Steel", icon: "sun" },
      { label: "Thermal Insulation", labelAr: "العزل الحراري", value: "PU Injected Sandwich", icon: "thermometer" }
    ],
    shortDesc: "Hot-pressed SMC and vacuum-molded GRP sectional panel tanks for hygienic potable water, irrigation, and firefighting reserves.",
    shortDescAr: "خزانات مياه مقطعية بنظام الألواح المضغوطة لتخزين مياه الشرب النظيفة واحتياطيات مكافحة الحريق والري.",
    fullDesc: "Engineered in strict accordance with international liquid storage standards. The modular panel system allows tanks to be configured into virtually any capacity (from 1,000 liters to over 5,000,000 liters) within restricted basements, rooftops, or remote civil project locations. Features non-toxic WRAS/SASO compliant gelcoat linings that prevent algae growth and bacteria colonization.",
    fullDescAr: "تمت هندستها وفق أعلى المعايير الدولية لتخزين السوائل. يتيح نظام الألواح المقطعية تركيب خزانات بسعات تبدأ من 1,000 لتر وتتجاوز 5,000,000 لتر في الأقبية أو فوق الأسطح مع حماية كاملة من الطحالب والبكتيريا.",
    applications: [
      "Potable municipal water storage for commercial towers",
      "Dedicated civil defense fire-fighting water reservoirs",
      "Agricultural irrigation and treated effluent containment",
      "Industrial process cooling water buffers"
    ],
    applicationsAr: [
      "تخزين مياه الشرب للأبراج السكنية والتجارية",
      "خزانات احتياطي مكافحة الحريق المعتمدة",
      "خزانات مشاريع الري والزراعة",
      "تخزين مياه التبريد في المنشآت الصناعية"
    ],
    specifications: {
      "Panel Modules": "1000 x 1000mm, 1000 x 500mm, 500 x 500mm",
      "Panel Fabrication": "Hot-press Sheet Molding Compound (SMC) or RTM",
      "Internal Reinforcement": "Stainless Steel SS316 internal tie rods and stays",
      "External Stiffening": "Hot-dip galvanized structural external steel frames",
      "Sealing Compound": "Food-grade non-hardening synthetic elastomeric gasket tape",
      "Thermal Insulation": "Optional 25mm - 50mm injected polyurethane insulated sandwich panels"
    },
    dimensions: "Configurable in 0.5m and 1.0m dimensional increments. Depths from 1.0m to 4.0m.",
    dimensionsAr: "قابلة للتشكيل بزيادات قياسية 0.5م و1.0م. الأعماق من 1.0م إلى 4.0م.",
    finishes: "UV-treated exterior desert beige or slate grey; smooth mirror-like interior food-grade surface.",
    finishesAr: "معالجة خارجية ضد الأشعة فوق البنفسجية بلون بيج صحراوي أو رمادي؛ وسطح داخلي أملس صحي عالي النقاء.",
    fixingMethod: "Bolted external flange system assembled on concrete plinth foundation.",
    fixingMethodAr: "نظام شفاه خارجية مثبتة بالبراغي يتم تجميعها فوق قواعد خرسانية مسلحة."
  },
  {
    id: "grp-custom-fabrication",
    sku: "GFM-GRP-CST-06",
    name: "Custom Engineered GRP Fabrications & Mouldings",
    nameAr: "التصنيع والتطويع الهندسي المخصص للفيبرجلاس (Custom GRP)",
    category: "industrial",
    categoryName: "Custom Engineering",
    categoryNameAr: "الهندسة المخصصة",
    status: "Proposed",
    statusBadge: "Proposed Benchmark",
    featured: true,
    image: "images/prod-custom.jpg",
    cadImage: "images/prod-custom-fabrication.svg",
    highlights: [
      { label: "Pattern Tooling", labelAr: "دقة تصنيع القوالب", value: "High-Precision CNC", icon: "feather" },
      { label: "Resin Chemistry", labelAr: "أنظمة الراتنجات", value: "Vinylester & Epoxy", icon: "shield" },
      { label: "QA Protocol", labelAr: "مراقبة الجودة", value: "Ultrasonic & Barcol", icon: "sun" },
      { label: "Reinforcements", labelAr: "التدعيمات المتقدمة", value: "Carbon & Multi-Axial", icon: "zap" }
    ],
    shortDesc: "Turnkey mould design, pattern making, prototyping, and bespoke composite fabrication based on client CAD/BIM models.",
    shortDescAr: "تصميم وتصنيع قوالب مخصصة، إنتاج نماذج أولية وتطويع قطع ومركبات غير نمطية وفق مخططات العميل الهندسية.",
    fullDesc: "Gulf Fiber and Metal's engineering team works directly with contractors, structural consultants, and industrial clients to convert custom concepts into durable composite reality. From complex architectural sculptures to chemical plant vessel shrouds and transit fairings, we handle precision pattern machining, mould fabrication, structural finite-element considerations, and finished component delivery.",
    fullDescAr: "يتعاون فريقنا الهندسي مع المقاولين والاستشاريين لتحويل المخططات المبتكرة إلى منتجات مركبة متينة. من المنحوتات المعمارية الدقيقة إلى أغطية الآلات الصناعية المعقدة، مع ضمان الدقة الميكانيكية وجودة التشطيب.",
    applications: [
      "Custom industrial machinery enclosures and shrouds",
      "Specialized chemical storage basins and drip trays",
      "Architectural signature sculptures and branded monuments",
      "Aerodynamic transit, rail, and utility cowlings"
    ],
    applicationsAr: [
      "أغطية وهياكل الآلات والمعدات الصناعية",
      "أحواض احتواء الكيماويات وصواني التنقيط",
      "المجسمات والنصب المعمارية التذكارية",
      "هياكل عربات النقل ومعدات المرافق العامة"
    ],
    specifications: {
      "Fabrication Methods": "Hand lay-up, spray lamination, vacuum bagging, resin infusion",
      "Tooling Capabilities": "Precision CNC pattern cutting, high-density tooling boards, composite master moulds",
      "Reinforcements": "Carbon fiber, aramid (Kevlar), hybrid weaves, multi-axial E-glass",
      "Resin Systems": "Vinylester, Epoxy, Phenolic, Fire-retardant resins",
      "Quality Assurance": "Ultrasonic thickness measurement, Barcol hardness verification, dimensional inspection"
    },
    dimensions: "Bespoke dimensions matching client engineering drawings and site clearances.",
    dimensionsAr: "مقاسات مخصصة بالكامل وفق المخططات الهندسية المعتمدة للعميل واشتراطات الموقع.",
    finishes: "Choice of custom gelcoats, polyurethane spray coatings, automotive-grade finishes, or conductive linings.",
    finishesAr: "خيارات متعددة من الجل كوت المخصص، طلاءات البولي يوريثان، تشطيبات المعايير الفائقة، أو البطانات المقاومة للمواد الكيميائية.",
    fixingMethod: "Engineered integral composite flanges, embedded steel inserts, or structural bonding.",
    fixingMethodAr: "شفاه مدمجة مصنعيًا من الألياف المركبة، صفائح فولاذية مغمورة، أو أنظمة تثبيت ولحام كيميائي إنشائي."
  }
];

// Product Category Metadata
const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products & Solutions", nameAr: "جميع المنتجات والحلول", count: 6 },
  { id: "cladding", name: "Architectural Cladding", nameAr: "التكسيات المعمارية", count: 1 },
  { id: "pillars", name: "Pillar & Column Covers", nameAr: "أغطية الأعمدة", count: 1 },
  { id: "facade", name: "3D Facade & Screens", nameAr: "عناصر الواجهات", count: 1 },
  { id: "canopies", name: "Canopies & Infrastructure", nameAr: "المظلات والأنفاق", count: 1 },
  { id: "containment", name: "Liquid Storage Tanks", nameAr: "خزانات السوائل", count: 1 },
  { id: "industrial", name: "Custom GRP Fabrication", nameAr: "الهندسة المخصصة", count: 1 }
];
