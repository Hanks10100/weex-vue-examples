<template>
  <div class="page-wrapper">
    <aside :class="['aside', language]">
      <div class="github">
        <a href="https://github.com/hanks10100/weex-vue-examples" target="_blank" class="repo-link">
          <img class="github-logo" src="https://gw.alicdn.com/tfs/TB1y.g1bMvD8KJjy0FlXXagBFXa-120-120.png" alt="apache/incubator-weex">
        </a>
      </div>
      <div class="tools">
        <select class="language-select" v-model="language">
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <ul class="tab-list">
        <li :class="['tab-item', currentTab === tab.type ? 'active-tab' : '']"
          v-for="tab in tabs" :key="tab.type"
          @click="toggleTab(tab.type)">
          <span class="tab-title">{{tab.name | i18n}}</span>
        </li>
      </ul>
    </aside>
    <example-list class="main" :language="language" :type="currentTab" :category="selectedCategory"></example-list>
  </div>
</template>

<script>
  import getExamples from '../../examples'
  import ExampleList from './ExampleList.vue'

  const examples = getExamples({ filterTODO: false })
  export default {
    components: { ExampleList },
    data () {
      return {
        currentTab: 'component',
        language: Vue.config.language || 'en'
      }
    },
    computed: {
      tabs () {
        if (!Array.isArray(examples)) {
          return []
        }
        return examples.map(category => {
          const item = Object.assign({}, category)
          delete item.group
          return item
        })
      },
      selectedCategory () {
        if (!Array.isArray(examples)) {
          return {}
        }
        return examples.filter(tab => tab.type === this.currentTab)[0]
      }
    },
    methods: {
      toggleTab (tabType, hash) {
        if (this.tabs.some(tab => tab.type === tabType) && tabType !== this.currentTab) {
          this.currentTab = tabType
          if (typeof location !== 'undefined') {
            location.hash = `#${tabType}` + (hash ? `/${hash}` : '')
          }
        }
      }
    }
  }
</script>

<style scoped>
  .page-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    height: 100%;
  }
  .aside {
    width: 250px;
    height: 100%;
    padding: 40px 0;
    min-height: 100%;
    max-height: 100%;
    background-color: #333;
    border-right: 1px solid #DDD;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
  .github {
    margin-bottom: 30px;
  }
  .github-logo {
    width: 64px;
    height: 64px;
  }
  .language-select {
    width: 140px;
    font-size: 18px;
    margin: 0;
    margin-bottom: 30px;
  }
  .tab-list {
    width: 100%;
    list-style: none;
    padding: 0;
  }
  .tab-item {
    list-style: none;
    padding: 15px;
    color: #FFF;
    font-size: 26px;
    cursor: pointer;
  }
  .zh .tab-item {
    font-size: 28px;
    text-align: center;
    letter-spacing: 0.2em;
  }
  .en .tab-item {
    padding-left: 40px;
  }
  .tab-item:hover {
    background-color: #444;
  }
  .tab-item.active-tab {
    background-color: #555;
  }
  .main {
    flex: 1;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
</style>
