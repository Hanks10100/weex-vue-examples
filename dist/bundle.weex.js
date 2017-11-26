// { "framework": "Vue" }

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_App2.default.el = '#root';
new Vue(_App2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _landing = __webpack_require__(6);

var _landing2 = _interopRequireDefault(_landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Example: _landing2.default }
}; //
//
//
//

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Example', {
    staticClass: ["text"]
  }, [_vm._v("123")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/pages/landing.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-25e1187a"
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "doodle": {
    "width": 750,
    "height": 750,
    "backgroundColor": "#BBBBBB"
  },
  "menu-list": {
    "flex": 1
  },
  "menu-row": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "center",
    "borderTopWidth": 1,
    "borderTopStyle": "solid",
    "borderTopColor": "#CCCCCC"
  },
  "menu-item": {
    "flex": 1,
    "backgroundColor": "#FBFBFB",
    "justifyContent": "center",
    "paddingTop": 50,
    "paddingBottom": 50,
    "backgroundColor:active": "#EEEEEE"
  },
  "menu-item-1": {
    "borderRightWidth": 1,
    "borderRightStyle": "solid",
    "borderRightColor": "#CCCCCC"
  },
  "menu-text": {
    "textAlign": "center",
    "fontSize": 60,
    "fontWeight": "bold",
    "color": "#808080"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
function createURL(hash) {
  if (WXEnvironment.platform === 'Web') {
    return 'http://dotwe.org/raw/htmlVue/' + hash;
  }
  var url = 'http://dotwe.org/raw/dist/' + hash + '.bundle.wx';
  return url + '?_wx_tpl=' + url;
}
exports.default = {
  filters: { url: createURL },
  data: function data() {
    return {
      doodle: '9a55664ca51986295ce6982766760ed6',
      menus: [[{
        name: 'guide',
        title: 'Guide',
        hash: '14d51b459007f697613319b1d82c61a9'
      }, {
        name: 'examples',
        title: 'Examples',
        hash: '8acee0446b41edce51d1c335ecd13d78'
      }], [{
        name: 'blogs',
        title: 'Blogs',
        hash: '4624d605004fc7eb9f14ca9c5a226fe3'
      }, {
        name: 'about',
        title: 'About',
        hash: '45bf501ff7671054202a9263d17cacc6'
      }]]
    };
  },
  beforeCreate: function beforeCreate() {
    // fetch the latest doodle and menus
    // stream.fetch({
    //   method: 'GET',
    //   type: 'json',
    //   url: ''
    // }, res => {
    //   if (res.ok && res.data) {
    //     this.doodle = res.data.doodle
    //     // TODO: update menus
    //   }
    // })
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('embed', {
    staticClass: ["doodle"],
    attrs: {
      "src": _vm._f("url")(_vm.doodle)
    }
  }), _c('div', {
    staticClass: ["menu-list"]
  }, _vm._l((_vm.menus), function(row, r) {
    return _c('div', {
      key: r,
      class: ['menu-row', ("menu-row-" + (r+1))]
    }, _vm._l((row), function(menu, i) {
      return _c('a', {
        key: menu.name,
        class: ['menu-item', ("menu-item-" + (i+1)), ("menu-item-" + (menu.name))],
        attrs: {
          "href": _vm._f("url")(menu.hash)
        }
      }, [_c('text', {
        class: ['menu-text', ("menu-text-" + (menu.name))]
      }, [_vm._v(_vm._s(menu.title))])])
    }))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);