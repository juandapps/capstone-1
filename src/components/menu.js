const menu = document.querySelector('#mobileMenu');
const overlay = document.querySelector('#overlay');
const logo = document.querySelector('#logo');
const body = document.querySelector('body');
const info = document.querySelector('.hero-info');

function hamburger() {
  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    if (menu.classList.contains('is-active')) {
      overlay.style.display = 'flex';
      menu.style.position = 'absolute';
      logo.style.position = 'absolute';
      logo.style.marginTop = '1rem';
      body.style.overflow = 'hidden';
      logo.style.display = 'flex';
      info.style.visibility = 'hidden';
    } else {
      overlay.style.display = 'none';
      menu.style.removeProperty('position');
      logo.style.removeProperty('position');
      logo.style.removeProperty('margin');
      body.style.removeProperty('overflow');
      logo.style.display = 'none';
      info.style.removeProperty('visibility');
    }

    document.querySelectorAll('.menu-link').forEach((e) => {
      e.addEventListener('click', () => {
        menu.classList.remove('is-active');
        overlay.style.display = 'none';
        menu.style.removeProperty('position');
        logo.style.removeProperty('position');
        logo.style.removeProperty('margin');
        body.style.removeProperty('overflow');
        logo.style.display = 'none';
        info.style.removeProperty('visibility');
      });
    });
  });
}

export { hamburger }; //eslint-disable-line
