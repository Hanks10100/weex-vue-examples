
export function i18n (text) {
  if (typeof text === 'string') {
    return text
  }
  if (Object.prototype.toString.call(text) === '[object Object]') {
    const lang = Vue.config.lang || 'en'
    return text[lang] || ''
  }
}
