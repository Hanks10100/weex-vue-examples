
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
      if (this.$page && typeof this.$page.$call === 'function') {
        console.log(` => will jump to "${name}".`)
        this.$page.$call('modal.toast', {
          message: `will jump to "${name}".`
        })
        this.$page.$call('navigator.push', { url: name })
      } else {
        console.log(` => Failed to jump to ${name}`)
      }
    }
  }
}
