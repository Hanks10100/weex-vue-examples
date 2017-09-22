<template>
  <div class="wrapper">
    <div class="content">
      <div class="group">
        <list class="group-list">
          <cell :class="['group-type', item.type === activeGroup ? 'active-group-type': '']" v-for="item in currentTab.group" :key="item.type" @click="toggleGroup(item.type)">
            <text :class="['group-name', item.type === activeGroup ? 'active-group-name': '']">{{item.name}}</text>
          </cell>
        </list>
      </div>
      <div class="examples">
        <list class="examples-list">
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
    </div>
    <div class="tabbar">
      <div :class="['tab-cell', tab.type === activeTab ? 'active-tab-cell': '']" v-for="tab in tabs" :key="tab.type" @click="toggleTab(tab.type)">
        <text :class="['tab-name', tab.type === activeTab ? 'active-tab-name': '']">{{tab.name}}</text>
      </div>
    </div>
  </div>
</template>

<style>
  .content {
    width: 750px;
    position: absolute;
    top: 0;
    bottom: 110px;
    flex-direction: row;
    justify-content: space-between;
  }
  .group {
    width: 210px;
  }
  .examples {
    width: 540px;
  }
  .group-type {
    width: 200px;
    height: 108px;
    transition-property: width, background-color;
    transition-duration: 0.2s;
    border-bottom-width: 1px;
    border-bottom-color: #EEEEEE;
    border-right-width: 2px;
    border-right-color: #E0E0E0;
    justify-content: center;
    background-color: #FEFEFE;
  }
  .group-name {
    text-align: center;
    font-size: 34px;
    color: #888888;
  }
  .active-group-type {
    width: 210px;
    border-radius: 10px;
    background-color: rgba(0, 189, 255, 0.1);
    border-right-color: rgba(0, 189, 255, 0.2);
    border-bottom-color: rgba(0, 189, 255, 0.1);
  }
  .active-group-name {
    font-size: 38px;
    font-weight: bold;
    color: #00B4FF;
  }
  .group-intro {
    padding-top: 60px;
    padding-bottom: 45px;
  }
  .group-title {
    padding-right: 10px;
    padding-bottom: 30px;
    font-size: 40px;
    text-align: center;
    color: #00B4FF;
  }
  .group-desc {
    font-size: 28px;
    color: #999;
    margin-left: 30px;
    margin-right: 40px;
  }
  .doc-link {
    font-size: 26px;
    color: rgba(0, 189, 255, 0.6);
    text-align: right;
    margin-top: 10px;
    margin-right: 60px;
  }
  .case {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 15px;
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
    width: 200px;
    height: 312px;
    border-width: 1px;
    border-color: #DDD;
  }
  .example-title {
    font-size: 32px;
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
    width: 750px;
    position: fixed;
    bottom: 0;
    height: 110px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #E6E6E6;
  }
  .tab-cell {
    width: 186px;
    height: 110px;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #DDDDDD;
    justify-content: center;
    background-color: #FBFBFB;
  }
  .active-tab-cell {
    border-top-color: rgba(0, 189, 255, 0.8);
    background-color: #BDECFF;
  }
  .tab-name {
    text-align: center;
    font-size: 36px;
    color: #666666;
  }
  .active-tab-name {
    color: #00B4FF;
    font-size: 45px;
    font-weight: bold;
  }
</style>

<script>
  import exampleMap from './dataSource'
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
    filters: {
      url: createURL
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
          url: createURL('ab57ab447248c35115144736ba38521a')
        })
        storage.setItem('CURRENT_DOCUMENT_URL', url)
      },
      viewSource (hash) {
        navigator.push({
          url: createURL('948b94268510c83155ae1d6a5e90f6e0')
        })
        storage.setItem('CURRENT_SOURCE_HASH', hash)
      }
    },
    beforeDestroy () {
      storage.removeItem('CURRENT_DOCUMENT_URL')
      storage.removeItem('CURRENT_SOURCE_HASH')
    }
  }
</script>
