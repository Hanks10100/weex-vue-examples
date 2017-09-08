<template>
  <div class="wrapper">
    <div class="content">
      <list class="group">
        <cell :class="['group-type', item.type === activeGroup ? 'active-group': '']" v-for="item in currentTab.group" :key="item.type" @click="toggleGroup(item.type)">
          <text :class="['group-type-name', item.type === activeGroup ? 'active-group-name': '']">{{item.name}}</text>
        </cell>
      </list>
      <list class="examples">
        <cell style="height:40px"></cell>
        <cell class="case" v-for="(group, i) in currentGroup" :key="i">
          <a class="example-box" :href="example.hash | url" v-for="example in group" :key="example.title">
            <image class="screenshot" :src="example.screenshot"></image>
            <text class="example-title">{{example.title}}</text>
          </a>
        </cell>
      </list>
    </div>
    <div class="tabbar">
      <div class="tab-cell" v-for="tab in tabs" :key="tab.type" @click="toggleTab(tab.type)">
        <text :class="['tab-name', tab.type === activeTab ? 'active-tab': '']">{{tab.name}}</text>
      </div>
    </div>
  </div>
</template>

<style>
  .content {
    flex-direction: row;
    flex: 1;
  }
  .group {
    width: 230px;
    border-right-width: 2px;
    border-right-color: #DDD;
    flex: 0;
  }
  .group-type {
    height: 110px;
    border-bottom-width: 1px;
    border-bottom-color: #DDD;
    justify-content: center;
  }
  .group-type-name {
    text-align: center;
    font-size: 38px;
    color: #888888;
  }
  .active-group {
    background-color: #F5F5F5;
  }
  .active-group-name {
    font-size: 42px;
    font-weight: bold;
    color: #FF6600;
  }
  .examples {
    width: 520px;
    flex: 1;
  }
  .case {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .example-box {
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
  }
  .screenshot {
    width: 162px;
    height: 253px;
    border-width: 1px;
    border-color: #DDD;
  }
  .example-title {
    font-size: 30px;
    text-align: center;
    color: #999;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .tabbar {
    height: 130px;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 2px;
    border-top-color: #DDD;
  }
  .tab-cell {
    width: 187px;
    justify-content: center;
  }
  .tab-name {
    text-align: center;
    font-size: 36px;
    color: #666666;
  }
  .active-tab {
    color: #FF6600;
    /*font-size: 42px;*/
    font-weight: bold;
  }
</style>

<script>
  const exampleMap = [{
    type: 'component',
    name: '组件',
    group: [{
      type: 'div',
      name: 'div',
      examples: [{
        hash: 'aeb46c7753cfa019a66150f11246b764',
        title: 'sample',
        screenshot: 'https://gw.alicdn.com/tfs/TB1xk6RcmRRMKJjy0FlXXXFepXa-540-844.png'
      }, {
        hash: '7613db44f6c03a5849937fbbdeebf69d',
        title: 'invalid text node',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qlG2cwoQMeJjy1XaXXcSsFXa-540-844.png'
      },{
        hash: 'c38fbd7922d42810393c7a23529d48a1',
        title: 'basic example',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }, {
      type: 'text',
      name: 'text',
      examples: [{
        hash: 'c38fbd7922d42810393c7a23529d48a1',
        title: 'basic example',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }]
  }, {
    type: 'module',
    name: '模块',
    group: [{
      type: 'stream',
      name: 'stream',
      examples: [{
        hash: '1df6980ab82912daca84fba9821cf5b9',
        title: 'fetch',
        screenshot: 'https://gw.alicdn.com/tfs/TB1iC98cwoQMeJjy0FnXXb8gFXa-540-844.png'
      }]
    }, {
      type: 'dom',
      name: 'dom',
      examples: [{
        hash: 'c38fbd7922d42810393c7a23529d48a1',
        title: 'scrollTo',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }]
  }, {
    type: 'others',
    name: '其他',
    group: [{
      type: 'styles',
      name: '样式',
      examples: [{
        hash: 'c38fbd7922d42810393c7a23529d48a1',
        title: 'basic example',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }, {
      type: 'layout',
      name: '布局',
      examples: [{
        hash: 'c38fbd7922d42810393c7a23529d48a1',
        title: 'basic example',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }, {
      type: 'useful',
      name: '常用',
      examples: [{
        hash: '377c4f4a6030b5842938afb814cf169f',
        title: '获取执行环境信息',
        screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
      }]
    }, {
      type: 'showCase',
      name: '用例',
      examples: [{
        hash: '377c4f4a6030b5842938afb814cf169f',
        title: '获取执行环境信息',
        screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
      }]
    }]
  }]

  Vue.filter('url', hash => {
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  })
  export default {
    data () {
      return {
        activeTab: 'component',
        activeGroup: 'div',
        tabs: exampleMap.map(group => ({ type: group.type, name: group.name }))
      }
    },
    computed: {
      currentTab () {
        return exampleMap.filter(tab => tab.type === this.activeTab)[0]
      },
      currentGroup () {
        const currentExamples = []
        const activeGroup = this.currentTab.group.filter(group => group.type === this.activeGroup)[0]
        const exps = activeGroup.examples
        if (exps) {
          for (let i = 0; i < exps.length; ++i) {
            const idx = Math.floor(i/2)
            if (!currentExamples[idx]) {
              currentExamples[idx] = []
            }
            currentExamples[idx].push(exps[i])
          }
        }
        return currentExamples
      }
    },
    methods: {
      toggleTab (tabType) {
        this.activeTab = tabType
        this.activeGroup = this.currentTab.group[0].type
      },
      toggleGroup (type) {
        this.activeGroup = type
      }
    }
  }
</script>
