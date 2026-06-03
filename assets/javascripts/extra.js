/* Mobile: first drawer open per session shows all categories; then default Material behavior. */
(function () {
  var MQ = '(max-width: 76.234375em)';
  var STORAGE_KEY = 'nabu_mobile_nav_root_shown';

  function resetToRootCategories() {
    if (!window.matchMedia(MQ).matches) return;

    var primary = document.querySelector('.md-nav--primary');
    if (!primary) return;

    var rootList = primary.querySelector(':scope > .md-nav__list');
    if (rootList) {
      rootList.style.setProperty('transform', 'none', 'important');
    }
  }

  function onDrawerOpen() {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    sessionStorage.setItem(STORAGE_KEY, '1');

    requestAnimationFrame(function () {
      requestAnimationFrame(resetToRootCategories);
    });
    setTimeout(resetToRootCategories, 50);
  }

  var drawer = document.getElementById('__drawer');
  if (drawer) {
    drawer.addEventListener('change', function (e) {
      if (e.target.checked) onDrawerOpen();
    });
  }
})();
