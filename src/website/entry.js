import Vue from 'vue'
import IndexPage from './IndexPage.vue'

window.Vue = Vue
Vue.config.language = navigator.language.match(/^zh[_-]?\w*$/i) ? 'zh' : 'en'

function i18n (text) {
  if (typeof text === 'string') {
    return text
  }
  if (Object.prototype.toString.call(text) === '[object Object]') {
    const lang = Vue.config.language || 'en'
    return text[lang] || ''
  }
}

Vue.filter('i18n', i18n)
Vue.mixin({
  methods: { i18n },
  watch: {
    language () {
      Vue.config.language = this.language
      this.$forceUpdate()
    }
  }
})

IndexPage.el = '#root'
new Vue(IndexPage)
