import './style.css';

import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAboutUs } from './about.js';
import { updateContent } from './utils.js';

document.querySelector('.home-btn').addEventListener('click', () => {
    updateContent(loadHome);
});
document.querySelector('.menu-btn').addEventListener('click', () => {
    updateContent(loadMenu);
});
document.querySelector('.about-btn').addEventListener('click', () => {
    updateContent(loadAboutUs);
});

updateContent(loadHome);
