/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card-slider/index.js":
/*!*********************************************!*\
  !*** ./src/components/card-slider/index.js ***!
  \*********************************************/
/***/ (() => {

eval("if (document.querySelector('.main-names .card-slider .swiper')) {\n  new Swiper(\".main-names .card-slider .swiper\", {\n    loop: false,\n    slidesPerView: 1,\n    breakpoints: {\n      576: {\n        slidesPerView: 2,\n        spaceBetween: 20\n      },\n      768: {\n        slidesPerView: 3,\n        spaceBetween: 20\n      },\n      992: {\n        slidesPerView: 4,\n        spaceBetween: 30\n      },\n      1200: {\n        slidesPerView: 5,\n        spaceBetween: 40\n      }\n    },\n    grabCursor: true,\n    navigation: {\n      nextEl: \".card-slider__navigation-right\",\n      prevEl: \".card-slider__navigation-left\"\n    },\n    pagination: {\n      el: \".card-slider__pagination\",\n      clickable: true\n    }\n  });\n}\nconst aboutSliders = document.querySelectorAll('.about-stories__slider .swiper .swiper-slide');\nif (aboutSliders.length) {\n  new Swiper(\".about-stories__slider .swiper\", {\n    loop: true,\n    autoHeight: true,\n    navigation: {\n      nextEl: \".about-stories__navigation-next\",\n      prevEl: \".about-stories__navigation-prev\"\n    },\n    slidesPerView: 1,\n    grabCursor: true,\n    scrollbar: {\n      el: \".swiper-scrollbar\"\n    },\n    pagination: {\n      el: \".swiper-pagination\",\n      clickable: true\n    },\n    initialSlide: Math.floor(Math.random() * aboutSliders.length - 1)\n  });\n}\nif (document.querySelector('.search-names__slider .swiper')) {\n  new Swiper(\".search-names__slider .swiper\", {\n    loop: false,\n    grabCursor: true,\n    navigation: {\n      nextEl: \".search-btn-swiper__next\",\n      prevEl: \".search-btn-swiper__prev\"\n    },\n    pagination: {\n      el: \".search-names__pagination\",\n      clickable: true\n    },\n    slidesPerView: 1,\n    spaceBetween: 20,\n    breakpoints: {\n      576: {\n        slidesPerView: 2,\n        spaceBetween: 20\n      },\n      768: {\n        slidesPerView: 3,\n        spaceBetween: 20\n      },\n      992: {\n        slidesPerView: 4,\n        spaceBetween: 30\n      }\n    }\n  });\n}\nif (document.querySelector('.media-main-details__slider .swiper')) {\n  new Swiper(\".media-main-details__slider .swiper\", {\n    grabCursor: true,\n    navigation: {\n      nextEl: \".search-btn-swiper__next\",\n      prevEl: \".search-btn-swiper__prev\"\n    },\n    pagination: {\n      el: \".media-main-details__pagination\",\n      clickable: true\n    },\n    /*   slidesPerView: auto, */\n    slidesPerView: 1,\n    spaceBetween: 20,\n    breakpoints: {\n      560: {\n        slidesPerView: 1\n      },\n      768: {\n        slidesPerView: 2,\n        spaceBetween: 20\n      },\n      992: {\n        slidesPerView: 3,\n        spaceBetween: 30\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://po-fakel/./src/components/card-slider/index.js?");

/***/ }),

/***/ "./src/components/mobile-nav/MobileNav.js":
/*!************************************************!*\
  !*** ./src/components/mobile-nav/MobileNav.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MobileNav)\n/* harmony export */ });\nclass MobileNav {\n  constructor() {}\n  start() {\n    const btn = document.querySelector(\".mobile-nav-btn\");\n    btn.onclick = function () {\n      document.querySelector('body').classList.toggle('noscroll');\n      this.classList.toggle('mobile-nav-btn_opened');\n      document.querySelector('.mobile-nav').classList.toggle('mobile-nav_opened');\n    };\n  }\n}\n\n//# sourceURL=webpack://po-fakel/./src/components/mobile-nav/MobileNav.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_card_slider_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components/card-slider/index */ \"./src/components/card-slider/index.js\");\n/* harmony import */ var _src_components_card_slider_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_card_slider_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_mobile_nav_MobileNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/mobile-nav/MobileNav */ \"./src/components/mobile-nav/MobileNav.js\");\n/* harmony import */ var _swiper_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper-gallery */ \"./src/js/swiper-gallery.js\");\n/* harmony import */ var _swiper_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swiper_gallery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _templates_contacts_js_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/contacts/js/contacts */ \"./src/templates/contacts/js/contacts.js\");\n/* harmony import */ var _templates_about_js_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/about/js/index */ \"./src/templates/about/js/index.js\");\n\n\n\n\n\nwindow.mobileNav = new _components_mobile_nav_MobileNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nwindow.contactsPage = new _templates_contacts_js_contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nwindow.aboutPage = new _templates_about_js_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n//# sourceURL=webpack://po-fakel/./src/js/app.js?");

/***/ }),

