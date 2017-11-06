<template>
  <div class="page-wrapper">
    <aside class="aside">
      <ul class="tab-list">
        <li :class="['tab-item', currentTab === tab.type ? 'active-tab' : '']"
          v-for="tab in tabs" :key="tab.type"
          @click="toggleTab(tab.type)">
          <span class="tab-title">{{tab.name | i18n}}</span>
        </li>
      </ul>
    </aside>
    <main class="main">
      <example-list class="example-box" :category="selectedCategory"></example-list>
    </main>
  </div>
</template>

<script>
  import dataSource from '../dataSource'
  import ExampleList from './ExampleList.vue'

  export default {
    components: { ExampleList },
    data () {
      return {
        currentTab: 'component'
      }
    },
    computed: {
      tabs () {
        if (!Array.isArray(dataSource)) {
          return []
        }
        return dataSource.map(category => {
          const item = Object.assign({}, category)
          delete item.group
          return item
        })
      },
      selectedCategory () {
        if (!Array.isArray(dataSource)) {
          return {}
        }
        return dataSource.filter(tab => tab.type === this.currentTab)[0]
      }
    },
    methods: {
      toggleTab (tabType) {
        this.currentTab = tabType
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
    width: 240px;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    background-color: #333;
    border-right: 1px solid #DDD;
  }
  .tab-list {
    list-style: none;
    padding: 0;
  }
  .tab-item {
    list-style: none;
    padding: 8px 20px;
    background-color: #FFF;
    font-size: 26px;
  }
  .tab-item.active-tab {
    background-color: #DDD;
  }
  .main {
    flex: 1;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
</style>
