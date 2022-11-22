const hero = document.querySelector('.hero-container');
const text = document.querySelector('.video-bg');
const sensitivity = 15;

function video(e) {
  const x = e.clientX;
  const y = e.clientY;
  hero.style.backgroundPosition = `${x / sensitivity}px ${y / sensitivity}px`;
}

hero.addEventListener('mousemove', video);
text.addEventListener('mousemove', video);
