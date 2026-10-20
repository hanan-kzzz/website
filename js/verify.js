const fs = require('fs');
const path = require('path');

console.log('--- GULF FIBER & METAL WEBSITE ASSET INTEGRITY AUDIT ---');

const htmlFiles = [
  'index.html',
  'about.html',
  'products.html',
  'product-detail.html',
  'industries.html',
  'projects.html',
  'manufacturing.html',
  'contact.html',
  'quote.html'
];

let errors = 0;

// 1. Verify HTML pages exist
htmlFiles.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error('ERROR: Missing HTML file:', f);
    errors++;
  } else {
    console.log('✓ Found page:', f, `(${fs.statSync(f).size} bytes)`);
  }
});

// 2. Verify all referenced product images in products-data.js
const productsData = fs.readFileSync('js/products-data.js', 'utf8');
const imageMatches = productsData.match(/image:\s*"([^"]+)"/g) || [];

imageMatches.forEach(entry => {
  const imgPath = entry.split('"')[1];
  if (!fs.existsSync(imgPath)) {
    console.error('ERROR: Referenced image not found:', imgPath);
    errors++;
  } else {
    console.log('✓ Product Photo verified:', imgPath, `(${fs.statSync(imgPath).size} bytes)`);
  }
});

// 3. Verify newly generated realistic hero and product photographs
const realisticPhotos = [
  'images/hero-cladding.jpg',
  'images/hero-factory.jpg',
  'images/prod-cladding.jpg',
  'images/prod-pillar.jpg',
  'images/prod-facade.jpg',
  'images/prod-tank.jpg',
  'images/prod-canopy.jpg',
  'images/prod-custom.jpg'
];

realisticPhotos.forEach(p => {
  if (!fs.existsSync(p)) {
    console.error('ERROR: Missing realistic photo:', p);
    errors++;
  } else {
    console.log('✓ Generated Photo verified:', p, `(${fs.statSync(p).size} bytes)`);
  }
});

// 4. Verify CSS & JS assets
const criticalAssets = [
  'css/main.css',
  'css/rtl.css',
  'js/products-data.js',
  'js/i18n.js',
  'js/main.js',
  'js/catalogue.js',
  'js/product-detail.js',
  'js/forms.js',
  'images/logo.svg',
  'images/logo-nahas-malee.jpg',
  'robots.txt',
  'sitemap.xml',
  'docs/deployment-guide.md',
  'docs/missing-information-checklist.md',
  'docs/research-audit.md'
];

criticalAssets.forEach(a => {
  if (!fs.existsSync(a)) {
    console.error('ERROR: Missing asset:', a);
    errors++;
  } else {
    console.log('✓ Core Asset verified:', a);
  }
});

console.log('--- AUDIT RESULT ---');
if (errors === 0) {
  console.log('ALL CHECKS PASSED: 0 errors detected. Realistic photography and layout active!');
} else {
  console.error(`FAILED: ${errors} errors detected.`);
}
