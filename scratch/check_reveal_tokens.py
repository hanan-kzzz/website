import glob, re

for fpath in glob.glob('*.html') + glob.glob('metals-and-fibres-website/*.html'):
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Check for any class containing "reveal" followed by a dash other than -up, -left, -right, -scale
    for m in re.finditer(r'class="([^"]*)"', content):
        cls_str = m.group(1)
        for token in cls_str.split():
            if 'reveal' in token and token not in ['reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale', 'reveal-fade']:
                print(f'{fpath}: unusual reveal token -> {token}')
