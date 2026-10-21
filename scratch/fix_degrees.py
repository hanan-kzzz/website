import os

for root, dirs, files in os.walk('.'):
    if '.git' in root: continue
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(root, f)
            txt = open(p, encoding='utf-8', errors='ignore').read()
            if '55C' in txt or '55ï¿½C' in txt:
                fixed = txt.replace('55C', '55°C').replace('55ï¿½C', '55°C')
                open(p, 'w', encoding='utf-8').write(fixed)
                print(f'Fixed degree symbol in {p}')
