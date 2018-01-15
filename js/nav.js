
var navToggle = document.getElementsByClassName('nav-toggle')[0];
var navMenu = document.getElementsByClassName('nav-menu')[0];

navToggle.addEventListener('click', function() {
  if (navToggle.className.includes('is-active')) {
    navToggle.className = 'nav-toggle';
    navMenu.className = 'nav-right nav-menu';
  } else {
    navToggle.className = 'nav-toggle is-active';
    navMenu.className = 'nav-right nav-menu is-active';
  }
});
