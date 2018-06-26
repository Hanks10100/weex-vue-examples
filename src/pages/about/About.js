import '../../shared'
import About from './About.vue'

// show title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(true)
} catch (e) {}

About.el = '#root'
new Vue(About)
