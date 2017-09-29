<template>
  <list class="wrapper">
    <cell class="banner-cell">
      <div class="banner">
        <image class="weex-logo" src="https://gw.alicdn.com/tfs/TB17hlIdgoQMeJjy0FpXXcTxpXa-328-328.png" />
        <text class="banner-title">学习 Weex</text>
      </div>
    </cell>
    <cell class="lesson-cell" v-for="(lesson, i) in lessons" :key="i">
      <div class="lesson" @click="openURL(lesson.docLink)">
        <text class="lesson-index">{{i}}.</text>
        <text class="lesson-title">{{lesson.title}}</text>
      </div>
    </cell>
    <cell class="footer-cell">
      <div class="footer">
        <text class="copyright">From http://weex-project.io/cn/</text>
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
  .weex-logo {
    width: 210px;
    height: 210px;
  }
  .banner-title {
    text-align: center;
    color: #00B4FF;
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
    font-size: 46px;
    padding-right: 30px;
    width: 120px;
    color: #777777;
    text-align: right;
  }
  .lesson-title {
    font-size: 42px;
    color: #00B4FF;
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
  const lessons = [
    {
      title: '什么是 Weex ？',
      docLink: ''
    }, {
      title: '快速上手',
      docLink: 'http://weex-project.io/cn/guide/index.html'
    }, {
      title: '工作原理',
      docLink: 'http://weex-project.io/cn/guide/intro/how-it-works.html'
    }, {
      title: '用 Weex 构建移动应用',
      docLink: 'http://weex-project.io/cn/guide/intro/app-architecture.html'
    }, {
      title: 'Weex 页面结构',
      docLink: 'http://weex-project.io/cn/guide/intro/page-architecture.html'
    }, {
      title: '集成 Weex 到已有应用',
      docLink: 'http://weex-project.io/cn/guide/integrate-to-your-app.html'
    }, {
      title: '和 Web 平台的差异',
      docLink: 'http://weex-project.io/cn/references/platform-difference.html'
    }, {
      title: '搭建开发环境',
      docLink: 'http://weex-project.io/cn/guide/set-up-env.html'
    }, {
      title: '使用 Vue 开发页面',
      docLink: 'http://weex-project.io/cn/guide/intro/using-vue.html'
    }, {
      title: 'Vue 在 Weex 中的差异',
      docLink: 'http://weex-project.io/cn/references/vue/difference-with-web.html'
    }, {
      title: '通用样式',
      docLink: 'http://weex-project.io/cn/references/common-style.html'
    }, {
      title: '通用事件',
      docLink: 'http://weex-project.io/cn/references/common-event.html'
    }, {
      title: '手势',
      docLink: 'http://weex-project.io/cn/references/gesture.html'
    }, {
      title: 'Weex 实例变量',
      docLink: 'http://weex-project.io/cn/references/weex-variable.html'
    }, {
      title: '内置组件',
      docLink: 'http://weex-project.io/cn/references/components/index.html'
    }, {
      title: '内置模块',
      docLink: 'http://weex-project.io/cn/references/modules/index.html'
    }, {
      title: 'Android 扩展',
      docLink: 'http://weex-project.io/cn/references/advanced/extend-to-android.html'
    }, {
      title: 'iOS 扩展',
      docLink: 'http://weex-project.io/cn/references/advanced/extend-to-ios.html'
    }, {
      title: 'Web 扩展',
      docLink: 'http://weex-project.io/cn/references/advanced/extend-to-html5.html'
    }, {
      title: '使用 weex-toolkit',
      docLink: 'http://weex-project.io/cn/guide/tools/toolkit.html'
    }, {
      title: '集成 Devtools 到 Android',
      docLink: 'http://weex-project.io/cn/references/advanced/integrate-devtool-to-android.html'
    }, {
      title: '集成 Devtools 到 iOS',
      docLink: 'http://weex-project.io/cn/references/advanced/integrate-devtool-to-ios.html'
    }, {
      title: '使用 Vuex 和 vue-router',
      docLink: 'http://weex-project.io/cn/references/vue/difference-of-vuex.html'
    }, {
      title: 'JS Service',
      docLink: 'http://weex-project.io/cn/references/js-service/index.html'
    }, {
      title: '如何参与社区',
      docLink: 'http://weex-project.io/cn/guide/contributing.html'
    }, {
      title: 'FAQ',
      docLink: 'http://weex-project.io/cn/faq.html'
    }
  ]

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
      return {
        lessons
      }
    },
    filters: {},
    methods: {
      openURL (url) {
        if (url) {
          storage.setItem('CURRENT_DOCUMENT_URL', url)
          navigator.push({
            url: createURL('ab57ab447248c35115144736ba38521a')
          })
        }
      },
    }
  }
</script>
