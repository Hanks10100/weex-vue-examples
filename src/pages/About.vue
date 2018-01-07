<template>
  <list class="list">
    <cell class="brand-cell">
      <div class="weex-brand">
        <image class="asf-logo" src="http://gw.alicdn.com/tfs/TB1pTBZQFXXXXX9XXXXXXXXXXXX-794-280.png"></image>
        <image class="weex-logo" src="https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"></image>
        <!-- <text class="weex-slogan">Weex is a framework for building high-performance mobile applications with modern web development experience.</text> -->
      </div>
    </cell>
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
    <cell><app-info-card /></cell>
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
            title: 'Ask For Help',
            route: 'chat-bot'
          }, {
            title: 'Settings',
            route: 'settings'
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
  .weex-brand {
    background-color: #FFF;
    padding-top: 60px;
    padding-bottom: 40px;
    margin-bottom: 30px;
    align-items: center;
  }
  .asf-logo {
    width: 360px;
    height: 120px;
  }
  .weex-logo {
    width: 750px;
    height: 318px;
  }
  .weex-slogan {
    padding-top: 10px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: #FFF;
    font-size: 32px;
    color: #727272;
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
    padding-bottom: 20px;
  }
  .copyright-text {
    font-size: 22px;
    color: #A0A0A0;
    text-align: center;
  }
</style>
