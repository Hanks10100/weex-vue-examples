import '../../shared'
import * as utils from '../../utils'
import LandingPage from './Landing.vue'

// hide title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(false)
} catch (e) {}

// fetch and save examples
setTimeout(() => {
  utils.fetchExamples(utils.saveExamples)
  utils.fetchGuide(utils.saveGuide)
  utils.fetchAbout(utils.saveAbout)
}, 10)

LandingPage.el = '#root'
new Vue(LandingPage)
