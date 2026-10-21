with open('css/rtl.css', 'r', encoding='utf-8') as f:
    content = f.read()

target = """[dir="rtl"] .mobile-nav-drawer {
  transform: translateX(100%);
  left: 0;
  right: 0;
}

[dir="rtl"] .mobile-nav-drawer.open {
  transform: translateX(0);
}

[dir="rtl"] .mobile-nav-links .nav-link {
  border-left: none;
  border-right: 3px solid transparent;
}

[dir="rtl"] .mobile-nav-links .nav-link.active {
  border-right-color: #B91C1C;
}"""

replacement = """/* Mobile Drawer RTL */
[dir="rtl"] .mobile-nav-drawer {
  right: auto;
  left: 0;
  transform: translateX(-100%);
  box-shadow: 10px 0 35px rgba(15, 23, 42, 0.18);
}

[dir="rtl"] .mobile-nav-drawer.open {
  transform: translateX(0);
}

[dir="rtl"] .drawer-header {
  flex-direction: row-reverse;
}

[dir="rtl"] .drawer-brand {
  flex-direction: row;
}

[dir="rtl"] .drawer-brand .brand-info {
  text-align: right;
}

[dir="rtl"] .mobile-nav-item .item-arrow svg,
[dir="rtl"] .mobile-nav-links .nav-link .item-arrow svg {
  transform: rotate(180deg);
}

[dir="rtl"] .mobile-nav-item:hover .item-arrow,
[dir="rtl"] .mobile-nav-links .nav-link:hover .item-arrow {
  transform: translateX(-3px);
}

[dir="rtl"] .drawer-quote-btn,
[dir="rtl"] .mobile-nav-cta .btn-primary {
  flex-direction: row-reverse;
}

[dir="rtl"] .drawer-quote-btn .arrow-circle svg,
[dir="rtl"] .mobile-nav-cta .btn-primary svg {
  transform: rotate(180deg);
}

[dir="rtl"] .drawer-location-tag {
  direction: rtl;
  text-align: right;
}"""

if target not in content:
    print("Target not found in rtl.css!")
else:
    new_content = content.replace(target, replacement, 1)
    with open('css/rtl.css', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated css/rtl.css successfully!")
