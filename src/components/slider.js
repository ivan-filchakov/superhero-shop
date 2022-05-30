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

module.exports = initAllSliders
