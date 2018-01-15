const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
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
    const lang = (this && this.language) || language || 'en'
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

export function setLanguage (language) {
  const lang = parseLanguage(language)
  if (lang) {
    storage.setItem('WEEX_PLAYGROUND_LANGUAGE', lang)
  }
}

export function clearStorageLanguage () {
  storage.removeItem('WEEX_PLAYGROUND_LANGUAGE')
}

export function getStorageLanguage (done, fail = () => {}) {
  if (!typeof done === 'function') {
    return
  }
  try {
    storage.getItem('WEEX_PLAYGROUND_LANGUAGE', event => {
      if (event.result === 'success') {
        const lang = parseLanguage(event.data)
        lang ? done(lang) : fail()
      } else {
        fail(event)
      }
    })
  } catch (err) {
    fail(err)
  }
}

export function getSystemLanguage (done, fail = () => {}) {
  if (!typeof done === 'function') {
    return
  }
  if (WXEnvironment.platform.toLowerCase() === 'web') {
    const lang = parseLanguage(window.navigator.language)
    lang ? done(lang) : fail()
  } else {
    try {
      const locale = weex.requireModule('locale') || weex.requireModule('local')
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

const languageRE = /.+[\?\&]{1}language=([\d\w]+)[\?\&]?.*/i
export function getLanguage (done = () => {}) {
  const match = languageRE.exec(weex.config.bundleUrl || '')
  const lang = parseLanguage(match && match[1])
  if (lang) {
    done(lang)
  } else {
    getStorageLanguage(done, () => {
      getSystemLanguage(done, () => {
        done('en')
      })
    })
  }
}

export function jumpTo (url, title) {
  getLanguage(language => {
    storage.setItem('CURRENT_DOCUMENT_URL', i18n(url, language))
    navigator.push({
      url: createURL(
        'bf0305c14b511b24a4e616f53926432b',
        { language, title: i18n(title, language) }
      )
    })
  })
}

export function viewSource (hash) {
  getLanguage(language => {
    navigator.push({
      url: createURL(
        'f6ce29faf686eabc38b410bf4828fa5a',
        { hash, language }
      )
    })
  })
}

export function setTitleBar (options, language = 'en') {
  if (Object.prototype.toString.apply(options) !== '[object Object]') {
    return
  }
  const titleBar = weex.requireModule('titleBar')
  if (options.color || options.backgroundColor) {
    try {
      titleBar.setStyle({
        foregroundColor: options.color || '#FFFFFF',
        backgroundColor: options.backgroundColor || '#00B4FF'
      })
    } catch (e) {}
  }
  const title = i18n(options.title, language)
  if (title) {
    try {
      titleBar.setTitle(title)
    } catch (e) {}
  }
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
export function saveData (name, result) {
  const key = storageKeys[name]
  if (!key) return
  if (result && typeof result === 'object') {
    result.timestamp = Date.now()
    storage.setItem(key, JSON.stringify(result))
  }
}
export function readData (name, done = () => {}, fail = () => {}) {
  const key = storageKeys[name]
  if (!key) return fail()
  try {
    storage.getItem(key, event => {
      if (event.result === 'success') {
        const result = JSON.parse(event.data)
        if (result && Array.isArray(result[name])) {
          return done(result[name])
        }
      }
      fail(event)
    })
  } catch (e) {
    fail(e)
  }
}

export const fetchExamples = (...args) => fetchData('examples', ...args)
export const saveExamples = (...args) => saveData('examples', ...args)
export const readExamples = (...args) => readData('examples', ...args)

export const fetchGuide = (...args) => fetchData('guide', ...args)
export const saveGuide = (...args) => saveData('guide', ...args)
export const readGuide = (...args) => readData('guide', ...args)

export const fetchAbout = (...args) => fetchData('about', ...args)
export const saveAbout = (...args) => saveData('about', ...args)
export const readAbout = (...args) => readData('about', ...args)

export const fetchDoodle = (...args) => fetchData('doodle', ...args)
export const fetchNews = (...args) => fetchData('news', ...args)
