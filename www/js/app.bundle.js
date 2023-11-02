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
if (document.querySelector('.about-stories__slider .swiper')) {
  new Swiper(".about-stories__slider .swiper", {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: ".about-stories__navigation-next",
      prevEl: ".about-stories__navigation-prev"
    },
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
    grabCursor: true,
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
      errorMessage = document.querySelectorAll('.form-contacts__message'),
      btn = document.querySelectorAll('.btns-form-contacts__btn')[0] ?? null,
      form = document.querySelector('.form-contacts');
    textarea.addEventListener('input', () => {
      if (textarea.value.length >= 5) {
        textareaPlaceholder.classList.add('_active', '_success');
        textarea.classList.add('_active', '_success');
        isValidMessage = true;
        this.#valid(textarea, errorMessage[3], '');
      } else if (textarea.value.length > 0 && textarea.value.length < 5) {
        this.#notValidate(textarea, errorMessage[3], 'Минимальная длина 5 символов');
        isValidMessage = false;
        textareaPlaceholder.classList.add('_active');
        textarea.classList.add('_active');
        textareaPlaceholder.classList.remove('_success');
        textarea.classList.remove('_success');
      } else {
        textareaPlaceholder.classList.remove('_active', '_success');
        textarea.classList.remove('_active', '_success');
        isValidMessage = false;
        this.#valid(textarea, errorMessage[3], '');
      }
      textareaCurrent.textContent = textarea.value.length;
    });
    let isValidName,
      isValidEmail,
      isValidMessage = false;
    let isValidPhone = true;
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
          let regFio = /^[a-zа-яё\s]+$/iu;
          if (!this.#validate(regFio, item.value) && item.value !== '') {
            this.#notValidate(item, errorMessage[i], 'Используйте кириллицу или латиницу');
            isValidName = false;
          } else if (item.value.length > 0 && item.value.length < 3) {
            this.#notValidate(item, errorMessage[i], 'Минимальная длина 3 символа');
            isValidName = false;
          } else {
            this.#valid(item, errorMessage[i], '');
            isValidName = true;
          }
          if (regFio.test(item.value.trim()) && item.value.length >= 3) {
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
          let regDigit = /^([78])\d{10}$/gm;
          if (!this.#validate(regDigit, item.value) && item.value !== '') {
            this.#notValidate(item, errorMessage[i], 'Введите мобильный номер, например, 79536952867');
            isValidPhone = false;
          } else {
            this.#valid(item, errorMessage[i], '');
            isValidPhone = true;
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
            this.#notValidate(item, errorMessage[i], 'Введите корректный e-mail адрес');
            isValidEmail = false;
          } else {
            this.#valid(item, errorMessage[i], '');
            isValidEmail = true;
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
    form.addEventListener('submit', async e => {
      e.preventDefault();
      let recaptcha = document.getElementById('g-recaptcha-response');
      if (isValidName && isValidPhone && isValidEmail && isValidMessage && recaptcha && recaptcha.value !== '') {
        let params = new FormData(form);
        if (params.has('g-recaptcha-response')) {
          params.append('gRecaptchaResponse', params.get('g-recaptcha-response'));
          params.delete('g-recaptcha-response');
        }
        let response = await fetch(form.action, {
          method: 'POST',
          body: params,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (response.ok) {
          document.querySelector(".form-contacts__form").innerHTML = '<div class="alert alert-success">Сообщение отправлено<div>';
        } else {
          document.querySelector(".form-contacts__messages").innerHTML = '<div class="alert alert-danger">Ошибка отправки сообщения.<div>';
        }
      }
    });
  }
  showMore() {
    const moreText = document.getElementById("more-info-contacts__txt"),
      btnText = document.getElementById("more-info-contacts__btn");
    let moreTextStyle = window.getComputedStyle(moreText);
    if (moreTextStyle.display === "none") {
      btnText.innerHTML = "Свернуть";
      moreText.classList.add('d-inline');
    } else {
      btnText.innerHTML = "Читать далее";
      moreText.classList.remove('d-inline');
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
;// CONCATENATED MODULE: ./src/templates/about/js/index.js
class AboutPage {
  start() {
    const btnText = document.getElementById('about-details__more-btn');
    const moreText = document.getElementById('about-details__more');
    const more = () => {
      let moreTextStyle = window.getComputedStyle(moreText);
      if (moreTextStyle.display === "none") {
        moreText.classList.add('d-inline');
        btnText.innerHTML = "Свернуть";
      } else {
        btnText.innerHTML = "Читать далее";
        moreText.classList.remove('d-inline');
      }
    };
    if (btnText) {
      btnText.addEventListener('click', () => more());
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js





window.mobileNav = new MobileNav();
window.contactsPage = new ContractsPage();
window.aboutPage = new AboutPage();
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;