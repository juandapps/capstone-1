import { hamburger } from './components/menu.js';
import { speakers, speakersData } from './components/speakers.js';

hamburger();

speakersData.forEach((e) => {
  speakers(e.name, e.title, e.description, e.pfp);
});

const container = document.querySelector('.speakers-container');
const span = document.createElement('span');
const button = document.createElement('button');
button.innerHTML = 'More';
span.classList.add('bx', 'bx-chevron-down');
button.setAttribute('type', 'submit');
container.appendChild(button);
button.appendChild(span);
container.appendChild(button);
button.appendChild(span);
