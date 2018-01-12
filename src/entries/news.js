import News from '../pages/News.vue'
import sharedMixin from '../shared/mixin'

// use shared mixins
Vue.mixin(sharedMixin)

News.el = '#root'
new Vue(News)
