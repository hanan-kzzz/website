with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '<section' in line or 'class="metrics-strip"' in line or '<header' in line or '<footer' in line:
        print(f"L{i+1}: {line.strip()[:80]}")
        # print next line or comment before
        for j in range(max(0, i-2), i):
            if '<!--' in lines[j]:
                print(f"   Comment: {lines[j].strip()}")
