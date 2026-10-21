import os

for path in ['css/rtl.css', 'metals-and-fibres-website/css/rtl.css']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    
    old_block = '''[dir="rtl"] .governance-card {
  border-left: 1px solid #E2E8F0;
  border-right: 4px solid #0284C7;
  border-radius: var(--radius-md) 0 0 var(--radius-md);
}'''

    new_block = '''[dir="rtl"] .governance-card {
  border-left: 1px solid #BAE6FD;
  border-right: 4px solid #0284C7;
  border-radius: 12px;
}'''

    if old_block in c:
        c = c.replace(old_block, new_block)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Updated {path}")
    else:
        print(f"Old block not found in {path}")
