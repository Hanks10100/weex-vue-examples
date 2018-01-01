import About from '../pages/About.vue'
import { createURL, createLink, i18n } from '../shared/utils'

const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')

Vue.filter('url', createURL)
Vue.filter('link', createLink)
Vue.filter('i18n', i18n)
Vue.mixin({
  methods: {
    i18n,
    createLink,
    jumpTo (url) {
      const hash = {
        'en': '06f6a4f7a03ceffc93ec09ddaebb0a51',
        'zh': 'fa7d084ea1dc617e1c4e03ecd65263db'
      }
      storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url))
      navigator.push({ url: createURL(this.i18n(hash)) })
    }
  }
})

About.el = '#root'
new Vue(About)
