/* Keep mobile nav as a flat list (backup if theme JS re-applies slide panels). */
(function () {
  var MQ = '(max-width: 76.234375em)';

  function flatten() {
    if (!window.matchMedia(MQ).matches) return;
    var root = document.querySelector('.md-nav--primary');
    if (!root) return;
    root.querySelectorAll('.md-nav__list').forEach(function (el) {
      el.style.setProperty('transform', 'none', 'important');
    });
  }

  document.addEventListener('DOMContentLoaded', flatten);
  document.getElementById('__drawer')?.addEventListener('change', function (e) {
    if (e.target.checked) requestAnimationFrame(flatten);
  });
  window.addEventListener('resize', flatten);
})();
