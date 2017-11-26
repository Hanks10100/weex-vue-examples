<template>
  <div class="wrapper">
    <div class="content">
      <div class="group">
        <list class="group-list">
          <cell :class="['group-type', item.type === activeGroup ? 'active-group-type': '']" v-for="item in currentTab.group" :key="item.type" @click="toggleGroup(item.type)">
            <text :class="['group-name', item.type === activeGroup ? 'active-group-name': '']">{{i18n(item.name)}}</text>
          </cell>
        </list>
      </div>
      <div class="examples">
        <list class="settings" v-if="currentGroup.type === 'settings'">
          <cell class="setting-title-cell">
            <text class="setting-title">Settings</text>
          </cell>
          <cell class="setting-cell" @click="chooseLanguage">
            <text class="setting-label">{{i18n(tips.LANGUAGE)}}</text>
            <text class="setting-value">{{language | lang}}</text>
          </cell>
        </list>
        <list class="examples-list" v-else>
          <cell class="group-intro" v-if="currentGroup.title">
            <text class="group-title">{{i18n(currentGroup.title)}}</text>
            <text class="group-desc">{{i18n(currentGroup.desc)}}</text>
            <text class="doc-link" v-if="currentGroup.docLink" @click="jumpTo(currentGroup.docLink)">{{i18n(tips.SEE_MORE)}} >></text>
          </cell>
          <cell class="case" v-for="(group, i) in currentExamples" :key="i">
            <div class="example-box" v-for="example in group" :key="i18n(example.title)">
              <text class="example-title">{{i18n(example.title)}}</text>
              <a :href="i18n(example.hash) | url">
                <image class="screenshot" :src="i18n(example.screenshot)"></image>
              </a>
              <text @click="viewSource(example.hash)" class="example-tips">{{i18n(tips.VIEW_SOURCE)}}</text>
            </div>
          </cell>
        </list>
      </div>
    </div>
    <div class="tabbar">
      <div :class="['tab-cell', tab.type === activeTab ? 'active-tab-cell': '']" v-for="tab in tabs" :key="tab.type" @click="toggleTab(tab.type)">
        <text :class="['tab-name', tab.type === activeTab ? 'active-tab-name': '']">{{i18n(tab.name)}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  .setting-title-cell {
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
    padding: 50px;
  }
  .setting-title {
    font-size: 50px;
    padding-bottom: 30px;
    text-align: center;
    color: #686868;
  }
  .setting-cell {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
  }
  .setting-label {
    font-size: 36px;
    color: #707070;
  }
  .setting-value {
    font-size: 36px;
    color: #999999;
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
  import getExamples from '../examples'
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  const picker = weex.requireModule('picker')
  function createURL (hash) {
    if (WXEnvironment.platform === 'Web') {
      return `http://dotwe.org/raw/htmlVue/${hash}`
    }
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }

  const exampleMap = getExamples({ scope: 'mobile' })
  export default {
    filters: {
      url: createURL,
      lang (type) {
        switch (type) {
          case 'en': return 'English'
          case 'zh': return '中文'
        }
        return type
      }
    },
    data () {
      return {
        language: 'zh',
        activeTab: 'component',
        activeGroup: 'div',
        tips: {
          VIEW_SOURCE: { en: 'view source', zh: '查看源码' },
          LANGUAGE: { en: 'Language', zh: '语言' },
          SEE_MORE: { en: 'see more', zh: '查看更多' }
        },
        tabs: exampleMap.map(group => ({ type: group.type, name: group.name }))
      }
    },
    watch: {
      language () {
        storage.setItem('WEEX_PLAYGROUND_LANGUAGE', this.language)
      }
    },
    beforeCreate () {
      storage.getItem('WEEX_PLAYGROUND_LANGUAGE', event => {
        if (event.result === 'success') {
          this.language = event.data
        }
      })
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
      i18n (text) {
        if (typeof text === 'string') {
          return text
        }
        if (Object.prototype.toString.call(text) === '[object Object]') {
          const lang = this.language || 'en'
          return text[lang]
        }
      },
      jumpTo (url) {
        const hash = {
          'en': '06f6a4f7a03ceffc93ec09ddaebb0a51',
          'zh': 'fa7d084ea1dc617e1c4e03ecd65263db'
        }
        storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url))
        navigator.push({ url: createURL(this.i18n(hash)) })
      },
      viewSource (url) {
        const hash =  {
          'en': 'a9b64158408b8e03d75fa26ba2095b2e',
          'zh': 'a411ffc411c4a07ab50e277343f8b64e'
        }
        storage.setItem('CURRENT_SOURCE_HASH', this.i18n(url))
        navigator.push({ url: createURL(this.i18n(hash)) })
      },
      chooseLanguage () {
        const options = ['en', 'zh']
        picker.pick({
          index: options.indexOf(this.language),
          items: ['English', '中文'],
        }, ({result, data}) => {
          if (result === 'success') {
            this.language = options[data]
          }
        })
      }
    },
    beforeDestroy () {
      storage.removeItem('CURRENT_DOCUMENT_URL')
      storage.removeItem('CURRENT_SOURCE_HASH')
    }
  }
</script>
