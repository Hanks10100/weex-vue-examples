/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Guide = __webpack_require__(10);

var _Guide2 = _interopRequireDefault(_Guide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Guide2.default.el = '#root';
new Vue(_Guide2.default);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_Guide_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_Guide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_Guide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0027c508_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_Guide_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(16)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0027c508"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_Guide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0027c508_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_Guide_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/Guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0027c508", Component.options)
  } else {
    hotAPI.reload("data-v-0027c508", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("7489f9d3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0027c508\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Guide.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0027c508\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Guide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n.banner[data-v-0027c508] {\n  height: 350px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  margin-bottom: 10px;\n}\n.center[data-v-0027c508] {\n  align-items: center;\n  justify-content: center;\n}\n.title[data-v-0027c508] {\n  text-align: center;\n  margin-top: 60px;\n  margin-bottom: 60px;\n  color: #606060;\n}\n.lesson[data-v-0027c508] {\n  /* height: 120px; */\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #EEEEEE;\n  flex-direction: row;\n  align-items: center;\n}\n.lesson-zh[data-v-0027c508] { width: 600px;\n}\n.lesson-en[data-v-0027c508] { width: 630px;\n}\n.lesson-index[data-v-0027c508] {\n  color: #777777;\n  text-align: right;\n  padding-right: 30px;\n}\n.lesson-title[data-v-0027c508] {\n  padding-top: 35px;\n  padding-bottom: 35px;\n}\n.lesson-index-zh[data-v-0027c508] {\n  font-size: 46px;\n  width: 120px;\n}\n.lesson-title-zh[data-v-0027c508] {\n  font-size: 42px;\n  width: 480px;\n}\n.lesson-index-en[data-v-0027c508] {\n  font-size: 42px;\n  width: 100px;\n}\n.lesson-title-en[data-v-0027c508] {\n  font-size: 38px;\n  width: 530px;\n}\n.footer[data-v-0027c508] {\n  height: 120px;\n  padding-top: 40px;\n}\n.copyright[data-v-0027c508] {\n  font-size: 22px;\n  color: #A0A0A0;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(15)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Learn Weex
var learnWeex = {
  mainColor: '#00B4FF',
  poster: 'https://gw.alicdn.com/tfs/TB17hlIdgoQMeJjy0FpXXcTxpXa-328-328.png',
  title: {
    zh: '学习 Weex',
    en: 'Learn Weex'
  },
  copyright: {
    zh: '来自 http://weex-project.io/cn/',
    en: 'From http://weex-project.io/'
  },
  lessons: [{
    //   title: {
    //     zh: '什么是 Weex ？',
    //     en: 'What is Weex ?'
    //   },
    //   docLink: {
    //     zh: '',
    //     en: ''
    //   }
    // }, {
    title: {
      zh: '快速上手',
      en: 'Get Started'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/index.html',
      en: 'http://weex-project.io/guide/index.html'
    }
  }, {
    title: {
      zh: '工作原理',
      en: 'How it works'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/intro/how-it-works.html',
      en: 'http://weex-project.io/guide/intro/how-it-works.html'
    }
  }, {
    title: {
      zh: '用 Weex 构建移动应用',
      en: 'Mobile App Architecture'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/intro/app-architecture.html',
      en: 'http://weex-project.io/guide/intro/app-architecture.html'
    }
  }, {
    title: {
      zh: 'Weex 页面结构',
      en: 'Weex Page Architecture'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/intro/page-architecture.html',
      en: 'http://weex-project.io/guide/intro/page-architecture.html'
    }
  }, {
    title: {
      zh: '集成 Weex 到已有应用',
      en: 'Integrate to Your App'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/integrate-to-your-app.html',
      en: 'http://weex-project.io/guide/integrate-to-your-app.html'
    }
  }, {
    title: {
      zh: '和 Web 平台的差异',
      en: 'Platform difference with Web'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/platform-difference.html',
      en: 'http://weex-project.io/references/platform-difference.html'
    }
  }, {
    title: {
      zh: '搭建开发环境',
      en: 'Set Up Dev Environment'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/set-up-env.html',
      en: 'http://weex-project.io/guide/set-up-env.html'
    }
  }, {
    title: {
      zh: '使用 Vue 开发页面',
      en: 'Using Vue'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/intro/using-vue.html',
      en: 'http://weex-project.io/guide/intro/using-vue.html'
    }
  }, {
    title: {
      zh: 'Vue 在 Weex 中的差异',
      en: 'Vue.js Difference with Web'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/vue/difference-with-web.html',
      en: 'http://weex-project.io/references/vue/difference-with-web.html'
    }
  }, {
    title: {
      zh: '通用样式',
      en: 'Common Styles'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/common-style.html',
      en: 'http://weex-project.io/references/common-style.html'
    }
  }, {
    title: {
      zh: '通用事件',
      en: 'Common Events'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/common-event.html',
      en: 'http://weex-project.io/references/common-event.html'
    }
  }, {
    title: {
      zh: '手势',
      en: 'Gestures'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/gesture.html',
      en: 'http://weex-project.io/references/gesture.html'
    }
  }, {
    title: {
      zh: 'Weex 实例变量',
      en: 'The "weex" Variable'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/weex-variable.html',
      en: 'http://weex-project.io/references/weex-variable.html'
    }
  }, {
    title: {
      zh: '内置组件',
      en: 'Build-in Components'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/index.html',
      en: 'http://weex-project.io/references/components/index.html'
    }
  }, {
    title: {
      zh: '内置模块',
      en: 'Build-in Modules'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/index.html',
      en: 'http://weex-project.io/references/modules/index.html'
    }
  }, {
    title: {
      zh: 'Android 扩展',
      en: 'Extend to Android'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/advanced/extend-to-android.html',
      en: 'http://weex-project.io/references/advanced/extend-to-android.html'
    }
  }, {
    title: {
      zh: 'iOS 扩展',
      en: 'Extend to iOS'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/advanced/extend-to-ios.html',
      en: 'http://weex-project.io/references/advanced/extend-to-ios.html'
    }
  }, {
    title: {
      zh: 'Web 扩展',
      en: 'Extend to Web'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/advanced/extend-to-html5.html',
      en: 'http://weex-project.io/references/advanced/extend-to-html5.html'
    }
  }, {
    title: {
      zh: '使用 weex-toolkit',
      en: 'Using weex-toolkit'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/tools/toolkit.html',
      en: 'http://weex-project.io/guide/tools/toolkit.html'
    }
  }, {
    title: {
      zh: '集成 Devtools 到 Android',
      en: 'Integrate Devtool to Android'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/advanced/integrate-devtool-to-android.html',
      en: 'http://weex-project.io/references/advanced/integrate-devtool-to-android.html'
    }
  }, {
    title: {
      zh: '集成 Devtools 到 iOS',
      en: 'Integrate Devtool to iOS'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/advanced/integrate-devtool-to-ios.html',
      en: 'http://weex-project.io/references/advanced/integrate-devtool-to-ios.html'
    }
  }, {
    title: {
      zh: '使用 Vuex 和 vue-router',
      en: 'Using Vuex and vue-router'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/vue/difference-of-vuex.html',
      en: 'http://weex-project.io/references/vue/difference-of-vuex.html'
    }
  }, {
    title: 'JS Service',
    docLink: {
      zh: 'http://weex-project.io/cn/references/js-service/index.html',
      en: 'http://weex-project.io/references/js-service/index.html'
    }
  }, {
    title: {
      zh: '如何参与社区',
      en: 'How to Contribute'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/guide/contributing.html',
      en: 'http://weex-project.io/guide/contributing.html'
    }
  }, {
    title: 'FAQ',
    docLink: {
      zh: 'http://weex-project.io/cn/faq.html',
      en: 'http://weex-project.io/faq.html'
    }
  }]
};

var learnCSS = {
  mainColor: '#f56fc6',
  poster: 'https://gw.alicdn.com/tfs/TB1k6anhMMPMeJjy1XdXXasrXXa-427-190.jpg',
  posterBg: '#ffa2de',
  posterStyle: {
    width: '517px',
    height: '230px'
  },
  title: {
    zh: '学习 CSS',
    en: 'Learn CSS'
  },
  copyright: {
    zh: '来自 MDN (Mozilla Developer Network)',
    en: 'From MDN (Mozilla Developer Network)'
  },
  lessons: [{
    title: {
      zh: '什么是 CSS ？',
      en: 'What is CSS ?'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started/What_is_CSS',
      en: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS'
    }
  }, {
    title: {
      zh: 'CSS 语法',
      en: 'CSS Syntax'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Syntax',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax'
    }
  }, {
    title: {
      zh: 'CSS的值和单位',
      en: 'CSS Values and Units'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units'
    }
  }, {
    title: {
      zh: '盒模型',
      en: 'The Box Model'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Box_model',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model'
    }
  }, {
    title: {
      zh: '盒模型的属性',
      en: 'Box Model Properties'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model',
      en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model'
    }
  }, {
    title: {
      zh: '定位布局',
      en: 'Positioning'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/%E5%AE%9A%E4%BD%8Dx',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/positioning'
    }
  }, {
    title: {
      zh: '定位布局的属性',
      en: 'CSS Positioning'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning',
      en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning'
    }
  }, {
    title: {
      zh: 'Flexbox 布局',
      en: 'Flexbox Layout'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox'
    }
  }, {
    title: {
      zh: 'Flexbox 布局的属性',
      en: 'CSS Flexible Box Layout'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout',
      en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'
    }
  }, {
    title: {
      zh: 'Weex 中的通用样式',
      en: 'Common Styles in Weex'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/common-style.html',
      en: 'http://weex-project.io/references/common-style.html'
    }
  }, {
    title: {
      zh: 'Weex 中的文本样式',
      en: 'Text Styles in Weex'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/text-style.html',
      en: 'http://weex-project.io/references/text-style.html'
    }
  }, {
    title: {
      zh: '块格式化上下文(BFC)',
      en: 'Block Formatting Context'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context',
      en: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context'
    }
  }, {
    title: {
      zh: '视觉格式化模型',
      en: 'Visual Formatting Model'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model',
      en: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Visual_formatting_model'
    }
  }, {
    title: 'CSS Reference',
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
      en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference'
    }
  }]
};

var learnJS = {
  mainColor: '#F7BD2A',
  poster: 'https://gw.alicdn.com/tfs/TB1bT98hMoQMeJjy0FpXXcTxpXa-1500-700.png',
  posterBg: '#FAF3EB',
  posterStyle: {
    width: '750px',
    height: '350px'
  },
  title: {
    zh: '学习 Javascript',
    en: 'Learn Javascript'
  },
  copyright: {
    zh: '来自 MDN (Mozilla Developer Network)',
    en: 'From MDN (Mozilla Developer Network)'
  },
  lessons: [{
    title: {
      zh: '什么是 Javascript ？',
      en: 'What is Javascript ?'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
    }
  }, {
    title: {
      zh: 'JavaScript基础',
      en: 'JavaScript basics'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'
    }
  }, {
    title: {
      zh: '重新介绍 JavaScript',
      en: 'A re-introduction to JavaScript'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript'
    }
  }, {
    title: {
      zh: '语法和数据类型',
      en: 'Grammar and types'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope'
    }
  }, {
    title: {
      zh: '数据类型和数据结构',
      en: 'Data types and data structures'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures'
    }
  }, {
    title: {
      zh: '变量',
      en: 'Variables'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Variables',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables'
    }
  }, {
    title: {
      zh: '数字和操作符',
      en: 'Numbers and operators'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Math',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math'
    }
  }, {
    title: {
      zh: '字符串',
      en: 'Handling text'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Strings',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings'
    }
  }, {
    title: {
      zh: '常用的 String 方法',
      en: 'Useful string methods'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods'
    }
  }, {
    title: {
      zh: '数组',
      en: 'Arrays'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Arrays',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays'
    }
  }, {
    title: {
      zh: '函数',
      en: 'Functions'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions'
    }
  }, {
    title: {
      zh: 'JavaScript 对象基础',
      en: 'JavaScript object basics'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Basics',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics'
    }
  }, {
    title: {
      zh: '使用对象',
      en: 'Working with objects'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects'
    }
  }, {
    title: {
      zh: '使用 JSON 数据',
      en: 'Working with JSON'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON'
    }
  }, {
    title: {
      zh: '对象模型的细节',
      en: 'Details of the object model'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model'
    }
  }, {
    title: {
      zh: '对象原型',
      en: 'Object prototypes'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes',
      en: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes'
    }
  }, {
    title: {
      zh: 'JavaScript 中的继承',
      en: 'Inheritance in JavaScript'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance',
      en: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance'
    }
  }, {
    title: {
      zh: '继承与原型链',
      en: 'Inheritance and the prototype chain'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain'
    }
  }, {
    title: {
      zh: '严格模式',
      en: 'Strict mode'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode'
    }
  }, {
    title: {
      zh: '内存管理',
      en: 'Memory Management'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management'
    }
  }, {
    title: {
      zh: '并发模型与事件循环',
      en: 'Concurrency model and Event Loop'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop'
    }
  }, {
    //   title: {
    //     zh: '索引集合类',
    //     en: 'Indexed collections'
    //   },
    //   docLink: {
    //     zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections',
    //     en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections'
    //   }
    // }, {
    //   title: {
    //     zh: '带键的集合',
    //     en: 'Keyed collections'
    //   },
    //   docLink: {
    //     zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections',
    //     en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections'
    //   }
    // }, {
    title: {
      zh: 'JavaScript 标准库',
      en: 'Standard built-in objects'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects',
      en: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects'
    }
  }]
};

var learnVue = {
  mainColor: '#42b983',
  poster: 'https://gw.alicdn.com/tfs/TB1J_uKcMMPMeJjy1XdXXasrXXa-400-400.png',
  title: {
    zh: '学习 Vue.js',
    en: 'Learn Vue.js'
  },
  copyright: {
    zh: '来自 https://cn.vuejs.org/',
    en: 'From https://vuejs.org/'
  },
  lessons: [{
    title: {
      zh: 'Vue.js 是什么？',
      en: 'What is Vue.js ?'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/index.html',
      en: 'https://vuejs.org/v2/guide/index.html'
    }
  }, {
    title: {
      zh: '单文件组件',
      en: 'Single File Components'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/single-file-components.html',
      en: 'https://vuejs.org/v2/guide/single-file-components.html'
    }
  }, {
    title: {
      zh: '模板语法',
      en: 'Template Syntax'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/syntax.html',
      en: 'https://vuejs.org/v2/guide/syntax.html'
    }
  }, {
    title: {
      zh: 'Class 与 Style 绑定',
      en: 'Class and Style Bindings'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/class-and-style.html',
      en: 'https://vuejs.org/v2/guide/class-and-style.html'
    }
  }, {
    title: {
      zh: '条件渲染',
      en: 'Conditional Rendering'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/conditional.html',
      en: 'https://vuejs.org/v2/guide/conditional.html'
    }
  }, {
    title: {
      zh: '列表渲染',
      en: 'List Rendering'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/list.html',
      en: 'https://vuejs.org/v2/guide/list.html'
    }
  }, {
    title: {
      zh: '事件处理',
      en: 'Event Handling'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/events.html',
      en: 'https://vuejs.org/v2/guide/events.html'
    }
  }, {
    title: {
      zh: '表单输入绑定',
      en: 'Form Input Bindings'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/forms.html',
      en: 'https://vuejs.org/v2/guide/forms.html'
    }
  }, {
    title: {
      zh: 'Vue 实例',
      en: 'The Vue Instance'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/instance.html',
      en: 'https://vuejs.org/v2/guide/instance.html'
    }
  }, {
    title: {
      zh: '在 Weex 中的差异',
      en: 'Difference in Weex'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/vue/difference-with-web.html',
      en: 'http://weex-project.io/references/vue/difference-with-web.html'
    }
  }, {
    title: {
      zh: '混合（mixins）',
      en: 'Mixins'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/mixins.html',
      en: 'https://vuejs.org/v2/guide/mixins.html'
    }
  }, {
    title: {
      zh: '过滤器（filters）',
      en: 'Filters'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/filters.html',
      en: 'https://vuejs.org/v2/guide/filters.html'
    }
  }, {
    title: {
      zh: '插件（plugins）',
      en: 'Plugins'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/plugins.html',
      en: 'https://vuejs.org/v2/guide/plugins.html'
    }
  }, {
    title: {
      zh: '自定义指令',
      en: 'Custom Directives'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/custom-directive.html',
      en: 'https://vuejs.org/v2/guide/custom-directive.html'
    }
  }, {
    title: {
      zh: '状态管理',
      en: 'State Management'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/state-management.html',
      en: 'https://vuejs.org/v2/guide/state-management.html'
    }
  }, {
    title: {
      zh: '深入响应式原理',
      en: 'Reactivity in Depth'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/reactivity.html',
      en: 'https://vuejs.org/v2/guide/reactivity.html'
    }
  }, {
    title: {
      zh: '渲染函数',
      en: 'Render Functions'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/render-function.html',
      en: 'https://vuejs.org/v2/guide/render-function.html'
    }
  }, {
    title: {
      zh: 'TypeScript 支持',
      en: 'TypeScript Support'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/typescript.html',
      en: 'https://vuejs.org/v2/guide/typescript.html'
    }
  }, {
    title: 'API',
    docLink: {
      zh: 'https://cn.vuejs.org/v2/api/',
      en: 'https://vuejs.org/v2/api/'
    }
  }]
};

var hackernewsApp = {
  startAt: 0,
  mainColor: '#42b983',
  poster: 'https://gw.alicdn.com/tfs/TB1j0fGdaagSKJjy0FbXXa.mVXa-700-328.png',
  // poster: 'https://segmentfault.com/img/bVJaqq?w=2712&h=1628',
  title: '使用 Weex 和 Vue 开发原生应用',
  titleFontSize: 46,
  posterStyle: {
    width: '650px',
    height: '304px'
  },
  copyright: {
    zh: '来自 SegmentFault',
    en: 'From SegmentFault'
  },
  lessons: [{
    title: '项目介绍和文章目录',
    docLink: 'https://segmentfault.com/a/1190000008342533'
  }, {
    title: '如何配置开发环境',
    docLink: 'https://segmentfault.com/a/1190000008344148'
  }, {
    title: '编写独立页面',
    docLink: 'https://segmentfault.com/a/1190000008366358'
  }, {
    title: '使用 Vue 框架的特性',
    docLink: 'https://segmentfault.com/a/1190000008432907'
  }, {
    title: '使用 Weex 平台的功能',
    docLink: 'https://segmentfault.com/a/1190000008464683'
  }, {
    title: '使用 Vuex',
    docLink: 'https://segmentfault.com/a/1190000008520677'
  }, {
    title: '使用 vue-router',
    docLink: 'https://segmentfault.com/a/1190000009101411'
  }, {
    title: '完整项目目录详解',
    docLink: 'https://segmentfault.com/a/1190000009101907'
  }]
};

var navigator = weex.requireModule('navigator');
var clipboard = weex.requireModule('clipboard');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
function createURL(hash) {
  if (WXEnvironment.platform === 'Web') {
    return 'http://dotwe.org/raw/htmlVue/' + hash;
  }
  var url = 'http://dotwe.org/raw/dist/' + hash + '.bundle.wx';
  return url + '?_wx_tpl=' + url;
}
exports.default = {
  data: function data() {
    return (0, _assign2.default)({
      language: 'zh',
      startAt: 1,
      titleFontSize: '60px',
      posterBg: '#F5F5F5',
      posterStyle: {
        width: '300px',
        height: '300px'
      },
      mainColor: '#00B4FF'
    }, learnWeex);
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    storage.getItem('WEEX_PLAYGROUND_LANGUAGE', function (event) {
      if (event.result === 'success') {
        _this.language = event.data;
      }
    });
  },

  methods: {
    i18n: function i18n(text) {
      if (typeof text === 'string') {
        return text;
      }
      if (Object.prototype.toString.call(text) === '[object Object]') {
        var lang = this.language || 'zh';
        return text[lang];
      }
    },
    openURL: function openURL(url) {
      if (!url) return;
      storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url));
      navigator.push({
        url: createURL(this.i18n({
          'en': '502078627a7d617f11f48f15560210ff',
          'zh': 'ab57ab447248c35115144736ba38521a'
        }))
      });
    },
    copyLinks: function copyLinks() {
      var _this2 = this;

      modal.confirm({
        message: this.i18n({
          en: 'Copy all article address ?',
          zh: '复制所有文章链接？'
        })
      }, function (result) {
        if (result !== 'OK') return;
        var text = _this2.i18n(_this2.title) + '\n\n';
        text += _this2.lessons.map(function (lesson, i) {
          return i + _this2.startAt + '. ' + _this2.i18n(lesson.title) + ' ' + _this2.i18n(lesson.docLink);
        }).join('\n');
        text += '\n\n' + _this2.i18n(_this2.copyright);
        clipboard.setString(text);
        modal.toast({
          message: _this2.i18n({
            en: 'Article address is copied',
            zh: '文章链接已复制'
          })
        });
      });
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(21);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(31) });


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(27);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(44);
var toObject = __webpack_require__(45);
var IObject = __webpack_require__(6);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(34);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(36)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "list",
    { staticClass: "wrapper" },
    [
      _c("cell", { on: { longpress: _vm.copyLinks } }, [
        _c(
          "div",
          {
            staticClass: "banner center",
            style: { backgroundColor: _vm.posterBg }
          },
          [
            _c("image", {
              staticClass: "poster",
              style: _vm.posterStyle,
              attrs: { resize: "cover", src: _vm.poster }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("cell", { staticClass: "center", on: { longpress: _vm.copyLinks } }, [
        _c(
          "text",
          { staticClass: "title", style: { fontSize: _vm.titleFontSize } },
          [_vm._v(_vm._s(_vm.i18n(_vm.title)))]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.lessons, function(lesson, i) {
        return _c("cell", { key: i, staticClass: "center" }, [
          _c(
            "div",
            {
              class: ["lesson", "lesson-" + _vm.language],
              on: {
                click: function($event) {
                  _vm.openURL(lesson.docLink)
                }
              }
            },
            [
              _c(
                "text",
                { class: ["lesson-index", "lesson-index-" + _vm.language] },
                [_vm._v(_vm._s(_vm.startAt + i) + ".")]
              ),
              _vm._v(" "),
              _c(
                "text",
                {
                  class: ["lesson-title", "lesson-title-" + _vm.language],
                  style: { color: _vm.mainColor }
                },
                [_vm._v(_vm._s(_vm.i18n(lesson.title)))]
              )
            ]
          )
        ])
      }),
      _vm._v(" "),
      _c("cell", { staticClass: "footer center" }, [
        _c("text", { staticClass: "copyright" }, [
          _vm._v(_vm._s(_vm.i18n(_vm.copyright)))
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0027c508", esExports)
  }
}

/***/ })
/******/ ]);