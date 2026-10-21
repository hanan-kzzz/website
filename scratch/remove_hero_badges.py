import os, re

for path in ['about.html', 'metals-and-fibres-website/about.html']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove page-hero-badge
    content = re.sub(
        r'\s*<span class="page-hero-badge">[\s\S]*?</span>',
        '',
        content
    )

    # 2. Remove hero-trust-pills
    content = re.sub(
        r'\s*<div class="hero-trust-pills">[\s\S]*?</div>',
        '',
        content
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Removed hero badge and pills from {path}")
