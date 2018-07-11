import '../../shared'
import Webview from './Webview.vue'

// show title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(true)
} catch (e) {}

Webview.el = '#root'
new Vue(Webview)
