<template>
  <list class="list">
    <cell><app-info-card /></cell>
    <cell :class="['item-cell', `item-cell-${i+1}`]" v-for="(item, i) in aboutApp" :key="i">
      <div :class="['item', `item-${i+1}`]" v-if="item.link">
        <text class="item-title">{{i18n(item.title)}}</text>
        <image class="arrow-icon" src="https://gw.alicdn.com/tfs/TB1iL2fkLDH8KJjy1XcXXcpdXXa-32-49.png" />
      </div>
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
  import AppInfoCard from '../../components/AppInfoCard.vue'
  export default {
    components: { AppInfoCard },
    computed: {
      languageName () {
        return this.i18n(this.dict.LANGUAGE_TYPE)
      }
    },
    methods: {
      chooseLanguage () {
        console.log(' => todo: choose language')

        // temp toggle language
        const language = this.language === 'en' ? 'zh' : 'en'
        this.$page.$emit('setLanguage', language)
        this.$page.$call('modal.toast', {
          message: `Change language to: ${language}`
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
