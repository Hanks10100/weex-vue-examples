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


var _About = __webpack_require__(1);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_About2.default.el = '#root';
new Vue(_About2.default);

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
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/pages/About.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6a7331ce"
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
  "list": {
    "backgroundColor": "#F8F8F8"
  },
  "center": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "group-header": {
    "backgroundColor": "#00B4FF",
    "height": "100"
  },
  "group-title": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#FFFFFF"
  },
  "group-gap": {
    "height": "60"
  },
  "content-title": {
    "paddingTop": "12",
    "paddingBottom": "12",
    "paddingLeft": "20",
    "fontSize": "34",
    "color": "#989898",
    "backgroundColor": "#EEEEEE",
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#E6E6E6"
  },
  "article": {
    "paddingTop": "30",
    "paddingBottom": "30",
    "paddingLeft": "60",
    "paddingRight": "60",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#E6E6E6",
    "backgroundColor": "#FFFFFF"
  },
  "article-title": {
    "fontSize": "42",
    "color": "#606060"
  }
}

/***/ }),
/* 3 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
function createURL(hash) {
  if (WXEnvironment.platform === 'Web') {
    return 'http://dotwe.org/raw/htmlVue/' + hash;
  }
  var url = 'http://dotwe.org/raw/dist/' + hash + '.bundle.wx';
  return url + '?_wx_tpl=' + url;
}
exports.default = {
  filters: {
    url: createURL
  },
  data: function data() {
    return {
      language: 'en',
      catalogues: [{
        title: 'Guide',
        contents: [{
          title: 'Overview',
          articles: [{
            title: 'Get Started',
            link: 'http://weex-project.io/guide/'
          }, {
            title: 'Integrate to Your App',
            link: 'http://weex-project.io/guide/integrate-to-your-app.html'
          }]
        }, {
          title: 'Develop',
          articles: [{
            title: 'Setup Develop Environment',
            link: 'http://weex-project.io/guide/set-up-env.html'
          }, {
            title: 'Integrate Devtool to Android',
            link: 'http://weex-project.io/guide/integrate-devtool-to-android.html'
          }, {
            title: 'Integrate Devtool to iOS',
            link: 'http://weex-project.io/guide/integrate-devtool-to-ios.html'
          }]
        }]
      }, {
        title: 'References',
        contents: [{
          title: 'APIs',
          articles: [{
            title: 'Android APIs',
            link: 'http://weex-project.io/references/android-apis.html'
          }, {
            title: 'iOS APIs',
            link: 'http://weex-project.io/references/ios-apis.html'
          }]
        }, {
          title: 'Build-in Components',
          articles: [{
            title: '<div>',
            link: 'http://weex-project.io/references/components/div.html'
          }, {
            title: '<text>',
            link: 'http://weex-project.io/references/components/text.html'
          }, {
            title: '<image>',
            link: 'http://weex-project.io/references/components/image.html'
          }]
        }, {
          title: 'Build-in Modules',
          articles: [{
            title: 'modal',
            link: 'http://weex-project.io/references/modules/modal.html'
          }, {
            title: 'dom',
            link: 'http://weex-project.io/references/modules/dom.html'
          }, {
            title: 'stream',
            link: 'http://weex-project.io/references/modules/stream.html'
          }]
        }]
      }, {
        title: 'WiKi',
        contents: [{
          title: 'Design',
          articles: [{
            title: 'How it works',
            link: 'http://weex-project.io/wiki/'
          }]
        }, {
          title: 'Style',
          articles: [{
            title: 'Common Styles',
            link: 'http://weex-project.io/wiki/common-styles.html'
          }, {
            title: 'Text Styles',
            link: 'http://weex-project.io/wiki/text-styles.html'
          }]
        }, {
          title: 'Event',
          articles: [{
            title: 'Common Events',
            link: 'http://weex-project.io/wiki/common-events.html'
          }, {
            title: 'Event Bubble',
            link: 'http://weex-project.io/wiki/event-bubble.html'
          }]
        }]
      }, {
        title: 'Other Resources',
        contents: [{
          title: 'Learn',
          articles: [{
            title: 'Learn Vue.js',
            hash: '4f0456987961d45bb5cc0b3f14f92c02'
          }, {
            title: 'Learn Javascript',
            hash: 'e7ea10acfc29f8a08fd75f9fa80f9703'
          }, {
            title: 'Learn CSS',
            hash: '1190538862e882f9bfa96bf3787aa879'
          }]
        }]
      }]
    };
  },

  methods: {
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
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_vm._l((_vm.catalogues), function(group, g) {
    return [_c('header', {
      key: group.title
    }, [_c('div', {
      staticClass: ["group-header", "center"]
    }, [_c('text', {
      staticClass: ["group-title"]
    }, [_vm._v(_vm._s(group.title))])])]), _vm._l((group.contents), function(content, c) {
      return [_c('cell', {
        key: content.title,
        staticClass: ["content-cell"],
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      }, [_c('text', {
        staticClass: ["content-title"]
      }, [_vm._v(_vm._s(content.title))])]), _vm._l((content.articles), function(article, i) {
        return _c('cell', {
          key: i,
          class: ['article-cell', ("article-cell-" + (i+1))],
          appendAsTree: true,
          attrs: {
            "append": "tree"
          }
        }, [(article.link) ? _c('div', {
          class: ['article', ("article-" + (i+1))],
          on: {
            "click": function($event) {
              _vm.jumpTo(article.link)
            }
          }
        }, [_c('text', {
          staticClass: ["article-title"]
        }, [_vm._v(_vm._s(article.title))])]) : (article.hash) ? _c('a', {
          class: ['article', ("article-" + (i+1))],
          attrs: {
            "href": _vm._f("url")(article.hash)
          }
        }, [_c('text', {
          staticClass: ["article-title"]
        }, [_vm._v(_vm._s(article.title))])]) : _vm._e()])
      }), _c('cell', {
        key: c,
        staticClass: ["group-gap"],
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      })]
    })]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);