/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/La-Pergola-photo6016eee5a4044-1440x810-1.jpg */ \"./src/images/La-Pergola-photo6016eee5a4044-1440x810-1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Common Styles */\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', cursive;\r\n    line-height: 1.6;\r\n    background-color: #f4f4f4;\r\n    overflow-x: hidden;\r\n    min-height: 100vh;\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n\r\n\r\n/* Header */\r\nheader {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    position: relative;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-color: #333;\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n    opacity: 0;\r\n    animation: fadeIn 1s ease-in-out forwards;\r\n    animation: fadeInScale 1s ease-in-out forwards;\r\n    animation-delay: 0.5s;\r\n}\r\n\r\n\r\nh1 {\r\n    font-family: 'Allura', cursive;\r\n    font-size: 3.0rem;\r\n    /* color: #fff; */\r\n    padding: 20px;\r\n    /* background: rgba(0, 0, 0, 0.5); */\r\n    /* border-radius: 15px; */\r\n    /* box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); */\r\n    /* transition: all 0.3s ease-in-out;\r\n    cursor: pointer; */\r\n}\r\n\r\n\r\n/* h1 .textSection {\r\n    font-family: 'Allura', cursive;\r\n    color: #fff;\r\n\r\n} */\r\n\r\n/* header h1:hover {\r\n    background: rgba(255, 87, 34, 0.8);\r\n    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);\r\n    transform: scale(1.05);\r\n} */\r\n\r\n\r\n.subheading {\r\n    font-family: 'Allura', cursive;\r\n    font-size: 48px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    color: #fff;\r\n    position: relative;\r\n    top: -120px;\r\n}\r\n\r\n.interactive-heading {\r\n    font-family: 'Allura', sans-serif;\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    color: #000;\r\n    position: relative;\r\n    margin-top: -120px;\r\n    cursor: pointer;\r\n    transition: color 0.3s;\r\n    background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(0,0,0,0.05));\r\n}\r\n\r\n.interactive-heading:hover {\r\n    color: #ff7043;\r\n    text-decoration: underline;\r\n}\r\n\r\n/* Navigation */\r\nnav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 1000;\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\nnav .nav-title {\r\n    position: absolute;\r\n    left: 20px;\r\n    font-family: 'Allura', cursive;\r\n    font-size: 2.5rem;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 10px;\r\n    display: inline-block;\r\n    transition: all 0.3s ease-in-out;\r\n    cursor: pointer;\r\n    background: none;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n}\r\n\r\nnav .nav-title:hover {\r\n    color: #ff7043;\r\n    transform: scale(1.05);\r\n    background: none;\r\n    box-shadow: none;\r\n}\r\n\r\nnav button {\r\n    margin: 0 15px;\r\n    padding: 12px 24px;\r\n    background-color: transparent;\r\n    color: #fff;\r\n    border: 2px solid rgba(255, 255, 255, 0.7);\r\n    border-radius: 12px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    transition: all 0.3s ease-in-out;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n    backdrop-filter: blur(5px);\r\n    cursor: pointer;\r\n}\r\n\r\nnav button:hover {\r\n    background-color: rgba(255, 87, 34, 0.9);\r\n    border-color: rgba(255, 87, 34, 1);\r\n    transform: translateY(-4px) scale(1.05);\r\n    box-shadow: 0px 10px 20px rgba(255, 87, 34, 0.4);\r\n}\r\n\r\nnav button:active {\r\n    transform: translateY(1px);\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* Menu */\r\n\r\n.menu-container {\r\n    padding: 20px;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    border: 2px solid rgba(0, 0, 0, 0.1); \r\n    border-radius: 15px;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n    margin-top: 20px; \r\n}\r\n\r\n\r\n\r\n.menu-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 800px;\r\n    margin: auto;\r\n    transform: translateY(-100px);\r\n}\r\n\r\n.menu-item {\r\n    animation: none;\r\n    background-size: cover;\r\n    background-position: center;\r\n    width: 100%;\r\n    height: 200px;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n    position: relative;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-shadow: none;\r\n    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); */\r\n    transition: none;\r\n    /* transition: transform 0.3s ease-in-out; */\r\n    border-radius: 15px;\r\n    box-shadow: none;\r\n    /* box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.menu-item:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.menu-text {\r\n    background: rgba(0, 0, 0, 0.6);\r\n    padding: 10px;\r\n    width: 100%;\r\n    text-align: center;\r\n    border-radius: inherit;\r\n    /* transition: background-color 0.3s ease-in-out; */\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-item:hover .menu-text {\r\n    background: rgba(255, 87, 34, 0.8);\r\n}\r\n\r\n/* contacts */\r\n\r\n.contact {\r\n    position: relative;\r\n    background: white;\r\n    padding: 2rem;\r\n    z-index: 20;\r\n}\r\n\r\n.info-section {\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.main-title {\r\n    font-size: 2rem;\r\n    color: #333;\r\n    font-weight: bold;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.info-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.info-card {\r\n    background: rgba(20, 20, 20, 0.8);\r\n    border-radius: 15px;\r\n    padding: 20px;\r\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);\r\n    width: 250px;\r\n    text-align: center;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.info-card:hover {\r\n    transform: scale(1.08);\r\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.icon {\r\n    font-size: 40px;\r\n    color: #ff7043;\r\n    text-shadow: 0px 4px 10px rgba(255, 87, 34, 0.8);\r\n}\r\n\r\n.info-card h2 {\r\n    font-size: 1.4rem;\r\n    color: #fff;\r\n    margin: 10px 0;\r\n}\r\n\r\n.info-card p {\r\n    font-size: 1rem;\r\n    color: #ccc;\r\n    line-height: 1.5;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .info-container {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n/* modal card in menu */\r\n\r\n.modal, .confirmation-modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    z-index: 1000;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-content {\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    text-align: center;\r\n    width: 350px;\r\n    position: relative;\r\n}\r\n\r\n.modal-content img {\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.quantity-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #f8f9fa;\r\n    padding: 6px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.quantity-btn {\r\n    background: linear-gradient(135deg, #007bff, #0056b3);\r\n    color: #fff;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.quantity-btn:hover {\r\n    background: linear-gradient(135deg, #0056b3, #004080);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.quantity-input {\r\n    width: 50px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: bold;;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n}\r\n\r\n.quantity-input::-webkit-outer-spin-button,\r\n.quantity-input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.confirmation-content {\r\n    text-align: center;\r\n}\r\n\r\n.confirmation-content .icon {\r\n    font-size: 50px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.confirmation-content h2 {\r\n    color: green;\r\n}\r\n\r\n.close-btn, .close-confirm {\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 20px;\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n.order-confirm, .order-cancel {\r\n    padding: 10px 20px;\r\n    margin: 5px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\nbutton {\r\n    padding: 10px 16px;\r\n    margin: 8px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    transition: all 0.3s ease-in-out;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbutton.order-confirm {\r\n    background: linear-gradient(135deg, #28a745, #218838);\r\n    color: #fff;\r\n}\r\n\r\nbutton.order-cancel, button.close-confirm-btn {\r\n    background: linear-gradient(135deg, #dc3545, #c82333);\r\n    color: #fff;\r\n}\r\n\r\nbutton:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);\r\n    opacity: 0.9;\r\n}\r\n\r\nbutton:active {\r\n    transform: translateY(1px);\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* About Us */ \r\n\r\n.about-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    gap: 50px;\r\n    padding: 75px;\r\n    background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(0,0,0,0.05));\r\n}\r\n\r\n/* text block styles */\r\n\r\n.about-text {\r\n    flex: 1;\r\n    max-width: 600px;\r\n    font-size: 18px;\r\n    line-height: 1.6;\r\n    overflow: visible;\r\n    word-wrap: break-word;\r\n    color: #000;\r\n}\r\n\r\n.about-text h1 {\r\n    font-size: 2.5em;\r\n    margin-bottom: 20px;\r\n    /* font-size: 36px;\r\n    margin-bottom: 15px; */\r\n}\r\n\r\n.about-text p {\r\n    font-size: 1.2em;\r\n    margin-bottom: 15px;\r\n    /* font-size: 18px;\r\n    line-height: 1.6; */\r\n}\r\n\r\n\r\n/* reservations block styles */\r\n\r\n.reservation-form {\r\n    flex: 1;\r\n    max-width: 40%;\r\n    background: rgba(20, 20, 20, 0.9);\r\n    color: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3)\r\n}\r\n\r\n.reservation-form form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.reservation-form label {\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n}\r\n\r\n.reservation-form input,\r\n.reservation-form textarea {\r\n    margin-top: 5px;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border: 1px solid rgba(255, 255, 255, 0.5);\r\n    color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.reservation-form input::placeholder,\r\n.reservation-form textarea::placeholder {\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n\r\n.reservation-form button {\r\n    background-color: #e63946;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    font-size: 16px;\r\n    margin-top: 15px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.reservation-form button:hover {\r\n    background-color: #c62828;\r\n}\r\n\r\n/* modal-reservations */\r\n\r\n.modal-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 9999;\r\n}\r\n\r\n.modalAbout-content {\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    width: 300px;\r\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.modalAbout-content button {\r\n    margin-top: 10px;\r\n    padding: 10px 20px;\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modalAbout-content button:hover {\r\n    background-color: #0056b3;\r\n}\r\n\r\n\r\n/* footer */\r\n\r\nfooter {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.5);\r\n    z-index: 10;\r\n}\r\n\r\n.main-content {\r\n    padding-bottom: 0px;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n}\r\n\r\n.footer:hover {\r\n    background: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.footer p {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\nfooter a {\r\n    color: #ffa726;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    transition: color 0.3s ease, text-shadow 0.3s ease;\r\n}\r\n\r\nfooter a:hover {\r\n    color: #ffcc00;\r\n    text-shadow: 0px 0px 10px #ffcc00;\r\n}\r\n\r\n.footer p span {\r\n    margin-left: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.price {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.fade-out {\r\n    opacity: 0;\r\n    transform: translateY(10px);\r\n    filter: blur(5px);\r\n    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, filter 0.3s ease-in-out;\r\n}\r\n\r\n.fade-in {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n    filter: blur(0);\r\n    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out;\r\n}\r\n\r\n\r\n/* Header Animation */\r\n@keyframes fadeInScale {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-10px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n/* Button Animation */\r\n\r\n@keyframes fadeSlideIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-10px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n/* Typing Effect */\r\n\r\n\r\n.typing {\r\n    border-right: none;\r\n    animation: none;\r\n}\r\n\r\n@keyframes typing {\r\n    from {\r\n        width: 0;\r\n    }\r\n    to {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    50% {\r\n        border-color: transparent;\r\n    }\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutUs: () => (/* binding */ loadAboutUs)\n/* harmony export */ });\nfunction loadAboutUs() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('about-container');\r\n    \r\n\r\n    // const heading = document.createElement('h1');\r\n    const textSection = document.createElement('div');\r\n    textSection.classList.add('about-text');\r\n    textSection.innerHTML= `\r\n        <h1 class=\"textSection\">Our Story</h1>\r\n        <p>\r\n            Welcome to our family-owned Italian restaurant! \r\n            For over 30 years, we've been serving traditional Italian cuisine, made with love and passion.\r\n        </p>\r\n        <p>\r\n            Our chef brings the authentic taste of Italy, using only the finest ingredients and secret recipes passed down through generations.\r\n        </p>\r\n        <p>\r\n            Every dish tells a story of tradition and quality, ensuring a memorable dining experience.\r\n        </p>\r\n    `;\r\n\r\n\r\n    const formSection = document.createElement('div');\r\n    formSection.classList.add('reservation-form');\r\n    formSection.innerHTML = `\r\n        <h2>Reserve a Table</h2>\r\n        <form id=\"reservation-form\">\r\n            <label for=\"name\">Your Name:</label>\r\n            <input type=\"text\" id=\"name\" required>\r\n\r\n            <label for=\"phone\">Phone Number:</label>\r\n            <input type=\"tel\" id=\"phone\" required>\r\n\r\n            <label for=\"date\">Date:</label>\r\n            <input type=\"date\" id=\"date\" required>\r\n\r\n            <label for=\"time\">Time:</label>\r\n            <input type=\"time\" id=\"time\" required>\r\n\r\n            <label for=\"message\">Special Request:</label>\r\n            <textarea id=\"message\" rows=\"3\"></textarea>\r\n\r\n            <button type=\"submit\">Reserve Now</button>\r\n        </form>\r\n    `;\r\n\r\n\r\n    const responseMessage = document.createElement('div');\r\n    responseMessage.classList.add('response-message');\r\n    formSection.appendChild(responseMessage);\r\n\r\n    container.appendChild(formSection);\r\n    container.appendChild(textSection);\r\n    \r\n\r\n    const form = formSection.querySelector(\"#reservation-form\");\r\n\r\n    // Add an event handler for the form submission\r\n\r\n    form.addEventListener(\"submit\", async (event) => {\r\n        event.preventDefault(); // Prevent the page from reloading\r\n\r\n        const name = form.querySelector(\"#name\").value.trim();\r\n        const phone = form.querySelector(\"#phone\").value.trim();\r\n        const date = form.querySelector(\"#date\").value;\r\n        const time = form.querySelector(\"#time\").value;\r\n        const message = form.querySelector(\"#message\").value.trim();\r\n        const responseMessage = document.querySelector(\".response-message\");\r\n\r\n        if (!name || !phone || !date || !time) {\r\n            responseMessage.textContent = \"Please fill out all required fields!\";\r\n            responseMessage.style.color = \"red\";\r\n            return;\r\n        }\r\n\r\n        const reservationData = { name, phone, date, time, message};\r\n\r\n        try {\r\n            const response = await fetch(\"/api/reservations\", {\r\n                method: \"POST\",\r\n                headers: { \"Content-Type\": \"application/json\" },\r\n                body: JSON.stringify(reservationData),\r\n            });\r\n\r\n            const result = await response.json();\r\n            if (response.ok) {\r\n                responseMessage.textContent = \"\";\r\n                responseMessage.style.color = \"green\";\r\n                form.reset();\r\n\r\n                showModal(\"Reservation successful!\", \"green\");\r\n            } else {\r\n                responseMessage.textContent = result.error || \"Something went wrong\";\r\n                responseMessage.style.color = \"red\";\r\n            }\r\n        } catch (error) {\r\n            responseMessage.textContent = \"Server error. Try again later\";\r\n            responseMessage.style.color = \"red\";\r\n        }\r\n    });\r\n\r\n    function showModal(message, color) {\r\n        const modalContainer = document.createElement('div');\r\n        modalContainer.classList.add('modal-container');\r\n\r\n        const modalContent = document.createElement('div');\r\n        modalContent.classList.add('modalAbout-content');\r\n\r\n        const modalMessage = document.createElement('p');\r\n        modalMessage.textContent = message;\r\n        modalMessage.style.color = color;\r\n\r\n        const closeBtn = document.createElement('button');\r\n        closeBtn.textContent = 'Close';\r\n        closeBtn.addEventListener('click', () => {\r\n            document.body.removeChild(modalContainer);\r\n        });\r\n\r\n        modalContent.appendChild(modalMessage);\r\n        modalContent.appendChild(closeBtn);\r\n        modalContainer.appendChild(modalContent);\r\n        document.body.appendChild(modalContainer);\r\n    }\r\n\r\n\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\r\n    const footer = document.getElementById('footer');\r\n    footer.innerHTML = `\r\n        <p>Copiright &copy; \r\n            <a href=\"https://github.com/aleksfeschuk/Restaurant-Page\" target=\"_blank\">\r\n                Oleksandr Feshchuk\r\n            </a>\r\n            <span>2025</span>\r\n        </p>\r\n    `;\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\nfunction createInfoCard(iconClass, title, content) {\r\n    const card = document.createElement('div');\r\n    card.classList.add('info-card');\r\n\r\n    const icon = document.createElement('div');\r\n    icon.classList.add('icon');\r\n    icon.innerHTML = `<i class=\"${iconClass}\"></i>`;\r\n    card.appendChild(icon);\r\n\r\n    const heading = document.createElement('h2');\r\n    heading.textContent = title;\r\n    card.appendChild(heading);\r\n\r\n    const paragraph = document.createElement('p');\r\n    paragraph.textContent = content;\r\n    card.appendChild(paragraph);\r\n\r\n    return card;\r\n}\r\n\r\nfunction loadHome() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('home', 'main-content');\r\n\r\n    const subheading = document.createElement('h2');\r\n    subheading.textContent = 'Experience the best Italian cuisine right here!';\r\n    subheading.classList.add('subheading');\r\n    container.appendChild(subheading);\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Welcome to Cortile Italiano';\r\n    heading.classList.add('interactive-heading'); // Add a class for styling\r\n\r\n    setTimeout(() => heading.classList.remove('typing'), 2000);\r\n\r\n\r\n    heading.addEventListener('click', () => {\r\n        const mainContent = document.querySelector('.main-content');\r\n        mainContent.innerHTML = '';\r\n        mainContent.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_0__.loadAboutUs)());\r\n    });\r\n\r\n    container.appendChild(subheading);\r\n    container.appendChild(heading);\r\n    \r\n\r\n    \r\n    const infoContainer = document.createElement('div');\r\n    infoContainer.classList.add('info-container');\r\n\r\n    const workingHoursCard = createInfoCard(\r\n        'fa fa-clock',\r\n        'Our Working Hours',\r\n        'Monday to Sunday: 11:00 AM - 11:00 PM'\r\n    );\r\n\r\n    const locationCard = createInfoCard(\r\n        'fa fa-map-marker',\r\n        'Our Location',\r\n        'P.za dei Santi Apostoli, 79-70, 00187 Roma RM, Italy'\r\n    );\r\n\r\n    const contactCard = createInfoCard(\r\n        'fa fa-phone',\r\n        'Contact Us',\r\n        'Phone: +39 06 12345678\\nEmail: info@cortileitaliano.com'\r\n    );\r\n\r\n    infoContainer.appendChild(workingHoursCard);\r\n    infoContainer.appendChild(locationCard);\r\n    infoContainer.appendChild(contactCard);\r\n\r\n    container.appendChild(heading);\r\n    container.appendChild(infoContainer);\r\n\r\n    return container;\r\n}\r\n\r\n\r\n\r\n\r\n// function createSchedule() {\r\n//     const schedule = document.createElement('div');\r\n//     schedule.classList.add('schedule');\r\n\r\n//     const heading = document.createElement('h2');\r\n//     heading.textContent = 'Our Working Hours';\r\n//     schedule.appendChild(heading);\r\n\r\n//     const workingHours = document.createElement('p');\r\n//     workingHours.textContent = 'Monday to Sunday: 11:00 AM - 11:00 PM';\r\n//     schedule.appendChild(workingHours);\r\n\r\n//     return schedule;\r\n// }\r\n\r\n// function createLocation() {\r\n//     const location = document.createElement('div');\r\n//     location.classList.add('location');\r\n\r\n//     const heading = document.createElement('h2');\r\n//     heading.textContent = 'Our Location';\r\n//     location.appendChild(heading);\r\n\r\n//     const address = document.createElement('p');\r\n//     address.textContent = 'P.za dei Santi Apostoli, 79-70, 00187 Roma RM, Italy';\r\n//     location.appendChild(address);\r\n\r\n//     // Додаємо карту (Google Maps)\r\n//     const map = document.createElement('iframe');\r\n//     map.src = \"https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=P.za+dei+Santi+Apostoli,+79-70,+00187+Roma+RM,+Italy\";\r\n//     map.width = \"600\";\r\n//     map.height = \"450\";\r\n//     map.style.border = \"0\";\r\n//     map.allowFullscreen = true;\r\n//     map.loading = \"lazy\";\r\n//     location.appendChild(map);\r\n\r\n//     return location;\r\n// }\r\n\r\n// function createContacts() {\r\n//     const contacts = document.createElement('div');\r\n//     contacts.classList.add('contacts');\r\n\r\n//     const heading = document.createElement('h2');\r\n//     heading.textContent = 'Contact Us';\r\n//     contacts.appendChild(heading);\r\n\r\n//     const phone = document.createElement('p');\r\n//     phone.textContent = 'Phone: +39 06 12345678';\r\n//     contacts.appendChild(phone);\r\n\r\n//     const email = document.createElement('p');\r\n//     email.textContent = 'Email: info@cortileitaliano.com';\r\n//     contacts.appendChild(email);\r\n\r\n//     return contacts;\r\n// }\r\n\r\n// export function loadHome() {\r\n//     const container = document.createElement('div');\r\n//     container.classList.add('home', 'main-content');\r\n\r\n//     const heading = document.createElement('h1');\r\n//     heading.textContent = 'Welcome to Cortile Italiano';\r\n//     heading.classList.add('typing');\r\n\r\n//     setTimeout(() => heading.classList.remove('typing'), 2000);\r\n\r\n//     const paragraph = document.createElement('p');\r\n//     paragraph.textContent = 'Experience the best Italian cuisine right here!';\r\n\r\n//     const schedule = createSchedule();\r\n//     const location = createLocation();\r\n//     const contacts = createContacts();\r\n\r\n//     container.appendChild(heading);\r\n//     container.appendChild(paragraph);\r\n//     container.appendChild(schedule);\r\n//     container.appendChild(location);\r\n//     container.appendChild(contacts);\r\n\r\n//     return container;\r\n// }\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    document.querySelector('.home-btn').addEventListener('click', () => {\r\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.updateContent)(_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome);\r\n    });\r\n    document.querySelector('.menu-btn').addEventListener('click', () => {\r\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.updateContent)(_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu);\r\n    });\r\n    document.querySelector('.about-btn').addEventListener('click', () => {\r\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.updateContent)(_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAboutUs);\r\n    });\r\n    \r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.updateContent)(_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome);\r\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_5__.createFooter)();\r\n})\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ \"./src/menuItems.js\");\n\r\n\r\nfunction loadMenu() {\r\n    const container = document.createElement('div');\r\n    container.classList.add('menu-container');\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Our Menu';\r\n    heading.classList.add('typing');\r\n\r\n    setTimeout(() => heading.classList.remove('typing'), 2000);\r\n    \r\n    const menuGrid = document.createElement('div');\r\n    menuGrid.classList.add('menu-grid');\r\n\r\n    _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach(item => {\r\n        const itemDiv = document.createElement('div');\r\n        itemDiv.classList.add('menu-item');\r\n\r\n        const img = document.createElement('div');\r\n        img.classList.add('menu-img');\r\n        img.style.backgroundImage = `url(${item.image})`;\r\n\r\n        const textContainer = document.createElement('div');\r\n        textContainer.classList.add('menu-text');\r\n\r\n        const name = document.createElement('h3');\r\n        name.textContent = item.name;\r\n\r\n        const orderButton = document.createElement('button');\r\n        orderButton.textContent = 'Order';\r\n        orderButton.classList.add('order-btn');\r\n        orderButton.addEventListener('click', () => openModal(item)) //add event\r\n\r\n        textContainer.appendChild(name);\r\n        textContainer.appendChild(orderButton);\r\n        itemDiv.appendChild(img);\r\n        itemDiv.appendChild(textContainer);\r\n        menuGrid.appendChild(itemDiv);\r\n    });\r\n\r\n    container.appendChild(heading);\r\n    container.appendChild(menuGrid);\r\n\r\n    return container;\r\n}\r\n\r\n\r\nfunction openModal(item) {\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('modal');\r\n\r\n    modal.innerHTML = `\r\n        <div class=\"modal-content\">\r\n            <span class=\"close-btn\">&times;</span>\r\n            <h2>${item.name}</h2>\r\n            <img src=\"${item.image}\" alt=\"${item.name}\">\r\n            <p class=\"description\">${item.description}</p>\r\n            <p class=\"price\">${item.price}</p>\r\n\r\n            <div class=\"quantity-container\">\r\n                <label for=\"quantity-btn\">Quantity:</label>\r\n                <button class =\"quantity-btn decrease\">-</button>\r\n                <input type=\"number\" id=\"quantity\" value=\"1\" min=\"1\">\r\n                <button class=\"quantity-btn increase\">+</button>\r\n            </div>\r\n\r\n            <button class=\"order-confirm\">Make an order</button>\r\n            <button class=\"order-cancel\">Cancel</button>\r\n\r\n\r\n        </div>\r\n    `;\r\n\r\n    document.body.appendChild(modal);\r\n\r\n    const closeButton = modal.querySelector('.close-btn');\r\n    const cancelButton = modal.querySelector('.order-cancel');\r\n    const orderButton = modal.querySelector('.order-confirm');\r\n    const quantityInput = modal.querySelector('#quantity');\r\n    const increaseButton = modal.querySelector('.increase');\r\n    const decreaseButton = modal.querySelector('.decrease');\r\n\r\n    closeButton.addEventListener('click', () => modal.remove());\r\n    cancelButton.addEventListener('click', () => modal.remove());\r\n\r\n\r\n    // Add logic for increasing/decreasing the order quantity\r\n\r\n    increaseButton.addEventListener('click', () => {\r\n        quantityInput.value = parseInt(quantityInput.value) + 1;\r\n    });\r\n\r\n    decreaseButton.addEventListener('click', () => {\r\n        if (parseInt(quantityInput.value) > 1) {\r\n            quantityInput.value = parseInt(quantityInput.value) -1;\r\n        }\r\n    });\r\n\r\n\r\n\r\n    // add the logic for sending the order to the server \r\n\r\n    orderButton.addEventListener('click', async() => {\r\n        const quantity = quantityInput.value;\r\n        const customerName = 'John Doe';\r\n        const customerPhone = '1234566890';\r\n\r\n        const orderData = {\r\n            itemName: item.name,\r\n            quantity: quantity,\r\n            customerName: customerName,\r\n            customerPhone: customerPhone,\r\n        };\r\n\r\n\r\n        //send the order to the backend\r\n\r\n        try {\r\n            const response = await fetch('http://localhost:5000/api/orders', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify(orderData),\r\n            });\r\n\r\n            const result = await response.json();\r\n            if (response.ok) {\r\n                modal.remove();\r\n                showConfirmation(quantity, item.name);\r\n            } else {\r\n                alert(result.error || 'Something went wrong');\r\n            }\r\n        } catch (error) {\r\n            console.error('Error:', error);\r\n            alert('Server error. Try again later');\r\n        }\r\n    });\r\n}\r\n\r\n// function to display the order confirmation window\r\n\r\nfunction showConfirmation(quantity, itemName) {\r\n    \r\n\r\n    const confirmationModal = document.createElement('div');\r\n    confirmationModal.classList.add('confirmation-modal');\r\n\r\n    confirmationModal.innerHTML = `\r\n        <div class=\"confirmation-content\">\r\n            <span class=\"close-confirm\">&times;</span>\r\n            <div class=\"icon\">✅</div>\r\n            <h2>Order Placed!</h2>\r\n            <p>You have successfully ordered <strong>${quantity}</strong> pcs of <strong>${itemName}</strong>.</p>\r\n            <button class=\"close-confirm-btn\">OK</button>\r\n        </div>\r\n    `;\r\n\r\n    document.body.appendChild(confirmationModal);\r\n\r\n    const closeConfirm = confirmationModal.querySelector('.close-confirm');\r\n    const closeConfirmBtn = confirmationModal.querySelector('.close-confirm-btn');\r\n\r\n    closeConfirm.addEventListener('click', () => confirmationModal.remove());\r\n    closeConfirmBtn.addEventListener('click', () => confirmationModal.remove());\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuItems: () => (/* binding */ menuItems)\n/* harmony export */ });\nconst menuItems = [\r\n    {\r\n        name: 'Cappuccino',\r\n        description: 'A rich, creamy coffee with steamed milk.',\r\n        price: '$4.50',\r\n        image: './images/coffe_cappucino.jpg'\r\n    },\r\n    {\r\n        name: 'Margherita Pizza',\r\n        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',\r\n        price: '$13.99',\r\n        image: './images/Pizza_Margherita.jpg'\r\n    },\r\n    {\r\n        name: 'Parma Pizza',\r\n        description: 'Pizza with prosciutto, arugula, and Parmesan.',\r\n        price: '$16.99',\r\n        image: './images/Pizza_Parma.jpg'\r\n    },\r\n    {\r\n        name: 'Spinacie Ricotta Pizza',\r\n        description: 'Pizza with spinach and ricotta cheese.',\r\n        price: '$20.99',\r\n        image: './images/pizza_spinaciericotta.jpg'\r\n    }\r\n];\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuItems.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateContent: () => (/* binding */ updateContent)\n/* harmony export */ });\n// utils.js\r\nfunction updateContent(contentFunction) {\r\n    const content = document.getElementById('content');\r\n    const header = content.querySelector('h1');\r\n\r\n    if(header) {\r\n        header.classList.remove('typing');\r\n    }\r\n\r\n    content.classList.add('fade-out');\r\n\r\n    setTimeout(() => {\r\n        content.innerHTML = '';\r\n        content.appendChild(contentFunction());\r\n\r\n        const newHeader = content.querySelector('h1');\r\n        if (newHeader) {\r\n            newHeader.classList.add('typing');\r\n        }\r\n\r\n        setTimeout(() => \r\n            newHeader.classList.remove('typing'), 2000);\r\n\r\n        content.classList.remove('fade-out');\r\n        content.classList.add('fade-in');\r\n    }, 300);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/utils.js?");

/***/ }),

/***/ "./src/images/La-Pergola-photo6016eee5a4044-1440x810-1.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/La-Pergola-photo6016eee5a4044-1440x810-1.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/La-Pergola-photo6016eee5a4044-1440x810-1251a79c43e2a091ec243.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/La-Pergola-photo6016eee5a4044-1440x810-1.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;