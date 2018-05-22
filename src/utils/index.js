const _requireModule = typeof requireModule === 'function'
  ? requireModule
  : (typeof weex !== 'undefined' && typeof weex.requireModule === 'function')
    ? weex.requireModule
    : (name) => console.log(`Can't require "${name}" module.`)

const network = _requireModule('network')
const navigator = _requireModule('navigator')

const supportedLanguageRE = /(en|zh)\_?\w*/i
export function parseLanguage (language) {
  const match = supportedLanguageRE.exec(language + '')
  if (match && match[1]) {
    return match[1]
  }
  return ''
}

export function fetchData (name, done = () => {}, fail = () => {}) {
  try {
    network.request({
      url: 'http://dotwe.org/query/weex-playground-app',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json',
      body: `name=${name}`
    }, res => {
      if (res.ok && res.data && res.data[name]) {
        done(res.data[name])
      } else {
        fail(res)
      }
    }, error => fail(error))
  } catch (err) {
    fail(err)
  }
}

export const fetchExamples = (...args) => fetchData('examples', ...args)
export const fetchGuide = (...args) => fetchData('guide', ...args)
export const fetchAbout = (...args) => fetchData('about', ...args)
export const fetchNews = (...args) => fetchData('news', ...args)
