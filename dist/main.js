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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// class Todos {\n//   constructor(title, description) {\n//     this.id = id;\n//     this.title = title;\n//     this.description = description;\n//     this.completed = false;\n//   }\n// }\n\n// function createTodo({title, description}){\n//   const todo = new Todos(title, description);\n//   return todo\n// }\n\nclass Model {\n  constructor() {\n    this.todos = [\n      { id: 1, title: \"Go shopping\", completed: false, proirity: \"medium\" },\n      { id: 2, title: \"Do laundry\", completed: false, priority: \"high\" },\n    ];\n  }\n  addTodo(todoText, priority = \"normal\") {\n    const todo = {\n      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 0,\n      title: todoText,\n      completed: false,\n      priority,\n    };\n    this.todos.push(todo);\n  }\n\n  editTodo(id, editText) {\n    this.todos = this.todos.map((todo) =>\n      todo.id === id\n        ? {\n            id: todo.id,\n            title: editText,\n            completed: todo.completed,\n            priority: todo.priority,\n          }\n        : todo\n    );\n  }\n\n  deleteTodo(id) {\n    this.todos = this.todos.filter((todo) => todo.id !== id);\n  }\n\n  toggleTodoCompleted(id) {\n    this.todos = this.todos.map((todo) =>\n      todo.id === id\n        ? {\n            id: todo.id,\n            title: todo.title,\n            completed: !todo.completed,\n            priority: todo.priority,\n          }\n        : todo\n    );\n  }\n\n  chooseTodoPriority(id, updatedPriority) {\n    this.todos = this.todos.map((todo) =>\n      todo.id === id\n        ? {\n            id: todo.id,\n            title: todo.title,\n            completed: todo.completed,\n            proirity: updatedPriority,\n          }\n        : todo\n    );\n  }\n}\n\nconst model = new Model();\nconsole.log(model);\nmodel.addTodo(\"go hiking\", \"normal\");\nmodel.addTodo(\"go jumping\", \"high\");\nmodel.editTodo(2, \"go swimming\");\nmodel.toggleTodoCompleted(2);\nmodel.chooseTodoPriority(1, \"medium\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);\n\n\n//# sourceURL=webpack://todo-app/./src/model.js?");

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