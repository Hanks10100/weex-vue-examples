import LandingPage from '../pages/Landing.vue'

function createURL (name) {
  if (WXEnvironment.platform === 'Web') {
    return `/?page=${name}.web.js`
  }
  // TODO
  return `${name}.weex.js`
}
Vue.filter('url', createURL)

LandingPage.el = '#root'
new Vue(LandingPage)
