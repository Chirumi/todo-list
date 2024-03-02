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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Ubuntu-Regular.ttf */ \"./src/Ubuntu-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n@font-face {\n    font-family: \"MyFont\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border-style: none;\n    list-style: none;\n    font-family: \"MyFont\";\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    color: white;\n}\n\n.mainContainer {\n    width: 80vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.projectHeader {\n    text-align: start;\n    padding: 15px 20px;\n    border-bottom: 1px solid black;\n}\n\naside {\n    height: 100vh;\n    width: 20vw;\n}\n\n.sideBar {\n    position: fixed;\n    height: 100vh;\n    width: 20vw;\n}\n\n.dueBy {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.dueBy li {\n    display: flex;\n    padding: 10px 0px;\n    border-radius: 15px;\n    gap: 20px;\n    color: white\n}\n\n.dueBy li:hover {\n    background-color: rgb(56, 56, 56);\n}\n\n.dueBy img {\n    height: auto;\n    width: 30px;\n}\n\naside, \n.sideBar,\n.dueBy button,\n.addProject {\n    background-color: #2e2e2e;\n}\n\n.sideBarItems {\n    padding: 25px 15px;\n}\n\n.dueBy > li,\n.profDiv,\n.myProjectsDiv {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.dueBy div,\n.myProjectsDiv {\n    font-size: 1.6em;\n}\n\n.myProjectsDiv > div:first-of-type {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 30px;\n}\n\n.profDiv {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-bottom: 45px;\n}\n\n.profPic {\n    height: auto;\n    width: 50px;\n}\n\n.profPic, \n.dueBy img{\n    padding: 2px;\n    background-color: white;\n    border-radius: 50%;\n}\n\n.myProjectsDiv {\n    display: flex;\n    flex-direction: column;\n    margin-top: 90px;\n}\n\n.newProject {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-right: 30px;\n    border-radius: 15px;\n}\n\n.newProject button {\n    font-size: 0.8em;\n    background-color: #2e2e2e;\n    color: white;\n}\n\n.newProjectName:hover,\n.newProjectRemove:hover {\n    color: #cacaca;\n}\n\nmain {\n    height: 80%;\n    width: 40%;\n    border-radius: 15px;\n    background-color: #2e2e2e;\n    box-shadow: 6px 6px 6px  rgb(175, 175, 175);\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n}\n\n.priorityOne {\n    border-right: 3px solid orangered;\n}\n\n.priorityTwo {\n    border-right: 3px solid orange;\n}\n\n.priorityThree {\n    border-right: 3px solid seagreen\n}\n\n.itemContainer {\n    display: flex;\n    gap: 20px;\n    border-bottom: 1px solid black;\n    padding: 20px 20px;\n    margin: 10px 40px;\n}\n\n.itemDetails {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n}\n\n.previewTitle {\n    font-size: 1.4rem;\n}\n\n.previewDesc {\n    opacity: 0.6;\n}\n\n.previewDueDate {\n    font-size: 0.8rem;\n    opacity: 0.6;\n}\n\n.addTaskBtn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 15px;\n}\n\n.addToDoItem {\n    font-size: 1.5rem;\n}\n\n.addToDoItem,\n.addProject {\n    font-size: 2em;\n    padding: 6px 15px;\n    border-radius: 50%;\n    color: white;\n    background-color: #2e2e2e;\n    transition: 0.3s;\n}\n\n.addToDoItem:hover,\n.addProject:hover {\n    color: #464866;\n    background-color: white;\n    transform: rotate(180deg);\n    transition: 0.3s;\n}\n\ndialog {\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    border-radius: 15px;\n}\n\ndialog > div {\n    font-size: 1.3rem;\n}\n\ndialog input {\n    height: 30px;\n    border: 1px solid black;\n    border-radius: 15px;\n    padding: 3px 20px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 30px 60px;\n    border-radius: 15px;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\nform > div:nth-of-type(4) {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\nform > button {\n    border-radius: 8px;\n    padding: 5px 10px;\n    margin-top: 15px;\n}\n\nform select {\n    padding: 5px;\n    width: 20%;\n    border-radius: 15px;\n}\n\n.formHeader {\n    border-bottom: 1px solid black;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ \"./src/toDoList.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_account_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/account.svg */ \"./src/images/account.svg\");\n/* harmony import */ var _images_inbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/inbox.svg */ \"./src/images/inbox.svg\");\n/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/calendar-today.svg */ \"./src/images/calendar-today.svg\");\n/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/calendar-week.svg */ \"./src/images/calendar-week.svg\");\n\n\n\n\n\n\n\n\nlet inbox = []\nlet today = []\nlet week = []\nlet currentArr = [inbox]\nconst projectsArr = [inbox, today, week]\n\nconst container = document.querySelector(\".container\")\nconst sideBarItems = document.querySelector(\".sideBarItems\")\nconst dueBy = document.querySelector(\".dueBy\")\nconst addTaskBtn = document.querySelector(\".addTaskBtn\")\nconst projectHeader = document.querySelector(\".projectHeader\")\n\nfunction profile() {\n    const profDiv = document.createElement(\"div\")\n    profDiv.classList.add(\"profDiv\")\n    const profPic = new Image()\n    profPic.src = _images_account_svg__WEBPACK_IMPORTED_MODULE_2__\n    profPic.classList.add(\"profPic\")\n    const profName = document.createElement(\"h1\")\n    profName.textContent = \"Michiru\"\n    profName.classList.add(\"profName\")\n\n    profDiv.appendChild(profPic)\n    profDiv.appendChild(profName)\n    sideBarItems.prepend(profDiv)\n}\nprofile()\n\nfunction initialInbox() {\n    const inboxDiv = document.createElement(\"li\")\n    const inboxName = document.createElement(\"div\")\n    inboxName.textContent = \"Inbox\"\n    const inboxPic = new Image()\n    inboxPic.src = _images_inbox_svg__WEBPACK_IMPORTED_MODULE_3__\n\n    inboxDiv.addEventListener(\"click\", () => {\n        eraseDOM(container)\n        currentArr = []\n        today = []\n        currentArr.push(inbox)\n        repopulateDOM(inbox)\n        document.querySelector(\".addTaskBtn\").style.display = \"flex\"\n        projectHeader.textContent = \"Inbox\"\n    })\n    // Open \"Inbox\" project on load\n    eraseDOM(container)\n    currentArr = []\n    today = []\n    currentArr.push(inbox)\n    repopulateDOM(inbox)\n    document.querySelector(\".addTaskBtn\").style.display = \"flex\"\n    projectHeader.textContent = \"Inbox\"\n\n    inboxDiv.appendChild(inboxPic)\n    inboxDiv.appendChild(inboxName)\n    dueBy.appendChild(inboxDiv)\n}\ninitialInbox()\n\nfunction todayFilter() {\n    const todayFilterDiv = document.createElement(\"li\")\n    const todayFilterName = document.createElement(\"div\")\n    todayFilterName.textContent = \"Today\"\n    const todayFilterPic = new Image()\n    todayFilterPic.src = _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_4__\n    \n    todayFilterDiv.addEventListener(\"click\", () => {\n        today = []\n        // Push toDo objects that have dueDate == currentDate into today array\n        let currentDate = new Date().toISOString().split(\"T\")[0]\n\n        for (let x = 0; x < projectsArr.length; x++) {\n            for (let y = 0; y < projectsArr[x].length; y++) {\n                if (projectsArr[x][y].dueDate == currentDate) {\n                    today.push(projectsArr[x][y])\n                    projectsArr[x][y].filter = \"today\"\n                }\n            }\n        }\n\n        eraseDOM(container)\n        currentArr = []\n        currentArr.push(today)\n        repopulateDOM(today)\n        document.querySelector(\".addTaskBtn\").style.display = \"none\"\n        projectHeader.textContent = \"Today\"\n    })\n\n    todayFilterDiv.appendChild(todayFilterPic)\n    todayFilterDiv.appendChild(todayFilterName)\n    dueBy.appendChild(todayFilterDiv)\n}\ntodayFilter()\n\nfunction weekFilter() {\n    const weekFilterDiv = document.createElement(\"li\")\n    const weekFilterName = document.createElement(\"div\")\n    weekFilterName.textContent = \"This week\"\n    const weekPic = new Image()\n    weekPic.src = _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_5__\n    \n    weekFilterDiv.addEventListener(\"click\", () => {\n        week = []\n\n        let currentDate = new Date()\n        let weekAfterCurrentDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split(\"T\")[0]\n\n        for (let x = 0; x < projectsArr.length; x++) {\n            for (let y = 0; y < projectsArr[x].length; y++) {\n                if (projectsArr[x][y].dueDate >= currentDate.toISOString().split(\"T\")[0] && projectsArr[x][y].dueDate <= weekAfterCurrentDate) {\n                    week.push(projectsArr[x][y])\n                    projectsArr[x][y].filter = \"week\"\n                }\n            }\n        }\n\n        eraseDOM(container)\n        currentArr = []\n        currentArr.push(week)\n        repopulateDOM(week)\n        document.querySelector(\".addTaskBtn\").style.display = \"none\"\n        projectHeader.textContent = \"This week\"\n    })\n\n    weekFilterDiv.appendChild(weekPic)\n    weekFilterDiv.appendChild(weekFilterName)\n    dueBy.appendChild(weekFilterDiv)\n}\nweekFilter()\n\nfunction ui() {\n    const myProjectsDiv = document.createElement(\"div\")\n    myProjectsDiv.classList.add(\"myProjectsDiv\")\n\n    const myProjects = document.createElement(\"div\")\n    myProjects.textContent = \"My Projects\"\n\n    const addProject = document.createElement(\"button\")\n    addProject.textContent = \"+\"\n    addProject.classList.add(\"addProject\")\n    addProject.addEventListener(\"click\", () => {\n        let project = []\n        projectsArr.push(project)\n\n        const addProjDialog = document.createElement(\"dialog\")\n        addProjDialog.addEventListener(\"click\", () => {\n            container.removeChild(addProjDialog)\n        })\n\n        const addProjContainer = document.createElement(\"div\")\n        addProjContainer.addEventListener(\"click\", (e) => {\n            e.stopPropagation()\n        })\n\n        const addProjForm = document.createElement(\"form\")\n        const projectNameTitle = document.createElement(\"h3\")\n        projectNameTitle.textContent = \"Add project\"\n        projectNameTitle.classList.add(\"formHeader\")\n        const projectName = document.createElement(\"input\")\n        const submitProjectName = document.createElement(\"button\")\n        submitProjectName.textContent = \"Add\"\n        submitProjectName.addEventListener(\"click\", (e) => {\n            e.preventDefault()\n            if (projectName.value.length != 0) {\n\n                const newProjectContainer = document.createElement(\"div\")\n                newProjectContainer.classList.add(\"newProject\")\n                const newProject = document.createElement(\"button\")\n                newProject.textContent = projectName.value\n                newProject.classList.add(\"newProjectName\")\n\n                const removeProject = document.createElement(\"button\")\n                removeProject.textContent = \"x\"\n                removeProject.classList.add(\"newProjectRemove\")\n                removeProject.addEventListener(\"click\", () => {\n                    eraseDOM(container)\n                    project.push(\"TO REMOVE\")\n                    removeProjectArr()\n                    myProjectsDiv.removeChild(newProjectContainer)\n                })\n                \n                newProject.addEventListener(\"click\", () => {\n                    eraseDOM(container)\n                    currentArr = []\n                    today = []\n                    currentArr.push(project)\n                    repopulateDOM(project)\n                    document.querySelector(\".addTaskBtn\").style.display = \"flex\"\n                    projectHeader.textContent = projectName.value\n                })\n\n                // REDIRECT TO NEW PROJECT\n                eraseDOM(container)\n                currentArr = []\n                today = []\n                currentArr.push(project)\n                repopulateDOM(project)\n                document.querySelector(\".addTaskBtn\").style.display = \"flex\"\n                projectHeader.textContent = projectName.value\n\n                newProjectContainer.appendChild(newProject)\n                newProjectContainer.appendChild(removeProject)\n                myProjectsDiv.appendChild(newProjectContainer)\n            }\n            else {\n                alert(\"Please type the new project's name!\")\n            }\n                \n        })\n\n        addProjForm.appendChild(projectNameTitle)\n        addProjForm.appendChild(projectName)\n        addProjForm.appendChild(submitProjectName)\n        addProjContainer.appendChild(addProjForm)\n        addProjDialog.appendChild(addProjContainer)\n        container.appendChild(addProjDialog)\n        addProjDialog.showModal()\n    })\n    \n    const addToDoItem = document.createElement(\"button\")\n    addToDoItem.textContent = \"+\"\n    addToDoItem.classList.add(\"addToDoItem\")\n    addToDoItem.addEventListener(\"click\", () => {\n        const makeForm = toDoForm()\n        container.appendChild(makeForm)\n        document.querySelector(\".addTaskDialog\").showModal()\n        addTaskBtn.style.display = \"none\"\n\n        let currentDate = new Date().toISOString().split(\"T\")[0]\n        document.getElementById(\"dueDate\").min = currentDate\n    })\n\n    const div = document.createElement(\"div\")\n    div.appendChild(myProjects)\n    div.appendChild(addProject)\n    \n    myProjectsDiv.appendChild(div)\n    sideBarItems.appendChild(myProjectsDiv)\n    addTaskBtn.appendChild(addToDoItem)\n}\n\nfunction eraseDOM(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.lastChild)\n    }\n}\n\nfunction inputMaker(input, type, idName) {\n    const inputContainer = document.createElement(\"div\")\n    \n    const label = document.createElement(\"div\")\n    label.for = input\n    label.textContent = input\n\n    const textBox = document.createElement(\"input\")\n    textBox.type = type\n    textBox.id = idName\n    textBox.name = input\n\n    inputContainer.appendChild(label)\n    inputContainer.appendChild(textBox)\n\n    return inputContainer\n}\n\nfunction repopulateDOM(arr) {\n    arr.forEach(e => {\n        const checkBox = checkBoxMaker()\n        checkBox.addEventListener(\"click\", () => {\n            const indexToRemove = arr.indexOf(e)\n            arr.splice(indexToRemove, 1)\n\n            // Remove todo item from source project when it is removed under \"Today\" filter\n            if (arr == today) {\n                for (let x = 0; x < projectsArr.length; x++) {\n                    for (let y = 0; y < projectsArr[x].length; y++) {\n                        if (projectsArr[x][y].filter == \"today\") {\n                            projectsArr[x].splice(y, 1)\n                        }\n                    }\n                }\n            }\n            if (arr == week) {\n                for (let x = 0; x < projectsArr.length; x++) {\n                    for (let y = 0; y < projectsArr[x].length; y++) {\n                        if (projectsArr[x][y].filter == \"week\") {\n                            projectsArr[x].splice(y, 1)\n                        }\n                    }\n                }\n            }\n        })\n\n        if (!(arr == today || arr == week)) {\n            delete e.filter // Remove filter property used to delete todo items from projects when\n        // they are deleted under \"Today\" filter tab\n        }\n\n        const itemContainer = document.createElement(\"div\")\n        itemContainer.classList.add(\"itemContainer\")\n        const itemDetails = document.createElement(\"div\")\n        itemDetails.classList.add(\"itemDetails\")\n        itemDetails.addEventListener(\"click\", () => {\n            const dialog = document.createElement(\"dialog\")\n\n            dialog.addEventListener(\"click\", () => {\n                container.removeChild(dialog)\n            })\n\n            const dialogFormContainer = document.createElement(\"div\")\n            dialogFormContainer.addEventListener(\"click\", (e) => {\n                e.stopPropagation()\n            })\n\n            const dialogForm = document.createElement(\"form\")\n            const dialogTitle = document.createElement(\"input\")\n            dialogTitle.value = e.title\n            const dialogDesc = document.createElement(\"input\")\n            dialogDesc.value = e.description\n            const dialogDueDate = document.createElement(\"input\")\n            dialogDueDate.type = \"date\"\n            dialogDueDate.value = e.dueDate\n            const dialogPriority = document.createElement(\"select\")\n            dialogPriority.value = e.priority\n\n            const dialogPriorityOne = document.createElement(\"option\")\n            dialogPriorityOne.value = \"High\"\n            dialogPriorityOne.textContent = \"High\"\n            const dialogPriorityTwo = document.createElement(\"option\")\n            dialogPriorityTwo.value = \"Medium\"\n            dialogPriorityTwo.textContent = \"Medium\"\n            const dialogPriorityThree = document.createElement(\"option\")\n            dialogPriorityThree.value = \"Low\"\n            dialogPriorityThree.textContent = \"Low\"\n\n            if (e.priority == \"High\") {\n                dialogPriorityOne.setAttribute(\"selected\", \"selected\")\n            }\n            else if (e.priority == \"Medium\") {\n                dialogPriorityTwo.setAttribute(\"selected\", \"selected\")\n            }\n            else {\n                dialogPriorityThree.setAttribute(\"selected\", \"selected\")\n            }\n\n            const editBtn = document.createElement(\"button\")\n            editBtn.textContent = \"Edit\"\n            editBtn.type = \"button\"\n            editBtn.addEventListener(\"click\", () => {\n                e.title = dialogTitle.value\n                itemTitle.textContent = e.title\n        \n                e.description = dialogDesc.value\n                itemDesc.textContent = e.description\n        \n                e.dueDate = dialogDueDate.value\n            })\n\n            dialogPriority.appendChild(dialogPriorityOne)\n            dialogPriority.appendChild(dialogPriorityTwo)\n            dialogPriority.appendChild(dialogPriorityThree)\n\n            dialogForm.appendChild(dialogTitle)\n            dialogForm.appendChild(dialogDesc)\n            dialogForm.appendChild(dialogDueDate)\n            dialogForm.appendChild(dialogPriority)\n            dialogForm.appendChild(editBtn)\n\n            dialogFormContainer.appendChild(dialogForm)\n            dialog.appendChild(dialogFormContainer)\n            container.prepend(dialog)\n            dialog.showModal()\n        })\n\n        const itemTitle = document.createElement(\"div\")\n        itemTitle.classList.add(\"previewTitle\")\n        itemTitle.textContent = e.title\n        const itemDesc = document.createElement(\"div\")\n        itemDesc.classList.add(\"previewDesc\")\n        itemDesc.textContent = e.description\n        const itemDueDate = document.createElement(\"div\")\n        itemDueDate.classList.add(\"previewDueDate\")\n        itemDueDate.textContent = e.dueDate\n\n        if (e.priority == \"High\") {\n            itemContainer.classList.add(\"priorityOne\")\n        }\n        else if (e.priority == \"Medium\") {\n            itemContainer.classList.add(\"priorityTwo\")\n        }\n        else {\n            itemContainer.classList.add(\"priorityThree\")\n        }\n        \n        itemDetails.appendChild(itemTitle)\n        itemDetails.appendChild(itemDesc)\n        itemDetails.appendChild(itemDueDate)\n        itemContainer.appendChild(checkBox)\n        itemContainer.appendChild(itemDetails)\n\n        container.appendChild(itemContainer)\n    });\n}\n\nfunction toDoForm() {\n    const dialog = document.createElement(\"dialog\")\n    dialog.classList.add(\"addTaskDialog\")\n    dialog.addEventListener(\"click\", () => {\n        container.removeChild(dialog)\n        addTaskBtn.style.display = \"flex\"\n    })\n\n    const formContainer = document.createElement(\"div\")\n    formContainer.addEventListener(\"click\", (e) => {\n        e.stopPropagation()\n    })\n    const form = document.createElement(\"form\")\n\n    const title = inputMaker(\"Title\", \"input\", \"title\")\n    const description = inputMaker(\"Description\", \"input\", \"description\")\n    const dueDate = inputMaker(\"Due date\", \"date\", \"dueDate\")\n\n    // Priority drop-down\n    const priorityContainer = document.createElement(\"div\")\n    const priorityLabel = document.createElement(\"label\")\n    priorityLabel.for = \"priority\"\n    priorityLabel.textContent = \"Priority\"\n    const priority = document.createElement(\"select\")\n    priority.name = \"priority\"\n    priority.id = \"priority\"\n    \n    const priorityOne = document.createElement(\"option\")\n    priorityOne.value = \"High\"\n    priorityOne.textContent = \"High\"\n    const priorityTwo = document.createElement(\"option\")\n    priorityTwo.value = \"Medium\"\n    priorityTwo.textContent = \"Medium\"\n    const priorityThree = document.createElement(\"option\")\n    priorityThree.value = \"Low\"\n    priorityThree.textContent = \"Low\"\n\n    priority.appendChild(priorityOne)\n    priority.appendChild(priorityTwo)\n    priority.appendChild(priorityThree)\n    priorityContainer.appendChild(priorityLabel)\n    priorityContainer.appendChild(priority)\n\n    const submitBtn = document.createElement(\"button\")\n    submitBtn.classList.add(\"submitBtn\")\n    submitBtn.textContent = \"Add\"\n    submitBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n\n        // Form validation\n        if (document.getElementById(\"title\").value.length != 0) {\n            const newTask = new _toDoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById(\"title\").value, document.getElementById(\"description\").value, document.getElementById(\"dueDate\").value, document.getElementById(\"priority\").value)\n            currentArr[0].push(newTask)\n\n            document.querySelector(\".addTaskBtn\").style.display = \"flex\"\n            submitBtn.style.display = \"none\"\n\n            // Appends todo item to DOM\n            const checkBox = checkBoxMaker()\n            checkBox.addEventListener(\"click\", () => {\n                const indexToRemove = arr.indexOf(e)\n                arr.splice(indexToRemove, 1)\n            })\n            const itemContainer = document.createElement(\"div\")\n            itemContainer.classList.add(\"itemContainer\")\n            if (document.getElementById(\"priority\").value == \"High\") {\n                itemContainer.classList.add(\"priorityOne\")\n            }\n            else if (document.getElementById(\"priority\").value == \"Medium\") {\n                itemContainer.classList.add(\"priorityTwo\")\n            }\n            else {\n                itemContainer.classList.add(\"priorityThree\")\n            }\n            const itemDetails = document.createElement(\"div\")\n            itemDetails.classList.add(\"itemDetails\")\n            itemDetails.addEventListener(\"click\", () => {\n                // Expand to-do item to edit/see\n                const dialog = document.createElement(\"dialog\")\n                dialog.addEventListener(\"click\", () => {\n                    container.removeChild(dialog)\n                })\n\n                const dialogFormContainer = document.createElement(\"div\")\n                dialogFormContainer.addEventListener(\"click\", (e) => {\n                    e.stopPropagation()\n                })\n\n                const dialogForm = document.createElement(\"form\")\n\n                const itemHeader = document.createElement(\"h3\")\n                itemHeader.textContent = \"Edit task\"\n                itemHeader.classList.add(\"formHeader\")\n                \n                const dialogTitle = document.createElement(\"input\")\n                dialogTitle.value = itemTitle.textContent\n                const dialogDesc = document.createElement(\"input\")\n                dialogDesc.value = itemDesc.textContent\n                const dialogDueDate = document.createElement(\"input\")\n                dialogDueDate.type = \"date\"\n                dialogDueDate.value = newTask.dueDate\n                let currentDate = new Date().toISOString().split(\"T\")[0]\n                dialogDueDate.min = currentDate\n                const dialogPriority = document.createElement(\"select\")\n                dialogPriority.value = priority.textContent\n\n                const dialogPriorityOne = document.createElement(\"option\")\n                dialogPriorityOne.value = \"High\"\n                dialogPriorityOne.textContent = \"High\"\n                const dialogPriorityTwo = document.createElement(\"option\")\n                dialogPriorityTwo.value = \"Medium\"\n                dialogPriorityTwo.textContent = \"Medium\"\n                const dialogPriorityThree = document.createElement(\"option\")\n                dialogPriorityThree.value = \"Low\"\n                dialogPriorityThree.textContent = \"Low\"\n\n                if (newTask.priority == \"High\") {\n                    dialogPriorityOne.setAttribute(\"selected\", \"selected\")\n                }\n                else if (newTask.priority == \"Medium\") {\n                    dialogPriorityTwo.setAttribute(\"selected\", \"selected\")\n                }\n                else {\n                    dialogPriorityThree.setAttribute(\"selected\", \"selected\")\n                }\n\n                const editBtn = document.createElement(\"button\")\n                editBtn.textContent = \"Edit\"\n                editBtn.type = \"button\"\n                editBtn.addEventListener(\"click\", () => {\n                    if (dialogTitle.value.length != 0) {\n                        newTask.title = dialogTitle.value\n                        itemTitle.textContent = newTask.title\n\n                        newTask.description = dialogDesc.value\n                        itemDesc.textContent = newTask.description\n\n                        newTask.dueDate = dialogDueDate.value\n\n                        newTask.priority = dialogPriority.value\n                        \n                        if (newTask.priority == \"High\") {\n                            itemContainer.style.borderRight = \"3px solid orangered\"\n                        }\n                        else if (newTask.priority == \"Medium\") {\n                            itemContainer.style.borderRight = \"3px solid orange\"\n                        }\n                        else {\n                            itemContainer.style.borderRight = \"3px solid seagreen\"\n                        }\n\n                        container.removeChild(dialog)\n                    }\n                    else {\n                        alert(\"Please fill in the task's title!\")\n                    }\n                })\n\n                dialogPriority.appendChild(dialogPriorityOne)\n                dialogPriority.appendChild(dialogPriorityTwo)\n                dialogPriority.appendChild(dialogPriorityThree)\n            \n                dialogForm.appendChild(itemHeader)\n                dialogForm.appendChild(dialogTitle)\n                dialogForm.appendChild(dialogDesc)\n                dialogForm.appendChild(dialogDueDate)\n                dialogForm.appendChild(dialogPriority)\n                dialogForm.appendChild(editBtn)\n\n                dialogFormContainer.appendChild(dialogForm)\n                dialog.appendChild(dialogFormContainer)\n                container.prepend(dialog)\n                dialog.showModal()\n            })\n\n            const itemTitle = document.createElement(\"div\")\n            itemTitle.classList.add(\"previewTitle\")\n            itemTitle.textContent = newTask.title\n            const itemDesc = document.createElement(\"div\")\n            itemDesc.classList.add(\"previewDesc\")\n            itemDesc.textContent = newTask.description\n            const itemDueDate = document.createElement(\"div\")\n            itemDueDate.classList.add(\"previewDueDate\")\n            itemDueDate.textContent = newTask.dueDate\n        \n            itemDetails.appendChild(itemTitle)\n            itemDetails.appendChild(itemDesc)\n            itemDetails.appendChild(itemDueDate)\n            itemContainer.appendChild(checkBox)\n            itemContainer.appendChild(itemDetails)\n\n            document.getElementById(\"title\").value = \"\"\n            document.getElementById(\"description\").value = \"\"\n            document.getElementById(\"dueDate\").value = \"\"\n            document.getElementById(\"priority\").value = \"\"\n\n            container.appendChild(itemContainer)\n            document.querySelector(\".container\").removeChild(dialog)\n        }\n        else {\n            alert(\"Please fill in the title and due date cannot be earlier than today!\")\n        }\n    })\n\n    const addTaskHeader = document.createElement(\"h3\")\n    addTaskHeader.textContent = \"Add task\"\n    addTaskHeader.classList.add(\"formHeader\")\n\n    form.appendChild(addTaskHeader)\n    form.appendChild(title)\n    form.appendChild(description)\n    form.appendChild(dueDate)\n    form.appendChild(priorityContainer)\n    form.appendChild(submitBtn)\n    formContainer.appendChild(form)\n    dialog.appendChild(formContainer)\n    return dialog\n}\n\nfunction removeProjectArr() {\n    for (let i = 0; i < projectsArr.length; i++) {\n        for (let x = 0; x < projectsArr[i].length; x++) {\n            if (projectsArr[i][x] == \"TO REMOVE\") {\n                // REMOVE project FROM projectsArr\n                const removeIndex = projectsArr.indexOf(projectsArr[i])\n                const filteredArr = projectsArr.splice(removeIndex, 1)\n                \n                eraseDOM(container)\n                currentArr = []\n                today = []\n                currentArr.push(inbox)\n                repopulateDOM(inbox)\n                document.querySelector(\".addTaskBtn\").style.display = \"flex\"\n                projectHeader.textContent = \"Inbox\"\n\n                break\n            }\n        }\n    }\n}\n\nfunction checkBoxMaker() {\n    const radioBtn = document.createElement(\"input\")\n    radioBtn.type = \"radio\" \n    radioBtn.addEventListener(\"click\", () => {\n        radioBtn.parentElement.remove()\n    })\n    \n    return radioBtn\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui());\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

/***/ }),

/***/ "./src/Ubuntu-Regular.ttf":
/*!********************************!*\
  !*** ./src/Ubuntu-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cbb1b79a23478cc89ad.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/Ubuntu-Regular.ttf?");

/***/ }),

/***/ "./src/images/account.svg":
/*!********************************!*\
  !*** ./src/images/account.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"858ace2a4655551cffb8.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/account.svg?");

/***/ }),

/***/ "./src/images/calendar-today.svg":
/*!***************************************!*\
  !*** ./src/images/calendar-today.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"233385e32206cd372d69.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/calendar-today.svg?");

/***/ }),

/***/ "./src/images/calendar-week.svg":
/*!**************************************!*\
  !*** ./src/images/calendar-week.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"518ff47ec29e1552eabd.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/calendar-week.svg?");

/***/ }),

/***/ "./src/images/inbox.svg":
/*!******************************!*\
  !*** ./src/images/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"939f2a757e3335be71bb.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/inbox.svg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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