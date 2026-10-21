import glob, re

html_files = glob.glob('*.html') + glob.glob('metals-and-fibres-website/*.html')
for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = re.findall(r'class="[^"]*reveal-up-[^"]*"', content)
    if matches:
        print(f'{fpath}: found corrupt classes:', matches[:10])
    matches_scale = re.findall(r'class="[^"]*reveal-scale-[^"]*"', content)
    if matches_scale:
        print(f'{fpath}: found corrupt scale classes:', matches_scale[:10])
