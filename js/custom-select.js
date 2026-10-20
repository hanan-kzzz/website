/**
 * Gulf Fiber and Metal Company Limited - Custom Select Dropdown
 * Transforms all native <select class="form-select"> elements into
 * beautifully styled, accessible custom dropdowns while keeping the
 * underlying <select> in sync for form submission and JS access.
 */

(function () {
  'use strict';

  function initCustomSelects() {
    const selects = document.querySelectorAll('select.form-select');
    selects.forEach((nativeSelect) => {
      // Skip if already initialized
      if (nativeSelect.closest('.custom-select-wrapper')) return;
      buildCustomSelect(nativeSelect);
    });
  }

  function buildCustomSelect(nativeSelect) {
    // ── Wrapper ──
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select-wrapper';

    // Insert wrapper right before the native select, then move select inside
    nativeSelect.parentNode.insertBefore(wrapper, nativeSelect);
    wrapper.appendChild(nativeSelect);

    // ── Trigger ──
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger';
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    if (nativeSelect.id) {
      trigger.setAttribute('aria-labelledby', nativeSelect.id);
    }

    const triggerText = document.createElement('span');
    triggerText.className = 'trigger-text';

    const triggerIcon = document.createElement('span');
    triggerIcon.className = 'trigger-icon';
    triggerIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 6 8 10 12 6"></polyline></svg>`;

    trigger.appendChild(triggerText);
    trigger.appendChild(triggerIcon);
    wrapper.appendChild(trigger);

    // ── Dropdown panel ──
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-select-dropdown';
    dropdown.setAttribute('role', 'listbox');
    wrapper.appendChild(dropdown);

    // Track the currently focused option index for keyboard nav
    let focusedIndex = -1;

    // ── Build options from <select> ──
    function populateOptions() {
      dropdown.innerHTML = '';
      const options = nativeSelect.options;

      for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        const item = document.createElement('div');
        item.className = 'custom-select-option';
        item.setAttribute('role', 'option');
        item.setAttribute('data-value', opt.value);
        item.setAttribute('data-index', i);
        item.textContent = opt.textContent;

        if (opt.disabled) {
          item.classList.add('is-disabled');
          item.setAttribute('aria-disabled', 'true');
        }

        if (opt.selected && !opt.disabled) {
          item.classList.add('is-selected');
          item.setAttribute('aria-selected', 'true');
        }

        item.addEventListener('click', () => {
          if (opt.disabled) return;
          selectOption(nativeSelect, i, trigger, triggerText, dropdown);
          closeDropdown(trigger, dropdown);
        });

        dropdown.appendChild(item);
      }

      // Set initial trigger text
      const selected = nativeSelect.options[nativeSelect.selectedIndex];
      if (selected) {
        triggerText.textContent = selected.textContent;
        if (selected.disabled || selected.value === '') {
          trigger.classList.add('is-placeholder');
        } else {
          trigger.classList.remove('is-placeholder');
        }
      }
    }

    populateOptions();

    // ── Open / Close ──
    function openDropdown() {
      trigger.classList.add('is-open');
      dropdown.classList.add('is-visible');
      trigger.setAttribute('aria-expanded', 'true');

      // Set focus to selected item
      const items = dropdown.querySelectorAll('.custom-select-option:not(.is-disabled)');
      focusedIndex = -1;
      items.forEach((item, idx) => {
        if (item.classList.contains('is-selected')) {
          focusedIndex = idx;
        }
      });

      // Scroll selected into view
      const selectedEl = dropdown.querySelector('.is-selected');
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }

    function closeDropdown() {
      trigger.classList.remove('is-open');
      dropdown.classList.remove('is-visible');
      trigger.setAttribute('aria-expanded', 'false');
      clearFocus();
      focusedIndex = -1;
    }

    function toggleDropdown() {
      if (dropdown.classList.contains('is-visible')) {
        closeDropdown();
      } else {
        // Close all other open dropdowns first
        document.querySelectorAll('.custom-select-dropdown.is-visible').forEach((d) => {
          const w = d.closest('.custom-select-wrapper');
          const t = w?.querySelector('.custom-select-trigger');
          if (t) {
            t.classList.remove('is-open');
            t.setAttribute('aria-expanded', 'false');
          }
          d.classList.remove('is-visible');
        });
        openDropdown();
      }
    }

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown();
    });

    // ── Keyboard Navigation ──
    trigger.addEventListener('keydown', (e) => {
      const items = dropdown.querySelectorAll('.custom-select-option:not(.is-disabled)');
      const isOpen = dropdown.classList.contains('is-visible');

      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (isOpen && focusedIndex >= 0 && items[focusedIndex]) {
            items[focusedIndex].click();
          } else {
            toggleDropdown();
          }
          break;

        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) {
            openDropdown();
          } else {
            focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
            updateFocus(items);
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          if (!isOpen) {
            openDropdown();
          } else {
            focusedIndex = Math.max(focusedIndex - 1, 0);
            updateFocus(items);
          }
          break;

        case 'Escape':
          e.preventDefault();
          closeDropdown();
          trigger.focus();
          break;

        case 'Tab':
          closeDropdown();
          break;

        case 'Home':
          if (isOpen) {
            e.preventDefault();
            focusedIndex = 0;
            updateFocus(items);
          }
          break;

        case 'End':
          if (isOpen) {
            e.preventDefault();
            focusedIndex = items.length - 1;
            updateFocus(items);
          }
          break;
      }
    });

    function updateFocus(items) {
      clearFocus();
      if (focusedIndex >= 0 && items[focusedIndex]) {
        items[focusedIndex].classList.add('is-focused');
        items[focusedIndex].scrollIntoView({ block: 'nearest' });
      }
    }

    function clearFocus() {
      dropdown.querySelectorAll('.is-focused').forEach((el) => el.classList.remove('is-focused'));
    }

    // ── Close on outside click ──
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        closeDropdown();
      }
    });

    // ── Watch for external changes to the native <select> ──
    // (e.g. forms.js setting selectedIndex from URL param)
    const observer = new MutationObserver(() => {
      syncFromNative(nativeSelect, trigger, triggerText, dropdown);
    });
    observer.observe(nativeSelect, { attributes: true, childList: true, subtree: true });

    // Also intercept programmatic value/selectedIndex changes
    const origSelectedIndexDesc = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'selectedIndex');
    const origValueDesc = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');

    // We only hook once per select to avoid recursion
    nativeSelect._customSelectSync = () => {
      syncFromNative(nativeSelect, trigger, triggerText, dropdown);
    };
  }

  function selectOption(nativeSelect, index, trigger, triggerText, dropdown) {
    nativeSelect.selectedIndex = index;
    const opt = nativeSelect.options[index];

    // Update trigger text
    triggerText.textContent = opt.textContent;
    if (opt.disabled || opt.value === '') {
      trigger.classList.add('is-placeholder');
    } else {
      trigger.classList.remove('is-placeholder');
    }

    // Update selected state in dropdown
    dropdown.querySelectorAll('.custom-select-option').forEach((item) => {
      item.classList.remove('is-selected');
      item.removeAttribute('aria-selected');
    });
    const selectedItem = dropdown.querySelector(`[data-index="${index}"]`);
    if (selectedItem) {
      selectedItem.classList.add('is-selected');
      selectedItem.setAttribute('aria-selected', 'true');
    }

    // Fire change event on the native select
    nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function syncFromNative(nativeSelect, trigger, triggerText, dropdown) {
    const idx = nativeSelect.selectedIndex;
    const opt = nativeSelect.options[idx];
    if (!opt) return;

    triggerText.textContent = opt.textContent;
    if (opt.disabled || opt.value === '') {
      trigger.classList.add('is-placeholder');
    } else {
      trigger.classList.remove('is-placeholder');
    }

    dropdown.querySelectorAll('.custom-select-option').forEach((item) => {
      item.classList.remove('is-selected');
      item.removeAttribute('aria-selected');
    });
    const selectedItem = dropdown.querySelector(`[data-index="${idx}"]`);
    if (selectedItem) {
      selectedItem.classList.add('is-selected');
      selectedItem.setAttribute('aria-selected', 'true');
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomSelects);
  } else {
    initCustomSelects();
  }

  // Re-sync after a brief delay to catch any JS that sets values on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.querySelectorAll('.custom-select-wrapper').forEach((wrapper) => {
        const nativeSelect = wrapper.querySelector('select.form-select');
        const trigger = wrapper.querySelector('.custom-select-trigger');
        const triggerText = trigger?.querySelector('.trigger-text');
        const dropdown = wrapper.querySelector('.custom-select-dropdown');
        if (nativeSelect && trigger && triggerText && dropdown) {
          syncFromNative(nativeSelect, trigger, triggerText, dropdown);
        }
      });
    }, 100);
  });
})();
