import News from '../pages/News.vue'
import { jumpTo } from '../shared/utils'

Vue.mixin({
  methods: {
    jumpTo
  }
})

News.el = '#root'
new Vue(News)
