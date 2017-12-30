// { "framework": "Vue" }
"use weex:vue";

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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(11);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(40);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(9);
var ctx = __webpack_require__(15);
var hide = __webpack_require__(2);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
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
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(47);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Examples = __webpack_require__(27);

var _Examples2 = _interopRequireDefault(_Examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Examples2.default.el = '#root';
new Vue(_Examples2.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(65)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/pages/Examples.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-25a5be6d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "width": "750",
    "position": "absolute",
    "top": 0,
    "bottom": "110",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "group": {
    "width": "210"
  },
  "examples": {
    "width": "540"
  },
  "group-type": {
    "width": "200",
    "height": "100",
    "transitionProperty": "width,backgroundColor",
    "transitionDuration": 200,
    "borderBottomWidth": "1",
    "borderBottomColor": "#EEEEEE",
    "borderRightWidth": "2",
    "borderRightColor": "#E0E0E0",
    "justifyContent": "center",
    "backgroundColor": "#FEFEFE"
  },
  "@TRANSITION": {
    "group-type": {
      "property": "width,backgroundColor",
      "duration": 200
    }
  },
  "group-name": {
    "textAlign": "center",
    "fontSize": "32",
    "color": "#888888"
  },
  "active-group-type": {
    "width": "210",
    "borderRadius": "10",
    "backgroundColor": "rgba(0,189,255,0.1)",
    "borderRightColor": "rgba(0,189,255,0.2)",
    "borderBottomColor": "rgba(0,189,255,0.1)"
  },
  "active-group-name": {
    "fontSize": "34",
    "fontWeight": "bold",
    "color": "#00B4FF"
  },
  "group-intro": {
    "paddingTop": "60",
    "paddingBottom": "45"
  },
  "group-title": {
    "paddingRight": "10",
    "paddingBottom": "30",
    "fontSize": "40",
    "textAlign": "center",
    "color": "#00B4FF"
  },
  "group-desc": {
    "fontSize": "28",
    "color": "#999999",
    "marginLeft": "30",
    "marginRight": "40"
  },
  "doc-link": {
    "fontSize": "26",
    "color": "rgba(0,189,255,0.6)",
    "textAlign": "right",
    "marginTop": "10",
    "marginRight": "60"
  },
  "case": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "paddingLeft": "5",
    "paddingRight": "10",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "example-box": {
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "15",
    "paddingRight": "15",
    "width": "270"
  },
  "screenshot": {
    "width": "220",
    "height": "343",
    "borderWidth": "1",
    "borderColor": "#DDDDDD"
  },
  "example-title": {
    "fontSize": "32",
    "textAlign": "center",
    "color": "#606060",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "example-tips": {
    "fontSize": "26",
    "textAlign": "center",
    "color": "#999999",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "setting-title-cell": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "paddingTop": "50",
    "paddingRight": "50",
    "paddingBottom": "50",
    "paddingLeft": "50"
  },
  "setting-title": {
    "fontSize": "50",
    "paddingBottom": "30",
    "textAlign": "center",
    "color": "#686868"
  },
  "setting-cell": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD"
  },
  "setting-label": {
    "fontSize": "36",
    "color": "#707070"
  },
  "setting-value": {
    "fontSize": "36",
    "color": "#999999"
  },
  "tabbar": {
    "width": "750",
    "position": "fixed",
    "bottom": 0,
    "height": "100",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "flex-end",
    "backgroundColor": "#E6E6E6"
  },
  "tab-cell": {
    "width": "186",
    "height": "100",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "#DDDDDD",
    "justifyContent": "center",
    "backgroundColor": "#FBFBFB"
  },
  "active-tab-cell": {
    "borderTopColor": "rgba(0,189,255,0.8)",
    "backgroundColor": "#BDECFF"
  },
  "tab-name": {
    "textAlign": "center",
    "fontSize": "36",
    "color": "#666666"
  },
  "active-tab-name": {
    "color": "#00B4FF",
    "fontSize": "45",
    "fontWeight": "bold"
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _examples = __webpack_require__(30);

var _examples2 = _interopRequireDefault(_examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
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

var storage = weex.requireModule('storage');
var picker = weex.requireModule('picker');
function createURL(hash) {
  if (WXEnvironment.platform === 'Web') {
    return 'http://dotwe.org/raw/htmlVue/' + hash;
  }
  var url = 'http://dotwe.org/raw/dist/' + hash + '.bundle.wx';
  return url + '?_wx_tpl=' + url;
}

var exampleMap = (0, _examples2.default)({ scope: 'mobile', filterTODO: true });
exports.default = {
  filters: {
    url: createURL,
    lang: function lang(type) {
      switch (type) {
        case 'en':
          return 'English';
        case 'zh':
          return '中文';
      }
      return type;
    }
  },
  data: function data() {
    return {
      language: 'zh',
      activeTab: 'component',
      activeGroup: 'div',
      tips: {
        VIEW_SOURCE: { en: 'view source', zh: '查看源码' },
        LANGUAGE: { en: 'Language', zh: '语言' },
        SEE_MORE: { en: 'see more', zh: '查看更多' }
      },
      tabs: exampleMap.map(function (group) {
        return { type: group.type, name: group.name };
      })
    };
  },

  watch: {
    language: function language() {
      storage.setItem('WEEX_PLAYGROUND_LANGUAGE', this.language);
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    storage.getItem('WEEX_PLAYGROUND_LANGUAGE', function (event) {
      if (event.result === 'success') {
        _this.language = event.data;
      }
    });
  },

  computed: {
    currentTab: function currentTab() {
      var _this2 = this;

      return exampleMap.filter(function (tab) {
        return tab.type === _this2.activeTab;
      })[0];
    },
    currentGroup: function currentGroup() {
      var _this3 = this;

      return this.currentTab.group.filter(function (group) {
        return group.type === _this3.activeGroup;
      })[0];
    },
    currentExamples: function currentExamples() {
      var result = [];
      var exps = this.currentGroup.examples;
      if (exps) {
        for (var i = 0; i < exps.length; ++i) {
          var idx = Math.floor(i / 2);
          if (!result[idx]) {
            result[idx] = [];
          }
          result[idx].push(exps[i]);
        }
      }
      return result;
    }
  },
  methods: {
    toggleTab: function toggleTab(tabType) {
      this.activeTab = tabType;
      this.activeGroup = this.currentTab.group[0].type;
    },
    toggleGroup: function toggleGroup(type) {
      this.activeGroup = type;
    },
    i18n: function i18n(text) {
      if (typeof text === 'string') {
        return text;
      }
      if (Object.prototype.toString.call(text) === '[object Object]') {
        var lang = this.language || 'en';
        return text[lang];
      }
    },
    jumpTo: function jumpTo(url) {
      var hash = {
        'en': '06f6a4f7a03ceffc93ec09ddaebb0a51',
        'zh': 'fa7d084ea1dc617e1c4e03ecd65263db'
      };
      storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url));
      navigator.push({ url: createURL(this.i18n(hash)) });
    },
    viewSource: function viewSource(url) {
      // const hash =  {
      //   'en': 'a9b64158408b8e03d75fa26ba2095b2e',
      //   'zh': 'a411ffc411c4a07ab50e277343f8b64e'
      // }
      var hash = {
        'en': '032afafed7947de7d5123a45b3ca9704',
        'zh': '785cf2804ac6a6dd807a0c988b5729cd'
      };
      storage.setItem('CURRENT_SOURCE_HASH', this.i18n(url));
      navigator.push({ url: createURL(this.i18n(hash)) });
    },
    chooseLanguage: function chooseLanguage() {
      var _this4 = this;

      var options = ['en', 'zh'];
      picker.pick({
        index: options.indexOf(this.language),
        items: ['English', '中文']
      }, function (_ref) {
        var result = _ref.result,
            data = _ref.data;

        if (result === 'success') {
          _this4.language = options[data];
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    storage.removeItem('CURRENT_DOCUMENT_URL');
    storage.removeItem('CURRENT_SOURCE_HASH');
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(31);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = __webpack_require__(59);
var modules = __webpack_require__(60);
var syntax = __webpack_require__(61);
var styles = __webpack_require__(62);
var cases = __webpack_require__(63);
var others = __webpack_require__(64);

var examples = [components, modules, syntax, styles, cases, others];

// screen shot
// http://dotwe.org/vue/5e9b359de1cbd977dec54654170d2a05

function isTODO(example) {
  return example.hash === '' || example.hash === '4624d605004fc7eb9f14ca9c5a226fe3' || example.hash === 'ccefdea9e9ef695acca7fb1b439277e2' || example.hash === '123b69b57e099036558745298fb6e8ca' || example.hash === '2d8da136e33f63a0bfe4b1e42362405b';
}

module.exports = function getExamples() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var selected = examples;
  if (options.scope === 'mobile') {
    var _others$group, _others$group2;

    selected = [components, modules, syntax];
    (_others$group = others.group).unshift.apply(_others$group, (0, _toConsumableArray3.default)(cases.group));
    (_others$group2 = others.group).unshift.apply(_others$group2, (0, _toConsumableArray3.default)(styles.group));
    selected.push(others);
  }
  // filter WIP examples
  if (options.filterTODO) {
    selected = selected.filter(function (item) {
      item.group = item.group.filter(function (group) {
        group.examples = group.examples.filter(function (_) {
          return !isTODO(_);
        });
        return !!group.examples.length;
      });
      return !!item.group.length;
    });
  }
  return selected;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(32);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(52);
module.exports = __webpack_require__(9).Array.from;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(35)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var defined = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(41);
var hide = __webpack_require__(2);
var has = __webpack_require__(6);
var Iterators = __webpack_require__(12);
var $iterCreate = __webpack_require__(42);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(51);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(44);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(50).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(45);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(46);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(48)(false);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(49);
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(25);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(15);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(25);
var call = __webpack_require__(53);
var isArrayIter = __webpack_require__(54);
var toLength = __webpack_require__(20);
var createProperty = __webpack_require__(55);
var getIterFn = __webpack_require__(56);

$export($export.S + $export.F * !__webpack_require__(58)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(12);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(11);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(57);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(12);
module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  type: 'component',
  name: { zh: '组件', en: 'Component' },
  group: [{
    type: 'div',
    name: 'div',
    title: { zh: '<div> 组件', en: '<div>' },
    desc: {
      zh: '<div> 组件是用于包装其它组件的最基本容器。支持所有的通用样式、特性、flexbox 布局。其类似于 HTML 的 <div> 容器，但不能直接在里面添加文本（字符串），如果要展示文本，应该使用 <text> 组件。',
      en: '<div> is the most fundamental component which is a contianer to wrap any other components. It supports all the common styles, attributes and layout of flexbox.'
    },
    docLink: {
      en: 'http://weex-project.io/references/components/div.html',
      zh: 'http://weex-project.io/cn/references/components/div.html'
    },
    examples: [{
      hash: 'd813b9f5d1e8ef95b0cfa32d469af236',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB11h7wewMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'd86aca3dbe3d5a00024ccdff6920561b',
      title: { zh: '嵌套', en: 'Nested' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1uKLGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '7613db44f6c03a5849937fbbdeebf69d',
      title: { zh: '文字节点', en: 'Text Node' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1qlG2cwoQMeJjy1XaXXcSsFXa-540-844.png'
    }]
  }, {
    type: 'text',
    name: 'text',
    title: { zh: '<text> 组件', en: '<text>' },
    desc: {
      zh: '<text> 是 Weex 内置的组件，用来将文本按照指定的样式渲染出来。<text> 只能包含文本值，不支持子组件，你可以使用 {{}} 标记插入变量值作为文本内容。',
      en: 'The weex builtin component ‘text’ is used to render text with specified style rule. tag can contain text value only. You can use variable interpolation in the text content with the mark {{}}.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/text.html',
      en: 'http://weex-project.io/references/components/text.html'
    },
    examples: [{
      hash: {
        zh: '3e0220d7b379955a26039131f153a360',
        en: 'a718b029a7ba9cea08e84a6c22ec9bc4'
      },
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB1V5IXcMMPMeJjy1XdXXasrXXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB19gKsb8fH8KJjy1XbXXbLdXXa-540-844.png'
      }
    }, {
      hash: '25b96fb0283300df1b183d019d835e4f',
      title: { zh: 'lines 属性', en: '"lines"' },
      screenshot: 'https://gw.alicdn.com/tfs/TB19JaYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      hash: '7e123f72106c5dbba7675f6ee3bd35d2',
      title: { zh: '保留首尾空格', en: 'Trim space' },
      screenshot: 'https://gw.alicdn.com/tfs/TB140aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      hash: '161cd0771fd95f9e73c7663d4674c4f4',
      title: { zh: '实体字符', en: 'Entity character' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1c41UcMoQMeJjy1XaXXcSsFXa-540-844.png'
    }]
  }, {
    type: 'image',
    name: 'image',
    title: { zh: '<image> 组件', en: '<image>' },
    desc: {
      zh: '<image> 组件用于渲染图片，并且它不能包含任何子组件。需要注意的是，必须明确指定 width 和 height，否则图片无法显示。',
      en: 'image tag is used to render a specified picture, and it shouldn’t contain any child component. <img> is not supported currently.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/image.html',
      en: 'http://weex-project.io/references/components/image.html'
    },
    examples: [{
      // hash: 'c8d67a852dca4865b06cf372cd5b3c17',
      hash: 'e9cda6ca9ec05f2ff1852be82fc8f91f',
      title: { zh: '最简例子', en: 'Sample' },
      // screenshot: 'https://gw.alicdn.com/tfs/TB150aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '5bac698a83ca8c0467426746be011252',
      title: { zh: 'resize 属性', en: '"resize" Attribute' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1wKHLbILJ8KJjy0FnXXcFDpXa-540-844.png'
    }, {
      hash: '97d978c234dffe96f594c7c10e9119d0',
      title: { zh: '浮层文字', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1Mx1UcMoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '23703f3be5512d0419086d8e7937bd8d',
      title: { zh: '图片实际大小', en: 'Original Size' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sAh1gMMPMeJjy1XbXXcwxVXa-540-844.png'
    }, {
      hash: '571231d08dee12a8feaa76d1109fbcdc',
      title: { zh: 'Gif 图片', en: 'Gif Image' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1cbYxdwMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'Base64 图片', en: 'Base64 Image' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'list',
    name: 'list',
    title: { zh: '<list> 组件', en: '<list>' },
    desc: {
      zh: '<list> 组件是提供垂直列表功能的核心组件，拥有平滑的滚动和高效的内存管理，非常适合用于长列表的展示。最简单的使用方法是在 <list> 标签内使用数组循环生成的多个 <cell> 标签。',
      en: 'The List component, which inherits from Scroller component, is a core component, and it provides the most popular features for using a list of items.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/list.html',
      en: 'http://weex-project.io/references/components/list.html'
    },
    examples: [{
      hash: '3faed12fc18c947255abfa8354570170',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1pgDZcMoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '9eb4a7d067e4d49903e691cb94ff2834',
      title: '<header>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1N_zLdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<loading>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<refresh>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'f4e660c403c0fd5140ac2747f498d948',
      title: { zh: 'loadmore 事件', en: '"loadmore" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'c7f682768e18b83bfca7f1327dfab9cd',
      title: { zh: 'appear 事件', en: '"appear" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1MnzLdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'scroller',
    name: 'scroller',
    title: { zh: '<scroller> 组件', en: '<scroller>' },
    desc: {
      zh: '<scroller> 是一个竖直的，可以容纳多个排成一列的子组件的滚动器。如果子组件的总高度高于其本身，那么所有的子组件都可滚动。',
      en: 'A scroller is a component in vertical direction which can have multiple child components in one column. If total height of its child components exceed the height of the scroller, the whole child components will be scrollable.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/scroller.html',
      en: 'http://weex-project.io/references/components/scroller.html'
    },
    examples: [{
      hash: '586ca3414132895999430f6e44d81419',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'c626a5fb4981e8e8bce92d7b012c26b4',
      title: { zh: '水平滚动', en: 'Horizontal Scroll' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1QkqGb2DH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<loading>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<refresh>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'eb1f5edea6cb8f4fea06d67dc071eff7',
      title: { zh: 'loadmore 事件', en: '"loadmore" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '7e17173fb09cd29f3daa3a87739df60d',
      title: { zh: 'appear 事件', en: '"appear" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1MnzLdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '14df0c05474fd16d4690e22194a69599',
      title: 'scrollTo',
      screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
    }]
  }, {
    type: 'slider',
    name: 'slider',
    title: { zh: '<slider> 组件', en: '<slider>' },
    desc: {
      zh: '<slider> 组件用于在一个页面中展示多个图片，在前端，这种效果被称为 轮播图。',
      en: 'A slide’s player to show slides (mostly as pictures) one page by another. The default interval between two slides is 3 seconds.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/slider.html',
      en: 'http://weex-project.io/references/components/slider.html'
    },
    examples: [{
      hash: 'd8f6759dc25d31274aed106041952290',
      title: { zh: '最简例子', en: 'Simple' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1aIH3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '9ff7050b2d012b2ece066bf17fe907d5',
      title: { zh: '自动播放', en: 'Auto Play' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1ecL3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '0817ed75b49ebfa04d499b3aa5f91925',
      title: { zh: '<indicator>', en: 'With Indicator' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sdb3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '0bb9f6e469edafe4da587b80de08e0ba',
      title: { zh: '间隔时间', en: 'Interval' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1XJj3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '2d8da136e33f63a0bfe4b1e42362405b',
      title: '<slider-neighbor>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'input',
    name: 'input',
    title: { zh: '<input> 组件', en: '<input>' },
    desc: {
      zh: 'Weex 内置的 <input> 组件用来创建接收用户输入字符的输入组件。 <input> 组件的工作方式因 type 属性的值而异，比如 text, password, url, email, tel 等。此组件不支持子组件和 click 事件。',
      en: 'The weex builtin component input is used to create input controls to receive the user’s input characters.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/input.html',
      en: 'http://weex-project.io/references/components/input.html'
    },
    examples: [{
      hash: '9ff5e5ded4969d19f76e028bf1440309',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '185e8574389d3242a79090414c336e4d',
      title: 'Placeholder',
      screenshot: 'https://gw.alicdn.com/tfs/TB1XPmcdgoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: 'aab3e1a3835c9cdbed53fb127738507f',
      title: { zh: '初始状态', en: 'Initial State' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1rnh_diERMeJjy0FcXXc7opXa-540-844.png'
    }, {
      hash: '75492bb1c1af2b44293ce11164c0b3ba',
      title: { zh: '输入框类型', en: 'Input Type' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1qDh_diERMeJjy0FcXXc7opXa-540-844.png'
    }, {
      hash: '38cfc531ae3c0a10ac10236cd869e9eb',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'textarea',
    name: 'textarea',
    title: { zh: '<textarea> 组件', en: '<textarea>' },
    desc: {
      zh: 'textarea 是 Weex 内置的一个组件，用于用户交互，接受用户输入数据。可以认为是允许多行的 <input> 组件。',
      en: 'The weex builtin component textarea is used to create interactive controls to accept data from users. It can be a multi-line input.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/textarea.html',
      en: 'http://weex-project.io/references/components/textarea.html'
    },
    examples: [{
      hash: '126de8266778ddc7e967ef4cf1c98dec',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1TSyddgoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: '03caa359a9c4bf9fdc8a1d343f7f7a69',
      title: { zh: '默认行数', en: 'Default "rows"' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1AsF1diERMeJjSspjXXcpOXXa-540-844.png'
    }]
  }, {
    type: 'switch',
    name: 'switch',
    title: { zh: '<switch> 组件', en: '<switch>' },
    desc: {
      zh: '<switch> 是 Weex 的内置组件，用来创建与 iOS 一致样式的按钮。例如在 iPhone 中的设置应用中的飞行模式按钮就是一个 switch 按钮。',
      en: 'The weex builtin component switch is used to create and manage an IOS styled On/Off buttons, for example, the Airplane mode button in the Settings app is a switch button.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/switch.html',
      en: 'http://weex-project.io/references/components/switch.html'
    },
    examples: [{
      hash: 'd6769c27e18ab999ced059fff760ba0e',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1p7eDdGagSKJjy0FhXXcrbFXa-540-843.jpg'
    }, {
      hash: '8a049fb7ff19c0ee9316a483b235dd26',
      title: { zh: '初始状态', en: 'Initial State' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1u0HRc2NNTKJjSspkXXaeWFXa-540-844.jpg'
    }, {
      hash: 'b48549c39f2e82178ce8b94b395d1d0b',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB14HWzdGagSKJjy0FbXXa.mVXa-540-844.jpg'
    }]
  }, {
    type: 'video',
    name: 'video',
    title: { zh: '<video> 组件', en: '<video>' },
    desc: {
      zh: '<video> 组件可以让我们在 Weex 页面中嵌入视频内容。<text> 是唯一合法的子组件。',
      en: 'The video component can be used to embed video content in a weex page.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/video.html',
      en: 'http://weex-project.io/references/components/video.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '播放控制', en: 'Play Control' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'web',
    name: 'web',
    title: { zh: '<web> 组件', en: '<web>' },
    desc: {
      zh: '使用 <web> 组件在 Weex 页面中嵌入一张网页内容。src 属性用来指定资源地址。你也可以使用 webview module 来控制 web 的行为，比如前进、后退和重载。',
      en: 'Use web component to display any web content in the weex page. The src attribute is used to specify a special source. You also can use webview module to control some web operation such as goBack,goForward and reload.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/web.html',
      en: 'http://weex-project.io/references/components/web.html'
    },
    examples: [{
      hash: '4e64eeb667e3d3959c310eb1e66d3105',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1LpGHdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '页面跳转', en: 'Jump' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '传递参数', en: 'Pass Params' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'richtext',
    name: 'richtext',
    title: { zh: '富文本组件', en: '<richtext>' },
    desc: {
      zh: '',
      en: ''
    },
    examples: [{
      hash: '36a1999a7957de7bcbeb7cca95ba46d2',
      title: { zh: '图文混排', en: 'Use richtext' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1VPOPcMMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '8e3c274f5cae4a391a14ac81c890325f',
      title: { zh: '内容输入', en: 'With Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1SzOPcMMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'waterfall',
    name: 'waterfall',
    title: { zh: '瀑布流组件', en: '<waterfall>' },
    desc: {
      zh: '提供瀑布流布局的组件。',
      en: 'A component providing waterfall layout.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/waterfall.html',
      en: 'http://weex-project.io/references/components/waterfall.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'recycle-list',
    name: 'recycle-list',
    title: { zh: '<recycle-list> 组件', en: '<recycle-list>' },
    docLink: 'https://github.com/Hanks10100/weex-native-directive',
    examples: [{
      hash: '0658e5ec6c1d83e8c19adde7e0b2a0fa',
      title: { zh: '文本绑定', en: 'Text Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '6eb27e33b05182f2f453ebbde124d417',
      title: { zh: '属性绑定', en: 'Attribute Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '6cd9625cf1b5912289189efdba33d34c',
      title: { zh: '使用 v-for', en: 'Using v-for' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '28145f9d5efd522ef507245829f04566',
      title: { zh: '多层循环', en: 'Multiple v-for' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '条件渲染', en: 'v-if/v-else' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '54500d15b5c8f2af2fbd443ab34af822',
      title: { zh: '双向绑定', en: 'Using v-model' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'cd211e74bcf2cd918284234380f3c43a',
      title: { zh: '绑定事件', en: 'Event Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'a95fca7835aa3fc8bf2c24ec68c7d8cd',
      title: { zh: '绑定样式', en: 'Style Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '5c705064c078296bd0e6a2ee94963af7',
      title: { zh: '压测页面', en: 'Benchmark' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1JGrQilfH8KJjy1XbXXbLdXXa-540-844.png'
    }]
  }]
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  type: 'module',
  name: { zh: '模块', en: 'Module' },
  group: [{
    type: 'modal',
    name: 'modal',
    title: { zh: 'modal 模块', en: 'modal' },
    desc: {
      zh: 'modal 模块提供了以下展示消息框的 API：toast、alert、confirm 和 prompt。',
      en: 'Weex provides a series of message boxes: toast, alert, confirm and prompt.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/modal.html',
      en: 'http://weex-project.io/references/modules/modal.html'
    },
    examples: [{
      hash: '5e49976681ea1ae7bbcbce4c92b7771f',
      title: 'toast',
      screenshot: 'https://gw.alicdn.com/tfs/TB1TPWcdogQMeJjy0FiXXXhqXXa-540-844.png'
    }, {
      hash: 'd00060031b25fbfbdffdbf08b5524e51',
      title: 'alert',
      screenshot: 'https://gw.alicdn.com/tfs/TB1JsqddgoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '88b0782ba54695a66622988bfeb89fbd',
      title: 'confirm',
      screenshot: 'https://gw.alicdn.com/tfs/TB1PWmedogQMeJjy0FjXXaExFXa-540-844.png'
    }, {
      hash: '7763e5b0322cf625ec5221dea13ea5ec',
      title: 'prompt',
      screenshot: 'https://gw.alicdn.com/tfs/TB13B9gdgoQMeJjy0FpXXcTxpXa-540-844.png'
    }]
  }, {
    type: 'dom',
    name: 'dom',
    title: { zh: 'dom 模块', en: 'dom' },
    desc: {
      zh: '操作页面中的 Virtual-DOM 或者获取其信息。需要注意的是原生平台中并没有 Web 标准中的 DOM 结构。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/dom.html',
      en: 'http://weex-project.io/references/modules/dom.html'
    },
    examples: [{
      hash: '14df0c05474fd16d4690e22194a69599',
      title: 'scrollTo',
      screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: '13afb9ed3e3a79eda435113478fd83d9',
      title: 'getComponentRect',
      screenshot: 'https://gw.alicdn.com/tfs/TB1v5zscMvD8KJjy0FlXXagBFXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'addRule',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'stream',
    name: 'stream',
    title: { zh: 'stream 模块', en: 'stream' },
    desc: {
      zh: '发送网络请求并获取响应。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/stream.html',
      en: 'http://weex-project.io/references/modules/stream.html'
    },
    examples: [{
      hash: '2ae062b6a04124a35bbe2da3b1e5c07b',
      title: 'fetch',
      screenshot: 'https://gw.alicdn.com/tfs/TB1SAFdbLDH8KJjy1XcXXcpdXXa-540-844.png'
    }]
  }, {
    type: 'animation',
    name: 'animation',
    title: { zh: 'animation 模块', en: 'animation' },
    desc: {
      zh: 'animation 模块被用于在组件上执行动画。动画可以对组件执行一系列简单的变换 (位置、大小、旋转角度、背景颜色和不透明度等)。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/animation.html',
      en: 'http://weex-project.io/references/modules/animation.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'transform',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'navigator',
    name: 'navigator',
    title: { zh: 'navigator 模块', en: 'navigator' },
    desc: {
      zh: '众所周知，在浏览器里，我们可以通过前进或者回退按钮来切换页面，iOS/Android 的 navigator 模块就是用来实现类似的效果的。除了前进、回退功能，该模块还允许我们指定在切换页面的时候是否应用动画效果。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/navigator.html',
      en: 'http://weex-project.io/references/modules/navigator.html'
    },
    examples: [{
      hash: '28815dba72ee4091dfdb471f3b294e3e',
      title: 'push',
      screenshot: 'https://gw.alicdn.com/tfs/TB1Wh_CcILJ8KJjy0FnXXcFDpXa-540-844.png'
    }, {
      hash: '2af40e54aeef15228cb221c3cd57ae8f',
      title: 'pop',
      screenshot: 'https://gw.alicdn.com/tfs/TB1syzscMvD8KJjy0FlXXagBFXa-540-844.png'
    }]
  }, {
    type: 'storage',
    name: 'storage',
    title: { zh: 'storage 模块', en: 'storage' },
    desc: {
      zh: 'storage 模块可以对本地数据进行存储、修改、删除，并且该数据是永久保存的，除非手动清除或者代码清除。但是，storage 模块有一个限制就是浏览器端（H5）只能存储小于5M的数据，而在 Android 和 iOS 中是没什么限制的。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/storage.html',
      en: 'http://weex-project.io/references/modules/storage.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'setItem',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'getItem',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'removeItem',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'clipboard',
    name: 'clipboard',
    title: { zh: 'clipboard 模块', en: 'clipboard' },
    desc: {
      zh: 'clipboard 模块可以实现从系统的剪贴板中获取内容或者设置内容。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/clipboard.html',
      en: 'http://weex-project.io/references/modules/clipboard.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '3abe25e7dd6d52bf35edffd62ac6199e',
      title: { zh: '复制环境信息', en: 'Copy Environment Message' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
    }]
  }, {
    type: 'picker',
    name: 'picker',
    title: { zh: 'picker 模块', en: 'picker' },
    desc: {
      zh: '以下为 picker 相关的 API：用于数据选择，日期选择，时间选择。（ H5模块如需使用，请手动引入weex-picker组件）',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/picker.html',
      en: 'http://weex-project.io/references/modules/picker.html'
    },
    examples: [{
      hash: 'eddde63fc2f57debed15d4f0eaf38d7e',
      title: 'pick',
      screenshot: 'https://gw.alicdn.com/tfs/TB128rrcL6H8KJjy0FjXXaXepXa-540-844.png'
    }, {
      hash: 'e71e82157a8c65b33ac213a6a399c971',
      title: 'pickDate',
      screenshot: 'https://gw.alicdn.com/tfs/TB1gybCcILJ8KJjy0FnXXcFDpXa-540-844.png'
    }, {
      hash: 'cd8cae300c4b02d3e6f6f7ba54307029',
      title: 'pickTime',
      screenshot: 'https://gw.alicdn.com/tfs/TB1TyzscMvD8KJjy0FlXXagBFXa-540-844.png'
    }]
  }, {
    type: 'webview',
    name: 'webview',
    title: { zh: 'webview 模块', en: 'webview' },
    desc: {
      zh: '一系列的 <web> 组件操作接口。 比如 goBack、goForward、和 reload。通常与 <web> 组件共用。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/webview.html',
      en: 'http://weex-project.io/references/modules/webview.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'goBack',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'goForward',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'reload',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'meta',
    name: 'meta',
    title: { zh: 'meta 模块', en: 'meta' },
    desc: {
      zh: 'meta 模块可用于声明单个页面的元信息，通常是一些页面的配置，如容器的显示宽度 (viewport) 等。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/meta.html',
      en: 'http://weex-project.io/references/modules/meta.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'setViewport',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'WebSocket',
    name: 'WebSocket',
    title: { zh: 'WebSocket 模块', en: 'WebSocket' },
    desc: {
      zh: 'WebSockets 是一种先进的技术, 这使得在用户的 H5/iOS/Android 和一个服务器之间打开一个的交互式通信会话成为可能, 有了这个 API，你可以向服务器发送消息, 并接收事件驱动的响应, 无需轮询服务器的响应。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/websocket.html',
      en: 'http://weex-project.io/references/modules/websocket.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '使用范例', en: 'Use WebSocket' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  type: 'syntax',
  name: { zh: '语法', en: 'Syntax' },
  group: [{
    type: 'text-binding',
    name: { zh: '文本绑定', en: 'Text Binding' },
    title: { zh: '文本绑定', en: 'Text Binding' },
    desc: {
      zh: '数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值。',
      en: 'The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces).'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/syntax.html#插值',
      en: 'https://vuejs.org/v2/guide/syntax.html#Interpolations'
    },
    examples: [{
      hash: {
        zh: '34e42c91e1f86591563ec8897e6a095c',
        en: '207411d00e8af32213443b4d0c5db689'
      },
      title: { zh: '文本插值', en: 'Inline TextNode' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB1V5IXcMMPMeJjy1XdXXasrXXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB19gKsb8fH8KJjy1XbXXbLdXXa-540-844.png'
      }
    }, {
      hash: '68b02a5371eb7da5cb9dde1946ce2b68',
      title: { zh: '使用表达式', en: 'Using Expression' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1veLGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }]
  }, {
    type: 'v-bind',
    name: 'v-bind',
    title: { zh: '绑定属性值（v-bind）', en: 'v-bind' },
    desc: {
      zh: 'v-bind 可以动态地绑定一个或多个特性，或一个组件 prop 到表达式。可以简写成 `:` (半角冒号)。',
      en: 'Dynamically bind one or more attributes, or a component prop to an expression.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/api/#v-bind',
      en: 'https://vuejs.org/v2/api/#v-bind'
    },
    examples: [{
      hash: 'b62f1a5f4973f43fae9adca02864eb8b',
      title: { zh: '绑定属性值', en: 'Binding Props' },
      screenshot: 'https://gw.alicdn.com/tfs/TB150aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      hash: 'b142f24d2f0ab27f5f65448d2aa16970',
      title: { zh: '绑定表达式', en: 'Using Expression' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1veLGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '3a2cc3c7a465f6a07c4bd3a868c7e393',
      title: { zh: '样式值绑定', en: 'Style Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1o.62bH_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '2bc0de9ec2448a1f852f354349f66600',
      // hash: 'b4b1f5e4679efbe3c94864a1404bfeaf',
      title: { zh: '类名绑定', en: 'Class Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1o.62bH_I8KJjy1XaXXbsxpXa-540-844.png'
    }]
  }, {
    type: 'v-for',
    name: 'v-for',
    title: { zh: '循环指令（v-for）', en: 'v-for' },
    desc: {
      zh: 'v-for 基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression` 为当前遍历的元素提供别名。',
      en: 'We can use the v-for directive to render a `alias in expression` based on an array. The v-for directive requires a special syntax in the form of item in items.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/list.html',
      en: 'https://vuejs.org/v2/guide/list.html'
    },
    examples: [{
      hash: '38904c807f66b1a11de5ddf0d40b3d30',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1R_7.bjihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: '2cd124954175721d9145571bf722ce7a',
      title: { zh: '下标索引', en: 'Array Index' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dAivaLBNTKJjy0FdXXcPpVXa-540-844.png'
    }, {
      hash: '2b4222b828fac65257d9ed9f8932f2a1',
      title: { zh: '遍历 JS 对象', en: 'v-for With an Object' },
      screenshot: 'https://gw.alicdn.com/tfs/TB10r25bH_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '7364e9c3c25ab2cbc945903cea7b0878',
      title: { zh: '多层循环', en: 'Multiple v-for' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1giSLfwoQMeJjy0FoXXcShVXa-540-844.png'
    }]
  }, {
    type: 'v-if',
    name: 'v-if',
    title: { zh: '条件指令（v-if)', en: 'v-if' },
    desc: {
      zh: 'v-if 根据表达式的值的真假条件渲染元素，在切换时元素及它的数据绑定/组件被销毁并重建。同类指令还有 v-else 和 v-else-if。',
      en: 'Conditionally render the element based on the truthy-ness of the expression value.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/conditional.html',
      en: 'https://vuejs.org/v2/guide/conditional.html'
    },
    examples: [{
      hash: '736a5dd112a1a114a559218ed20cae08',
      title: 'v-if',
      screenshot: 'https://gw.alicdn.com/tfs/TB1BAuGb2DH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: 'b6b244c4d8623565e77d9de324ca8de1',
      title: 'v-else',
      screenshot: 'https://gw.alicdn.com/tfs/TB1P.TpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '22faff4ee6f235c0e8fb98b21c1ea662',
      title: 'v-else-if',
      screenshot: 'https://gw.alicdn.com/tfs/TB1P.TpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'v-on',
    name: 'v-on',
    title: { zh: '事件绑定（v-on）', en: 'v-on' },
    desc: {
      zh: '可以用 v-on 指令监听 DOM 事件来触发一些 JavaScript 代码，可以简写成 `@`。用在普通元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。',
      en: 'We can use the v-on directive to listen to DOM events and run some JavaScript when they’re triggered.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/events.html#监听事件',
      en: 'https://vuejs.org/v2/guide/events.html'
    },
    examples: [{
      hash: 'a3607094a4bf73a069a5c51efb47fe98',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '8e3a1cbcf1ba9af94fe6f77e9668e354',
      title: { zh: '内联语句', en: 'Inline Statement' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '3a019f2eca4a6966ee0c3b91e5b2fc5b',
      title: { zh: '传递参数', en: 'Inline Handler' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '8581f4d2ff8fb48bdc547d2465c0cf24',
      title: { zh: 'once 修饰符', en: '.once Modifier' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'v-model',
    name: 'v-model',
    title: { zh: '表单双向绑定（v-model）', en: 'v-model' },
    desc: {
      zh: '可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。',
      en: 'You can use the v-model directive to create two-way data bindings on form input and textarea elements. It automatically picks the correct way to update the element based on the input type.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/forms.html',
      en: 'https://vuejs.org/v2/guide/forms.html'
    },
    examples: [{
      hash: 'e1e4413c5252dc763b01f26ce60d5ee4',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '39684e82ad9a8e0b175f49e058cf7af6',
      title: { zh: '绑定 <textarea>', en: 'Using <textarea>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1y738XiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '各种表单组件', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'lazy 修饰符', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'trim 修饰符', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'number 修饰符', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-once',
    name: 'v-once',
    title: { zh: '一次性渲染（v-once）', en: 'v-once' },
    desc: {
      zh: '只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。',
      en: 'Render the element and component once only. On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performance.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/api/#v-once',
      en: 'https://vuejs.org/v2/api/#v-once'
    },
    examples: [{
      hash: 'db5a71d3f621f32261a4208943358092',
      title: { zh: '使用 v-once', en: 'Using v-once' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: 'f66f49ad00f58ab8bd1fa580d27900f8',
      title: {
        zh: '不使用 v-once',
        en: 'Without v-once'
      },
      screenshot: 'https://gw.alicdn.com/tfs/TB1cITaewMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'filters',
    name: 'Filters',
    title: { zh: '过滤器（Filters）', en: 'Filters' },
    desc: {
      zh: 'Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache 插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示。',
      en: 'Vue.js allows you to define filters that can be used to apply common text formatting.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/filters.html',
      en: 'https://vuejs.org/v2/guide/filters.html'
    },
    examples: [{
      hash: '28df0a4424a9e9fe1411020de20d52c0',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1U8nAdr_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: 'b4eac5ccef8ef954858e9ef0c6aca9d7',
      title: { zh: '传递额外参数', en: 'Pass Arguments' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1SV_adBfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: '7b4a2ee438abe343b0a2f38556e730f1',
      title: { zh: '过滤器串联', en: 'Chained Filters' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1lETpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'mixins',
    name: 'Mixins',
    title: { zh: '混合（Mixins）', en: 'Mixins' },
    desc: {
      zh: '混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。',
      en: 'Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/mixins.html',
      en: 'https://vuejs.org/v2/guide/mixins.html'
    },
    examples: [{
      hash: 'c69cb31319ffe8e0b25543cfabcf06d6',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1HJHcdtfJ8KJjy0FeXXXKEXXa-540-844.png'
    }, {
      hash: '804d427a56528c3dc2706e77b93df516',
      title: { zh: '全局混合', en: 'Global Mixin' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1HJHcdtfJ8KJjy0FeXXXKEXXa-540-844.png'
    }, {
      hash: '92ab52525cb0d7d55d1ef007df90cf77',
      title: { zh: '生命周期混合', en: 'Lifecycle Mixin' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1bRLCdwDD8KJjy0FdXXcjvXXa-540-844.png'
    }, {
      hash: 'ee84c44bb3f4b23f83d52aecad30f8ea',
      title: { zh: '选项合并', en: 'Mixin Options' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1FUTpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'component',
    name: { zh: '组件', en: 'Component' },
    title: { zh: '组件', en: 'Component' },
    desc: {
      zh: '组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树。',
      en: 'The component system is another important concept in Vue, because it’s an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components. If we think about it, almost any type of application interface can be abstracted into a tree of components'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/index.html#组件化应用构建',
      en: 'https://vuejs.org/v2/guide/#Composing-with-Components'
    },
    examples: [{
      hash: '0ee7b5af70129e89b662ab07f927cf0a',
      title: { zh: '使用子组件', en: 'Composing Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'a91730c73df88b1649149dd2ebd61d20',
      title: { zh: '传递属性', en: 'Passing Data with Props' },
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'f5b561041de77d9fba8e70e0226c548e',
      title: { zh: '子组件的引用', en: 'Child Component Refs' },
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '多层子组件', en: 'Deep Composed Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '生命周期', en: 'Lifecycles' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '注册全局组件', en: 'Global Registration' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'df46cfd946e3479ffce93196b86e9d9c',
      title: { zh: '递归组件', en: 'Recursive Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1U868icrI8KJjy0FhXXbfnpXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '异步组件', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '内联模板', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'built-in',
    name: { zh: '内置组件', en: 'Built-in' },
    title: { zh: '内置组件', en: 'Built-in Components' },
    examples: [{
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '动态组件 <component>', en: 'Dynamic Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '用 <slot> 分发内容', en: 'Content Distribution with Slots' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '单个 solt', en: 'Single Slot' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '具名 slot', en: 'Named Slot' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '<transition>', en: '<transition>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '<transition-group>', en: '<transition-group>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      // }, {
      //   hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      //   title: { zh: '<keep-alive>', en: ' <keep-alive>' },
      //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'communication',
    name: { zh: '组件通信', en: 'Communication' },
    title: { zh: '组件通信', en: 'Component Communication' },
    examples: [{
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '自定义事件', en: 'Custom Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '父子组件通信', en: 'Parent-Child Communication' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '表单组件传值', en: 'Form Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '非父子组件通信', en: 'Non Parent-Child Communication' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  type: 'styles',
  name: { zh: '样式', en: 'Styles' },
  group: [{
    type: 'basics',
    name: { zh: '基本样式', en: 'Basics' },
    examples: [{
      hash: 'ad002b5e26cf55475661b22e81682f79',
      title: { zh: '边框/背景', en: 'Border & Background' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1z9P1ewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '3488279c3502d1234b437c2f718f3a55',
      title: { zh: '半透明', en: 'Translucent' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1FPAzd3MPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '5219829fd0a5f59dc9208c8327e02e92',
      title: { zh: 'position 布局', en: 'Position Layout' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1CCP1ewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: 'd1648814d06fdf59cd99ea92c716694a',
      title: { zh: '线性渐变', en: 'Linear Gradient' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1JQCEhgoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '94a627f3ffa7007f3a2e9c97a5e245ec',
      title: { zh: '阴影', en: 'Box Shadow' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
      // }, {
      //   hash: 'ff1332f9a343d211a72051a04e2e1c3c',
      //   title: { zh: '多层阴影', en: 'Box Shadow' },
      //   screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: 'e68f268dffcf0481935e19c9b0ab315f',
      title: { zh: '伪类选择器', en: 'Pseudo-classes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: 'bb3afbc65afb96e4099a8b6b6a03185a',
      title: { zh: '网格背景', en: 'Mesh Background' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1kU3abRTH8KJjy0FiXXcRsXXa-540-844.png'
    }, {
      hash: 'e510f73afb31b3228a5a9ef1b7a5a456',
      title: { zh: '透明背景', en: 'Transparent Background' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1CL3nbMDD8KJjy0FdXXcjvXXa-540-844.png'
    }, {
      hash: 'b90dbc5fbecf160a8f6c10b752b44c53',
      title: { zh: '三角形', en: 'Triangles' },
      screenshot: 'https://gw.alicdn.com/tfs/TB14yzscMvD8KJjy0FlXXagBFXa-540-844.png'
    }, {
      hash: '190d8baf578fb7b4efd82f19322a69da',
      title: { zh: '西瓜（阴影）', en: 'Watermelon (box-shadow)' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1RIzDdx6I8KJjy0FgXXXXzVXa-540-844.png'
      // }, {
      //   hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      //   title: { zh: '瀑布流', en: 'Waterfall' },
      //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      // }, {
      //   hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      //   title: 'Grid',
      //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'flexbox',
    name: 'Flexbox',
    title: { zh: 'Flexbox 布局', en: 'Flexbox Layout' },
    desc: {
      zh: 'CSS 弹性盒子布局是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。',
      en: 'CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout',
      en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'
    },
    examples: [{
      hash: 'fb3dbc872b4ccd068bc61a551c02dcc0',
      title: 'flex-direction',
      screenshot: 'https://gw.alicdn.com/tfs/TB1aIJHgMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      hash: '4a7214eafa1c07190e81e2c41d30e030',
      title: 'flex-wrap',
      screenshot: 'https://gw.alicdn.com/tfs/TB1kQQeczihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: '5fc9541e4c0a10484482ae7c539960ca',
      title: 'justify-content',
      screenshot: 'https://gw.alicdn.com/tfs/TB1PNNVgMoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: 'fc795cfba02d44a895d3df603a675d78',
      title: 'align-items',
      screenshot: 'https://gw.alicdn.com/tfs/TB1ADdPgMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '0650d1e5f089254de707a4af6ea1d736',
      title: 'flex-flow',
      screenshot: 'https://gw.alicdn.com/tfs/TB1qktHgMoQMeJjy0FnXXb8gFXa-540-844.png'
    }, {
      hash: 'cac1573b8689adbfceecf58f4293654c',
      title: 'order',
      screenshot: 'https://gw.alicdn.com/tfs/TB1qMv.cqagSKJjy0FhXXcrbFXa-540-844.png'
    }, {
      hash: '301f115bc9cb5d62c21e4f5272a3491d',
      title: 'align-self',
      screenshot: 'https://gw.alicdn.com/tfs/TB1qDBGgMMPMeJjy1XbXXcwxVXa-540-844.png'
    }, {
      hash: 'bdee705206b8d2a447a51dc3b81fa6d8',
      title: 'align-content',
      screenshot: 'https://gw.alicdn.com/tfs/TB1OQIeczihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: '148cef9b572617067b8cfe208b8e93db',
      title: 'flex-grow',
      screenshot: 'https://gw.alicdn.com/tfs/TB1vvVCgMoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '4149549dbfbef3f6090ff0711f016263',
      title: 'flex-shrink',
      screenshot: 'https://gw.alicdn.com/tfs/TB1QvVCgMoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: 'b23c7139b09cfc99e6df3dd0a9f7b326',
      title: 'flex-basis',
      screenshot: 'https://gw.alicdn.com/tfs/TB14h8mb2xNTKJjy0FjXXX6yVXa-540-844.png'
      // }, {
      //   hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      //   title: 'flex',
      //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  type: 'cases',
  name: { zh: '实例', en: 'Cases' },
  group: [{
    type: 'useful',
    name: { zh: '常用', en: 'Common Cases' },
    examples: [{
      hash: '123b69b57e099036558745298fb6e8ca',
      title: { zh: '查看图片', en: 'Preview Image' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '123b69b57e099036558745298fb6e8ca',
      title: { zh: '楼层电梯', en: 'Elevator' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '123b69b57e099036558745298fb6e8ca',
      title: { zh: '返回顶部', en: 'Back to Top' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '123b69b57e099036558745298fb6e8ca',
      title: { zh: '网格布局', en: 'Grid Layout' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '123b69b57e099036558745298fb6e8ca',
      title: { zh: '模态框', en: 'Modal Box' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '123b69b57e099036558745298fb6e8ca',
      title: { zh: '全屏遮罩', en: 'Fullscreen Mask' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'tabs',
    name: { zh: '多页签', en: 'Tabs' },
    examples: [{
      hash: '6415774229aec7f0161504b356e7e94e',
      title: 'Tabbar',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'c5f7cb6cc90fe4883436534167563dd3',
      title: { zh: '带切换动画', en: 'Tabbar with Animation' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '643ac211e70a3c733f1d2ef848b3e7f0',
      title: { zh: '带内容', en: 'Tabbar with Panels' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '多个页签实例', en: '<embed>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '手势滑动', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'spa',
    name: { zh: '单页应用', en: 'Single Page App' },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '使用 Vuex', en: 'Using Vuex' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '使用 vue-router', en: 'Using vue-router' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '单页应用', en: 'Single Page App' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'real-cases',
    name: { zh: '完整例子', en: 'Examples' },
    examples: [{
      hash: '3a52d415dc7307d1594079574fe553c7',
      title: 'Todo List',
      screenshot: 'https://gw.alicdn.com/tfs/TB182b_bNrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '82ff22e820405194004aacae8045ad56',
      title: { zh: '计算器', en: 'Calculator' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tXOrc3MPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '扫雷', en: 'MineSweeper' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '1e5eb6380f9e15973e28bacfc7e59636',
      title: { zh: '华容道', en: 'Klotski' },
      screenshot: 'https://gw.alicdn.com/tfs/TB13Yw1af6H8KJjy0FjXXaXepXa-540-844.png'
    }]
  }, {
    type: 'reprography',
    name: { zh: '仿', en: 'Reprography' },
    examples: [{
      // hash: 'f28215d4d9d96de91115cdd1528bcacd',
      hash: '8ee2850f39123a350333eb08beac7115',
      title: { zh: '朋友圈', en: 'Moment' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1G7LydwMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '97c0dc80f34d51aff2551a9916d48fba',
      title: { zh: '聊天', en: 'Chat' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '013b1e76d2c5419e32bc3e02aa1bef26',
      title: '应用列表',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '6c458803b2a83a336099ff43dae4d1a5',
      title: '商品展示',
      screenshot: 'https://gw.alicdn.com/tfs/TB1juElXjihSKJjy0FfXXbGzFXa-540-844.png'
    }]
  }]
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  type: 'others',
  name: { zh: '其他', en: 'Others' },
  group: [{
    type: 'utils',
    name: { zh: '功能', en: 'Utils' },
    examples: [{
      hash: '3abe25e7dd6d52bf35edffd62ac6199e',
      title: { zh: '获取环境信息', en: 'Environment' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
    }, {
      hash: 'b3c0d8b5b3753f028cc84a55a29b2b6a',
      title: { zh: '功能检测', en: 'Feature Detect' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1TOGuc3MPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '071c9372edea9530546b6fb61201702f',
      title: { zh: '支持 WebAssembly？', en: 'Support WebAssembly?' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1cHyefwMPMeJjy1XbXXcwxVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '自定义字体', en: 'iconfont' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'learn',
    name: { zh: '学习', en: 'Learn' },
    examples: [{
      hash: {
        zh: '43ede9db84425bce17e598456758eb3b',
        en: '82c3e1768163ae0155b436ce5d5f5640'
      },
      title: { zh: '学习 Weex', en: 'Learn Weex' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB13VkjhMoQMeJjy0FnXXb8gFXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB1EJuGbY_I8KJjy1XaXXbsxpXa-540-844.png'
      }
    }, {
      hash: {
        zh: '59958038a2009d3eefca29da107d3e7d',
        en: '4f0456987961d45bb5cc0b3f14f92c02'
      },
      title: { zh: '学习 Vue.js', en: 'Learn Vue.js' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB1kfEAhMoQMeJjy0FoXXcShVXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB1JBjEXyqAXuNjy1XdXXaYcVXa-540-844.png'
      }
    }, {
      hash: {
        zh: 'd1426e1cd14718ebff51ea46bdae0224',
        en: 'e7ea10acfc29f8a08fd75f9fa80f9703'
      },
      title: { zh: '学习 Javascript', en: 'Learn Javascript' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB1Dz3dhMoQMeJjy1XaXXcSsFXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB1JljEXyqAXuNjy1XdXXaYcVXa-540-844.png'
      }
    }, {
      hash: {
        zh: '8d2a4e9b2e8e6f1d25d08472f3bb48cf',
        en: '1190538862e882f9bfa96bf3787aa879'
      },
      title: { zh: '学习 CSS', en: 'Learn CSS' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB10LcihMoQMeJjy0FpXXcTxpXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB1m3Ksb8fH8KJjy1XbXXbLdXXa-540-844.png'
      }
    }, {
      hash: 'ffec8fcae798c1bc1dfb0259b125f477',
      title: { zh: '手把手教你…', en: 'Step by Step' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1RfgihMoQMeJjy0FpXXcTxpXa-540-844.png'
    }]
  }, {
    type: 'flatten-benchmark',
    name: { zh: '平铺压测', en: 'Flatten Benchmark' },
    examples: [{
      hash: 'ae5fd588a6522ebb62c8cc9fa049098b',
      title: { zh: '节点 838', en: '838 Nodes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1BVwkcMoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: 'b881a66eaa1133778940bb59836b9635',
      title: { zh: '节点 2296', en: '2296 Nodes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1.OsgcMoQMeJjy0FnXXb8gFXa-540-844.png'
    }, {
      hash: '3fa4de0a3e7dab86d9d8aa2ad380c677',
      title: { zh: '节点 3295', en: '3295 Nodes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1qgsccUgQMeJjy0FiXXXhqXXa-540-844.png'
    }, {
      hash: '01706667abe088ba534cdc0bdb3bb23b',
      title: { zh: '节点 5833', en: '5833 Nodes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1leA3cCFRMKJjy0FhXXX.xpXa-540-844.png'
    }, {
      hash: 'ae643775651ca4190c3250ce0a1ea1fb',
      title: { zh: '节点 8990', en: '8990 Nodes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1o0AicMoQMeJjy0FnXXb8gFXa-540-844.png'
    }, {
      hash: 'aacd3f0c12d7a2befc7c9de9986227a7',
      title: { zh: '节点 12948', en: '12948 Nodes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1glklcMoQMeJjy0FoXXcShVXa-540-844.png'
    }]
  }, {
    type: 'layer-benchmark',
    name: { zh: '层级压测', en: 'Layer Benchmark' },
    examples: [{
      hash: '33c93497fe648eeb3bd5a8b9eb709977',
      title: { zh: '层级 100', en: '100 Layers' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1G2T7cMMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '6ee24082dae44130bbedf1970f67fc35',
      title: { zh: '层级 200', en: '100 Layers' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1kLZicMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4455c5fc1155d294b8ea147cd1e677c8',
      title: { zh: '层级 500', en: '500 Layers' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1H1z8cMMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: 'ba59f9a74547f709dd4e8d6fa7dccbae',
      title: { zh: '层级 1000', en: '1000 Layers' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1I1z8cMMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'composed-benchmark',
    name: { zh: '混合压测', en: 'Composed Benchmark' },
    examples: [{
      hash: 'c4849fe9950c03bbb59f1ac7660b9430',
      title: '10 x 10',
      screenshot: 'https://gw.alicdn.com/tfs/TB1YGouihrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '08b7bd34da310cc3a173bef5be8aee68',
      title: '15 x 15',
      screenshot: 'https://gw.alicdn.com/tfs/TB1oPMVibYI8KJjy0FaXXbAiVXa-540-844.png'
    }, {
      hash: '41cc7b9a252d7cd88233b5e70e633ae5',
      title: '20 x 20',
      screenshot: 'https://gw.alicdn.com/tfs/TB1kbvSilfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: '290873a8734eecf4d7d8060e0f34bc4a',
      title: '25 x 25',
      screenshot: 'https://gw.alicdn.com/tfs/TB1oTkJifDH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: 'bf5e9e6bb1f4a8a451e638165aca586d',
      title: '30 x 30',
      screenshot: 'https://gw.alicdn.com/tfs/TB1LGQZib_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '80ea75498c49406c5493b596baa738e9',
      title: '40 x 40',
      screenshot: 'https://gw.alicdn.com/tfs/TB1uGnQilfH8KJjy1XbXXbLdXXa-540-844.png'
      // }, {
      //   hash: 'a7e1f6fa5afb413689bc15f58ed085c7',
      //   title: '50 x 50',
      //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'case-benchmark',
    name: { zh: '实例压测', en: 'Real Case Benchmark' },
    examples: [{
      hash: '8fb49bf98996a9f26f4f8123b40d763c',
      title: '<list>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1JGrQilfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: 'cbffa887a26cb040c10c56117bcfd655',
      title: '<scroller>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1JGrQilfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: '5c705064c078296bd0e6a2ee94963af7',
      title: '<recycle-list>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1JGrQilfH8KJjy1XbXXbLdXXa-540-844.png'
    }]
  }]
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["group"]
  }, [_c('list', {
    staticClass: ["group-list"]
  }, _vm._l((_vm.currentTab.group), function(item) {
    return _c('cell', {
      key: item.type,
      class: ['group-type', item.type === _vm.activeGroup ? 'active-group-type' : ''],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.toggleGroup(item.type)
        }
      }
    }, [_c('text', {
      class: ['group-name', item.type === _vm.activeGroup ? 'active-group-name' : '']
    }, [_vm._v(_vm._s(_vm.i18n(item.name)))])])
  }))]), _c('div', {
    staticClass: ["examples"]
  }, [(_vm.currentGroup.type === 'settings') ? _c('list', {
    staticClass: ["settings"]
  }, [_vm._m(0, false, false), _c('cell', {
    staticClass: ["setting-cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "click": _vm.chooseLanguage
    }
  }, [_c('text', {
    staticClass: ["setting-label"]
  }, [_vm._v(_vm._s(_vm.i18n(_vm.tips.LANGUAGE)))]), _c('text', {
    staticClass: ["setting-value"]
  }, [_vm._v(_vm._s(_vm._f("lang")(_vm.language)))])])]) : _c('list', {
    staticClass: ["examples-list"]
  }, [(_vm.currentGroup.title) ? _c('cell', {
    staticClass: ["group-intro"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["group-title"]
  }, [_vm._v(_vm._s(_vm.i18n(_vm.currentGroup.title)))]), _c('text', {
    staticClass: ["group-desc"]
  }, [_vm._v(_vm._s(_vm.i18n(_vm.currentGroup.desc)))]), (_vm.currentGroup.docLink) ? _c('text', {
    staticClass: ["doc-link"],
    on: {
      "click": function($event) {
        _vm.jumpTo(_vm.currentGroup.docLink)
      }
    }
  }, [_vm._v(_vm._s(_vm.i18n(_vm.tips.SEE_MORE)) + " >>")]) : _vm._e()]) : _vm._e(), _vm._l((_vm.currentExamples), function(group, i) {
    return _c('cell', {
      key: i,
      staticClass: ["case"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, _vm._l((group), function(example) {
      return _c('div', {
        key: _vm.i18n(example.title),
        staticClass: ["example-box"]
      }, [_c('text', {
        staticClass: ["example-title"]
      }, [_vm._v(_vm._s(_vm.i18n(example.title)))]), _c('div', {
        staticStyle: {
          alignItems: "center"
        }
      }, [_c('a', {
        attrs: {
          "href": _vm._f("url")(_vm.i18n(example.hash))
        }
      }, [_c('image', {
        staticClass: ["screenshot"],
        attrs: {
          "src": _vm.i18n(example.screenshot)
        }
      })]), _c('text', {
        staticClass: ["example-tips"],
        on: {
          "click": function($event) {
            _vm.viewSource(example.hash)
          }
        }
      }, [_vm._v(_vm._s(_vm.i18n(_vm.tips.VIEW_SOURCE)))])])])
    }))
  })], 2)])]), _c('div', {
    staticClass: ["tabbar"]
  }, _vm._l((_vm.tabs), function(tab) {
    return _c('div', {
      key: tab.type,
      class: ['tab-cell', tab.type === _vm.activeTab ? 'active-tab-cell' : ''],
      on: {
        "click": function($event) {
          _vm.toggleTab(tab.type)
        }
      }
    }, [_c('text', {
      class: ['tab-name', tab.type === _vm.activeTab ? 'active-tab-name' : '']
    }, [_vm._v(_vm._s(_vm.i18n(tab.name)))])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["setting-title-cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["setting-title"]
  }, [_vm._v("Settings")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);