import Guide from './Guide.vue'
import sharedMixin from '../../shared/mixin'

// use shared mixins
Vue.mixin(sharedMixin)

Guide.el = '#root'
new Vue(Guide)
