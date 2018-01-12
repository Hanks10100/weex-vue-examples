import About from '../pages/About.vue'
import sharedMixin from '../shared/mixin'

// use shared mixins
Vue.mixin(sharedMixin)

About.el = '#root'
new Vue(About)
