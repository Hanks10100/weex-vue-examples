const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')

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
    jumpTo (name) {
      try {
        console.log(` => will jump to "${name}".`)
        modal.toast({ message: `will jump to "${name}".` })
        navigator.push({ url: name })
      } catch (e) {
        console.log(` => Failed to jump to ${name}`)
      }
    }
  }
}
