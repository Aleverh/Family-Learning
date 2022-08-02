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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Bank.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Bank.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/*\\n * Use this CSS to learn some intersting techniques,\\n * in case you're wondering how I built the UI.\\n * Have fun! 😁\\n */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  color: #444;\\n  background-color: #dfee90;\\n  height: 100vh;\\n  padding: 2rem;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 2rem;\\n}\\n\\n.welcome {\\n  font-size: 1.9rem;\\n  font-weight: 500;\\n}\\n\\n.logo {\\n  height: 5.25rem;\\n}\\n\\n.login {\\n  display: flex;\\n}\\n\\n.login__input {\\n  border: none;\\n  padding: 0.5rem 2rem;\\n  font-size: 1.6rem;\\n  font-family: inherit;\\n  text-align: center;\\n  width: 12rem;\\n  border-radius: 10rem;\\n  margin-right: 1rem;\\n  color: inherit;\\n  border: 1px solid #fff;\\n  transition: all 0.3s;\\n}\\n\\n.login__input:focus {\\n  outline: none;\\n  border: 1px solid #ccc;\\n}\\n\\n.login__input::placeholder {\\n  color: #bbb;\\n}\\n\\n.login__btn {\\n  border: none;\\n  background: none;\\n  font-size: 2.2rem;\\n  color: inherit;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n\\n.login__btn:hover,\\n.login__btn:focus,\\n.btn--sort:hover,\\n.btn--sort:focus {\\n  outline: none;\\n  color: #777;\\n}\\n\\n/* MAIN */\\n.app {\\n  position: relative;\\n  max-width: 100rem;\\n  margin: 4rem auto;\\n  display: grid;\\n  grid-template-columns: 4fr 3fr;\\n  grid-template-rows: auto repeat(3, 15rem) auto;\\n  gap: 2rem;\\n  /* NOTE This creates the fade in/out anumation */\\n  opacity: 0;\\n  transition: all 1s;\\n}\\n\\n.balance {\\n  grid-column: 1/span 2;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: space-between;\\n  margin-bottom: 2rem;\\n}\\n\\n.balance__label {\\n  font-size: 2.2rem;\\n  font-weight: 500;\\n  margin-bottom: -0.2rem;\\n}\\n\\n.balance__date {\\n  font-size: 1.4rem;\\n  color: #888;\\n}\\n\\n.balance__value {\\n  font-size: 4.5rem;\\n  font-weight: 400;\\n}\\n\\n/* MOVEMENTS */\\n.movements {\\n  grid-row: 2/span 3;\\n  background-color: #fff;\\n  border-radius: 1rem;\\n  overflow: scroll;\\n}\\n\\n.movements__row {\\n  padding: 2.25rem 4rem;\\n  display: flex;\\n  align-items: center;\\n  border-bottom: 1px solid #eee;\\n}\\n\\n.movements__type {\\n  font-size: 1.1rem;\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  color: #fff;\\n  padding: 0.1rem 1rem;\\n  border-radius: 10rem;\\n  margin-right: 2rem;\\n}\\n\\n.movements__date {\\n  font-size: 1.3rem;\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  color: #666;\\n}\\n\\n.movements__type-deposit {\\n  background-image: linear-gradient(to top left, #39b385, #9be15d);\\n}\\n\\n.movements__type-withdrawal {\\n  background-image: linear-gradient(to top left, #e52a5a, #ff585f);\\n}\\n\\n.movements__value {\\n  font-size: 1.7rem;\\n  margin-left: auto;\\n}\\n\\n/* SUMMARY */\\n.summary {\\n  grid-row: 5/6;\\n  display: flex;\\n  align-items: baseline;\\n  padding: 0 0.3rem;\\n  margin-top: 1rem;\\n}\\n\\n.summary__label {\\n  font-size: 1.2rem;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  margin-right: 0.8rem;\\n}\\n\\n.summary__value {\\n  font-size: 2.2rem;\\n  margin-right: 2.5rem;\\n}\\n\\n.summary__value--in,\\n.summary__value--interest {\\n  color: #66c873;\\n}\\n\\n.summary__value--out {\\n  color: #f5465d;\\n}\\n\\n.btn--sort {\\n  margin-left: auto;\\n  border: none;\\n  background: none;\\n  font-size: 1.3rem;\\n  font-weight: 500;\\n  cursor: pointer;\\n}\\n\\n/* OPERATIONS */\\n.operation {\\n  border-radius: 1rem;\\n  padding: 3rem 4rem;\\n  color: #333;\\n}\\n\\n.operation--transfer {\\n  background-image: linear-gradient(to top left, #ffb003, #ffcb03);\\n}\\n\\n.operation--loan {\\n  background-image: linear-gradient(to top left, #39b385, #9be15d);\\n}\\n\\n.operation--close {\\n  background-image: linear-gradient(to top left, #e52a5a, #ff585f);\\n}\\n\\nh2 {\\n  margin-bottom: 1.5rem;\\n  font-size: 1.7rem;\\n  font-weight: 600;\\n  color: #333;\\n}\\n\\n.form {\\n  display: grid;\\n  grid-template-columns: 2.5fr 2.5fr 1fr;\\n  grid-template-rows: auto auto;\\n  gap: 0.4rem 1rem;\\n}\\n\\n/* Exceptions for interst */\\n.form.form--loan {\\n  grid-template-columns: 2.5fr 1fr 2.5fr;\\n}\\n\\n.form__label--loan {\\n  grid-row: 2;\\n}\\n\\n/* End exceptions */\\n.form__input {\\n  width: 100%;\\n  border: none;\\n  background-color: rgba(255, 255, 255, 0.4);\\n  font-family: inherit;\\n  font-size: 1.5rem;\\n  text-align: center;\\n  color: #333;\\n  padding: 0.3rem 1rem;\\n  border-radius: 0.7rem;\\n  transition: all 0.3s;\\n}\\n\\n.form__input:focus {\\n  outline: none;\\n  background-color: rgba(255, 255, 255, 0.6);\\n}\\n\\n.form__label {\\n  font-size: 1.3rem;\\n  text-align: center;\\n}\\n\\n.form__btn {\\n  border: none;\\n  border-radius: 0.7rem;\\n  font-size: 1.8rem;\\n  background-color: #fff;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n\\n.form__btn:focus {\\n  outline: none;\\n  background-color: rgba(255, 255, 255, 0.8);\\n}\\n\\n.logout-timer {\\n  padding: 0 0.3rem;\\n  margin-top: 1.9rem;\\n  text-align: right;\\n  font-size: 1.25rem;\\n}\\n\\n.minutes, .seconds {\\n  font-weight: 600;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bank-project/./src/Bank.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Bank.html":
/*!***********************!*\
  !*** ./src/Bank.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Bank.css */ \"./src/Bank.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/logo.png */ \"./src/Images/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./const.js */ \"./src/const.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Bank.js */ \"./src/Bank.js?f67c\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n   <head>\\n      <meta charset=\\\"UTF-8\\\" />\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n      <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\" />\\n      <link rel=\\\"shortcut icon\\\" type=\\\"image/png\\\"/>\\n      <link href=\\\"https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap\\\"\\n      rel=\\\"stylesheet\\\"/>\\n      <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"/>\\n      <title>Bankist-new</title>\\n   </head>\\n   <body>\\n    <!-- TOP NAVIGATION -->\\n      <nav>\\n         <p class=\\\"welcome\\\">Log in to get started</p>\\n         <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"Logo\\\" class=\\\"logo\\\"/>\\n         <form class=\\\"login\\\">\\n            <input type=\\\"text\\\" placeholder=\\\"user\\\" class=\\\"login__input login__input--user\\\"/>\\n            <!-- In practice, use type=\\\"password\\\" -->\\n            <input type=\\\"text\\\" placeholder=\\\"PIN\\\" maxlength=\\\"4\\\" class=\\\"login__input login__input--pin\\\"/>\\n            <button  type=\\\"button\\\" class=\\\"login__btn\\\">&rarr;</button>\\n         </form>\\n      </nav>\\n\\n      <main class=\\\"app\\\">\\n         <!-- BALANCE -->\\n         <div class=\\\"balance\\\">\\n            <div>\\n               <p class=\\\"balance__label\\\">Current balance</p>\\n               <p class=\\\"balance__date\\\">\\n               As of <span class=\\\"date\\\"></span> г.\\n               </p>\\n            </div>\\n            <p class=\\\"balance__value\\\">000€</p>\\n         </div>\\n\\n         <!-- MOVEMENTS -->\\n         <div class=\\\"movements\\\">\\n            <!-- <div class=\\\"movements__row-deposit\\\">\\n               <div class=\\\"movements__type movements__type-deposit\\\"> deposit</div>\\n               <div class=\\\"movements__date\\\">3 days ago</div>\\n               <div class=\\\"movements__value movements__value-deposit\\\">0€</div>\\n            </div>\\n            <div class=\\\"movements__row-withdrawal\\\">\\n               <div class=\\\"movements__type movements__type-withdrawal\\\"> withdrawal</div>\\n               <div class=\\\"movements__date\\\">24/01/2037</div>\\n               <div class=\\\"movements__value movements__value-withdrawal\\\">0€</div>\\n            </div> -->\\n         </div>\\n\\n         <!-- SUMMARY -->\\n         <div class=\\\"summary\\\">\\n            <p class=\\\"summary__label\\\">In</p>\\n            <p class=\\\"summary__value summary__value--in\\\">0000€</p>\\n            <p class=\\\"summary__label\\\">Out</p>\\n            <p class=\\\"summary__value summary__value--out\\\">0000€</p>\\n            <p class=\\\"summary__label\\\">Interest</p>\\n            <p class=\\\"summary__value summary__value--interest\\\">0000€</p>\\n            <button class=\\\"btn--sort\\\">&downarrow; SORT</button>\\n         </div>\\n\\n         <!-- OPERATION: TRANSFERS -->\\n         <div class=\\\"operation operation--transfer\\\">\\n            <h2>Transfer money</h2>\\n            <form class=\\\"form form--transfer\\\">\\n               <input type=\\\"text\\\" class=\\\"form__input form__input--to\\\" />\\n               <input type=\\\"number\\\" class=\\\"form__input form__input--amount\\\"/>\\n               <button type=\\\"button\\\" class=\\\"form__btn form__btn--transfer\\\">&rarr;</button>\\n               <label class=\\\"form__label\\\">Transfer to</label>\\n               <label class=\\\"form__label\\\">Amount</label>\\n            </form>\\n         </div>\\n\\n         <!-- OPERATION: LOAN -->\\n         <div class=\\\"operation operation--loan\\\">\\n            <h2>Request loan</h2>\\n            <form class=\\\"form form--loan\\\">\\n               <input type=\\\"number\\\" class=\\\"form__input form__input--loan-amount\\\"/>\\n               <button type=\\\"button\\\" class=\\\"form__btn form__btn--loan\\\">&rarr;</button>\\n               <label class=\\\"form__label form__label--loan\\\">Amount</label>\\n            </form>\\n         </div>\\n\\n         <!-- OPERATION: CLOSE -->\\n         <div class=\\\"operation operation--close\\\">\\n            <h2>Close account</h2>\\n            <form class=\\\"form form--close\\\">\\n               <input type=\\\"text\\\" class=\\\"form__input form__input--user\\\" />\\n               <input type=\\\"password\\\"  maxlength=\\\"6\\\" class=\\\"form__input form__input--pin\\\"/>\\n\\n               <button type=\\\"button\\\" class=\\\"form__btn form__btn--close\\\">&rarr;</button>\\n               <label class=\\\"form__label\\\">Confirm user</label>\\n               <label class=\\\"form__label\\\">Confirm PIN</label>\\n            </form>\\n         </div>\\n\\n         <!-- LOGOUT TIMER -->\\n         <p class=\\\"logout-timer\\\">You will be logged out in \\n            <span class=\\\"minutes\\\"></span>:<span class=\\\"seconds\\\"></span>\\n         </p>\\n      </main>\\n\\n      <!-- <footer>\\n      &copy; by Jonas Schmedtmann. Don't claim as your own :)\\n      </footer> -->\\n      <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"><\" + \"/script>\\n      <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"><\" + \"/script>\\n   </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://bank-project/./src/Bank.html?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://bank-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bank-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://bank-project/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bank-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bank-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bank-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bank-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bank-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bank-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Bank-1.js":
