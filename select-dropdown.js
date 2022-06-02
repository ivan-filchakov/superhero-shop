
function initSelect(obj) {

  const container = obj.querySelector('.select__container');
  const selectArrow = obj.querySelector('.select__arrow');
  const selectHeader = obj.querySelector('.select__option--header');
  const allSelectOptions = obj.querySelectorAll('.select__option');

  // по клику меняем высоту контейнера чтобы скрыть/показать опции
  function openContainer() {
    const toggle = (height) => container.style.height = height;
    if (container.style.height === 'auto') {
      toggle('28px');
      container.style.zIndex = '1'
    } else {
      toggle('auto');
      container.style.zIndex = '2'
    }
  }
  container.addEventListener('click', openContainer)
  selectArrow.addEventListener('click', openContainer)

  // вешаем на каждую опцию функцию переноса выбранного текста в загаловок списка
  allSelectOptions.forEach( (el) => {
    el.addEventListener('click', () => {
      selectHeader.innerHTML = el.innerHTML
    })
  })
}

// пробегаем по всем блокам с классом селект и "активируем" их
function initAllSelects() {
  const allSelects = document.querySelectorAll('.select');
  allSelects.forEach( el => initSelect(el))
}

initAllSelects()
