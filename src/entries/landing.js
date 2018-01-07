import LandingPage from '../pages/Landing.vue'
import { createLink, fetchExamples, fetchDoodle, fetchNews } from '../shared/utils'

const storage = weex.requireModule('storage')
const storageKey = 'WEEX_PLAYGROUND_APP_EXAMPLES'

Vue.filter('link', createLink)

setTimeout(() => {
  fetchExamples(result => {
    result.timestamp = Date.now()
    // console.log('examples', result)
    storage.setItem(storageKey, JSON.stringify(result))
  })
}, 10)

LandingPage.el = '#root'
new Vue(LandingPage)
