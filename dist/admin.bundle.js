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

/***/ "./src/admin.js":
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", async function() {\r\n    const reservationsContainer = document.querySelector(\"#reservations\");\r\n\r\n    async function fetchReservations() {\r\n        try {\r\n            response = await fetch(\"http://localhost:3000/api/reservations\");\r\n            const reservations = await response.json();\r\n\r\n            reservationsContainer.innerHTML = \"\";\r\n            reservations.forEach((res) => {\r\n                const resElement = document.createElement(\"div\");\r\n                resElement.classList.add(\"reservation\");\r\n                resElement.innerHTML = `\r\n                    <p><strong>${res.name}</strong> (${res.phone})</p>\r\n                    <p>Date: ${res.date}, Time: ${res.time}</p>\r\n                    <p>Request: ${res.message || \"None\"}</p>\r\n                    <hr>\r\n                `;\r\n                reservationsContainer.appendChild(resElement);\r\n            });\r\n        } catch (error) {\r\n            console.error(\"Error fetching reservations:\", error);\r\n        }\r\n    }\r\n\r\n    fetchReservations();\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/admin.js"]();
/******/ 	
/******/ })()
;