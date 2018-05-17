const requireModule = ((context) => {
  if (context && typeof context.requireModule === 'function') {
    return context.requireModule
  }
  if (typeof weex === 'object' && weex
    && typeof weex.requireModule === 'function') {
    return weex.requireModule
  }
  return () => {}
})(this)

const stream = requireModule('stream')
const storage = requireModule('storage')
const navigator = requireModule('navigator')

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

export function createLink (name, params = {}) {
  const args = []
  for (const key in params) {
    if (typeof params[key] === 'string') {
      args.push(`${encoder(key)}=${encoder(params[key])}`)
    }
  }
  if (WXEnvironment.platform === 'Web') {
    args.unshift(`page=${name}.web.js`)
    return `/?${args.join('&')}`
  }
  const base = getBaseURL()
  return `${base}${name}.weex.js` + (args.length ? `?${args.join('&')}` : '')
}

export function createURL (hash, params) {
  if (WXEnvironment.platform === 'Web') {
    return `http://dotwe.org/raw/htmlVue/${hash}`
  }
  const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
  const paramString = encodeParams(params)
  if (WXEnvironment.appName === 'TB') {
    return `${url}?_wx_tpl=${url}&${paramString}`
  }
  if (WXEnvironment.appName === 'WXSample') {
    return `${url}?${paramString}`
  }
  return `${url}?wx_weex=true&${paramString}`
}

function getBaseURL () {
  var bundleUrl = weex.config.bundleUrl
  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
  if (isAndroidAssets) {
    return 'file://assets/';
  }
  else if (isiOSAssets) {
    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
    return bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
  }
  return ''
}

export function i18n (text, language) {
  if (typeof text === 'string') {
    return text
  }
  if (Object.prototype.toString.call(text) === '[object Object]') {
    const lang = language || (this && this.language) || 'en'
    return text[lang]
  }
}

const supportedLanguageRE = /(en|zh)\_?\w*/i
export function parseLanguage (language) {
  const match = supportedLanguageRE.exec(language + '')
  if (match && match[1]) {
    return match[1]
  }
  return ''
}

export const languageKey = 'WEEX_PLAYGROUND_LANGUAGE'

export function getSystemLanguage (done, fail = () => {}) {
  if (!typeof done === 'function') {
    return
  }
  if (WXEnvironment.platform.toLowerCase() === 'web') {
    const lang = parseLanguage(window.navigator.language)
    lang ? done(lang) : fail()
  } else {
    try {
      const locale = requireModule('locale') || requireModule('local')
      let useSync = false
      const resSync = locale.getLanguage(language => {
        const lang = parseLanguage(language)
        if (lang) {
          useSync || done(lang)
        } else {
          fail()
        }
      })
      const langSync = parseLanguage(resSync)
      if (langSync) {
        useSync = true
        done(langSync)
      } else {
        fail()
      }
    } catch (e) {
      fail(e)
    }
  }
}

export function jumpTo (url, title, lang) {
  const language = lang || (this && this.language) || 'en'
  storage.setItem('CURRENT_DOCUMENT_URL', i18n(url, language))
  navigator.push({
    url: createURL(
      'bf0305c14b511b24a4e616f53926432b',
      { language, title: i18n(title, language) }
    )
  })
}

export function viewSource (hash, lang) {
  const language = lang || (this && this.language) || 'en'
  navigator.push({
    url: createURL(
      'f6ce29faf686eabc38b410bf4828fa5a',
      { hash, language }
    )
  })
}

const storageKeys = {
  doodle: 'WEEX_PLAYGROUND_APP_DOODLE',
  guide: 'WEEX_PLAYGROUND_APP_GUIDE',
  examples: 'WEEX_PLAYGROUND_APP_EXAMPLES',
  news: 'WEEX_PLAYGROUND_APP_NEWS',
  about: 'WEEX_PLAYGROUND_APP_ABOUT',
}
export function fetchData (name, done = () => {}, fail = () => {}) {
  try {
    stream.fetch({
      url: 'http://dotwe.org/query/weex-playground-app',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      type: 'json',
      body: `name=${name}`
    }, res => {
      if (res.ok && res.data && res.data.success) {
        done(res.data)
      } else {
        fail(res)
      }
    })
  } catch (err) {
    fail(err)
  }
}

export const fetchExamples = (...args) => fetchData('examples', ...args)
export const fetchGuide = (...args) => fetchData('guide', ...args)
export const fetchAbout = (...args) => fetchData('about', ...args)
export const fetchDoodle = (...args) => fetchData('doodle', ...args)
export const fetchNews = (...args) => fetchData('news', ...args)
