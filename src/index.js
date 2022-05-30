import "./reset.css";
import "./style.css";

import html from './tech/tech.html';
const techHtml = document.createElement('html');
techHtml.innerHTML = html;

// ----------------------------------------- HEADER
import logo from './assets/Marvel_Logo.png';
import hamburger from './assets/Hamburger_icon_white.png';
import cart from './assets/cart.svg';
import userpic from './assets/user0.png';

const header = techHtml.querySelector('.header');
document.body.append(header)

// ----------------------------------------- SLIDER
import bannerBg from './assets/banner-bg.jpg';
import searchButton from './assets/search-button.svg'
import slide1 from './assets/slide1.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide3.jpg'
import slide4 from './assets/slide4.jpg'

const banner = techHtml.querySelector('.banner');
document.body.append(banner);
const initSlider = require('./components/slider')
initSlider()

