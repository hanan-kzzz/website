import os

def fix_balance(path):
    if not os.path.exists(path): return
    txt = open(path, encoding='utf-8').read()
    
    if 'product-detail.html' in path:
        # Revert the extra wrapper
        txt = txt.replace(
            '<div class="grid-2" style="align-items: start; gap: 3rem;">\n        <div class="reveal-left">',
            '<div class="grid-2" style="align-items: start; gap: 3rem;">'
        )
        txt = txt.replace(
            '</div>\n        <div class="product-detail-info reveal-right">',
            '<div class="product-detail-info reveal-right">'
        )
        txt = txt.replace(
            '<div class="product-detail-gallery">',
            '<div class="product-detail-gallery reveal-left">'
        )

    if 'quote.html' in path:
        # Revert the extra wrapper
        txt = txt.replace(
            '<div class="grid-2" style="align-items: start; gap: 3.5rem;">\n        <div class="reveal-left">',
            '<div class="grid-2" style="align-items: start; gap: 3.5rem;">'
        )
        txt = txt.replace(
            '<div class="quote-form-container">',
            '<div class="quote-form-container reveal-left">'
        )
        txt = txt.replace(
            '<div class="quote-summary-sidebar">',
            '<div class="quote-summary-sidebar reveal-right">'
        )

    open(path, 'w', encoding='utf-8').write(txt)

for d in ['', 'metals-and-fibres-website/']:
    fix_balance(d + 'product-detail.html')
    fix_balance(d + 'quote.html')

print('Fixed div balance in product-detail.html and quote.html.')
