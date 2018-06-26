import '../../shared'
import News from './News.vue'

// show title bar
try {
  const titleBar = weex.requireModule('titleBar')
  titleBar.showTitleBar(true)
} catch (e) {}

News.el = '#root'
new Vue(News)
