/**
 * Gulf Fiber and Metal Company Limited - Product Detail Page Renderer
 * Dynamically loads and presents comprehensive engineering specs based on URL param.
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'grp-traditional-cladding';

  function renderProductDetail() {
    if (typeof PRODUCTS_DATA === 'undefined') return;
    const isAr = document.documentElement.lang === 'ar';
    const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

    // Set Page Title
    document.title = `${isAr ? product.nameAr : product.name} | Gulf Fiber and Metal Co. Ltd.`;

    // Elements
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    const prodCategory = document.getElementById('prodCategory');
    const prodTitle = document.getElementById('prodTitle');
    const prodBadge = document.getElementById('prodBadge');
    const prodImage = document.getElementById('prodImage');
    const prodDesc = document.getElementById('prodDesc');
    const prodSpecsTable = document.getElementById('prodSpecsTable');
    const prodApplications = document.getElementById('prodApplications');
    const prodDimensions = document.getElementById('prodDimensions');
    const prodFinishes = document.getElementById('prodFinishes');
    const prodFixing = document.getElementById('prodFixing');
    const prodQuoteBtn = document.getElementById('prodQuoteBtn');

    if (breadcrumbCurrent) breadcrumbCurrent.textContent = isAr ? product.nameAr : product.name;
    if (prodCategory) prodCategory.textContent = isAr ? product.categoryNameAr : product.categoryName;
    if (prodTitle) prodTitle.textContent = isAr ? product.nameAr : product.name;
    
    if (prodBadge) {
      prodBadge.className = `badge ${product.status === 'Verified' ? 'badge-verified' : 'badge-proposed'}`;
      prodBadge.textContent = isAr ? (product.status === 'Verified' ? 'معتمد' : 'معيار مقترح') : (product.status === 'Verified' ? 'Verified Spec' : 'Proposed Benchmark');
    }

    if (prodImage) {
      prodImage.src = product.image;
      prodImage.alt = isAr ? product.nameAr : product.name;
    }

    if (prodDesc) prodDesc.textContent = isAr ? product.fullDescAr : product.fullDesc;

    // Render Specs Table
    if (prodSpecsTable) {
      prodSpecsTable.innerHTML = Object.entries(product.specifications).map(([key, val]) => `
        <tr>
          <th>${key}</th>
          <td><strong>${val}</strong></td>
        </tr>
      `).join('');
    }

    // Render Applications List
    if (prodApplications) {
      const apps = isAr ? product.applicationsAr : product.applications;
      prodApplications.innerHTML = apps.map(app => `
        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${app}</span>
        </li>
      `).join('');
    }

    if (prodDimensions) prodDimensions.textContent = product.dimensions;
    if (prodFinishes) prodFinishes.textContent = product.finishes;
    if (prodFixing) prodFixing.textContent = product.fixingMethod;

    if (prodQuoteBtn) {
      prodQuoteBtn.href = `quote.html?product=${encodeURIComponent(product.name)}`;
    }

    // Render Related Products
    const relatedContainer = document.getElementById('relatedProductsGrid');
    if (relatedContainer) {
      const related = PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 3);
      relatedContainer.innerHTML = related.map(rel => `
        <div class="product-card">
          <div class="product-img-wrap">
            <img src="${rel.image}" alt="${isAr ? rel.nameAr : rel.name}" loading="lazy">
          </div>
          <div class="product-body">
            <span class="product-category-tag">${isAr ? rel.categoryNameAr : rel.categoryName}</span>
            <h4 class="product-title" style="margin-top: 0.35rem; font-size: 1.05rem;">${isAr ? rel.nameAr : rel.name}</h4>
            <p class="product-desc" style="-webkit-line-clamp: 2;">${isAr ? rel.shortDescAr : rel.shortDesc}</p>
            <div class="product-actions" style="margin-top: auto;">
              <a href="product-detail.html?id=${rel.id}" class="btn-pill btn-pill-white" style="width: 100%; justify-content: center;">
                ${isAr ? 'تفاصيل المنتج' : 'View Specs'}
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  window.addEventListener('languageChanged', renderProductDetail);
  renderProductDetail();
});
