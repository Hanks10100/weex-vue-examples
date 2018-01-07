import Examples from '../pages/Examples.vue'
import { i18n, createURL, jumpTo, viewSource } from '../shared/utils'

Vue.filter('url', createURL)
Vue.mixin({
  methods: {
    i18n,
    createURL,
    jumpTo,
    viewSource
  }
})

Examples.el = '#root'
new Vue(Examples)
