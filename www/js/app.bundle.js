/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 40:
/***/ (() => {

if (document.querySelector('.main-names .card-slider .swiper')) {
  new Swiper(".main-names .card-slider .swiper", {
    loop: false,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    },
    grabCursor: true,
    navigation: {
      nextEl: ".card-slider__navigation-right",
      prevEl: ".card-slider__navigation-left"
    },
    pagination: {
      el: ".card-slider__pagination",
      clickable: true
    }
  });
}
if (document.querySelector('.aboutus__slider')) {
  new Swiper(".aboutus__slider", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
}
if (document.querySelector('.swiper-volonteer')) {
  new Swiper(".swiper-volonteer", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left"
    },
    /*   slidesPerView: auto, */
    slidesPerView: 1,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}
if (document.querySelector('.search-names__slider .swiper')) {
  new Swiper(".search-names__slider .swiper", {
    loop: false,
    grabCursor: true,
    navigation: {
      nextEl: ".search-btn-swiper__next",
      prevEl: ".search-btn-swiper__prev"
    },
    pagination: {
      el: ".search-names__pagination",
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
}
if (document.querySelector('.media-main-details__slider .swiper')) {
  new Swiper(".media-main-details__slider .swiper", {
    navigation: {
      nextEl: ".search-btn-swiper__next",
      prevEl: ".search-btn-swiper__prev"
    },
    pagination: {
      el: ".media-main-details__pagination",
      clickable: true
    },
    /*   slidesPerView: auto, */
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      560: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}

/***/ }),

/***/ 381:
/***/ (() => {

/*import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "../components/SearchForm/SearchForm";

export function aboutSearch() {
    ReactDOM.render(<SearchForm/>, document.querySelector(".media-form"));
}*/

/***/ }),

/***/ 354:
/***/ (() => {

if (document.querySelector('.swiper-gallery .swiper')) {
  new Swiper('.swiper-gallery .swiper', {
    slidesPerView: 1,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.swiper-gallery__navigation-right',
      prevEl: '.swiper-gallery__navigation-left'
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/components/card-slider/index.js
var card_slider = __webpack_require__(40);
// EXTERNAL MODULE: ./src/js/about-search.js
var about_search = __webpack_require__(381);
;// CONCATENATED MODULE: ./src/components/mobile-nav/MobileNav.js
class MobileNav {
  constructor() {}
  start() {
    const btn = document.querySelector(".mobile-nav-btn");
    btn.onclick = function () {
      document.querySelector('body').classList.toggle('noscroll');
      this.classList.toggle('mobile-nav-btn_opened');
      document.querySelector('.mobile-nav').classList.toggle('mobile-nav_opened');
    };
  }
}
// EXTERNAL MODULE: ./src/js/swiper-gallery.js
var swiper_gallery = __webpack_require__(354);
;// CONCATENATED MODULE: ./src/templates/contacts/js/contacts.js
class ContractsPage {
  start() {
    const textarea = document.getElementById('userComment'),
      namePlaceholder = document.getElementById('placeholderName'),
      phonePlaceholder = document.getElementById('placeholderPhone'),
      mailPlaceholder = document.getElementById('placeholderMail'),
      textareaPlaceholder = document.getElementById('labelComment'),
      inputsPlaceholder = document.querySelectorAll('.form-contacts__placeholder'),
      textareaCurrent = document.querySelector('.form-contacts__current'),
      formInputs = document.querySelectorAll('.form-contacts__input'),
      deleteInputsValue = document.querySelectorAll('.form-contacts__delete'),
      successInputsValue = document.querySelectorAll('.form-contacts__success'),
      errorMessage = document.querySelectorAll('.form-contacts__message');
    textarea.addEventListener('input', () => {
      if (textarea.value !== '') {
        textareaPlaceholder.classList.add('_active');
        textarea.classList.add('_active');
      } else {
        textareaPlaceholder.classList.remove('_active');
        textarea.classList.remove('_active');
      }
      textareaCurrent.textContent = textarea.value.length;
    });
    formInputs.forEach((item, i) => {
      item.addEventListener('input', e => {
        if (item.value !== '') {
          item.classList.add('_active');
          deleteInputsValue.forEach((btn, x) => {
            if (i === x) {
              btn.classList.remove('_active');
            }
          });
          switch (i) {
            case 0:
              namePlaceholder.classList.add('_active');
              break;
            case 1:
              phonePlaceholder.classList.add('_active');
              break;
            case 2:
              mailPlaceholder.classList.add('_active');
              break;
          }
        } else {
          item.classList.remove('_active');
          deleteInputsValue.forEach((btn, x) => {
            if (i === x) {
              btn.classList.add('_active');
            }
          });
          removeClassPlaceholders();
        }
        if (i === 0) {
          // let regFio = /^\w+\s\w+\s\w+$/iu;
          // let regFio = /^([а-яё]+|[a-z]+)$/i;
          let regFio = /^[a-zа-яё\s]+$/iu;
          if (!this.#validate(regFio, item.value) && item.value !== '') {
            this.#notValidate(item, errorMessage[i], 'Используйте кириллицу или латиницу');
          } else {
            this.#valid(item, errorMessage[i], '');
          }
          if (regFio.test(item.value.trim())) {
            namePlaceholder.classList.add('_success');
            item.classList.add('_success');
            successInputsValue[i].classList.add('_active');
            deleteInputsValue[i].classList.add('_active');
          } else {
            namePlaceholder.classList.remove('_success');
            item.classList.remove('_success');
            successInputsValue[i].classList.remove('_active');
          }
        } else if (i === 1) {
          let regDigit = /^[0-9]+$/gm,
            regNotDigit = /\D+/g;
          if (!this.#validate(regDigit, item.value) && item.value !== '') {
            this.#notValidate(item, errorMessage[i], 'Используйте только цифры');
          } else {
            this.#valid(item, errorMessage[i], '');
          }
          if (regNotDigit.test(item.value)) {
            phonePlaceholder.classList.add('_error');
            item.classList.add('_error');
          } else {
            phonePlaceholder.classList.remove('_error');
            item.classList.remove('_error');
          }
          if (regDigit.test(item.value)) {
            phonePlaceholder.classList.add('_success');
            item.classList.add('_success');
            successInputsValue[i].classList.add('_active');
            deleteInputsValue[i].classList.add('_active');
          } else {
            phonePlaceholder.classList.remove('_success');
            item.classList.remove('_success');
            successInputsValue[i].classList.remove('_active');
          }
        } else if (i === 2) {
          let regMail = /\w+@\w+\.\w+/;
          if (!this.#validate(regMail, item.value) && item.value !== '') {
            this.#notValidate(item, errorMessage[i], 'Используйте знаки «@» и точку');
          } else {
            this.#valid(item, errorMessage[i], '');
          }
          if (regMail.test(item.value)) {
            mailPlaceholder.classList.add('_success');
            item.classList.add('_success');
            successInputsValue[i].classList.add('_active');
            deleteInputsValue[i].classList.add('_active');
          } else {
            mailPlaceholder.classList.remove('_success');
            item.classList.remove('_success');
            successInputsValue[i].classList.remove('_active');
          }
        }
        deleteInputsValue.forEach((btn, x) => {
          if (i === x) {
            btn.addEventListener('click', () => {
              item.value = '';
              btn.classList.add('_active');
              item.classList.remove('_active');
              item.classList.remove('_error');
              phonePlaceholder.classList.remove('_error');
              item.classList.remove('_success');
              phonePlaceholder.classList.remove('_success');
              removeClassPlaceholders();
              errorMessage[i].textContent = '';
            });
          }
        });
      });
      function removeClassPlaceholders() {
        switch (i) {
          case 0:
            namePlaceholder.classList.remove('_active');
            break;
          case 1:
            phonePlaceholder.classList.remove('_active');
            break;
          case 2:
            mailPlaceholder.classList.remove('_active');
            break;
        }
      }
    });
    document.querySelector('.form-contacts').addEventListener('submit', e => {
      e.preventDefault();
      document.querySelector(".form-contacts__form").innerHTML = '<div class="alert alert-success">Сообщение отправлено<div>';
    });
  }
  showMore() {
    const dots = document.getElementById("dots"),
      moreText = document.getElementById("more"),
      btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать далее";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Свернуть";
      moreText.style.display = "inline";
    }
  }
  #validate(regex, inp) {
    // return regex.test(inp)
    return inp.match(regex);
  }
  #notValidate(inp, elem, message) {
    elem.textContent = message;
  }
  #valid(inp, elem, message) {
    elem.textContent = message;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js





window.mobileNav = new MobileNav();
window.contactsPage = new ContractsPage();
const app_button = document.querySelector('.section__button_type_unfold');
const app_text = document.querySelectorAll('.section__text');
const mediaForm = document.querySelector('.media-form');
const unfold = () => {
  [...app_text].map(i => i.classList.toggle('section__text_type_unfold'));
  app_button.classList.toggle('section__button_type_unfold_active');
  const buttonActive = document.querySelector('.section__button_type_unfold_active');
  if (buttonActive) {
    buttonActive.textContent = 'СВЕРНУТЬ';
  } else {
    app_button.textContent = 'РАЗВЕРНУТЬ';
  }
};
if (app_button) {
  app_button.addEventListener('click', () => unfold());
}
if (mediaForm) {
  (0,about_search.aboutSearch)();
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
  links.forEach(link => {
    link.addEventListener('click', closeOnClick);
  });

  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove('open-tabl');
    hamb.classList.remove('active-tabl');
    body.classList.remove('noscroll');
  }
}
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;