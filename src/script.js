document.documentElement.classList.add('js');

// Navigation stays available when JavaScript is disabled.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '菜单';
}
if (menuButton && navigation) {
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('span').textContent = open ? '关闭' : '菜单';
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  matchMedia('(max-width: 900px)').addEventListener('change', closeMenu);
}

// Archive filters leave all records readable without scripting.
document.querySelectorAll('[data-filter-scope]').forEach(scope => {
  const controls = scope.querySelector('.filters');
  const items = [...scope.querySelectorAll('[data-category]')];
  const count = scope.querySelector('[data-filter-count]');
  controls.hidden = false;
  function filter(category) {
    items.forEach(item => { item.hidden = category !== 'all' && item.dataset.category !== category; });
    controls.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    });
    count.textContent = String(items.filter(item => !item.hidden).length).padStart(2, '0');
  }
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (button) filter(button.dataset.filter);
  });
  function revealAnchor() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const item = items.find(entry => entry.id === id);
    if (item?.hidden) {
      filter('all');
      item.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }
  window.addEventListener('hashchange', revealAnchor);
  revealAnchor();
});

// Native dialog supplies Escape dismissal and keyboard focus containment.
const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  let trigger;
  document.addEventListener('click', event => {
    const anchor = event.target.closest('[data-lightbox]');
    if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    trigger = anchor;
    const image = lightbox.querySelector('img');
    image.src = anchor.href;
    image.alt = anchor.dataset.caption;
    lightbox.querySelector('p').textContent = anchor.dataset.caption;
    document.body.classList.add('has-lightbox');
    lightbox.showModal();
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    const rect = lightbox.getBoundingClientRect();
    if (event.target === lightbox && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    document.body.classList.remove('has-lightbox');
    trigger?.focus({ preventScroll: true });
  });
}

const copyStatus = document.querySelector('#copy-status');
document.querySelectorAll('[data-copy-target]').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const label = button.dataset.copyLabel;
    const value = target.dataset.copyValue || target.textContent.trim();
    let copied = false;
    try {
      await navigator.clipboard.writeText(value);
      copied = true;
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection.removeAllRanges();
      selection.addRange(range);
      // Keep copy usable on the site's HTTP origin.
      const copyPlainText = event => {
        if (event.clipboardData) {
          event.clipboardData.setData('text/plain', value);
          event.preventDefault();
        }
      };
      document.addEventListener('copy', copyPlainText);
      try { copied = document.execCommand('copy'); } catch { copied = false; }
      finally { document.removeEventListener('copy', copyPlainText); }
      if (copied) selection.removeAllRanges();
    }
    copyStatus.textContent = copied ? `${label}已复制，期待与你交流。` : `请长按或选中${label}复制。`;
  });
});
