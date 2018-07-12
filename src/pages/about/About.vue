<template>
  <list class="list">
    <cell><app-info-card /></cell>
    <cell :class="['item-cell', `item-cell-${i+1}`]" v-for="(item, i) in aboutApp" :key="i">
      <a :class="['item', `item-${i+1}`]" v-if="item.link"
        :href="createLink('webview', { language, url: i18n(item.link), title: i18n(item.title)})">
        <text class="item-title">{{i18n(item.title)}}</text>
        <image class="arrow-icon" src="https://gw.alicdn.com/tfs/TB1iL2fkLDH8KJjy1XcXXcpdXXa-32-49.png" />
      </a>
    </cell>
    <cell class="item-cell">
      <div class="item" @click="chooseLanguage">
        <text class="item-title">{{i18n(dict.LANGUAGE)}}</text>
        <text class="item-value">{{languageName}}</text>
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
  import * as utils from '../../utils'
  import { aboutApp } from '../../utils/mock'
  import AppInfoCard from '../../components/AppInfoCard.vue'
  const picker = weex.requireModule('picker')
  const channel = new BroadcastChannel('language')
  export default {
    components: { AppInfoCard },
    data () {
      return {
        language: 'en',
        followSystemLanguage: true,
        navigationBarOptions: {
          title: {
            zh: '关于 Weex',
            en: 'About Weex'
          }
        },
        dict: {
          FOLLOW_SYSTEM: { en: 'Follow System', zh: '跟随系统' },
          LANGUAGE: { en: 'Language', zh: '语言' }
        },
        aboutApp
      }
    },
    watch: {
      language () {
        channel.postMessage({ language: this.language })
      }
    },
    computed: {
      languageName () {
        if (this.followSystemLanguage) {
          return this.i18n(this.dict.FOLLOW_SYSTEM)
        }
        return this.i18n({ en: 'English', zh: '简体中文' })
      }
    },
    created () {
      utils.readAbout(about => {
        this.aboutApp = about
      })
      utils.getStorageLanguage(
        lang => this.followSystemLanguage = false,
        () => this.followSystemLanguage = true
      )
    },
    methods: {
      chooseLanguage () {
        const options = ['', 'en', 'zh']
        const index = this.followSystemLanguage
          ? 0
          : options.indexOf(this.language)
        picker.pick({
          index,
          items: [
            this.i18n(this.dict.FOLLOW_SYSTEM),
            'English',
            '中文'
          ]
        }, ({result, data}) => {
          if (result === 'success') {
            const select = options[data]
            if (select) {
              this.followSystemLanguage = false
              this.language = select
              utils.setLanguage(select)
            } else {
              this.followSystemLanguage = true
              utils.clearStorageLanguage()
              utils.getSystemLanguage(lang => {
                this.language = lang
              }, error => {
                this.language = 'en'
              })
            }
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
