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
    jumpTo (name, params) {
      try {
        console.log(` => will jump to "${name}".`)
        modal.toast({ message: `will jump to "${name}".` })
        navigator.push({
          url: params ? `${name}?${encodeParams(params)}` : name
        })
      } catch (e) {
        console.log(` => Failed to jump to ${name}`)
      }
    }
  }
}
