<template>
  <div>
    <web class="webview" :src="link"></web>
    <div class="tools" v-if="showTools">
      <div class="button" @click="copyLink">
        <text class="button-text">{{i18n(COPY_LINK)}}</text>
      </div>
      <div class="button" @click="goBack">
        <text class="button-text">{{i18n(BACK)}}</text>
      </div>
      <text class="close" @click="showTools = false">&#10005;</text>
    </div>
  </div>
</template>

<script>
  import { decoder, setTitleBar } from '../../utils/index'

  const storage = weex.requireModule('storage')
  const clipboard = weex.requireModule('clipboard')
  const navigator = weex.requireModule('navigator')
  const modal = weex.requireModule('modal')
  const languageRE = /.+[\?\&]{1}language=([\d\w]+)[\?\&]?.*/i
  const titleRE = /.+[\?\&]{1}title=([^\?\&]+)[\?\&]?.*/i
  const urlRE = /.+[\?\&]{1}url=([^\?\&]+)[\?\&]?.*/i

  export default {
    data () {
      const languageMatch = languageRE.exec(weex.config.bundleUrl || '')
      const urlMatch = urlRE.exec(weex.config.bundleUrl || '')
      return {
        language: languageMatch ? languageMatch[1] : 'en',
        link: urlMatch ? decoder(urlMatch[1]) : 'http://weex-project.io/',
        showTools: true,
        COPY_LINK: { zh: '复制链接', en: 'Copy Link' },
        BACK: { zh: '返回', en: 'Back' },
        LINK_COPIED: { zh: '链接地址已复制', en: 'Link address is copied' }
      }
    },
    created () {
      const titleMatch = titleRE.exec(weex.config.bundleUrl || '')
      let title = decoder(titleMatch && titleMatch[1])
      if (!title || title == 'null') {
        title = { en: 'Browse Web Page', zh: '浏览网页' }
      }
      setTitleBar({
        color: '#5F5F5F',
        backgroundColor: '#FFFFFF',
        title
      })
    },
    methods: {
      copyLink () {
        clipboard.setString(this.link)
        modal.toast({ message: this.i18n(this.LINK_COPIED), duration: 0.3 })
      },
      goBack () {
        navigator.pop()
      }
    },
    beforeDestroy () {
      storage.removeItem('CURRENT_DOCUMENT_URL')
    }
  }
</script>

<style scoped>
  .webview {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 750px;
    background-color: #F5F5F5;
  }
  .tools {
    position: fixed;
    bottom: 0;
    width: 750px;
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .button {
    width: 210px;
    height: 70px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: center;
  }
  .button-text {
    text-align: center;
    font-size: 34px;
    color: #FFFFFF;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    text-align: center;
    padding: 10px;
    font-size: 24px;
    color: #FFF;
  }
</style>
