import LandingPage from '../pages/Landing.vue'
import { createLink, i18n, fetchExamples, getLanguage, setLanguage } from '../shared/utils'

const storage = weex.requireModule('storage')
const storageKey = 'WEEX_PLAYGROUND_APP_EXAMPLES'

Vue.filter('link', createLink)
Vue.filter('i18n', i18n)

const supportedLanguageRE = /(en|zh)\_?\w*/i
function initLanguage (language = 'en') {
  if (WXEnvironment.platform.toLowerCase() === 'web') {
    language = navigator.language
  } else {
    try {
      const locale = weex.requireModule('locale')
      language = locale.getLanguage()
    } catch (e) {}
  }
  const match = supportedLanguageRE.exec(language)
  if (match && match[1]) {
    setLanguage(match[1])
  } else {
    setLanguage('en')
  }
}

getLanguage(lang => {
  if (!supportedLanguageRE.test(lang)) {
    initLanguage()
  }
}, error => {
  initLanguage()
})

setTimeout(() => {
  fetchExamples(result => {
    result.timestamp = Date.now()
    storage.setItem(storageKey, JSON.stringify(result))
  })
}, 10)

LandingPage.el = '#root'
new Vue(LandingPage)
