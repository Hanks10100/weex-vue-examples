import '../../shared'
import Examples from './Examples.vue'

// show title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(true)
} catch (e) {}

Examples.el = '#root'
new Vue(Examples)
