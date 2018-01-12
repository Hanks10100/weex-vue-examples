const stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')

export function createLink (name, params = {}) {
  const args = []
  for (const key in params) {
    if (typeof params[key] === 'string') {
      args.push(`${key}=${params[key]}`)
    }
  }
  if (WXEnvironment.platform === 'Web') {
    args.unshift(`page=${name}.web.js`)
    return `/?${args.join('&')}`
  }
  const base = getBaseURL()
  return `${base}${name}.weex.js` + (args.length ? `?${args.join('&')}` : '')
}

export function createURL (hash) {
  if (WXEnvironment.platform === 'Web') {
    return `http://dotwe.org/raw/htmlVue/${hash}`
  }
  const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
  return `${url}?_wx_tpl=${url}`
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
  const match = supportedLanguageRE.exec(language)
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
      locale.getLanguage(language => {
        const lang = parseLanguage(language)
        lang ? done(lang) : fail()
      })
    } catch (e) {
      fail(e)
    }
  }
}

export function getLanguage (done = () => {}) {
  getStorageLanguage(done, () => {
    getSystemLanguage(done, () => {
      done('en')
    })
  })
}

export function jumpTo (url) {
  const hash = {
    'en': '06f6a4f7a03ceffc93ec09ddaebb0a51',
    'zh': 'fa7d084ea1dc617e1c4e03ecd65263db'
  }
  const jump = language => {
    storage.setItem('CURRENT_DOCUMENT_URL', i18n(url, language))
    navigator.push({ url: createURL(i18n(hash, language)) })
  }
  getLanguage(lang => jump(lang), _ => jump('en'))
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
  const view = language => {
    storage.setItem('CURRENT_SOURCE_HASH', i18n(url, language))
    navigator.push({ url: createURL(i18n(hash, language)) })
  }
  getLanguage(lang => view(lang), _ => view('en'))
}

export function fetchData (name, done, fail) {
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
      if (res.ok && res.data && typeof done === 'function') {
        done(res.data)
      } else if (typeof fail === 'function') {
        fail(res)
      }
    })
  } catch (err) {
    if (typeof fail === 'function') {
      fail(err)
    }
  }
}

export function fetchDoodle (done, fail) {
  fetchData('doodle', done, fail)
}

const examplesKey = 'WEEX_PLAYGROUND_APP_EXAMPLES'
export function fetchExamples (done, fail) {
  fetchData('examples', done, fail)
}
export function saveExamples (result) {
  if (result && typeof result === 'object') {
    result.timestamp = Date.now()
    storage.setItem(examplesKey, JSON.stringify(result))
  }
}
export function readExamples (done = () => {}, fail = () => {}) {
  try {
    storage.getItem(examplesKey, event => {
      if (event.result === 'success') {
        const data = JSON.parse(event.data)
        if (data && Array.isArray(data.examples)) {
          done(data.examples)
        } else {
          fail(event)
        }
      } else {
        fail(event)
      }
    })
  } catch (e) {
    fail(e)
  }
}

export function fetchNews (done, fail) {
  fetchData('news', done, fail)
}
