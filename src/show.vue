<template>
  <div class="wrapper">
    <div class="content">
      <list class="group">
        <cell :class="['group-type', item.type === activeGroup ? 'active-group': '']" v-for="item in currentTab.group" :key="item.type" @click="toggleGroup(item.type)">
          <text :class="['group-type-name', item.type === activeGroup ? 'active-group-name': '']">{{item.name}}</text>
        </cell>
      </list>
      <list class="examples">
        <cell class="group-intro" v-if="currentGroup.title">
          <text class="group-title">{{currentGroup.title}}</text>
          <text class="group-desc">{{currentGroup.desc}}</text>
          <text class="doc-link" v-if="currentGroup.docLink" @click="jumpTo(currentGroup.docLink)">查看文档 >></text>
        </cell>
        <cell class="case" v-for="(group, i) in currentExamples" :key="i">
          <div class="example-box" v-for="example in group" :key="example.title">
            <text class="example-title">{{example.title}}</text>
            <a :href="example.hash | url">
              <image class="screenshot" :src="example.screenshot"></image>
            </a>
            <text @click="viewSource(example.hash)" class="example-tips">查看源码</text>
          </div>
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
  .group-intro {
    padding-top: 60px;
    padding-bottom: 45px;
  }
  .group-title {
    padding-bottom: 30px;
    font-size: 40px;
    text-align: center;
    color: #00B4FF;
  }
  .group-desc {
    font-size: 26px;
    color: #999;
    margin-left: 40px;
    margin-right: 40px;
  }
  .doc-link {
    font-size: 24px;
    color: rgba(0, 189, 255, 0.6);
    text-align: right;
    margin-top: 10px;
    margin-right: 60px;
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
    width: 180px;
    height: 282px;
    border-width: 1px;
    border-color: #DDD;
  }
  .example-title {
    font-size: 30px;
    text-align: center;
    color: #606060;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .example-tips {
    font-size: 26px;
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
  import exampleMap from './dataSource'
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  function createURL (hash) {
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    filters: {
      url: createURL,
      src: hash => {
        return `http://dotwe.org/raw/src/${hash}.vue`
      },
      indent (text) {
        return '      ' + text
      }
    },
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
        return this.currentTab.group.filter(group => group.type === this.activeGroup)[0]
      },
      currentExamples () {
        const result = []
        const exps = this.currentGroup.examples
        if (exps) {
          for (let i = 0; i < exps.length; ++i) {
            const idx = Math.floor(i/2)
            if (!result[idx]) {
              result[idx] = []
            }
            result[idx].push(exps[i])
          }
        }
        return result
      }
    },
    methods: {
      toggleTab (tabType) {
        this.activeTab = tabType
        this.activeGroup = this.currentTab.group[0].type
      },
      toggleGroup (type) {
        this.activeGroup = type
      },
      jumpTo (url) {
        navigator.push({
          url: createURL('7523d33972eeb6fd19362e12142b5b63')
        })
        storage.setItem('CURRENT_DOCUMENT_URL', url)
      },
      viewSource (hash) {
        navigator.push({
          url: createURL('0a2ffd1d3a65dbe25042c833ff8e2392')
        })
        storage.setItem('CURRENT_SOURCE_HASH', hash)
      }
    },
    destroyed () {
      storage.removeItem('CURRENT_DOCUMENT_URL')
      storage.removeItem('CURRENT_SOURCE_HASH')
    }
  }
</script>
