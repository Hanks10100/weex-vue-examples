export function createLink (name) {
  if (WXEnvironment.platform === 'Web') {
    return `/?page=${name}.web.js`
  }
  // TODO
  return `${name}.weex.js`
}

export function createURL (hash) {
  if (WXEnvironment.platform === 'Web') {
    return `http://dotwe.org/raw/htmlVue/${hash}`
  }
  const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
  return `${url}?_wx_tpl=${url}`
}

export function i18n (text) {
  if (typeof text === 'string') {
    return text
  }
  if (Object.prototype.toString.call(text) === '[object Object]') {
    const lang = this.language || 'en'
    return text[lang]
  }
}
