/* Mobile drawer: keep all nav sections open (navigation.expand is desktop-only). */
(function () {
  var MQ = '(max-width: 76.234375em)';

  function expandAllSections() {
    if (!window.matchMedia(MQ).matches) return;
    document
      .querySelectorAll('.md-nav--primary .md-nav__item--section > .md-nav__toggle')
      .forEach(function (toggle) {
        toggle.checked = true;
      });
    document.querySelectorAll('.md-nav--primary .md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
    });
  }

  document.addEventListener('DOMContentLoaded', expandAllSections);
  document.getElementById('__drawer')?.addEventListener('change', function (e) {
    if (e.target.checked) requestAnimationFrame(expandAllSections);
  });
  window.addEventListener('resize', expandAllSections);
})();
