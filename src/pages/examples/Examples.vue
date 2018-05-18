<template>
  <div class="wrapper">
    <list class="example-list" v-if="examples && examples.length">
      <template v-for="exampleGroup in currentTab.group">
        <cell class="group-info"
          v-if="exampleGroup && exampleGroup.title || exampleGroup.name"
          :ref="exampleGroup.type"
          :key="exampleGroup.type">
          <text class="group-title">{{i18n(exampleGroup.title || exampleGroup.name)}}</text>
          <text class="group-desc" v-if="exampleGroup.desc">{{i18n(exampleGroup.desc)}}</text>
          <text class="doc-link"
            v-if="exampleGroup.desc && exampleGroup.docLink"
            >{{i18n(dict.READ_MORE)}} >></text>
        </cell>
        <cell class="section" :key="exampleGroup.type + '-examples'">
          <example-scroller :language="language" :examples="exampleGroup.examples" />
        </cell>
      </template>
    </list>
    <div class="loading" v-else-if="showLoading">
      <text class="loading-text">loading ...</text>
    </div>
    <div class="tabbar" v-if="tabs && tabs.length">
      <div v-for="tab in tabs" :key="tab.type"
        :class="['tab-cell', tab.type === activeTab ? 'active-tab-cell': '']"
        @click="toggleTab(tab.type)">
        <text :class="[
          'tab-name',
          `tab-name-${language}`,
          tab.type === activeTab ? `active-tab-name-${language}`: ''
        ]">{{i18n(tab.name)}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .example-list {
    width: 750px;
    position: absolute;
    top: 0;
    bottom: 100px;
    background-color: #F5F5F5;
  }
  .group-info {
    background-color: #FFFFFF;
  }
  .loading {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .loading-text {
    font-size: 60px;
    color: #BBBBBB;
  }
  .group-title {
    width: 750px;
    padding-top: 20px;
    padding-bottom: 35px;
    font-size: 40px;
    text-align: center;
    color: #00B4FF;
    background-image: linear-gradient(to bottom, #E3F5FB, #F9FEFF);
  }
  .group-desc {
    font-size: 28px;
    color: #999999;
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 40px;
  }
  .doc-link {
    font-size: 26px;
    color: rgba(0, 189, 255, 0.6);
    text-align: right;
    margin-top: 10px;
    margin-right: 60px;
    margin-bottom: 20px;
  }
  .section {
    padding-bottom: 30px;
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
    background-color: #FCFCFC;
    transition: background-color 0.2s;
  }
  .active-tab-cell {
    border-top-color: rgba(0, 189, 255, 0.8);
    background-color: #BDECFF;
  }
  .tab-name {
    text-align: center;
    color: #666666;
    transition-property: color, font-size;
    transition-duration: 100ms;
  }
  .tab-name-zh {
    font-size: 36px;
  }
  .tab-name-en {
    font-size: 30px;
  }
  .active-tab-name-zh {
    color: #00B4FF;
    font-size: 42px;
    font-weight: bold;
  }
  .active-tab-name-en {
    color: #00B4FF;
    font-size: 30px;
    font-weight: bold;
  }
</style>

<script>
  import { i18n } from '../../utils/index'
  import ExampleScroller from '../../components/ExampleScroller.vue'
  export default {
    components: { ExampleScroller },
    computed: {
      showLoading () {
        return !this.examples.length
      },
      tabs () {
        return this.examples.map(group => ({
          type: group.type,
          name: group.name
        }))
      },
      currentTab () {
        return this.examples.filter(tab => tab.type === this.activeTab)[0]
      }
    },
    methods: {
      i18n,
      toggleTab (tabType) {
        this.activeTab = tabType
        this.activeGroup = this.currentTab.group[0].type
      }
    }
  }
</script>
