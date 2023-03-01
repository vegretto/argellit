/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./scripts/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/main-bg.jpg":
/*!*************************!*\
  !*** ./img/main-bg.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/main-bg.jpg\");\n\n//# sourceURL=webpack:///./img/main-bg.jpg?");

/***/ }),

/***/ "./img/map-mark.png":
/*!**************************!*\
  !*** ./img/map-mark.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/map-mark.png\");\n\n//# sourceURL=webpack:///./img/map-mark.png?");

/***/ }),

/***/ "./img/svg/calculator.svg":
/*!********************************!*\
  !*** ./img/svg/calculator.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/calculator.svg\");\n\n//# sourceURL=webpack:///./img/svg/calculator.svg?");

/***/ }),

/***/ "./img/svg/close.svg":
/*!***************************!*\
  !*** ./img/svg/close.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/close.svg\");\n\n//# sourceURL=webpack:///./img/svg/close.svg?");

/***/ }),

/***/ "./img/svg/fractions-phone.svg":
/*!*************************************!*\
  !*** ./img/svg/fractions-phone.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/fractions-phone.svg\");\n\n//# sourceURL=webpack:///./img/svg/fractions-phone.svg?");

/***/ }),

/***/ "./img/svg/kg.svg":
/*!************************!*\
  !*** ./img/svg/kg.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/kg.svg\");\n\n//# sourceURL=webpack:///./img/svg/kg.svg?");

/***/ }),

/***/ "./img/svg/logo.svg":
/*!**************************!*\
  !*** ./img/svg/logo.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/logo.svg\");\n\n//# sourceURL=webpack:///./img/svg/logo.svg?");

/***/ }),

/***/ "./img/svg/marketing.svg":
/*!*******************************!*\
  !*** ./img/svg/marketing.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/marketing.svg\");\n\n//# sourceURL=webpack:///./img/svg/marketing.svg?");

/***/ }),

/***/ "./img/svg/medal.svg":
/*!***************************!*\
  !*** ./img/svg/medal.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/medal.svg\");\n\n//# sourceURL=webpack:///./img/svg/medal.svg?");

/***/ }),

/***/ "./img/svg/menu.svg":
/*!**************************!*\
  !*** ./img/svg/menu.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/menu.svg\");\n\n//# sourceURL=webpack:///./img/svg/menu.svg?");

/***/ }),

/***/ "./img/svg/price.svg":
/*!***************************!*\
  !*** ./img/svg/price.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/price.svg\");\n\n//# sourceURL=webpack:///./img/svg/price.svg?");

/***/ }),

/***/ "./img/svg/push-cart.svg":
/*!*******************************!*\
  !*** ./img/svg/push-cart.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/push-cart.svg\");\n\n//# sourceURL=webpack:///./img/svg/push-cart.svg?");

/***/ }),

/***/ "./img/svg/receipt.svg":
/*!*****************************!*\
  !*** ./img/svg/receipt.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/receipt.svg\");\n\n//# sourceURL=webpack:///./img/svg/receipt.svg?");

/***/ }),

/***/ "./img/svg/rock.svg":
/*!**************************!*\
  !*** ./img/svg/rock.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/rock.svg\");\n\n//# sourceURL=webpack:///./img/svg/rock.svg?");

/***/ }),

/***/ "./img/svg/truck.svg":
/*!***************************!*\
  !*** ./img/svg/truck.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/truck.svg\");\n\n//# sourceURL=webpack:///./img/svg/truck.svg?");

/***/ }),