/***/ "./src/js/swiper-gallery.js":
/*!**********************************!*\
  !*** ./src/js/swiper-gallery.js ***!
  \**********************************/
/***/ (() => {

eval("if (document.querySelector('.swiper-gallery .swiper')) {\n  new Swiper('.swiper-gallery .swiper', {\n    slidesPerView: 1,\n    grabCursor: true,\n    breakpoints: {\n      320: {\n        slidesPerView: 1,\n        spaceBetween: 20\n      },\n      768: {\n        slidesPerView: 2,\n        spaceBetween: 20\n      },\n      992: {\n        slidesPerView: 3,\n        spaceBetween: 30\n      }\n    },\n    navigation: {\n      nextEl: '.swiper-gallery__navigation-right',\n      prevEl: '.swiper-gallery__navigation-left'\n    }\n  });\n}\n\n//# sourceURL=webpack://po-fakel/./src/js/swiper-gallery.js?");

/***/ }),

/***/ "./src/templates/about/js/index.js":
/*!*****************************************!*\
  !*** ./src/templates/about/js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutPage)\n/* harmony export */ });\nclass AboutPage {\n  start() {\n    const btnText = document.getElementById('about-details__more-btn');\n    const moreText = document.getElementById('about-details__more');\n    const more = () => {\n      let moreTextStyle = window.getComputedStyle(moreText);\n      if (moreTextStyle.display === \"none\") {\n        moreText.classList.add('d-inline');\n        btnText.innerHTML = \"Свернуть\";\n      } else {\n        btnText.innerHTML = \"Читать далее\";\n        moreText.classList.remove('d-inline');\n      }\n    };\n    if (btnText) {\n      btnText.addEventListener('click', () => more());\n    }\n  }\n}\n\n//# sourceURL=webpack://po-fakel/./src/templates/about/js/index.js?");

/***/ }),

/***/ "./src/templates/contacts/js/contacts.js":
/*!***********************************************!*\
  !*** ./src/templates/contacts/js/contacts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContractsPage)\n/* harmony export */ });\nclass ContractsPage {\n  start() {\n    const textarea = document.getElementById('userComment'),\n      namePlaceholder = document.getElementById('placeholderName'),\n      phonePlaceholder = document.getElementById('placeholderPhone'),\n      mailPlaceholder = document.getElementById('placeholderMail'),\n      textareaPlaceholder = document.getElementById('labelComment'),\n      inputsPlaceholder = document.querySelectorAll('.form-contacts__placeholder'),\n      textareaCurrent = document.querySelector('.form-contacts__current'),\n      formInputs = document.querySelectorAll('.form-contacts__input'),\n      deleteInputsValue = document.querySelectorAll('.form-contacts__delete'),\n      successInputsValue = document.querySelectorAll('.form-contacts__success'),\n      errorMessage = document.querySelectorAll('.form-contacts__message'),\n      btn = document.querySelectorAll('.btns-form-contacts__btn')[0] ?? null,\n      form = document.querySelector('.form-contacts');\n    textarea.addEventListener('input', () => {\n      if (textarea.value.length >= 5) {\n        textareaPlaceholder.classList.add('_active', '_success');\n        textarea.classList.add('_active', '_success');\n        isValidMessage = true;\n        this.#valid(textarea, errorMessage[3], '');\n      } else if (textarea.value.length > 0 && textarea.value.length < 5) {\n        this.#notValidate(textarea, errorMessage[3], 'Минимальная длина 5 символов');\n        isValidMessage = false;\n        textareaPlaceholder.classList.add('_active');\n        textarea.classList.add('_active');\n        textareaPlaceholder.classList.remove('_success');\n        textarea.classList.remove('_success');\n      } else {\n        textareaPlaceholder.classList.remove('_active', '_success');\n        textarea.classList.remove('_active', '_success');\n        isValidMessage = false;\n        this.#valid(textarea, errorMessage[3], '');\n      }\n      textareaCurrent.textContent = textarea.value.length;\n    });\n    let isValidName,\n      isValidEmail,\n      isValidMessage = false;\n    let isValidPhone = true;\n    formInputs.forEach((item, i) => {\n      item.addEventListener('input', e => {\n        if (item.value !== '') {\n          item.classList.add('_active');\n          deleteInputsValue.forEach((btn, x) => {\n            if (i === x) {\n              btn.classList.remove('_active');\n            }\n          });\n          switch (i) {\n            case 0:\n              namePlaceholder.classList.add('_active');\n              break;\n            case 1:\n              phonePlaceholder.classList.add('_active');\n              break;\n            case 2:\n              mailPlaceholder.classList.add('_active');\n              break;\n          }\n        } else {\n          item.classList.remove('_active');\n          deleteInputsValue.forEach((btn, x) => {\n            if (i === x) {\n              btn.classList.add('_active');\n            }\n          });\n          removeClassPlaceholders();\n        }\n        if (i === 0) {\n          let regFio = /^[a-zа-яё\\s]+$/iu;\n          if (!this.#validate(regFio, item.value) && item.value !== '') {\n            this.#notValidate(item, errorMessage[i], 'Используйте кириллицу или латиницу');\n            isValidName = false;\n          } else if (item.value.length > 0 && item.value.length < 3) {\n            this.#notValidate(item, errorMessage[i], 'Минимальная длина 3 символа');\n            isValidName = false;\n          } else {\n            this.#valid(item, errorMessage[i], '');\n            isValidName = true;\n          }\n          if (regFio.test(item.value.trim()) && item.value.length >= 3) {\n            namePlaceholder.classList.add('_success');\n            item.classList.add('_success');\n            successInputsValue[i].classList.add('_active');\n            deleteInputsValue[i].classList.add('_active');\n          } else {\n            namePlaceholder.classList.remove('_success');\n            item.classList.remove('_success');\n            successInputsValue[i].classList.remove('_active');\n          }\n        } else if (i === 1) {\n          let regDigit = /^([78])\\d{10}$/gm;\n          if (!this.#validate(regDigit, item.value) && item.value !== '') {\n            this.#notValidate(item, errorMessage[i], 'Введите мобильный номер, например, 79536952867');\n            isValidPhone = false;\n          } else {\n            this.#valid(item, errorMessage[i], '');\n            isValidPhone = true;\n          }\n          if (regDigit.test(item.value)) {\n            phonePlaceholder.classList.add('_success');\n            item.classList.add('_success');\n            successInputsValue[i].classList.add('_active');\n            deleteInputsValue[i].classList.add('_active');\n          } else {\n            phonePlaceholder.classList.remove('_success');\n            item.classList.remove('_success');\n            successInputsValue[i].classList.remove('_active');\n          }\n        } else if (i === 2) {\n          let regMail = /\\w+@\\w+\\.\\w+/;\n          if (!this.#validate(regMail, item.value) && item.value !== '') {\n            this.#notValidate(item, errorMessage[i], 'Введите корректный e-mail адрес');\n            isValidEmail = false;\n          } else {\n            this.#valid(item, errorMessage[i], '');\n            isValidEmail = true;\n          }\n          if (regMail.test(item.value)) {\n            mailPlaceholder.classList.add('_success');\n            item.classList.add('_success');\n            successInputsValue[i].classList.add('_active');\n            deleteInputsValue[i].classList.add('_active');\n          } else {\n            mailPlaceholder.classList.remove('_success');\n            item.classList.remove('_success');\n            successInputsValue[i].classList.remove('_active');\n          }\n        }\n        deleteInputsValue.forEach((btn, x) => {\n          if (i === x) {\n            btn.addEventListener('click', () => {\n              item.value = '';\n              btn.classList.add('_active');\n              item.classList.remove('_active');\n              item.classList.remove('_success');\n              phonePlaceholder.classList.remove('_success');\n              removeClassPlaceholders();\n              errorMessage[i].textContent = '';\n            });\n          }\n        });\n      });\n      function removeClassPlaceholders() {\n        switch (i) {\n          case 0:\n            namePlaceholder.classList.remove('_active');\n            break;\n          case 1:\n            phonePlaceholder.classList.remove('_active');\n            break;\n          case 2:\n            mailPlaceholder.classList.remove('_active');\n            break;\n        }\n      }\n    });\n    form.addEventListener('submit', async e => {\n      e.preventDefault();\n      let recaptcha = document.getElementById('g-recaptcha-response');\n      if (isValidName && isValidPhone && isValidEmail && isValidMessage && recaptcha && recaptcha.value !== '') {\n        let params = new FormData(form);\n        if (params.has('g-recaptcha-response')) {\n          params.append('gRecaptchaResponse', params.get('g-recaptcha-response'));\n          params.delete('g-recaptcha-response');\n        }\n        let response = await fetch(form.action, {\n          method: 'POST',\n          body: params,\n          headers: {\n            'Accept': 'application/json'\n          }\n        });\n        if (response.ok) {\n          document.querySelector(\".form-contacts__form\").innerHTML = '<div class=\"alert alert-success\">Сообщение отправлено<div>';\n        } else {\n          document.querySelector(\".form-contacts__messages\").innerHTML = '<div class=\"alert alert-danger\">Ошибка отправки сообщения.<div>';\n        }\n      }\n    });\n  }\n  showMore() {\n    const moreText = document.getElementById(\"more-info-contacts__txt\"),\n      btnText = document.getElementById(\"more-info-contacts__btn\");\n    let moreTextStyle = window.getComputedStyle(moreText);\n    if (moreTextStyle.display === \"none\") {\n      btnText.innerHTML = \"Свернуть\";\n      moreText.classList.add('d-inline');\n    } else {\n      btnText.innerHTML = \"Читать далее\";\n      moreText.classList.remove('d-inline');\n    }\n  }\n  #validate(regex, inp) {\n    // return regex.test(inp)\n    return inp.match(regex);\n  }\n  #notValidate(inp, elem, message) {\n    elem.textContent = message;\n  }\n  #valid(inp, elem, message) {\n    elem.textContent = message;\n  }\n}\n\n//# sourceURL=webpack://po-fakel/./src/templates/contacts/js/contacts.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://po-fakel/./src/scss/app.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/app.scss");
/******/ 	
/******/ })()
;