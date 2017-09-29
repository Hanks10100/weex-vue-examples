<template>
  <list class="wrapper">
    <cell class="banner-cell">
      <div class="banner">
        <image class="poster" :style="imageSize" :src="poster" />
        <text class="banner-title" :style="{ color: mainColor }">{{i18n(title)}}</text>
      </div>
    </cell>
    <cell class="lesson-cell" v-for="(lesson, i) in lessons" :key="i">
      <div class="lesson" @click="openURL(lesson.docLink)">
        <text :class="['lesson-index', `lesson-index-${language}`]">{{startAt + i}}.</text>
        <text
          :class="[`lesson-title-${language}`]"
          :style="{ color: mainColor }"
          >{{i18n(lesson.title)}}</text>
      </div>
    </cell>
    <cell class="footer-cell">
      <div class="footer">
        <text class="copyright">{{i18n(copyright)}}</text>
      </div>
    </cell>
  </list>
</template>

<style scoped>
  .banner {
    height: 450px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
    background-color: #F5F5F5;
    margin-bottom: 60px;
    justify-content: center;
    align-items: center;
  }
  .poster {
  }
  .banner-title {
    text-align: center;
    font-size: 46px;
    margin-top: 30px;
  }
  .lesson-cell {
    align-items: center;
    justify-content: center;
  }
  .lesson {
    width: 600px;
    height: 120px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    flex-direction: row;
    align-items: center;
  }
  .lesson-index {
    color: #777777;
    text-align: right;
  }
  .lesson-index-zh {
    font-size: 46px;
    padding-right: 30px;
    width: 120px;
  }
  .lesson-title-zh {
    font-size: 42px;
  }
  .lesson-index-en {
    font-size: 42px;
    padding-right: 30px;
    width: 100px;
  }
  .lesson-title-en {
    font-size: 38px;
  }
  .footer {
    height: 80px;
    margin-top: 40px;
    justify-content: center;
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
        title: {
          zh: '什么是 Weex ？',
          en: 'What is Weex ?'
        },
        docLink: {
          zh: '',
          en: ''
        }
      }, {
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
    mainColor: '#38AADA',
    poster: 'http://www.unixstickers.com/image/data/stickers/css3/css3_unofficial_shaped.png',
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
    title: '使用 Weex 和 Vue 开发原生应用',
    imageSize: {
      width: 450,
      height: 210
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
  const storage = weex.requireModule('storage')
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
        imageSize: {
          width: 210,
          height: 210
        },
        mainColor: '#00B4FF',
      }, hackernewsApp)
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
        const hash = {
          'en': '502078627a7d617f11f48f15560210ff',
          'zh': 'ab57ab447248c35115144736ba38521a'
        }
        if (url) {
          storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url))
          navigator.push({ url: createURL(this.i18n(hash)) })
        }
      },
    }
  }
</script>