/*!***********************!*\
  !*** ./src/Bank-1.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst today = new Date();\n\nfunction initClients(){\n   const balance = JSON.parse(localStorage.getItem(\"balance\")) || [];\n   const clientUser = balance.find(elem => elem.login === localStorage.getItem(\"activeClient\"));\n\n   containerMovements.innerHTML = \"\";\n   let transferMoney = 0;\n   let incomeMoney = 0;\n   \n   if(clientUser){ \n      containerApp.style.opacity = \"1\";\n      labelBalance.innerHTML = clientUser.currentBalance + \"€\";\n\n      //--Создаем строки и записываем в них историю движения средств------\n      clientUser.movements.forEach(item => {\n         const row = document.createElement(\"div\");\n         row.classList.add(\"movements__row\");\n         containerMovements.append(row);\n\n         const type = document.createElement(\"div\");\n         item > 0 ? type.classList.add(\"movements__type\", \"movements__type-deposit\") : type.classList.add(\"movements__type\", \"movements__type-withdrawal\");\n         row.append(type);\n\n         const spanText = document.createElement(\"span\");\n         item > 0 ? spanText.textContent = \"deposit\" : spanText.textContent = \"withdraval\";\n         type.append(spanText);\n\n         const spanDate = document.createElement(\"div\");\n         spanDate.classList.add(\"movements__date\");\n         spanDate.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}   ${today.getHours()}:${today.getMinutes()}`;\n         row.append(spanDate);\n\n         const value = document.createElement(\"div\");\n         value.classList.add(\"movements__value\");\n         row.append(value);\n\n         const spanDeposit = document.createElement(\"span\");\n         spanDeposit.textContent = item + \"€\";\n         value.append(spanDeposit);\n\n         item > 0 ? transferMoney += item :  incomeMoney += item;\n      });\n   }\n   labelSumIn.innerHTML = transferMoney + \"€\";\n   labelSumOut.innerHTML = incomeMoney + \"€\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initClients);\n\n\n//# sourceURL=webpack://bank-project/./src/Bank-1.js?");

/***/ }),

