const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')

const encoder = typeof encodeURIComponent === 'function'
  ? encodeURIComponent
  : typeof encodeURI === 'function'
    ? encodeURI
    : x => x

function encodeParams (params) {
  if (!params || typeof params !== 'object') {
    return ''
  }
  const array = []
  for (const key in params) {
    if (typeof params[key] === 'string') {
      array.push(`${encoder(key)}=${encoder(params[key])}`)
    }
  }
  return array.join('&')
}

function i18n (text, language) {
  if (typeof text === 'string') {
    return text
  }
  if (Object.prototype.toString.call(text) === '[object Object]') {
    const lang = language || (this && this.language) || 'en'
    return text[lang]
  }
}

export default {
  filters: { i18n },
  created () {
    console.log(` => lifecycle mixin: created`)
  },
  methods: {
    i18n,
    // jump to another page within app
    jumpTo (name, params) {
      try {
        console.log(` => will jump to page "${name}".`)
        // modal.toast({ message: `will jump to page "${name}".` })
        navigator.push({
          url: params ? `${name}?${encodeParams(params)}` : name
        })
      } catch (e) {
        console.log(` => Failed to jump to ${name}`)
      }
    },

    // open a web url
    openURL (url, params) {
      try {
        const hash = '201695ba22bb107d485a13cddd136f9b'
        const container = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        const queryString = encodeParams(Object.assign({ url }, params))
        console.log(` => will jump to url: "${url}".`)
        // modal.toast({ message: `will jump to url: "${url}".` })
        navigator.push({
          url: `${container}?_wx_tpl=${container}&${queryString}`
        })
      } catch (e) {
        console.log(` => Failed to jump to ${url}`)
      }
    }
  }
}
