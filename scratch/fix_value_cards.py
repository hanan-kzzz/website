import os

for path in ['about.html', 'metals-and-fibres-website/about.html']:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = content.replace('class="value-card reveal-up-header"', 'class="value-card-header"')
        content = content.replace('class="value-card reveal-up-icon"', 'class="value-card-icon"')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully fixed {path}")
