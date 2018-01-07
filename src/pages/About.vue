<template>
  <list class="list">
    <cell><app-info-card /></cell>
    <cell :class="['item-cell', `item-cell-${i+1}`]" v-for="(item, i) in items" :key="i">
      <a :class="['item', `item-${i+1}`]" v-if="item.route" :href="item.route | link">
        <text class="item-title">{{item.title}}</text>
        <image class="arrow-icon" src="https://gw.alicdn.com/tfs/TB1iL2fkLDH8KJjy1XcXXcpdXXa-32-49.png"></image>
      </a>
      <div :class="['item', `item-${i+1}`]" v-else-if="item.link" @click="jumpTo(item.link)">
        <text class="item-title">{{item.title}}</text>
        <image class="arrow-icon" src="https://gw.alicdn.com/tfs/TB1iL2fkLDH8KJjy1XcXXcpdXXa-32-49.png"></image>
      </div>
    </cell>
    <cell>
      <div class="copyright">
        <text class="copyright-text">Copyright(c) 2017 The Apache Software Foundation.</text>
        <text class="copyright-text">Licensed under the Apache License, Version 2.0</text>
      </div>
    </cell>
  </list>
</template>

<script>
  import AppInfoCard from '../components/AppInfoCard.vue'
  export default {
    components: { AppInfoCard },
    data () {
      return {
        language: 'en',
        items: [
          {
            title: 'Apache Software Foundation',
            link: 'http://www.apache.org/'
          }, {
            title: 'Who is using Weex',
            link: 'http://weex-project.io/who-is-using-weex.html'
          }, {
            title: 'Contribution',
            link: 'http://weex-project.io/contributing.html'
          }, {
          //   title: 'Resources',
          //   link: 'http://weex-project.io/resources.html'
          // }, {
            title: 'Release Notes',
            link: 'http://weex-project.io/releasenote.html'
          }, {
            title: 'FAQ',
            link: 'http://weex-project.io/faq.html'
          // }, {
          //   title: 'Ask For Help',
          //   route: 'chat-bot'
          // }, {
          //   title: 'Settings',
          //   route: 'settings'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F5F5F5;
  }
  .center {
    align-items: center;
    justify-item: center;
  }
  .item {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 40px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E6E6E6;
    background-color: #FFF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .item-1 {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #E6E6E6;
  }
  .item-title {
    font-size: 42px;
    color: #606060;
  }
  .arrow-icon {
    width: 22px;
    height: 36px;
  }
  .copyright {
    margin-top: 50px;
    padding-bottom: 20px;
  }
  .copyright-text {
    font-size: 22px;
    color: #A0A0A0;
    text-align: center;
  }
</style>
