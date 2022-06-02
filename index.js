
// Вызов меню шапки в мобильной версии:
const header = document.querySelector('#header');
const headerControls = document.querySelector('#headerControls');

function toggleHeader() {
  const toggle = (height) => header.style.height = height;
  header.style.height === 'auto' ? toggle('60px') : toggle('auto')
}
headerControls.addEventListener('click', toggleHeader);


// Вызов меню под стрелочкой возле аватарки
const userDropButton = document.querySelector('#userDropButton');
const userDropList = document.querySelector('#userDropList');

function toggleDropList() {
  let scale;
  userDropList.hasAttribute('hidden') ? scale = -1 : scale = 1;
  userDropButton.style.transform = `scaleY(${scale})`;
  userDropList.hidden = !userDropList.hidden
}
userDropButton.addEventListener('click', toggleDropList)


// быстрая "авторизация"
const cart = document.querySelector('#cart');
const signIn = document.querySelector('#signIn');
const signUp = document.querySelector('#signUp');
const userPic = document.querySelector("#userPic");
const signOut = document.querySelector("#signOut");
const profileLink = document.querySelector("#profileLink");

function authorize(user) {
  cart.hidden = !cart.hidden;
  signIn.hidden = !signIn.hidden;
  signUp.hidden = !signUp.hidden;
  userPic.src = user;
  userDropButton.hidden = !userDropButton.hidden;
  if (!userDropList.hidden) {  toggleDropList()  }
}
signIn.addEventListener('click', () => {
  authorize('./assets/userpic-login.png');
  profileLink.hidden = false;
});
signOut.addEventListener('click', () => {
  authorize('./assets/userpic-default.svg');
  profileLink.hidden = true;
});

// ------------------------------------- SLIDER

function highlightDot(slider, i) {
  const dots = slider.querySelector('.slider__controls').childNodes;
  dots.forEach(element => element.className = 'sliderDot');
  dots[i].className = 'sliderDot sliderDot--active'
}
function showSlide(allSlides, i) {
  allSlides.forEach(element => element.style.display = 'none')
  allSlides[i].style.display = 'flex';
}

function initSlider(slider) {
  const allSlides = slider.querySelectorAll('.slide');
  const sliderControls = slider.querySelector('.slider__controls');

  for (let i = 0; i < allSlides.length; i++) {
    const newDot = document.createElement('div');
    newDot.className = 'sliderDot';
    newDot.addEventListener('click', () => {
      showSlide(allSlides, i);
      highlightDot(slider, i);
    })
    sliderControls.append(newDot)
  }

  showSlide(allSlides, 0);
  highlightDot(slider, 0)
}

const allSliders = document.querySelectorAll(`.slider`);

function initAllSliders() {
  allSliders.forEach(element => initSlider(element))
}
initAllSliders();

/* -------------------------------------- COLOR CARD
 https://github.com/VitaliiHrozynskyi/superhero-shop/commit/7ca414925bd4d80088d56e203a0b818f9ff11061#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346
*/

function createColorCard(colorCard) {
  const img = colorCard.querySelector(".color-card__img");
  const el = document.createElement("div");
  el.className = "color-card__gradient";
  if (img.src === "http://127.0.0.1:5500/" || img.src === "" || !img.src) {
    img.src = "https://picsum.photos/200/300";
  } else {
    let rgb = getAverageRGB(img);
    el.style.background = `linear-gradient(to top, rgba(${rgb.r}
      ,${rgb.g}
      ,${rgb.b}
      , 1), rgba(${rgb.r}
        ,${rgb.g}
        ,${rgb.b}
        , 0))`;
  }
  colorCard.appendChild(el);
}

function getAverageRGB(img) {
  let blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement("canvas"),
    context = canvas.getContext && canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    imgHeight = img.offsetParent,
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = imgHeight.offsetHeight;
  width = canvas.width;

  context.drawImage(img, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */ alert("x");
    return defaultRGB;
  }

  length = data.data.length;
  while ((i += blockSize * 4) < length) {
    if (
      (data.data[i] > 210 &&
        data.data[i + 1] > 210 &&
        data.data[i + 2] > 210) ||
      (data.data[i] < 40 && data.data[i + 1] < 40 && data.data[i + 2] < 40)
    ) {
      continue;
    }

    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}

window.addEventListener("load", () => {
  const colorCards = document.querySelectorAll(".color-card");
  for (let i = 0; i < colorCards.length; i++) {
    createColorCard(colorCards[i]);
  }
});
