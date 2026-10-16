// Light/dark toggle. The site starts dark; a choice is remembered in this browser.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  var meta = document.getElementById('theme-color');
  function sync() {
    var dark = root.getAttribute('data-theme') === 'dark';
    var label = dark ? 'Switch to light mode' : 'Switch to dark mode';
    if (btn) { btn.setAttribute('aria-label', label); btn.title = label; }
    if (meta) meta.setAttribute('content', dark ? '#151618' : '#faf7f2');
  }
  sync();
  if (!btn) return;
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
})();

// Fade paper entries in as they scroll into view. Entries already on screen are left alone,
// and without this script (or with reduced motion) everything is simply visible.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var vh = window.innerHeight || 800;
  var items = document.querySelectorAll('.entry, .group > h3');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.remove('reveal');
      io.unobserve(el);
      setTimeout(function () { el.style.transitionDelay = ''; }, 900);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  items.forEach(function (el, i) {
    if (el.getBoundingClientRect().top > vh) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 3) * 60 + 'ms';
      io.observe(el);
    }
  });
})();