/***/ "./src/Bank.js?7574":
/*!*********************!*\
  !*** ./src/Bank.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bank_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bank.html */ \"./src/Bank.html\");\n/* harmony import */ var _Bank_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bank.scss */ \"./src/Bank.scss\");\n/* harmony import */ var _Bank_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bank-1 */ \"./src/Bank-1.js\");\n\n\n\n\n\"use strict\";\n\n// BANKIST APP\nconst account1 = {\n  owner: 'Jonas Schmedtmann',\n  movements: [],\n  pin: 1,\n  login: \"js\",\n  currentBalance: 1000,\n};\n\nconst account2 = {\n  owner: 'Jessica Davis',\n  movements: [],\n  pin: 2,\n  login: \"jd\",\n  currentBalance: 2000,\n};\n\nconst account3 = {\n  owner: 'Steven Thomas Williams',\n  movements: [],\n  pin: 3,\n  login: \"stw\",\n  currentBalance: 3000,\n};\n\nconst account4 = {\n  owner: 'Sarah Smith',\n  movements: [],\n  pin: 4,\n  login: \"ss\",\n  currentBalance: 4000,\n};\n//-------------------------------------------------------------------------\nlet accounts = [account1, account2, account3, account4];\nlet closeActiveUser;\nconst timeSession = 300000;  //-время сессии\nconst today = new Date();\n\n//--Запись в данных массива accounts в localStorage если они не записаны\nfunction init(){\n   labelDate.textContent = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;\n   if(! JSON.parse(localStorage.getItem(\"balance\"))){\n      localStorage.setItem(\"balance\", JSON.stringify(accounts));\n   }\n   closeActiveUser = setInterval(timer, 1000);\n}\ninit();\n(0,_Bank_1__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//--Проверка Login и пароль и если TRUE то вывод на экран данных активного клиента\nbtnLogin.addEventListener(\"click\", () =>{\n   const clientLogin = inputLoginUsername.value;\n   const clientPin = parseInt(inputLoginPin.value);\n\n   const balance = JSON.parse(localStorage.getItem(\"balance\"))\n   const clientVerify = balance.find(elem => elem.login === clientLogin && elem.pin === clientPin);\n   if(clientVerify){\n      //--Записываем  в localStorage Login активного клиента и запускаем таймер--------\n      containerApp.style.opacity = \"0\";\n      const activeClient = clientVerify.login;\n      localStorage.setItem(\"activeClient\", activeClient);\n      let newTime = Number(new Date()) + timeSession;\n      localStorage.setItem(\"timer\", JSON.stringify(newTime));\n      closeActiveUser = setInterval(timer, 1000);\n   }\n   (0,_Bank_1__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//--Перевод средств (Transfer)-------------------------------------------\nbtnTransfer.addEventListener(\"click\", () => {\n   const balance = (JSON.parse(localStorage.getItem(\"balance\")) || []);\n   const inputTransfer = inputTransferTo.value;\n   const transferAmount = parseInt(inputTransferAmount.value);\n\n   if (inputTransferTo.value && transferAmount){\n      const transfer = balance.map(elem => {\n         if (elem.login === inputTransfer && elem.login !== localStorage.getItem(\"activeClient\")){\n            return {...elem,\n               currentBalance: elem.currentBalance + parseInt(inputTransferAmount.value),\n               movements: [...elem.movements,  parseInt(inputTransferAmount.value)],\n            }\n         }\n         else if (elem.login === localStorage.getItem(\"activeClient\")){\n               return {...elem,\n                  currentBalance: elem.currentBalance - parseInt(inputTransferAmount.value),\n                  movements: [...elem.movements, (- parseInt(inputTransferAmount.value))],\n               }\n         }\n         return elem;\n      });\n      inputTransferTo.value = \"\";\n      inputTransferAmount.value = \"\";\n      labelBalance.innerHTML = \"elem.currentBalance\" + \"€\";\n      localStorage.setItem(\"balance\", JSON.stringify(transfer));\n   }\n   (0,_Bank_1__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//--Запрос кредита  Request loan----------------------------------------------------\nbtnLoan.addEventListener(\"click\", () => {\n   const balance = JSON.parse(localStorage.getItem(\"balance\"));\n   const loanAmount = parseInt(inputLoanAmount.value);\n   const credit = balance.map(elem =>{\n      if (elem.login === localStorage.getItem(\"activeClient\") && loanAmount <= elem.currentBalance){\n         return {...elem,\n            currentBalance: elem.currentBalance + loanAmount,\n            movements:  [...elem.movements, loanAmount],\n         }\n      }\n      return elem;\n   });\n   labelBalance.innerHTML = \"elem.currentBalance\" + \"€\";\n   inputLoanAmount.value = \"\";\n   localStorage.setItem(\"balance\", JSON.stringify(credit));\n   (0,_Bank_1__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//-- Закрытие сессии активного клиента по его Login и Pin и обновление страницы--\nbtnClose.addEventListener(\"click\", () => {\n   const balance = JSON.parse(localStorage.getItem(\"balance\"));\n   const closeUser = balance.find(elem => elem.login === inputCloseUserName.value && elem.pin === parseInt(inputClosePin.value));\n   if(closeUser){\n      clearInterval(closeActiveUser);\n      delActiveUser(); \n   }\n});\n\n//--Сортировка транзакций--------------------------------------------------------------\nbtnSort.addEventListener(\"click\", ()  => {\n   const balance = JSON.parse(localStorage.getItem(\"balance\"));\n   const sortUser = balance.find(elem => elem.login === localStorage.getItem(\"activeClient\"))\n      sortUser.movements.sort(function(x, y){\n         return y - x; \n      }); \n   localStorage.setItem(\"balance\", JSON.stringify(balance));\n   (0,_Bank_1__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//-- Функция обрабатывающая закрытие сессии активного клиента обновление страницы------\nfunction delActiveUser(){\n   localStorage.removeItem(\"activeClient\");\n   containerApp.style.opacity = \"0\";\n   inputLoginUsername.value = \"\"; \n   inputLoginPin.value = \"\";\n}\n\n//--Timer------------------------------------------------------------------------------\nfunction timer() {\n   const nowTime = Number(new Date());\n   const distance =  JSON.parse(localStorage.getItem(\"timer\")) - nowTime;\n\n   const minutes = Math.floor(distance / 1000 / 60) % 60;\n   const seconds = Math.floor(distance /1000) % 60;\n\n   const timerMinutes = document.querySelector(\".minutes\");\n   const timerSeconds = document.querySelector(\".seconds\");\n\n   timerMinutes.textContent = \"0\" + minutes;\n   timerSeconds.textContent = seconds < 10 ? \"0\" + seconds : seconds;\n\n   if (distance <= 0) {\n      clearInterval(closeActiveUser);\n      delActiveUser();\n      return;\n   }\n}\n\n\n\n\n//# sourceURL=webpack://bank-project/./src/Bank.js?");

/***/ }),

/***/ "./src/Bank.scss":
/*!***********************!*\
  !*** ./src/Bank.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Bank_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./Bank.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Bank.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Bank_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Bank_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Bank_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Bank_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bank-project/./src/Bank.scss?");

/***/ }),

/***/ "./src/Bank.js?f67c":
/*!*********************!*\
  !*** ./src/Bank.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24a52edcbd1945a5d353.js\";\n\n//# sourceURL=webpack://bank-project/./src/Bank.js?");

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9dfd9f9f4d21acbbc9b5.js\";\n\n//# sourceURL=webpack://bank-project/./src/const.js?");

/***/ }),

/***/ "./src/Bank.css":
/*!**********************!*\
  !*** ./src/Bank.css ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c66354ad18702e65f6eb.css\";\n\n//# sourceURL=webpack://bank-project/./src/Bank.css?");

/***/ }),

/***/ "./src/Images/logo.png":
/*!*****************************!*\
  !*** ./src/Images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e242c679ecaf7b4985a4.png\";\n\n//# sourceURL=webpack://bank-project/./src/Images/logo.png?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Bank.js?7574");
/******/ 	
/******/ })()
;