import os

for path in ['about.html', 'metals-and-fibres-website/about.html']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Exact string cleanup
    target = """          Saudi Vision 2030 Local Content &bull; Riyadh Industrial Plant
        </span>
"""
    if target in c:
        c = c.replace(target, '')
    else:
        # Check alternate line endings
        lines = c.splitlines()
        new_lines = []
        skip = False
        for l in lines:
            if 'Saudi Vision 2030 Local Content' in l:
                continue
            if l.strip() == '</span>' and (len(new_lines) > 0 and 'hero-breadcrumb' in new_lines[-1] or (len(new_lines) > 1 and 'Corporate Profile' in new_lines[-1])):
                continue
            new_lines.append(l)
        c = '\n'.join(new_lines) + '\n'

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Cleaned {path}")
