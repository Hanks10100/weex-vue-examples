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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Landing = __webpack_require__(1);

var _Landing2 = _interopRequireDefault(_Landing);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.filter('url', _utils.createURL);

_Landing2.default.el = '#root';
new Vue(_Landing2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/pages/Landing.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-50791ba3"
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
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "doodle": {
    "width": "750",
    "height": "750"
  },
  "menu-list": {
    "flex": 1
  },
  "menu-row": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "center",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#CCCCCC"
  },
  "menu-item": {
    "flex": 1,
    "backgroundColor": "#FBFBFB",
    "justifyContent": "center",
    "paddingTop": "50",
    "paddingBottom": "50",
    "backgroundColor:active": "#F2F2F2"
  },
  "menu-item-1": {
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#CCCCCC"
  },
  "menu-text": {
    "textAlign": "center",
    "fontSize": "60",
    "fontWeight": "bold",
    "color": "#8B8B8B"
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Doodle = __webpack_require__(4);

var _Doodle2 = _interopRequireDefault(_Doodle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Doodle: _Doodle2.default },
  data: function data() {
    return {
      menus: [[{ name: 'guide', title: 'Guide' }, { name: 'examples', title: 'Examples' }], [{ name: 'news', title: 'News' }, { name: 'about', title: 'About' }]]
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(6)
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
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/components/Doodle.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-312c24c9"
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
/* 5 */
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

exports.default = {
  data: function data() {
    return {
      showEmbed: false,
      md5: '2d8da136e33f63a0bfe4b1e42362405b'
    };
  },

  computed: {
    src: function src() {
      var md5 = this.md5;
      if (WXEnvironment.platform === 'Web') {
        return 'http://dotwe.org/raw/htmlVue/' + md5;
      }
      var url = 'http://dotwe.org/raw/dist/' + md5 + '.bundle.wx';
      return url + '?_wx_tpl=' + url;
    }
  },
  methods: {
    scan: function scan() {
      // TODO: open scan QR code page
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showEmbed) ? _c('embed', {
    staticStyle: {
      flex: "1"
    },
    attrs: {
      "src": _vm.src
    }
  }) : _c('div', {
    staticClass: ["center"],
    staticStyle: {
      flex: "1"
    }
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"
    }
  }), _c('div', {
    staticClass: ["btn", "center"],
    on: {
      "click": _vm.scan
    }
  }, [_c('image', {
    staticClass: ["scan-bg"],
    attrs: {
      "src": "https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"
    }
  }), _c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("Scan QR Code")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('doodle', {
    staticClass: ["doodle"]
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
          "href": _vm._f("url")(menu.name)
        }
      }, [_c('text', {
        class: ['menu-text', ("menu-text-" + (menu.name))]
      }, [_vm._v(_vm._s(menu.title))])])
    }))
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createURL = createURL;
function createURL(name) {
  if (WXEnvironment.platform === 'Web') {
    return '/?page=' + name + '.web.js';
  }
  // TODO
  return name + '.weex.js';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "center": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "logo": {
    "width": "750",
    "height": "318"
  },
  "btn": {
    "width": "450",
    "height": "160",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50"
  },
  "scan-bg": {
    "width": "450",
    "height": "160",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "opacity": 0.6,
    "opacity:active": 1
  },
  "btn-text": {
    "color": "#727272",
    "fontSize": "56",
    "textAlign": "center"
  }
}

/***/ })
/******/ ]);