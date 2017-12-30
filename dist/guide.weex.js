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
var cof = __webpack_require__(30);
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
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(41)
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
__vue_options__.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/pages/Guide.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c247a1f0"
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
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "height": "350",
    "boxShadow": "0 5px 10px rgba(0, 0, 0, 0.2)",
    "marginBottom": "10"
  },
  "center": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "title": {
    "textAlign": "center",
    "marginTop": "60",
    "marginBottom": "60",
    "color": "#606060"
  },
  "lesson": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#EEEEEE",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "lesson-zh": {
    "width": "600"
  },
  "lesson-en": {
    "width": "630"
  },
  "lesson-index": {
    "color": "#777777",
    "textAlign": "right",
    "paddingRight": "30"
  },
  "lesson-title": {
    "paddingTop": "35",
    "paddingBottom": "35"
  },
  "lesson-index-zh": {
    "fontSize": "46",
    "width": "120"
  },
  "lesson-title-zh": {
    "fontSize": "42",
    "width": "480"
  },
  "lesson-index-en": {
    "fontSize": "42",
    "width": "100"
  },
  "lesson-title-en": {
    "fontSize": "38",
    "width": "530"
  },
  "footer": {
    "height": "120",
    "paddingTop": "40"
  },
  "copyright": {
    "fontSize": "22",
    "color": "#A0A0A0",
    "textAlign": "center"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(13);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(16);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(26) });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(19);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
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
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(22);
var toPrimitive = __webpack_require__(24);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(27);
var gOPS = __webpack_require__(38);
var pIE = __webpack_require__(39);
var toObject = __webpack_require__(40);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(28);
var enumBugKeys = __webpack_require__(37);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(29);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(31)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

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
/* 29 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(33);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(36);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"]
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "longpress": _vm.copyLinks
    }
  }, [_c('div', {
    staticClass: ["banner", "center"],
    style: {
      backgroundColor: _vm.posterBg
    }
  }, [_c('image', {
    staticClass: ["poster"],
    style: _vm.posterStyle,
    attrs: {
      "resize": "cover",
      "src": _vm.poster
    }
  })])]), _c('cell', {
    staticClass: ["center"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "longpress": _vm.copyLinks
    }
  }, [_c('text', {
    staticClass: ["title"],
    style: {
      fontSize: _vm.titleFontSize
    }
  }, [_vm._v(_vm._s(_vm.i18n(_vm.title)))])]), _vm._l((_vm.lessons), function(lesson, i) {
    return _c('cell', {
      key: i,
      staticClass: ["center"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      class: ['lesson', ("lesson-" + _vm.language)],
      on: {
        "click": function($event) {
          _vm.openURL(lesson.docLink)
        }
      }
    }, [_c('text', {
      class: ['lesson-index', ("lesson-index-" + _vm.language)]
    }, [_vm._v(_vm._s(_vm.startAt + i) + ".")]), _c('text', {
      class: ['lesson-title', ("lesson-title-" + _vm.language)],
      style: {
        color: _vm.mainColor
      }
    }, [_vm._v(_vm._s(_vm.i18n(lesson.title)))])])])
  }), _c('cell', {
    staticClass: ["footer", "center"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["copyright"]
  }, [_vm._v(_vm._s(_vm.i18n(_vm.copyright)))])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);