import Guide from '../pages/Guide.vue'
import { i18n, createURL, createLink, jumpTo } from '../shared/utils'

Vue.filter('i18n', i18n)
Vue.filter('url', createURL)
Vue.filter('link', createLink)
Vue.mixin({
  methods: {
    i18n,
    createURL,
    createLink,
    jumpTo
  }
})

Guide.el = '#root'
new Vue(Guide)
