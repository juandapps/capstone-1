const menu = document.querySelector('#mobileMenu');
const overlay = document.querySelector('#overlay');
const logo = document.querySelector('#logo');

function hamburger() {
  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
      overlay.style.display = 'flex';
      menu.style.position = 'absolute';
      logo.style.position = 'absolute';
      logo.style.marginTop = '1rem';
    } else {
      overlay.style.display = 'none';
      menu.style.removeProperty('position');
      logo.style.removeProperty('position');
      logo.style.removeProperty('margin');
    }
  });
}

export { hamburger }; //eslint-disable-line
