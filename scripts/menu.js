const breakpoint = window.matchMedia( "(max-width: 960px)" );
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('topbar');
const menuAnchors = menu.querySelectorAll('a');

menuButton.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'inline-block';
  } else {
    menu.style.display = 'none';
  }
})

menuButton.addEventListener('mouseover', () => {
  menuButton.style.cursor = "pointer";
})

menu.addEventListener('blur', () => {
  menu.style.display = 'none';
})

menuAnchors.forEach((a) => {
  a.addEventListener('click', () => {
    menu.style.display = 'none';
  })
})