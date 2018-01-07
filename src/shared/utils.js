const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')

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
    const lang = (this && this.language) || 'en'
    return text[lang]
  }
}

export function jumpTo (url) {
  const hash = {
    'en': '06f6a4f7a03ceffc93ec09ddaebb0a51',
    'zh': 'fa7d084ea1dc617e1c4e03ecd65263db'
  }
  storage.setItem('CURRENT_DOCUMENT_URL', i18n(url))
  navigator.push({ url: createURL(i18n(hash)) })
}

export function viewSource (url) {
  // const hash =  {
  //   'en': 'a9b64158408b8e03d75fa26ba2095b2e',
  //   'zh': 'a411ffc411c4a07ab50e277343f8b64e'
  // }
  const hash = {
    'en': '032afafed7947de7d5123a45b3ca9704',
    'zh': '785cf2804ac6a6dd807a0c988b5729cd'
  }
  storage.setItem('CURRENT_SOURCE_HASH', i18n(url))
  navigator.push({ url: createURL(i18n(hash)) })
}

export function fetchData (name, done) {
  stream.fetch({
    url: 'http://192.168.0.103:5000/query/weex-playground-app',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: 'json',
    body: `name=${name}`
  }, res => {
    if (res.ok && res.data && typeof done === 'function') {
      done(res.data)
    }
  })
}

export function fetchDoodle (done) {
  fetchData('doodle', done)
}
export function fetchExamples (done) {
  fetchData('examples', done)
}
export function fetchNews (done) {
  fetchData('news', done)
}
