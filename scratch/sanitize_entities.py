import os

for path in ['about.html', 'metals-and-fibres-website/about.html']:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    
    # Replace any en-dashes or degree symbols or smart quotes with HTML entities
    c = c.replace('15–20 kg/m² vs 120 kg/m²', '15&ndash;20 kg/m&sup2; vs 120 kg/m&sup2;')
    c = c.replace('1520 kg/m vs 120 kg/m', '15&ndash;20 kg/m&sup2; vs 120 kg/m&sup2;')
    c = c.replace('55°C', '55&deg;C')
    c = c.replace('55C', '55&deg;C')
    c = c.replace('Commercial Envelopes — Riyadh', 'Commercial Envelopes &bull; Riyadh')
    c = c.replace('Commercial Envelopes  Riyadh', 'Commercial Envelopes &bull; Riyadh')
    c = c.replace('Sun — Thu: 8:00 AM — 5:30 PM', 'Sun &ndash; Thu: 8:00 AM &ndash; 5:30 PM')
    c = c.replace('Sun  Thu: 8:00 AM  5:30 PM', 'Sun &ndash; Thu: 8:00 AM &ndash; 5:30 PM')
    c = c.replace('Kingdom’s', 'Kingdom&rsquo;s')
    c = c.replace('Kingdoms', 'Kingdom&rsquo;s')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Sanitized entities in {path}")
