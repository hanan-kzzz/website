import os, re

def update_file(path, replacements):
    if not os.path.exists(path):
        return
    txt = open(path, encoding='utf-8').read()
    orig = txt
    for old, new in replacements:
        txt = txt.replace(old, new)
    if txt != orig:
        open(path, 'w', encoding='utf-8').write(txt)
        print(f"Updated animations in: {path}")
    else:
        print(f"No changes made to: {path}")

# 1. ABOUT.HTML
about_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="metrics-strip">', '<div class="metrics-strip reveal-up">'),
    ('<div class="grid-2" style="align-items: start; gap: 3rem;">', '<div class="grid-2 reveal-up" style="align-items: start; gap: 3rem;">'),
    ('<div class="philosophy-grid">', '<div class="philosophy-grid stagger-grid">'),
    ('<div class="philosophy-card">', '<div class="philosophy-card reveal-up">'),
    ('<div class="advantage-grid">', '<div class="advantage-grid stagger-grid">'),
    ('<div class="advantage-card">', '<div class="advantage-card reveal-up">'),
    ('<div class="grid-3">', '<div class="grid-3 stagger-grid">'),
    ('<div class="value-card', '<div class="value-card reveal-up'),
    ('<div class="governance-card">', '<div class="governance-card reveal-scale">')
]

# 2. PRODUCTS.HTML
products_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="governance-notice">', '<div class="governance-notice reveal-up">'),
    ('<div class="catalogue-controls-wrapper">', '<div class="catalogue-controls-wrapper reveal-up">'),
    ('<div class="grid-3 catalogue-grid" id="catalogueGrid">', '<div class="grid-3 catalogue-grid stagger-grid" id="catalogueGrid">'),
    ('<div class="cta-card">', '<div class="cta-card reveal-scale">')
]

# 3. PRODUCT-DETAIL.HTML
detail_replacements = [
    ('<div class="breadcrumb-strip">', '<div class="breadcrumb-strip reveal-up">'),
    ('<div class="grid-2" style="align-items: start; gap: 3rem;">', '<div class="grid-2" style="align-items: start; gap: 3rem;">\n        <div class="reveal-left">'),
    ('<div class="product-detail-info">', '</div>\n        <div class="product-detail-info reveal-right">'),
    ('<div class="specs-table-wrap">', '<div class="specs-table-wrap reveal-up">'),
    ('<div class="grid-3" id="relatedProductsGrid">', '<div class="grid-3 stagger-grid" id="relatedProductsGrid">')
]

# 4. INDUSTRIES.HTML
industries_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="grid-2" style="align-items: center; margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid #E2E8F0;">',
     '<div class="grid-2 reveal-up" style="align-items: center; margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid #E2E8F0;">'),
    ('<div class="grid-2" style="align-items: center;">',
     '<div class="grid-2 reveal-up" style="align-items: center;">'),
    ('<div class="industry-card">', '<div class="industry-card reveal-up">')
]

# 5. MANUFACTURING.HTML
mfg_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="mfg-facility-tags">', '<div class="mfg-facility-tags reveal-up">'),
    ('<div class="mfg-steps-container">', '<div class="mfg-steps-container stagger-grid">'),
    ('<div class="mfg-step-card">', '<div class="mfg-step-card reveal-up">'),
    ('<div class="grid-2">', '<div class="grid-2 stagger-grid">'),
    ('<div class="mfg-material-card">', '<div class="mfg-material-card reveal-up">'),
    ('<div class="table-responsive">', '<div class="table-responsive reveal-up">'),
    ('<div class="cta-card">', '<div class="cta-card reveal-scale">')
]

# 6. PROJECTS.HTML
projects_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="project-filters">', '<div class="project-filters reveal-up">'),
    ('<div class="grid-3">', '<div class="grid-3 stagger-grid">'),
    ('<div class="project-card">', '<div class="project-card reveal-up">'),
    ('<article class="project-card">', '<article class="project-card reveal-up">'),
    ('<div class="cta-card">', '<div class="cta-card reveal-scale">')
]

# 7. QUOTE.HTML
quote_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="quote-form-container">', '<div class="quote-form-container reveal-left">'),
    ('<div class="quote-summary-sidebar">', '<div class="quote-summary-sidebar reveal-right">'),
    ('<div class="grid-2" style="align-items: start; gap: 3.5rem;">', '<div class="grid-2" style="align-items: start; gap: 3.5rem;">\n        <div class="reveal-left">'),
    ('<div class="quote-sidebar-card">', '<div class="quote-sidebar-card reveal-right">')
]

# 8. CONTACT.HTML
contact_replacements = [
    ('<div class="page-hero-header">', '<div class="page-hero-header reveal-up">'),
    ('<div class="contact-channels-grid">', '<div class="contact-channels-grid stagger-grid">'),
    ('<div class="channel-card">', '<div class="channel-card reveal-up">'),
    ('<div class="contact-form-wrap">', '<div class="contact-form-wrap reveal-left">'),
    ('<div class="contact-sidebar-info">', '<div class="contact-sidebar-info reveal-right">'),
    ('<div class="maps-showcase-section">', '<div class="maps-showcase-section reveal-scale">'),
    ('<div class="maps-grid-split">', '<div class="maps-grid-split reveal-scale">')
]

dirs = ['', 'metals-and-fibres-website/']

for d in dirs:
    update_file(d + 'about.html', about_replacements)
    update_file(d + 'products.html', products_replacements)
    update_file(d + 'product-detail.html', detail_replacements)
    update_file(d + 'industries.html', industries_replacements)
    update_file(d + 'manufacturing.html', mfg_replacements)
    update_file(d + 'projects.html', projects_replacements)
    update_file(d + 'quote.html', quote_replacements)
    update_file(d + 'contact.html', contact_replacements)

# Also update catalogue.js so dynamically rendered product cards get reveal-up and trigger animations
catalogue_files = ['js/catalogue.js', 'metals-and-fibres-website/js/catalogue.js']
for cat_file in catalogue_files:
    if os.path.exists(cat_file):
        c_txt = open(cat_file, encoding='utf-8').read()
        if 'class="product-card reveal-up"' not in c_txt:
            c_txt = c_txt.replace('class="product-card"', 'class="product-card reveal-up"')
            # At the end of renderProducts, trigger initScrollAnimations if defined
            if 'initScrollAnimations' not in c_txt:
                c_txt = c_txt.replace(
                    'catalogueContainer.innerHTML = filtered.map(prod => `',
                    'catalogueContainer.innerHTML = filtered.map(prod => `'
                )
                render_end = 'catalogueContainer.innerHTML = filtered.map(prod => `'
                c_txt = c_txt.replace(
                    'catalogueContainer.innerHTML = filtered.map',
                    'setTimeout(() => { if (typeof initScrollAnimations === "function") initScrollAnimations(); }, 50);\n    catalogueContainer.innerHTML = filtered.map'
                )
            open(cat_file, 'w', encoding='utf-8').write(c_txt)
            print(f'Updated dynamic card animations in {cat_file}')

print('All pages successfully updated with scroll reveal & component animations.')
