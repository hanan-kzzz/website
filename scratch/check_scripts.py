import os, re

pages = ['about.html', 'products.html', 'product-detail.html', 'industries.html', 'manufacturing.html', 'projects.html', 'quote.html', 'contact.html']

for p in pages:
    if os.path.exists(p):
        txt = open(p, encoding='utf-8').read()
        scripts = re.findall(r'<script[^>]*src=["\']([^"\']*)["\']', txt)
        print(f'{p}: {scripts}')
