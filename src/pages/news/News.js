import News from './News.vue'
import sharedMixin from '../../shared/mixin'

// use shared mixins
Vue.mixin(sharedMixin)

News.el = '#root'
new Vue(News)
