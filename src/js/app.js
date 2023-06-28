import '/src/components/card-slider/index';
import { aboutSearch } from './about-search';
import MobileNav from '../components/mobile-nav/MobileNav';
import './swiper-gallery';
import ContactsPage from "../templates/contacts/js/contacts"

window.mobileNav = new MobileNav();
window.contactsPage = new ContactsPage();
const button = document.querySelector('.section__button_type_unfold');
const text = document.querySelectorAll('.section__text');
const mediaForm = document.querySelector('.media-form');

const unfold = () => {
  [...text].map((i) => i.classList.toggle('section__text_type_unfold'));
  button.classList.toggle('section__button_type_unfold_active');
  const buttonActive = document.querySelector('.section__button_type_unfold_active');
  if (buttonActive) {
    buttonActive.textContent = 'СВЕРНУТЬ';
  } else {
    button.textContent = 'РАЗВЕРНУТЬ';
  }
};
if (button) {
  button.addEventListener('click', () => unfold());
}
if (mediaForm) {
  aboutSearch();
}

///////////////////////////////////////////////////////////////////////////
const hamb = document.querySelector('#hamb-tabl');
const popup = document.querySelector('#popup-tabl');
const body = document.body;
if (hamb) {
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
}
