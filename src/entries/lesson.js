import Lesson from '../pages/Lesson.vue'
import { i18n, createURL, jumpTo } from '../shared/utils'

Vue.filter('url', createURL)
Vue.mixin({
  methods: {
    i18n,
    createURL,
    jumpTo
  }
})

Lesson.el = '#root'
new Vue(Lesson)
