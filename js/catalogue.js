/**
 * Gulf Fiber and Metal Company Limited - Product Catalogue Engine
 * Supports real-time category filtering, search input, count badges, and rich card interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const catalogueContainer = document.getElementById('catalogueGrid');
  const searchInput = document.getElementById('catalogueSearch');
  const searchClearBtn = document.getElementById('searchClear');
  const categoryContainer = document.getElementById('categoryPills');
  const resultsCounter = document.getElementById('resultsCount');

  let activeCategory = 'all';
  let searchQuery = '';

  // Calculate product counts per category
  function getCategoryCounts() {
    if (typeof PRODUCTS_DATA === 'undefined') return {};
    const counts = { all: PRODUCTS_DATA.length };
    PRODUCTS_DATA.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }

  // Render Category Filter Pills
  function renderCategoryPills() {
    if (!categoryContainer || typeof PRODUCT_CATEGORIES === 'undefined') return;
    const isAr = document.documentElement.lang === 'ar';
    const counts = getCategoryCounts();

    categoryContainer.innerHTML = PRODUCT_CATEGORIES.map(cat => {
      const count = counts[cat.id] || 0;
      return `
        <button type="button" class="filter-pill ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
          <span class="pill-text">${isAr ? cat.nameAr : cat.name}</span>
          <span class="pill-count">${count}</span>
        </button>
      `;
    }).join('');

    categoryContainer.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-cat');
        categoryContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts();
      });
    });
  }

  // Filter & Render Product Cards
  function renderProducts() {
    if (!catalogueContainer || typeof PRODUCTS_DATA === 'undefined') return;
    const isAr = document.documentElement.lang === 'ar';

    const filtered = PRODUCTS_DATA.filter(prod => {
      const matchCat = activeCategory === 'all' || prod.category === activeCategory;
      const searchTarget = (
        prod.name + ' ' + 
        prod.nameAr + ' ' + 
        prod.shortDesc + ' ' + 
        prod.shortDescAr + ' ' + 
        (prod.categoryName || '') + ' ' +
        (prod.specifications['Resin Matrix'] || '') + ' ' +
        (prod.specifications['Fire Rating'] || '')
      ).toLowerCase();
      const matchSearch = !searchQuery || searchTarget.includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    // Update results counter
    if (resultsCounter) {
      if (filtered.length === 0) {
        resultsCounter.innerHTML = isAr ? 'لا توجد منتجات مطابقة' : 'No products found';
      } else {
        resultsCounter.innerHTML = isAr
          ? `عرض <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'حل هندسي' : 'حلول هندسية'}`
          : `Showing <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'engineered solution' : 'engineered solutions'}`;
      }
    }

    // Toggle search clear button
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery ? 'inline-flex' : 'none';
    }

    if (filtered.length === 0) {
      catalogueContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <h3>${isAr ? 'لم يتم العثور على حلول مطابقة' : 'No matching solutions found'}</h3>
          <p>${isAr ? 'يرجى تجربة كلمات بحث أخرى أو اختيار تصنيف هندسي آخر.' : 'Try adjusting your search keywords or switching category filters.'}</p>
          <button type="button" class="btn-reset-filters" id="resetFiltersBtn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
            ${isAr ? 'إعادة ضبط الفلاتر' : 'Reset All Filters'}
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          renderCategoryPills();
          renderProducts();
        });
      }
      return;
    }

    catalogueContainer.innerHTML = filtered.map(prod => `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-img-wrap">
          <img src="${prod.image}" alt="${isAr ? prod.nameAr : prod.name}" loading="lazy">
          <div class="product-img-overlay"></div>
          <span class="badge ${prod.status === 'Verified' ? 'badge-verified' : 'badge-proposed'} card-floating-badge">
            <span class="badge-dot"></span>
            ${isAr ? (prod.status === 'Verified' ? 'معتمد' : 'معيار هندسي مقترح') : (prod.status === 'Verified' ? 'Verified' : 'Proposed Benchmark')}
          </span>
        </div>
        <div class="product-body">
          <div class="product-meta">
            <span class="product-category-tag">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"></circle></svg>
              ${isAr ? prod.categoryNameAr : prod.categoryName}
            </span>
          </div>
          <h3 class="product-title">
            <a href="product-detail.html?id=${prod.id}">${isAr ? prod.nameAr : prod.name}</a>
          </h3>
          <p class="product-desc">${isAr ? prod.shortDescAr : prod.shortDesc}</p>
          
          <div class="product-specs-preview">
            <div class="spec-row">
              <span class="spec-label">${isAr ? 'الراتنج الأساسي:' : 'Resin Matrix:'}</span>
              <span class="spec-val" title="${prod.specifications['Resin Matrix'] || prod.specifications['Resin Options'] || 'Isophthalic GRP'}">${prod.specifications['Resin Matrix'] || prod.specifications['Resin Options'] || 'Isophthalic GRP'}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">${isAr ? 'مقاومة الحريق:' : 'Fire Rating:'}</span>
              <span class="spec-val">${prod.specifications['Fire Rating'] || prod.specifications['Fire Class'] || 'Class A / Class 1'}</span>
            </div>
          </div>

          <div class="product-actions">
            <a href="product-detail.html?id=${prod.id}" class="btn-pill btn-pill-specs">
              <span>${isAr ? 'عرض المواصفات' : 'View Specs'}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="quote.html?product=${encodeURIComponent(prod.name)}" class="btn-pill btn-pill-quote">
              <span>${isAr ? 'طلب تسعيرة' : 'Request Quote'}</span>
              <span class="quote-arrow-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Search input event listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Clear search input
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      renderProducts();
    });
  }

  // Listen for language changes to re-render catalogue
  window.addEventListener('languageChanged', () => {
    renderCategoryPills();
    renderProducts();
  });

  // Initial render
  renderCategoryPills();
  renderProducts();
});
