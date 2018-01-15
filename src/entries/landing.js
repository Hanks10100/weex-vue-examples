import LandingPage from '../pages/Landing.vue'
import sharedMixin from '../shared/mixin'
import * as utils from '../shared/utils'

// hide title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(false)
} catch (e) {}

// use shared mixins
Vue.mixin(sharedMixin)

// fetch and save examples
setTimeout(() => {
  utils.fetchExamples(utils.saveExamples)
  utils.fetchGuide(utils.saveGuide)
  utils.fetchAbout(utils.saveAbout)
}, 10)

LandingPage.el = '#root'
new Vue(LandingPage)
