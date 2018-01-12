import LandingPage from '../pages/Landing.vue'
import sharedMixin from '../shared/mixin'
import { fetchExamples, saveExamples } from '../shared/utils'

// use shared mixins
Vue.mixin(sharedMixin)

// fetch and save examples
setTimeout(() => fetchExamples(saveExamples), 10)

LandingPage.el = '#root'
new Vue(LandingPage)
