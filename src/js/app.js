import '/src/components/card-slider/index';
import MobileNav from '../components/mobile-nav/MobileNav';
import Section from '../components/section/Section';
import Card from '../components/card/Card';
import { initialCards } from './initial_cards';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-button';
/* $(". date").datepicker({
  format: "dd-mm-yyyy",
}); */
window.mobileNav = new MobileNav();
const button = document.querySelector('.section__button_type_unfold');
const text = document.querySelectorAll('.section__text');
export const cardsTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.card');
const filterBySolder = (solder) => {
  return (initialCards.solder = solder);
};
const filter = (searchQuery, solder) => {
  const filterByKeyword = (card) => {
    return JSON.stringify(card).toLowerCase().includes(searchQuery.toLowerCase());
  };
  const filteredData = solder
    ? initialCards.filter(filterByKeyword).filter(filterBySolder)
    : initialCards.filter(filterByKeyword);
  return filteredData;
};
function getCard(itemElement) {
  const card = new Card(
    {
      solder: itemElement.solder,
      date: itemElement.date,
      subtitle: itemElement.subtitle,
      text: itemElement.text,
      image: itemElement.image,
      link: itemElement.link,
    },
    cardsTemplate,
  );
  return card.createCard();
}
export const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      section.addItem(getCard(item));
    },
    filter: filter,
  },
  '.cards',
);
section.renderItems();
const unfold = () => {
  [...text].map((i) => i.classList.toggle('section__text_type_unfold'));
  button.classList.toggle('section__button_type_unfold_active');
  const buttonActive = document.querySelector('.section__button_type_unfold_active');
  buttonActive.textContent = 'СВЕРНУТЬ';
  if (!buttonActive) {
    button.textContent = 'РАЗВЕРНУТЬ';
  }
};
if (button) {
  button.addEventListener('click', () => unfold());
}

addEventListener('load', () => document.body.classList.remove('unresolved'));

window.filled.addEventListener('change', function () {
  window.filledValue.innerText = window.filled.value;
});

window.outlined.addEventListener('change', function () {
  window.outlinedValue.innerText = window.outlined.value;
});

window.preselected.addEventListener('change', function () {
  window.preselectedValue.innerText = window.preselected.value;
});

window.reqFilled.addEventListener('change', function () {
  window.reqFilledValue.innerText = window.reqFilled.value;
  window.reqFilledValid.innerText = window.reqFilled.validity.valid;
});

window.reqOutlined.addEventListener('change', function () {
  window.reqOutlinedValue.innerText = window.reqOutlined.value;
  window.reqOutlinedValid.innerText = window.reqOutlined.validity.valid;
});

window.disabledOptions.addEventListener('change', function () {
  window.disabledOptionsValue.innerText = window.disabledOptions.value;
});

window.naturalButton.addEventListener('click', function () {
  window.naturalOptions.naturalMenuWidth = !window.naturalOptions.naturalMenuWidth;
  window.naturalValue.innerText = window.naturalOptions.naturalMenuWidth;
});

window.shortNaturalButton.addEventListener('click', function () {
  window.shortNaturalOptions.naturalMenuWidth = !window.shortNaturalOptions.naturalMenuWidth;
  window.shortNaturalValue.innerText = window.shortNaturalOptions.naturalMenuWidth;
});

window.fullwidthButton.addEventListener('click', function () {
  window.fullwidthOptions.fullwidth = !window.fullwidthOptions.fullwidth;
  window.fullwidthValue.innerText = window.fullwidthOptions.fullwidth;
});
window.myFunction = function () {
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('vectorId-up').classList.toggle('hide');
};
///////////////////////////////////////////////////////////////////////////
const hamb = document.querySelector('#hamb-tabl');
const popup = document.querySelector('#popup-tabl');
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector('#menu-tabl').cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener('click', hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle('open-tabl');
  hamb.classList.toggle('active-tabl');
  body.classList.toggle('noscroll');
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener('click', closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove('open-tabl');
  hamb.classList.remove('active-tabl');
  body.classList.remove('noscroll');
}
