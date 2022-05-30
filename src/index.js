import "./reset.css";
import "./style.css";

import html from './tech/tech.html';
const techHtml = document.createElement('html');
techHtml.innerHTML = html;

function getElement(cls) {
  const element = techHtml.querySelector(`.${cls}`);
  element.className = cls;
  return element
}

// ----------------------------------------- HEADER
import logo from './assets/Marvel_Logo.png';
import hamburger from './assets/Hamburger_icon_white.png';
import cart from './assets/cart.svg';
import userpic from './assets/user0.png';

const header = getElement('header');
document.body.append(header);

// ----------------------------------------- BANNER
import bannerBg from './assets/banner-bg.jpg';
import searchButton from './assets/search-button.svg';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';

const banner = getElement('banner');
document.body.append(banner);
const initSlider = require('./components/slider');
initSlider();

// ----------------------------------------- Latest releases
const sectionLatest = getElement('section');
const rowOf4 = getElement('rowOf4');
const shopCard = getElement('shop-card');
sectionLatest.querySelector('.section__header').innerText = 'Latest Releases';
sectionLatest.querySelector('.section__content').innerHTML = rowOf4.outerHTML;
const rowOf4els = sectionLatest.querySelectorAll('.rowOf4__item');
for (let i = 0; i < rowOf4els.length; i++) {
  rowOf4els[i].innerHTML = shopCard.outerHTML
}

document.body.append(sectionLatest);
