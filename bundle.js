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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 600px auto;\n    grid-template-rows: 150px auto;\n    height: 100vh;\n}\n\n.title-container {\n    display: grid;\n    background: linear-gradient(to right, #f56f0e, #3622af);\n    text-align: center;\n    place-items: center;\n    grid-column: 1 / 3;\n}\n\n.menu-container {\n    background-color: #969b94;\n    padding: 4rem;\n    color: rgb(11, 46, 1);\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 1;\n    grid-row: 2 / 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 1;\n    grid-column: 1 / 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    border-right: 1px solid #b9b9b9;\n}\n\n.task-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    text-align: left;\n}\n\n.task-list {\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: 3rem;\n    font-weight: 500;\n    padding: 5px 5px 5px 10px;\n    border-radius: 10px;\n}\n\n.task-hover:hover {\n    font-weight: 700;\n    cursor: pointer;\n    background-color: #868885;\n}\n\n.task-list:first-child {\n    margin-bottom: 1rem;\n}\n\n.add-task {\n    width: 5rem;\n    height: 5rem;\n    display: -ms-flexbox;\n    display: -webkit-box;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding-bottom: 4px;\n    border-radius: 50%;\n    background: linear-gradient(to right, #f56f0e, #3622af);\n    font-size: 5rem;\n    line-height: 5rem;\n    color: #202720;\n    -webkit-box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\n    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\n    cursor: pointer;\n    display: flex;\n}\n\nli {\n    list-style: none;\n}\n\n/* Task Section */\n.task-container {\n    background-color: azure;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    gap: 10px;\n}\n\n.task-div {\n    height: 4rem;\n    width: auto;\n    margin: 10px;\n    background-color: #959a93;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 10px;\n}\n\n.task-div img {\n    height: 2rem;\n    width: 2rem;\n}\n\n.none {\n    background-color: #969b94;\n}\n\n.high {\n    background-color: #f56f0e;\n}\n\n.medium {\n    background-color: #3622af;\n}\n\n.low {\n    background-color: #79ff74;\n}\n\n/* Popups */\n.popup .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(32, 39, 32,0.8);\n    transition: 200ms ease-in-out;\n    opacity: 0;\n    pointer-events: none;\n}\n\n.popup.active .overlay {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.popup .form {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 500px;\n    height: 800px;\n    transform: translate(-50%, -50%) scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    border-radius: 3px;\n    background-color: whitesmoke;\n    padding: 1rem;\n}\n\n.popup.active .form {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.btn {\n    border: none;\n    border-bottom: 4px whitesmoke solid;\n    font-size: 2rem;\n    padding: 8px;\n    cursor: pointer;\n    margin: 1rem;\n    height: fit-content;\n    border-radius: 3px;\n    background-color: whitesmoke;\n}\n\n.btn-1:hover {\n    border-bottom: 4px #79ff74 solid;\n}\n\n.addTaskHeader {\n    display: flex;\n    justify-content: space-between;\n}\n.addTaskClose {\n    color: #000000;\n    /* line-height: 1rem; */\n    font-size: 2rem;\n    cursor: pointer;\n    font-family: lato, sans-serif;\n}\n\n#addTaskForm form input, select {\n    margin-bottom: 1rem;\n}\n\n.addSubmit {\n    transition: 200ms ease-in-out;\n}\n\n.flex-column {\n    display: flex;\n    flex-direction: column;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.js */ \"./src/modules/options.js\");\n\n\nfunction createForms() {\n    const taskButton = document.getElementById('createTask')\n    const projectButton = document.getElementById('createProject')\n    const forms = document.getElementById('formOne')\n    let taskHTML = `<label for=\"ftitle\">Title:</label>\n                    <input type=\"text\" id=\"ftitle\" name=\"title\" placeholder=\"Title\" required>\n                    <label for=\"fdescription\">Description:</label>\n                    <input type=\"text\" id=\"fdescription\" name=\"description\" placeholder=\"Description\">\n                    <label for=\"ftitle\">Date:</label>\n                    <input type=\"date\" id=\"fdate\" name=\"date\">\n                    <label for=\"fpriority\">Priority:</label>\n                    <select id=\"fpriority\" name=\"priority\" required>\n                        <option value=\"none\">None</option>\n                        <option value=\"high\">High</option>\n                        <option value=\"medium\">Medium</option>\n                        <option value=\"low\">Low</option>\n                    </select>\n                    <label for=\"fproject\">Project:</label>\n                    <select id=\"fproject\" name=\"project\" required>\n                        <option value=\"inbox\">Inbox</option>\n                    </select> \n                    <button type=\"submit\" id=\"addSubmit\" class=\"addSubmit\">Add Task</button>`\n\n    let projectHTML = `<label for=\"formProject\">Project</label>\n                        <input type=\"text\" id=\"formProject\" name=\"formProject\" placeholder=\"Project: Study-Planner, Gym, Travel\" required>\n                        <button type=\"submit\" id=\"addSubmit\" class=\"addSubmit\">Add Project</button>`\n\n    taskButton.addEventListener('click', () => {\n        forms.innerHTML = ''\n        forms.innerHTML += taskHTML\n        ;(0,_options_js__WEBPACK_IMPORTED_MODULE_0__.projectOption)()\n    })\n\n    projectButton.addEventListener('click', () => {\n        forms.innerHTML = ''\n        forms.innerHTML += projectHTML\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForms);\n\n//# sourceURL=webpack://todo/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectDom: () => (/* binding */ createProjectDom),\n/* harmony export */   createTaskDom: () => (/* binding */ createTaskDom),\n/* harmony export */   projectEventListener: () => (/* binding */ projectEventListener)\n/* harmony export */ });\n/* harmony import */ var _Icons_report_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/report.png */ \"./src/Icons/report.png\");\n/* harmony import */ var _Icons_text_file_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/text-file.png */ \"./src/Icons/text-file.png\");\n/* harmony import */ var _Icons_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/delete.png */ \"./src/Icons/delete.png\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../script */ \"./src/script.js\");\n\n\n\n\n\n\nfunction createProjectDom(projectName) {\n    const projectMenu = document.querySelector('.project-menu')\n    const listItem = document.createElement('li')\n    listItem.textContent = projectName\n    listItem.setAttribute('id', projectName)\n    listItem.classList.add('task-list', 'task-hover')\n    projectMenu.appendChild(listItem)\n}\n\nfunction createTaskDom(index, title, date, priority) {\n    const taskContainer = document.getElementById('task-container')\n    const taskDiv = document.createElement('div')\n    taskDiv.setAttribute('id', index)\n    taskDiv.classList.add('task-div', priority)\n\n    const checkBox = document.createElement('input')\n    checkBox.setAttribute('type', 'checkbox')\n    const taskTitle = document.createElement('p')\n    taskTitle.textContent = title\n    const taskDate = document.createElement('p')\n    taskDate.textContent = date\n\n    const changePriority = document.createElement('img')\n    changePriority.setAttribute('src', _Icons_report_png__WEBPACK_IMPORTED_MODULE_0__)\n    const showDescription = document.createElement('img')\n    showDescription.setAttribute('src', _Icons_text_file_png__WEBPACK_IMPORTED_MODULE_1__)\n    const taskDelete = document.createElement('img')\n    taskDelete.setAttribute('src', _Icons_delete_png__WEBPACK_IMPORTED_MODULE_2__)\n    \n    taskDiv.append(checkBox, taskTitle, taskDate, changePriority, showDescription, taskDelete)\n    taskContainer.appendChild(taskDiv)\n}\n\nfunction toggleCheck() {\n\n}\n\nfunction updatePriority() {\n\n}\n\nfunction deleteTaskDom() {\n\n}\n\nfunction projectEventListener() {\n    const defaultProjectDiv = document.querySelectorAll('.task-list')\n    const taskContainer = document.getElementById('task-container')\n    const getItem = JSON.parse(localStorage.getItem('task'))\n    const projectKeys = Object.keys(getItem)\n    defaultProjectDiv.forEach(defaultProject => {\n        defaultProject.addEventListener('click', () => {\n            if (defaultProject.id === 'inbox') {\n                taskContainer.innerHTML = ''\n                ;(0,_script__WEBPACK_IMPORTED_MODULE_3__.appendTasks)()\n            } else if (projectKeys.includes(defaultProject.id)) {\n                taskContainer.innerHTML = ''\n                const filtered = (0,_script__WEBPACK_IMPORTED_MODULE_3__.filterTaskArray)(defaultProject.id)\n                console.log(filtered)\n                let findTaskIndex = (0,_script__WEBPACK_IMPORTED_MODULE_3__.findProjectIndex)(_script__WEBPACK_IMPORTED_MODULE_3__.inboxArray, defaultProject.id)\n                for (let index = 0; index < filtered.length; index++) {\n                    const filteredValue = Object.values(filtered[index])\n                    createTaskDom(findTaskIndex[index], filteredValue[0], filteredValue[2], filteredValue[3])  \n                }\n            }\n        })\n    });\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/options.js":
/*!********************************!*\
  !*** ./src/modules/options.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectOption: () => (/* binding */ projectOption),\n/* harmony export */   projectRemoveOption: () => (/* binding */ projectRemoveOption)\n/* harmony export */ });\n\nfunction projectOption() {\n    const project = document.getElementById('fproject')\n    const projectOptionStorage = JSON.parse(localStorage.getItem('task'))\n    console.log(typeof(projectOptionStorage))\n    let projectKeys = Object.keys(projectOptionStorage)\n    console.log(projectKeys)\n    for (let index = 1; index < projectKeys.length; index++) {\n        let element = `<option value=\"${projectKeys[index]}\">${projectKeys[index]}</option>`\n        project.innerHTML += element \n    }\n}\n\nfunction projectRemoveOption() {\n    const project = document.getElementById('fproject')\n    project.innerHTML = ''\n    project.innerHTML = `<option value=\"inbox\">Inbox</option>`\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/options.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.js */ \"./src/modules/options.js\");\n\n\nfunction popupListener() {\n    const openTaskForm = document.querySelector('#addTask')\n    const popupBackground = document.querySelectorAll('[data-background]')\n    const popupClose = document.querySelectorAll('[data-close]')\n\n    openTaskForm.addEventListener('click', () => {\n        document.getElementById('addTaskPopup').classList.add('active')\n        ;(0,_options_js__WEBPACK_IMPORTED_MODULE_0__.projectOption)()\n    })\n\n    popupBackground.forEach(background => {\n        background.addEventListener('click', () => {\n            document.getElementById('addTaskPopup').classList.remove('active')\n            ;(0,_options_js__WEBPACK_IMPORTED_MODULE_0__.projectRemoveOption)()\n        })\n    })\n\n    popupClose.forEach(close => {\n        close.addEventListener('click', () => {\n            document.getElementById('addTaskPopup').classList.remove('active')\n            ;(0,_options_js__WEBPACK_IMPORTED_MODULE_0__.projectRemoveOption)()\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupListener);\n\n//# sourceURL=webpack://todo/./src/modules/popup.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendTasks: () => (/* binding */ appendTasks),\n/* harmony export */   filterTaskArray: () => (/* binding */ filterTaskArray),\n/* harmony export */   findProjectIndex: () => (/* binding */ findProjectIndex),\n/* harmony export */   inboxArray: () => (/* binding */ inboxArray),\n/* harmony export */   inboxObject: () => (/* binding */ inboxObject)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\n\n\n\n\nconsole.log(\"Test Run\")\n\nlet inboxArray = []\nlet inboxObject = {\n    inbox: inboxArray,\n}\n\nfunction createObjectTask(title, description, dueDate, priority, project) {\n    return {\n        title: title,\n        description: description,\n        dueDate: dueDate,\n        priority: priority,\n        project: project,\n        checked: false,\n    }\n}\n\nfunction filterTaskArray(projectValue) {\n    const filteredInbox = inboxArray.filter((project) => {\n        return project.project === projectValue\n    })\n    return filteredInbox\n}\n\nfunction createProject(projectName) {\n    if (Object.keys(inboxObject) === projectName) {\n        return console.log(`Project name (${projectName}) already exists`)\n    } else {\n        return inboxObject[projectName] = []\n    }\n}\n\nfunction updateProject(updateProjectArray) {\n    let updater = filterTaskArray(updateProjectArray)\n    for (let index = 1; index < updater.length; index++) {\n        const element = updater[index]\n        inboxObject[updateProjectArray].push(element)\n    }\n}\n\nfunction findProjectIndex(mainArray, project) {\n    let indexNumber = [];\n    mainArray.forEach((element, index) => {\n        if (element.project === project) {\n            indexNumber.push(index.toString())\n        }\n    });\n    return indexNumber;\n}\n\nconst myForm = document.getElementById('formOne')\n\nmyForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    if (document.getElementById('ftitle') !== null) {\n        let titleInput = document.getElementById('ftitle').value\n        let descriptionInput = document.getElementById('fdescription').value\n        let dateInput = document.getElementById('fdate').value\n        let priorityInput = document.getElementById('fpriority').value\n        let projectInput = document.getElementById('fproject').value\n    \n        addTask(titleInput, descriptionInput, dateInput, priorityInput, projectInput)\n        ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.createTaskDom)(inboxArray.length.toString(), titleInput, dateInput, priorityInput)\n        localStorage.setItem('task', JSON.stringify(inboxObject))\n    } else if (document.getElementById('formProject') !== null) {\n        let addProjectInput = document.getElementById('formProject').value\n        createProject(addProjectInput)\n        ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.createProjectDom)(addProjectInput)\n        localStorage.setItem('task', JSON.stringify(inboxObject))\n    }\n\n    myForm.reset();\n    console.log('Add Button Clicked');\n})\n\nfunction retrieveStorage() {\n    if (localStorage.getItem('task') !== null) {\n        const getItem = JSON.parse(localStorage.getItem('task'))\n        const inbox = getItem.inbox\n        for (let index = 0; index < inbox.length; index++) { \n            inboxArray.push(inbox[index])\n        }\n        const objectKeys = Object.keys(getItem)\n        for (let index = 1; index < objectKeys.length; index++) {\n            createProject(objectKeys[index])\n            const filterProject = filterTaskArray(objectKeys[index])\n            for (let j = 0; j < filterProject.length; j++) {\n                inboxObject[objectKeys[index]].push(filterProject[j]);\n            }\n            (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.createProjectDom)(objectKeys[index])\n        }\n        appendTasks()\n        console.log('Storage Retrival')\n    }\n}\n\nfunction appendTasks() {\n    for (let index = 0; index < inboxArray.length; index++) {\n        const objectValue = Object.values(inboxArray[index])\n        ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.createTaskDom)(index.toString(), objectValue[0], objectValue[2], objectValue[3])\n    }\n}\n\nfunction addTask(title, description, dueDate, priority, project) {\n    let todos = createObjectTask(title, description, dueDate, priority, project)\n    inboxArray.push(todos)\n    if (project !== 'inbox') inboxObject[project].push(todos);\n}\n\nfunction init() {\n    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    ;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.projectEventListener)()\n}\n\ninit()\n\nwindow.onload = () => {\n    retrieveStorage()\n    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.projectEventListener)()\n} \n\n//# sourceURL=webpack://todo/./src/script.js?");

/***/ }),

/***/ "./src/Icons/delete.png":
/*!******************************!*\
  !*** ./src/Icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1357afdf60503afc36b.png\";\n\n//# sourceURL=webpack://todo/./src/Icons/delete.png?");

/***/ }),

/***/ "./src/Icons/report.png":
/*!******************************!*\
  !*** ./src/Icons/report.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a66b2f877df955d98fc8.png\";\n\n//# sourceURL=webpack://todo/./src/Icons/report.png?");

/***/ }),

/***/ "./src/Icons/text-file.png":
/*!*********************************!*\
  !*** ./src/Icons/text-file.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eae08af1fbfc10f8c5c7.png\";\n\n//# sourceURL=webpack://todo/./src/Icons/text-file.png?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;