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

eval("new Swiper(\".main-names .card-slider\", {\n  loop: true,\n  slidesPerView: 1,\n  breakpoints: {\n    576: {\n      slidesPerView: 2,\n      spaceBetween: 20\n    },\n    768: {\n      slidesPerView: 3,\n      spaceBetween: 20\n    },\n    992: {\n      slidesPerView: 4,\n      spaceBetween: 30\n    },\n    1200: {\n      slidesPerView: 5,\n      spaceBetween: 40\n    }\n  },\n  grabCursor: true,\n  navigation: {\n    nextEl: \".swiper-button-right\",\n    prevEl: \".swiper-button-left\"\n  },\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true\n  }\n});\nnew Swiper(\".aboutus__slider\", {\n  loop: true,\n  slidesPerView: 1,\n  grabCursor: true,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true\n  },\n  scrollbar: {\n    el: \".swiper-scrollbar\"\n  }\n});\n\n//# sourceURL=webpack://po-fakel/./src/components/card-slider/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_card_slider_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/components/card-slider/index */ \"./src/components/card-slider/index.js\");\n/* harmony import */ var _src_components_card_slider_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_card_slider_index__WEBPACK_IMPORTED_MODULE_0__);\n\nwindow.myFunction = function () {\n  document.getElementById(\"myDropdown\").classList.toggle(\"show\");\n  document.getElementById(\"vectorId-up\").classList.toggle(\"hide\");\n};\n// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.\n\nconst button = document.querySelector(\".section__button_type_unfold\");\nconst text = document.querySelectorAll(\".section__text\");\nconst unfold = () => {\n  [...text].map(i => i.classList.toggle(\"section__text_type_unfold\"));\n  button.classList.toggle(\"section__button_type_unfold_active\");\n  const buttonActive = document.querySelector(\".section__button_type_unfold_active\");\n  buttonActive.textContent = \"СВЕРНУТЬ\";\n  if (!buttonActive) {\n    button.textContent = \"РАЗВЕРНУТЬ\";\n  }\n};\nbutton.addEventListener(\"click\", () => unfold());\n\n//# sourceURL=webpack://po-fakel/./src/js/app.js?");

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