/***/ "./img/svg/wheat.svg":
/*!***************************!*\
  !*** ./img/svg/wheat.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/wheat.svg\");\n\n//# sourceURL=webpack:///./img/svg/wheat.svg?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_svg_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/svg/logo.svg */ \"./img/svg/logo.svg\");\n/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-lazyload */ \"../node_modules/vanilla-lazyload/dist/lazyload.min.js\");\n/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_svg_medal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/svg/medal.svg */ \"./img/svg/medal.svg\");\n/* harmony import */ var _img_svg_kg_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/svg/kg.svg */ \"./img/svg/kg.svg\");\n/* harmony import */ var _img_svg_truck_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/svg/truck.svg */ \"./img/svg/truck.svg\");\n/* harmony import */ var _img_svg_rock_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/svg/rock.svg */ \"./img/svg/rock.svg\");\n/* harmony import */ var _img_svg_wheat_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/svg/wheat.svg */ \"./img/svg/wheat.svg\");\n/* harmony import */ var _img_svg_marketing_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/svg/marketing.svg */ \"./img/svg/marketing.svg\");\n/* harmony import */ var _img_svg_price_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/svg/price.svg */ \"./img/svg/price.svg\");\n/* harmony import */ var _img_svg_calculator_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/svg/calculator.svg */ \"./img/svg/calculator.svg\");\n/* harmony import */ var _img_svg_push_cart_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/svg/push-cart.svg */ \"./img/svg/push-cart.svg\");\n/* harmony import */ var _img_svg_receipt_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/svg/receipt.svg */ \"./img/svg/receipt.svg\");\n/* harmony import */ var _img_svg_close_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/svg/close.svg */ \"./img/svg/close.svg\");\n/* harmony import */ var _img_svg_fractions_phone_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/svg/fractions-phone.svg */ \"./img/svg/fractions-phone.svg\");\n/* harmony import */ var _img_svg_menu_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/svg/menu.svg */ \"./img/svg/menu.svg\");\n/* harmony import */ var _img_map_mark_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/map-mark.png */ \"./img/map-mark.png\");\n/* harmony import */ var _img_main_bg_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/main-bg.jpg */ \"./img/main-bg.jpg\");\n/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! imask */ \"../node_modules/imask/esm/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a({});\n/*Accordion Vanilla JS*/\n\nvar slideUp = function slideUp(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.transitionProperty = 'height, margin, padding';\n  target.style.transitionDuration = duration + 'ms';\n  target.style.boxSizing = 'border-box';\n  target.style.height = target.offsetHeight + 'px';\n  target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  window.setTimeout(function () {\n    target.style.display = 'none';\n    target.style.removeProperty('height');\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property');\n  }, duration);\n};\n\nvar slideDown = function slideDown(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.removeProperty('display');\n  var display = window.getComputedStyle(target).display;\n  if (display === 'none') display = 'block';\n  target.style.display = display;\n  var height = target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  target.offsetHeight;\n  target.style.boxSizing = 'border-box';\n  target.style.transitionProperty = \"height, margin, padding\";\n  target.style.transitionDuration = duration + 'ms';\n  target.style.height = height + 'px';\n  target.style.removeProperty('padding-top');\n  target.style.removeProperty('padding-bottom');\n  target.style.removeProperty('margin-top');\n  target.style.removeProperty('margin-bottom');\n  window.setTimeout(function () {\n    target.style.removeProperty('height');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property');\n  }, duration);\n};\n\nvar slideToggle = function slideToggle(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n\n  if (window.getComputedStyle(target).display === 'none') {\n    return slideDown(target, duration);\n  } else {\n    return slideUp(target, duration);\n  }\n};\n\ndocument.querySelectorAll('.accordion > li > a').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    e.preventDefault();\n    var currentListItem = item.closest('li');\n    var dropDown = currentListItem.querySelector('.accordion-content');\n\n    if (currentListItem.className === 'active') {\n      currentListItem.classList.remove(\"active\");\n    } else {\n      currentListItem.classList.add(\"active\");\n    }\n\n    slideToggle(dropDown, 500);\n  });\n});\n/*end accordion*/\n\n/*Modals */\n\ndocument.querySelectorAll('.js-open-modal').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    if (item.getAttribute('data-modal') === 'compact') {\n      document.querySelector('.modal-callback--sm').classList.add(\"modal-active\"); // setTimeout(() => {\n      //     hideOnClickOutside(document.querySelector('.modal-callback--sm .modal__inner'))\n      // }, )\n    } else if (item.getAttribute('data-modal') === 'full') {\n      if (window.screen.width > 1199) {\n        document.querySelector('.modal-callback--big').classList.add(\"modal-active\");\n        document.querySelectorAll('.modal-callback--big .callback-input-radio').forEach(function (radioItem) {\n          if (item.getAttribute('data-choosen-fraction') === radioItem.value) {\n            radioItem.checked = true;\n            radioItem.closest('.form-group').querySelector('label').click();\n          }\n        }); // setTimeout(() => {\n        //     hideOnClickOutside(document.querySelector('.modal-callback--big .modal__inner'))\n        // }, )\n      } else {\n        document.querySelector('.modal-callback--sm').classList.add(\"modal-active\"); // setTimeout(() => {\n        //     hideOnClickOutside(document.querySelector('.modal-callback--sm .modal__inner'))\n        // }, )\n      }\n    }\n\n    document.querySelector('html').setAttribute('style', 'overflow-y:hidden');\n  });\n});\ndocument.querySelectorAll('.js-close-modal').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    item.closest('.modal').classList.remove(\"modal-active\");\n    document.querySelector('html').setAttribute('style', 'overflow-y:scroll');\n    document.removeEventListener('click', outsideClickListener);\n  });\n});\ndocument.querySelectorAll('.modal__bg').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    item.closest('.modal').classList.remove(\"modal-active\");\n    document.querySelector('html').setAttribute('style', 'overflow-y:scroll');\n  });\n}); // let outsideClickListener;\n//\n// function hideOnClickOutside(element) {\n//     outsideClickListener = event => {\n//         if (!element.contains(event.target) && isVisible(element)) {\n//             element.closest('.modal').classList.remove(\"modal-active\");\n//             document.querySelector('html').setAttribute('style','overflow-y:scroll')\n//             removeClickListener()\n//         }\n//     }\n//\n//     const removeClickListener = () => {\n//         document.removeEventListener('click', outsideClickListener)\n//     }\n//\n//     document.addEventListener('click', outsideClickListener)\n// }\n//\n// const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length )\n\ndocument.querySelectorAll('.submit-btn').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (!item.classList.contains('submit-btn--delivery')) {\n      item.closest('.modal').classList.remove('modal-active');\n    }\n\n    document.querySelector('.modal-success').classList.add('modal-active');\n  });\n});\ndocument.querySelector('.footer__agreements__ua').addEventListener('click', function (e) {\n  e.preventDefault();\n  document.querySelector('.modal-policies--user-agreement').classList.add('modal-active'); // setTimeout(() => {\n  //     hideOnClickOutside(document.querySelector('.modal-policies--user-agreement .modal__inner'))\n  // }, )\n\n  document.querySelector('html').setAttribute('style', 'overflow-y:hidden');\n});\ndocument.querySelector('.footer__agreements__pp').addEventListener('click', function (e) {\n  e.preventDefault();\n  document.querySelector('.modal-policies--privacy-policy').classList.add('modal-active'); // setTimeout(() => {\n  //     hideOnClickOutside(document.querySelector('.modal-policies--privacy-policy .modal__inner'))\n  // }, )\n\n  document.querySelector('html').setAttribute('style', 'overflow-y:hidden');\n});\n/* End modals */\n\n/* Forms */\n\nvar inputs = document.querySelectorAll('.js-callback-input');\n\nwindow.onload = function () {\n  inputs.forEach(function (item) {\n    if (item.value.length) {\n      item.closest('.form-group').classList.add('form-group--filled');\n    }\n  });\n};\n\ninputs.forEach(function (item) {\n  item.addEventListener('focusout', function (e) {\n    if (item.value.length) {\n      item.closest('.form-group').classList.add('form-group--filled');\n    } else {\n      item.closest('.form-group').classList.remove('form-group--filled');\n    }\n  });\n});\ndocument.querySelectorAll('#callback-question-big, #delivery-and-payment-question').forEach(function (item) {\n  item.addEventListener('focusout', function (e) {\n    item.closest('.form-group').querySelector('label').style.display = 'none';\n  });\n});\ndocument.querySelectorAll('.delivery-and-payment .input-in-radio-label').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    item.closest('.form-group').querySelectorAll('.delivery-input-radio').forEach(function (item) {\n      item.checked = false;\n    });\n    item.closest('.form-group').querySelector('.delivery-input-radio').checked = true;\n  });\n  setTimeout(function () {\n    item.closest('.form-group').querySelector('.js-input-in-radio').addEventListener('focusout', function (e) {\n      var val = item.closest('.form-group').querySelector('.input-in-radio').value;\n      item.closest('.form-group').querySelector('.delivery-input-radio').value = val;\n      item.closest('.form-group').querySelector('.delivery-input-radio').checked = true;\n      item.closest('.form-group').querySelector('.input-in-radio-label').textContent = val;\n      item.closest('.form-group').querySelector('.input-in-radio-label').click();\n    });\n  });\n});\ndocument.querySelectorAll('.modal .input-in-radio-label').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    item.closest('.form-group').querySelectorAll('.callback-input-radio').forEach(function (item) {\n      item.checked = false;\n    });\n    item.closest('.form-group').querySelector('.modal-callback__fractions .callback-input-radio').checked = true;\n  });\n  setTimeout(function () {\n    item.closest('.form-group').querySelector('.js-input-in-radio').addEventListener('focusout', function (e) {\n      console.log(1);\n      var val = item.closest('.form-group').querySelector('.input-in-radio').value;\n      item.closest('.form-group').querySelector('.callback-input-radio').value = val;\n      item.closest('.form-group').querySelector('.callback-input-radio').checked = true;\n      item.closest('.form-group').querySelector('.input-in-radio-label').textContent = val;\n      item.closest('.form-group').querySelector('.input-in-radio-label').click();\n    });\n  });\n});\n/* End forms */\n\n/* Additional form open in small modal */\n\nvar additionalButton = document.querySelector('.js-additional-button');\nadditionalButton.addEventListener('click', function (e) {\n  e.preventDefault();\n\n  if (additionalButton.classList.contains('opened')) {\n    document.querySelector('.modal-callback__additional-data').classList.remove('opened');\n    document.querySelector('.modal-callback--sm').classList.remove('opened');\n    additionalButton.classList.remove('opened');\n    document.querySelector('.hiding-btn').style.display = 'inline-block';\n  } else {\n    document.querySelector('.modal-callback__additional-data').classList.add('opened');\n    document.querySelector('.modal-callback--sm').classList.add('opened');\n    document.querySelector('html').setAttribute('style', 'overflow-y:hidden');\n    additionalButton.classList.add('opened');\n    document.querySelector('.hiding-btn').style.display = 'none';\n  }\n});\n/* End Additional form open in small modal */\n\n/* Form textarea completion */\n\nvar fractionSize = \"Размер фракции:\";\nvar materialQuantity = \"\\nКоличество материала:\";\nvar payment = \"\\nОплата:\";\nvar address = \"\\nАдрес доставки:\";\nvar fractionSizeChanged = false;\nvar materialQuantityChanged = false;\nvar paymentChanged = false;\nvar cityChanged = false;\nvar streetChanged = false;\nvar cityValue = \"\";\nvar streetValue = \"\";\nvar fieldChanged = false;\ndocument.querySelectorAll('.modal-callback--big .modal-callback__fractions label').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    if (fractionSizeChanged || fieldChanged) {\n      fractionSize = \"Размер фракции:\";\n    }\n\n    var newValue = item.textContent;\n    var userData = document.querySelector('.modal-callback--big textarea').value.split('Размер')[0].trim();\n    fractionSize = fractionSize + \" \" + newValue;\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    item.closest('.modal__inner').querySelector('textarea').value = textAreaAddition;\n    fractionSizeChanged = true;\n  });\n});\nvar materialField = document.querySelector('#callback-amount-big');\nmaterialField.addEventListener('blur', function (e) {\n  var newValue = materialField.value;\n  var userData = document.querySelector('.modal-callback--big textarea').value.split('Размер')[0].trim();\n  ;\n\n  if (newValue && !isNaN(newValue)) {\n    if (materialQuantityChanged) {\n      materialQuantity = \"\\nКоличество материала:\";\n    }\n\n    materialQuantity = materialQuantity + \" \" + newValue + \" кг\";\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    materialField.closest('.modal__inner').querySelector('textarea').value = textAreaAddition;\n    materialQuantityChanged = true;\n    fieldChanged = true;\n  } else {\n    var _textAreaAddition = userData + fractionSize + materialQuantity + payment + address;\n\n    materialField.closest('.modal__inner').querySelector('textarea').value = _textAreaAddition;\n  }\n});\ndocument.querySelectorAll('.radio-label--modal').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    if (paymentChanged) {\n      payment = \"\\nОплата:\";\n    }\n\n    var newValue = item.textContent;\n    var userData = document.querySelector('.modal-callback--big textarea').value.split('Размер')[0].trim();\n    ;\n    payment = payment + \" \" + newValue;\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    item.closest('.modal__inner').querySelector('textarea').value = textAreaAddition;\n    paymentChanged = true;\n    fieldChanged = true;\n  });\n});\nvar cityField = document.querySelector('#callback-city-big');\ncityField.addEventListener('focusout', function (e) {\n  cityValue = cityField.value;\n  var userData = document.querySelector('.modal-callback--big textarea').value.split('Размер')[0].trim();\n  ;\n\n  if (cityValue !== \"\") {\n    if (cityChanged) {\n      address = \"\\nАдрес доставки:\" + \" \" + cityValue + \", \" + streetValue;\n    } else {\n      address = address + \" \" + cityValue;\n    }\n\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    cityField.closest('.modal__inner').querySelector('textarea').value = textAreaAddition;\n    cityChanged = true;\n    fieldChanged = true;\n  } else {\n    var _textAreaAddition2 = userData + fractionSize + materialQuantity + payment + address;\n\n    cityField.closest('.modal__inner').querySelector('textarea').value = _textAreaAddition2;\n  }\n});\nvar streetField = document.querySelector('#callback-street-big');\nstreetField.addEventListener('focusout', function (e) {\n  streetValue = streetField.value;\n  var userData = document.querySelector('.modal-callback--big textarea').value.split('Размер')[0].trim();\n  ;\n\n  if (streetValue !== \"\") {\n    if (streetChanged) {\n      address = \"\\nАдрес доставки:\" + \" \" + cityValue;\n    }\n\n    address = address + \", \" + streetValue;\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    streetField.closest('.modal__inner').querySelector('textarea').value = textAreaAddition;\n    streetChanged = true;\n    fieldChanged = true;\n  } else {\n    var _textAreaAddition3 = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n\n    streetField.closest('.modal__inner').querySelector('textarea').value = _textAreaAddition3;\n  }\n});\ndocument.querySelectorAll('.delivery-and-payment__fractions label').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    if (fractionSizeChanged || fieldChanged) {\n      fractionSize = \"Размер фракции:\";\n    }\n\n    var newValue = item.textContent;\n    var userData = document.querySelector('.delivery-and-payment textarea').value.split('Размер')[0].trim();\n    fractionSize = fractionSize + \" \" + newValue;\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    item.closest('.delivery-and-payment__form-container').querySelector('textarea').value = textAreaAddition;\n    fractionSizeChanged = true;\n  });\n});\nvar deliveryMaterialField = document.querySelector('#delivery-and-payment-amount');\ndeliveryMaterialField.addEventListener('blur', function (e) {\n  var newValue = deliveryMaterialField.value;\n  var userData = document.querySelector('.delivery-and-payment textarea').value.split('Размер')[0].trim();\n\n  if (newValue && !isNaN(newValue)) {\n    if (materialQuantityChanged) {\n      materialQuantity = \"\\nКоличество материала:\";\n    }\n\n    materialQuantity = materialQuantity + \" \" + newValue + \" кг\";\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    deliveryMaterialField.closest('.delivery-and-payment__form-container').querySelector('textarea').value = textAreaAddition;\n    materialQuantityChanged = true;\n    fieldChanged = true;\n  } else {\n    var _textAreaAddition4 = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n\n    deliveryMaterialField.closest('.delivery-and-payment__form-container').querySelector('textarea').value = _textAreaAddition4;\n  }\n});\ndocument.querySelectorAll('.radio-label--delivery').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    if (paymentChanged) {\n      payment = \"\\nОплата:\";\n    }\n\n    var newValue = item.textContent;\n    var userData = document.querySelector('.delivery-and-payment textarea').value.split('Размер')[0].trim();\n    payment = payment + \" \" + newValue;\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    item.closest('.delivery-and-payment__form-container').querySelector('textarea').value = textAreaAddition;\n    paymentChanged = true;\n    fieldChanged = true;\n  });\n});\nvar cityFieldDelivery = document.querySelector('#delivery-and-payment-city');\ncityFieldDelivery.addEventListener('focusout', function (e) {\n  cityValue = cityFieldDelivery.value;\n  var userData = document.querySelector('.delivery-and-payment textarea').value.split('Размер')[0].trim();\n\n  if (cityValue !== \"\") {\n    if (cityChanged) {\n      address = \"\\nАдрес доставки:\" + \" \" + cityValue + \", \" + streetValue;\n    } else {\n      address = address + \" \" + cityValue;\n    }\n\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    cityFieldDelivery.closest('.delivery-and-payment__form-container').querySelector('textarea').value = textAreaAddition;\n    cityChanged = true;\n    fieldChanged = true;\n  } else {\n    var _textAreaAddition5 = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n\n    cityFieldDelivery.closest('.delivery-and-payment__form-container').querySelector('textarea').value = _textAreaAddition5;\n  }\n});\nvar streetFieldDelivery = document.querySelector('#delivery-and-payment-street');\nstreetFieldDelivery.addEventListener('focusout', function (e) {\n  streetValue = streetFieldDelivery.value;\n  var userData = document.querySelector('.delivery-and-payment textarea').value.split('Размер')[0].trim();\n\n  if (streetValue !== \"\") {\n    if (streetChanged) {\n      address = \"\\nАдрес доставки:\" + \" \" + cityValue;\n    }\n\n    address = address + \", \" + streetValue;\n    var textAreaAddition = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n    streetFieldDelivery.closest('.delivery-and-payment__form-container').querySelector('textarea').value = textAreaAddition;\n    streetChanged = true;\n    fieldChanged = true;\n  } else {\n    var _textAreaAddition6 = userData + \"\\n\\n\\n\\n\" + fractionSize + materialQuantity + payment + address;\n\n    streetFieldDelivery.closest('.delivery-and-payment__form-container').querySelector('textarea').value = _textAreaAddition6;\n  }\n});\n/* END Form textarea completion */\n\ndocument.querySelectorAll('.header__menu a, .header__links a').forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    e.preventDefault();\n    var elementToScroll = document.querySelector(item.hash);\n    elementToScroll.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n\n    if (document.querySelector('.header__top').classList.contains('opened')) {\n      document.querySelector('.header__top').classList.remove('opened');\n      document.querySelector('.header__menu').classList.remove('opened');\n      document.querySelector('body').classList.remove('menu-opened');\n      document.querySelector('.modal__bg--menu').classList.add('closed');\n      document.querySelector('html').setAttribute('style', 'overflow-y:scroll');\n    }\n  });\n});\nvar ndsMore = document.querySelector('.how-to-order__text a');\nndsMore.addEventListener('click', function (e) {\n  e.preventDefault();\n  var elementToScroll = document.querySelector(ndsMore.hash);\n  elementToScroll.closest('li').classList.add('active');\n  slideToggle(elementToScroll.closest('li').querySelector('.accordion-content'), 500);\n  elementToScroll.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n});\ndocument.querySelector('.js-open-mob-menu').addEventListener('click', function (e) {\n  e.preventDefault();\n  document.querySelector('.header__menu').classList.add('opened');\n  document.querySelector('.header__top').classList.add('opened');\n  document.querySelector('body').classList.add('menu-opened');\n  document.querySelector('.modal__bg--menu').classList.remove('closed');\n  document.querySelector('html').setAttribute('style', 'overflow-y:hidden');\n});\ndocument.querySelector('.js-close-mob-menu').addEventListener('click', function (e) {\n  e.preventDefault();\n  document.querySelector('.header__menu').classList.remove('opened');\n  document.querySelector('.header__top').classList.remove('opened');\n  document.querySelector('body').classList.remove('menu-opened');\n  document.querySelector('.modal__bg--menu').classList.add('closed');\n  document.querySelector('html').setAttribute('style', 'overflow-y:scroll');\n});\nvar phoneInputs = document.querySelectorAll(\"input[type='tel']\");\nvar maskOptions = {\n  mask: '+{7}(000)000-00-00'\n};\nphoneInputs.forEach(function (element) {\n  var mask = Object(imask__WEBPACK_IMPORTED_MODULE_18__[\"default\"])(element, maskOptions);\n});\n/* Yandex Map */\n\nymaps.ready(init);\n\nfunction init() {\n  var myMap = new ymaps.Map(\"contacts-map\", {\n    center: [53.999013, 86.590851],\n    controls: [],\n    zoom: 12\n  }),\n      myPlacemark = new ymaps.Placemark([54.000288, 86.632771], {\n    hintContent: 'Собственный значок метки',\n    balloonContent: '<div class=\"map-balloon\">' + '<h3>ООО «Аргеллит»</h3>' + '<p>Производство и главный офис предприятия.<br>Отсюда происходит отгрузка и доставка заказов</p>' + '</div>' + '</div>'\n  }, {\n    iconLayout: 'default#image',\n    iconImageHref: _img_map_mark_png__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n    iconImageSize: [63, 83],\n    iconImageOffset: [-30, -100]\n  }),\n      myPlacemarkWithContent = new ymaps.Placemark([53.997737, 86.548932], {\n    hintContent: 'Собственный значок метки с контентом',\n    balloonContent: '<div class=\"map-balloon\">' + '<h3>ООО Торговый дом «Аргеллит»</h3>' + '<p>Единственный торговый представитель</p>' + '</div>' + '</div>'\n  }, {\n    iconLayout: 'default#imageWithContent',\n    iconImageHref: _img_map_mark_png__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n    iconImageSize: [63, 83],\n    iconImageOffset: [-30, -100]\n  });\n  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);\n\n  if (window.screen.width < 600) {\n    myMap.behaviors.disable('scrollZoom');\n  }\n}\n/* End Yandex Map */\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ })

/******/ });