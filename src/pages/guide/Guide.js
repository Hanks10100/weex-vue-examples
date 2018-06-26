import '../../shared'
import Guide from './Guide.vue'

// show title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(true)
} catch (e) {}

Guide.el = '#root'
new Vue(Guide)
