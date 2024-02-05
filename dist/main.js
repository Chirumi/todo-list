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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(title) {\n        this.title = title\n        this.projectArr = []\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDoList {\n    constructor(title, description, dueDate, priority) {\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.priority = priority\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);\n\n//# sourceURL=webpack://todo-list/./src/toDoList.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ \"./src/toDoList.js\");\n\n\nconst project = []\n\nfunction ui() {\n    const container = document.querySelector(\".container\")\n    \n    const addToDoItem = document.createElement(\"button\")\n    addToDoItem.textContent = \"Add task\"\n    addToDoItem.classList.add(\"addToDoItem\")\n    addToDoItem.addEventListener(\"click\", () => {\n        const makeForm = toDoForm()\n        container.appendChild(makeForm)\n    })\n\n    container.appendChild(addToDoItem)\n}\n\nfunction inputMaker(input, type, idName) {\n    const inputContainer = document.createElement(\"div\")\n    \n    const label = document.createElement(\"div\")\n    label.for = input\n    label.textContent = input\n\n    const textBox = document.createElement(\"input\")\n    textBox.type = type\n    textBox.id = idName\n    textBox.name = input\n\n    inputContainer.appendChild(label)\n    inputContainer.appendChild(textBox)\n\n    return inputContainer\n}\n\nfunction toDoForm() {\n    const form = document.createElement(\"form\")\n\n    const title = inputMaker(\"Title\", \"input\", \"title\")\n    const description = inputMaker(\"Description\", \"input\", \"description\")\n    const dueDate = inputMaker(\"Due date\", \"date\", \"dueDate\")\n\n    // Priority drop-down\n    const priorityContainer = document.createElement(\"div\")\n    const priorityLabel = document.createElement(\"label\")\n    priorityLabel.for = \"priority\"\n    priorityLabel.textContent = \"Priority\"\n    const priority = document.createElement(\"select\")\n    priority.name = \"priority\"\n    priority.id = \"priority\"\n    const priorityOne = document.createElement(\"option\")\n    priorityOne.value = \"1\"\n    priorityOne.textContent = 1\n    const priorityTwo = document.createElement(\"option\")\n    priorityTwo.value = \"2\"\n    priorityTwo.textContent = 2\n    const priorityThree = document.createElement(\"option\")\n    priorityThree.value = \"3\"\n    priorityThree.textContent = 3\n\n    priority.appendChild(priorityOne)\n    priority.appendChild(priorityTwo)\n    priority.appendChild(priorityThree)\n    priorityContainer.appendChild(priorityLabel)\n    priorityContainer.appendChild(priority)\n\n    const submitBtn = document.createElement(\"button\")\n    submitBtn.classList.add(\"submitBtn\")\n    submitBtn.textContent = \"Add task\"\n    submitBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n\n        const newTask = new _toDoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById(\"title\").value, document.getElementById(\"description\").value, document.getElementById(\"dueDate\").value, document.getElementById(\"priority\").value)\n        project.push(newTask)\n\n        // Appends todo item to DOM\n        const itemContainer = document.createElement(\"div\")\n        const itemTitle = document.createElement(\"div\")\n        itemTitle.textContent = newTask.title\n        const itemDesc = document.createElement(\"div\")\n        itemDesc.textContent = newTask.description\n        item.appendChild(itemTitle)\n        item.appendChild(itemDesc)\n\n        document.getElementById(\"title\").value = \"\"\n        document.getElementById(\"description\").value = \"\"\n        document.getElementById(\"dueDate\").value = \"\"\n        document.getElementById(\"priority\").value = \"\"\n\n        document.querySelector(\".container\").appendChild(itemContainer)\n\n        console.log(project)\n    })\n\n    form.appendChild(title)\n    form.appendChild(description)\n    form.appendChild(dueDate)\n    form.appendChild(priorityContainer)\n    form.appendChild(submitBtn)\n\n    return form\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui());\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;