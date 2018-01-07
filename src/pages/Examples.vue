<template>
  <div class="wrapper">
    <div class="content" v-if="examples && examples.length">
      <div class="group">
        <list class="group-list" v-if="currentTab && currentTab.group">
          <cell :class="['group-type', item.type === activeGroup ? 'active-group-type': '']" v-for="item in currentTab.group" :key="item.type" @click="toggleGroup(item.type)">
            <text :class="['group-name', item.type === activeGroup ? 'active-group-name': '']">{{i18n(item.name)}}</text>
          </cell>
        </list>
      </div>
      <div class="examples">
        <list class="examples-list">
          <cell class="group-intro" v-if="currentGroup && currentGroup.title">
            <text class="group-title">{{i18n(currentGroup.title)}}</text>
            <text class="group-desc">{{i18n(currentGroup.desc)}}</text>
            <text class="doc-link" v-if="currentGroup.docLink" @click="jumpTo(currentGroup.docLink)">{{i18n(tips.SEE_MORE)}} >></text>
          </cell>
          <cell class="case" v-for="(group, i) in currentExamples" :key="i">
            <div class="example-box" v-for="example in group" :key="i18n(example.title)">
              <text class="example-title">{{i18n(example.title)}}</text>
              <div style="align-items: center">
                <a :href="i18n(example.hash) | url">
                  <image class="screenshot" :src="i18n(example.screenshot)"></image>
                </a>
                <text @click="viewSource(example.hash)" class="example-tips">{{i18n(tips.VIEW_SOURCE)}}</text>
              </div>
            </div>
          </cell>
        </list>
      </div>
    </div>
    <div class="loading" v-else-if="showLoading">
      <text class="loading-text">loading ...</text>
    </div>
    <div class="tabbar" v-if="tabs && tabs.length">
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
  .loading {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .loading-text {
    font-size: 60px;
    color: #BBB;
  }
  .group {
    width: 210px;
  }
  .examples {
    width: 540px;
  }
  .group-type {
    width: 200px;
    height: 100px;
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
    font-size: 32px;
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
    font-size: 34px;
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
    padding-left: 5px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .example-box {
    /* flex: 1; */
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    width: 270px;
  }
  .screenshot {
    width: 220px;
    height: 343px;
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
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #E6E6E6;
  }
  .tab-cell {
    width: 186px;
    height: 100px;
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
  import { fetchExamples } from '../shared/utils'
  // import getExamples from '../../examples'
  // const exampleMap = getExamples({ scope: 'mobile', filterTODO: true })
  const exampleMap = []

  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  const picker = weex.requireModule('picker')
  const examplesKey = 'WEEX_PLAYGROUND_APP_EXAMPLES'
  let useStorage = false
  export default {
    data () {
      return {
        examples: exampleMap,
        showLoading: false,
        language: 'zh',
        activeTab: 'component',
        activeGroup: 'div',
        tips: {
          VIEW_SOURCE: { en: 'view source', zh: '查看源码' },
          LANGUAGE: { en: 'Language', zh: '语言' },
          SEE_MORE: { en: 'see more', zh: '查看更多' }
        }
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

      // read examples from storage
      storage.getItem(examplesKey, event => {
        if (event.result === 'success') {
          const data = JSON.parse(event.data)
          if (data && Array.isArray(data.examples)) {s
            this.examples = data.examples
            if (WXEnvironment.platform.toLowwerCase() !== 'web') {
              useStorage = true
            }
          }
        }
      })

      // update examples to storage
      fetchExamples(result => {
        result.timestamp = Date.now()
        storage.setItem(examplesKey, JSON.stringify(result))
        if (!useStorage) {
          this.examples = result.examples
        }
      })

      setTimeout(() => { this.showLoading = true }, 400);
    },
    computed: {
      tabs () {
        return this.examples.map(group => ({
          type: group.type,
          name: group.name
        }))
      },
      currentTab () {
        return this.examples.filter(tab => tab.type === this.activeTab)[0]
      },
      currentGroup () {
        if (this.currentTab && this.currentTab.group) {
          return this.currentTab.group.filter(
            group => group.type === this.activeGroup
          )[0]
        }
      },
      currentExamples () {
        const result = []
        if (this.currentGroup && this.currentGroup.examples) {
          const exps = this.currentGroup.examples
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
      }
    },
    beforeDestroy () {
      storage.removeItem('CURRENT_DOCUMENT_URL')
      storage.removeItem('CURRENT_SOURCE_HASH')
    }
  }
</script>
