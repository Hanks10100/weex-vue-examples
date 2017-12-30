<template>
  <list class="wrapper">
    <cell @longpress="copyLinks">
      <div class="banner center" :style="{ backgroundColor: posterBg }">
        <image class="poster" resize="cover" :style="posterStyle" :src="poster" />
      </div>
    </cell>
    <cell class="center" @longpress="copyLinks">
      <text class="title" :style="{ fontSize: titleFontSize }">{{i18n(title)}}</text>
    </cell>
    <cell class="center" v-for="(lesson, i) in lessons" :key="i">
      <div :class="['lesson', `lesson-${language}`]" @click="openURL(lesson.docLink)">
        <text :class="['lesson-index', `lesson-index-${language}`]">{{startAt + i}}.</text>
        <text
          :class="['lesson-title', `lesson-title-${language}`]"
          :style="{ color: mainColor }"
          >{{i18n(lesson.title)}}</text>
      </div>
    </cell>
    <cell class="footer center">
      <text class="copyright">{{i18n(copyright)}}</text>
    </cell>
  </list>
</template>

<style scoped>
  .banner {
    height: 350px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .title {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #606060;
  }
  .lesson {
    /* height: 120px; */
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    flex-direction: row;
    align-items: center;
  }
  .lesson-zh { width: 600px; }
  .lesson-en { width: 630px; }
  .lesson-index {
    color: #777777;
    text-align: right;
    padding-right: 30px;
  }
  .lesson-title {
    padding-top: 35px;
    padding-bottom: 35px;
  }
  .lesson-index-zh {
    font-size: 46px;
    width: 120px;
  }
  .lesson-title-zh {
    font-size: 42px;
    width: 480px;
  }
  .lesson-index-en {
    font-size: 42px;
    width: 100px;
  }
  .lesson-title-en {
    font-size: 38px;
    width: 530px;
  }
  .footer {
    height: 120px;
    padding-top: 40px;
  }
  .copyright {
    font-size: 22px;
    color: #A0A0A0;
    text-align: center;
  }
</style>

<script>
  // Learn Weex
  const learnWeex = {
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
    lessons: [
      {
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
      }
    ]
  }

  const learnCSS = {
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
    lessons: [
      {
        title: {
          zh: '什么是 CSS ？',
          en: 'What is CSS ?',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started/What_is_CSS',
          en: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS'
        }
      }, {
        title: {
          zh: 'CSS 语法',
          en: 'CSS Syntax',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Syntax',
          en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax'
        }
      }, {
        title: {
          zh: 'CSS的值和单位',
          en: 'CSS Values and Units',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units',
          en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units'
        }
      }, {
        title: {
          zh: '盒模型',
          en: 'The Box Model',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Box_model',
          en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model'
        }
      }, {
        title: {
          zh: '盒模型的属性',
          en: 'Box Model Properties',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model',
          en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model'
        }
      }, {
        title: {
          zh: '定位布局',
          en: 'Positioning',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/%E5%AE%9A%E4%BD%8Dx',
          en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/positioning'
        }
      }, {
        title: {
          zh: '定位布局的属性',
          en: 'CSS Positioning',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning',
          en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning'
        }
      }, {
        title: {
          zh: 'Flexbox 布局',
          en: 'Flexbox Layout',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox',
          en: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox'
        }
      }, {
        title: {
          zh: 'Flexbox 布局的属性',
          en: 'CSS Flexible Box Layout',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout',
          en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'
        }
      }, {
        title: {
          zh: 'Weex 中的通用样式',
          en: 'Common Styles in Weex',
        },
        docLink: {
          zh: 'http://weex-project.io/cn/references/common-style.html',
          en: 'http://weex-project.io/references/common-style.html'
        }
      }, {
        title: {
          zh: 'Weex 中的文本样式',
          en: 'Text Styles in Weex',
        },
        docLink: {
          zh: 'http://weex-project.io/cn/references/text-style.html',
          en: 'http://weex-project.io/references/text-style.html'
        }
      }, {
        title: {
          zh: '块格式化上下文(BFC)',
          en: 'Block Formatting Context',
        },
        docLink: {
          zh: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context',
          en: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context'
        }
      }, {
        title: {
          zh: '视觉格式化模型',
          en: 'Visual Formatting Model',
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
      }
    ]
  }

  const learnJS = {
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
    lessons: [
      {
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
      }
    ]
  }

  const learnVue = {
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
    lessons: [
      {
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
      }
    ]
  }

  const hackernewsApp = {
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
    lessons: [
      {
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
      }
    ]
  }

  const navigator = weex.requireModule('navigator')
  const clipboard = weex.requireModule('clipboard')
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  function createURL (hash) {
    if (WXEnvironment.platform === 'Web') {
      return `http://dotwe.org/raw/htmlVue/${hash}`
    }
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    data () {
      return Object.assign({
        language: 'zh',
        startAt: 1,
        titleFontSize: '60px',
        posterBg: '#F5F5F5',
        posterStyle: {
          width: '300px',
          height: '300px'
        },
        mainColor: '#00B4FF',
      }, learnJS)
    },
    beforeCreate () {
      storage.getItem('WEEX_PLAYGROUND_LANGUAGE', event => {
        if (event.result === 'success') {
          this.language = event.data
        }
      })
    },
    methods: {
      i18n (text) {
        if (typeof text === 'string') {
          return text
        }
        if (Object.prototype.toString.call(text) === '[object Object]') {
          const lang = this.language || 'zh'
          return text[lang]
        }
      },
      openURL (url) {
        if (!url) return;
        storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url))
        navigator.push({
          url: createURL(this.i18n({
            'en': '502078627a7d617f11f48f15560210ff',
            'zh': 'ab57ab447248c35115144736ba38521a'
          }))
        })
      },
      copyLinks () {
        modal.confirm({
          message: this.i18n({
            en: 'Copy all article address ?',
            zh: '复制所有文章链接？'
          })
        }, result => {
          if (result !== 'OK') return;
          let text = this.i18n(this.title) + '\n\n'
          text += this.lessons.map((lesson, i) => {
            return `${i + this.startAt}. ${this.i18n(lesson.title)} ${this.i18n(lesson.docLink)}`
          }).join('\n')
          text += '\n\n' + this.i18n(this.copyright)
          clipboard.setString(text)
          modal.toast({
            message: this.i18n({
              en: 'Article address is copied',
              zh: '文章链接已复制'
            })
          })
        })
      }
    }
  }
</script>
