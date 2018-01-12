<template>
  <list class="list">
    <cell><app-info-card /></cell>
    <cell :class="['item-cell', `item-cell-${i+1}`]" v-for="(item, i) in items" :key="i">
      <div :class="['item', `item-${i+1}`]" v-if="item.link" @click="jumpTo(item.link)">
        <text class="item-title">{{i18n(item.title)}}</text>
        <image class="arrow-icon" src="https://gw.alicdn.com/tfs/TB1iL2fkLDH8KJjy1XcXXcpdXXa-32-49.png"></image>
      </div>
    </cell>
    <cell class="item-cell">
      <div class="item" @click="chooseLanguage">
        <text class="item-title">{{i18n(tips.LANGUAGE)}}</text>
        <text class="item-value">{{language | lang}}</text>
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
  import { readAbout } from '../shared/utils'
  import AppInfoCard from '../components/AppInfoCard.vue'
  const picker = weex.requireModule('picker')
  const channel = new BroadcastChannel('language')
  export default {
    components: { AppInfoCard },
    filters: {
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
        language: 'en',
        tips: {
          LANGUAGE: { en: 'Language', zh: '语言' }
        },
        items: [
          {
            title: { en: 'Apache Software Foundation', zh: 'Apache 软件基金会' },
            link: 'http://www.apache.org/'
          }, {
            title: { en: 'Who is using Weex', zh: '谁在使用 Weex' },
            link: {
              en: 'http://weex-project.io/who-is-using-weex.html',
              zh: 'http://weex-project.io/cn/who-is-using-weex.html'
            },
          }, {
            title: { en: 'Contribution', zh: '参与贡献' },
            link: {
              en: 'http://weex-project.io/contributing.html',
              zh: 'http://weex-project.io/cn/contributing.html'
            },
          }, {
            title: { en: 'Resources', zh: '资源' },
            link: {
              en: 'http://weex-project.io/resources.html',
              zh: 'http://weex-project.io/cn/resources.html'
            },
          }, {
            title: { en: 'Release Note', zh: '版本变更' },
            link: {
              en: 'http://weex-project.io/releasenote.html',
              zh: 'http://weex-project.io/cn/releasenote.html'
            },
          }, {
            title: { en: 'FAQ', zh: '常见问题' },
            link: {
              en: 'http://weex-project.io/faq.html',
              zh: 'http://weex-project.io/cn/faq.html'
            }
          }
        ]
      }
    },
    watch: {
      language () {
        this.setLanguage(this.language)
        channel.postMessage({ language: this.language })
      }
    },
    beforeCreate () {
      readAbout(about => {
        this.items = about
      })
    },
    methods: {
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
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F5F5F5;
  }
  .item {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 40px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E6E6E6;
    background-color: #FFFFFF;
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
  .item-value {
    font-size: 36px;
    color: #999999;
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
