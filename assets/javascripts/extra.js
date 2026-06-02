document.addEventListener('DOMContentLoaded', function() {
  // Только для мобильных устройств
  if (window.innerWidth < 1220) {
    var primaryNav = document.querySelector('.md-nav--primary');
    if (!primaryNav) return;
    
    // Находим активный вложенный список и скрываем его
    var activeNav = primaryNav.querySelector('.md-nav__item--active > .md-nav');
    if (activeNav) {
      activeNav.style.display = 'none';
    }
    
    // Сбрасываем трансформацию списка
    var list = primaryNav.querySelector('.md-nav__list');
    if (list) {
      list.style.transform = 'none';
    }
  }
});