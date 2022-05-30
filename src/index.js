import "./reset.css";
import "./style.css";
// const state = require("./render.js");

import html from './tech/tech.html';
const techHtml = document.createElement('html');
techHtml.innerHTML = html;

import logo from './assets/Marvel_Logo.png';
import hamburger from './assets/Hamburger_icon_white.png';
import cart from './assets/cart.svg';
import userpic from './assets/user0.png';

const header = techHtml.querySelector('.header');
document.body.append(header)



// --------------------------------- TEXT EDITOR
// tinymce.init({
//   selector: '.form-wysiwyg__editor',
//   menubar: false,
//   statusbar: false,
//   plugins: 'lists',
//   toolbar: 'bold italic underline bullist alignjustify alignleft alignright forecolor',
//   icons: 'material',
//   min_height: 150,
//   height: '100%',
// });
