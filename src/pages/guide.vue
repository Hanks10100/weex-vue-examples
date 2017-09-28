<template>
  <list class="wrapper">
    <cell class="banner-cell">
      <div class="banner">
        <image class="vue-logo" src="https://gw.alicdn.com/tfs/TB1J_uKcMMPMeJjy1XdXXasrXXa-400-400.png" />
        <text class="banner-title">学习 Vue.js</text>
      </div>
    </cell>
    <cell class="lesson-cell" v-for="(lesson, i) in lessons" :key="i">
      <div class="lesson" @click="openURL(lesson.docLink)">
        <text class="lesson-index">{{i+1}}.</text>
        <text class="lesson-title">{{lesson.title}}</text>
      </div>
    </cell>
    <cell class="footer-cell">
      <div class="footer">
        <text class="copyright">From https://cn.vuejs.org/</text>
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
  .vue-logo {
    width: 210px;
    height: 210px;
  }
  .banner-title {
    text-align: center;
    color: #42b983;
    font-size: 60px;
  }
  .lesson-cell {
    /* padding: 20px; */
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
    color: #42b983;
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
      title: 'Vue.js 是什么？',
      docLink: 'https://cn.vuejs.org/v2/guide/index.html'
    }, {
      title: '单文件组件',
      docLink: 'https://cn.vuejs.org/v2/guide/single-file-components.html'
    }, {
      title: '模板语法',
      docLink: 'https://cn.vuejs.org/v2/guide/syntax.html'
    }, {
      title: 'Class 与 Style 绑定',
      docLink: 'https://cn.vuejs.org/v2/guide/class-and-style.html'
    }, {
      title: '条件渲染',
      docLink: 'https://cn.vuejs.org/v2/guide/conditional.html'
    }, {
      title: '列表渲染',
      docLink: 'https://cn.vuejs.org/v2/guide/list.html'
    }, {
      title: '事件处理',
      docLink: 'https://cn.vuejs.org/v2/guide/events.html'
    }, {
      title: '表单输入绑定',
      docLink: 'https://cn.vuejs.org/v2/guide/forms.html'
    }, {
      title: 'Vue 实例',
      docLink: 'https://cn.vuejs.org/v2/guide/instance.html'
    }, {
      title: '在 Weex 中的差异',
      docLink: 'http://weex-project.io/cn/references/vue/difference-with-web.html'
    }, {
      title: '混合（mixins）',
      docLink: 'https://cn.vuejs.org/v2/guide/mixins.html'
    }, {
      title: '过滤器（filters）',
      docLink: 'https://cn.vuejs.org/v2/guide/filters.html'
    }, {
      title: '插件（plugins）',
      docLink: 'https://cn.vuejs.org/v2/guide/plugins.html'
    }, {
      title: '自定义指令',
      docLink: 'https://cn.vuejs.org/v2/guide/custom-directive.html'
    }, {
      title: '状态管理',
      docLink: 'https://cn.vuejs.org/v2/guide/state-management.html'
    }, {
      title: '深入响应式原理',
      docLink: 'https://cn.vuejs.org/v2/guide/reactivity.html'
    }, {
      title: '渲染函数',
      docLink: 'https://cn.vuejs.org/v2/guide/render-function.html'
    }, {
      title: 'TypeScript 支持',
      docLink: 'https://cn.vuejs.org/v2/guide/typescript.html'
    }, {
      title: '对比其他框架',
      docLink: 'https://cn.vuejs.org/v2/guide/comparison.html'
    }, {
      title: 'API',
      docLink: 'https://cn.vuejs.org/v2/api/'
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
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({
          url: createURL('ab57ab447248c35115144736ba38521a')
        })
      },
    }
  }
</script>
