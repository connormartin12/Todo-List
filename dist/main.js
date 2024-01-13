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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\nconst contentDiv = document.querySelector('#content');\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.clearPage)(contentDiv);\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)(contentDiv);\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.updateTaskCategories)('All Tasks');\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.updateTaskList)();\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearPage: () => (/* binding */ clearPage),\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage),\n/* harmony export */   updateTaskCategories: () => (/* binding */ updateTaskCategories),\n/* harmony export */   updateTaskList: () => (/* binding */ updateTaskList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nfunction clearPage(parent) {\n    parent.textContent = '';\n}\n\nfunction loadHomePage(parent) {\n    // Create sidebar\n    let sidebar = document.createElement('div');\n    sidebar.id = 'sidebar';\n    parent.appendChild(sidebar);\n\n    // Create task list\n    let taskListContainer = document.createElement('div');\n    taskListContainer.id = 'task-list-container';\n    parent.appendChild(taskListContainer);\n}\n\nfunction updateTaskCategories(activeCategory) {\n    let sidebarContainer = document.getElementById('sidebar');\n    sidebarContainer.textContent = '';\n    let categories = document.createElement('ul');\n    categories.classList.add('list');\n    _task__WEBPACK_IMPORTED_MODULE_0__.taskCategories.forEach(taskCategory => {\n        let newCategory = document.createElement('li');\n        newCategory.classList.add('category');\n        if (taskCategory === activeCategory)\n            newCategory.classList.add('category-active');\n        newCategory.textContent = taskCategory;\n        categories.appendChild(newCategory);\n    });\n    sidebarContainer.appendChild(categories);\n}\n\nfunction updateTaskList() {\n    // Update task list to active category tab\n    let taskListContainer = document.getElementById('task-list-container');\n    taskListContainer.textContent = '';\n    let taskList = document.createElement('ul');\n    taskList.classList.add('list');\n    taskList.id = 'task-list';\n    _task__WEBPACK_IMPORTED_MODULE_0__.allTasks.forEach(task => {\n        let newTask = document.createElement('li');\n        newTask.classList.add('task');\n        newTask.textContent = task.title;\n        taskList.appendChild(newTask);\n    });\n    taskListContainer.appendChild(taskList);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/page-load.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   allTasks: () => (/* binding */ allTasks),\n/* harmony export */   taskCategories: () => (/* binding */ taskCategories)\n/* harmony export */ });\nlet allTasks = [];\nlet taskCategories = ['All Tasks', 'Today', 'Projects'];\n\nclass Task {\n    constructor(title) {\n        this.title = title;\n        this.description = undefined;\n        this.dueDate = undefined;\n        this.priority = 'normal';\n        allTasks.push(this);\n    }\n\n    updateTitle(newTitle) {\n        this.title = newTitle;\n    }\n\n    updateDescription(newDescription) {\n        this.description = newDescription;\n    }\n\n    updateDueDate(newDueDate) {\n        // Check dueDate format\n        this.dueDate = newDueDate;\n    }\n\n    updatePriority(newPriority) {\n        if (newPriority === ('low' || 0|| 0))\n            this.priority = newPriority;\n        else\n            console.error('Failed to update priority. Priority must be of type low, normal or high');\n    }\n}\n\nallTasks = [new Task('Testing'), new Task('another')];\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/task.js?");

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