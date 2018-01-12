import * as utils from './utils'

const storage = weex.requireModule('storage')

export default {
  filters: {
    i18n: utils.i18n,
    url: utils.createURL,
    link: utils.createLink,
  },
  methods: {
    createLink: utils.createLink,
    createURL: utils.createURL,
    i18n: utils.i18n,
    getLanguage: utils.getLanguage,
    setLanguage: utils.setLanguage,
    fetchData: utils.fetchData,
    saveData: utils.saveData,
    readData: utils.readData,
    jumpTo: utils.jumpTo
  },
  created () {
    // get and set language
    utils.getLanguage(language => {
      this.language = language
    })

    // listen to the language change event
    const channel = new BroadcastChannel('language')
    channel.onmessage = event => {
      if (event.data && event.data.language) {
        this.language = event.data.language
      }
    }
  },
  beforeDestroy () {
    storage.removeItem('CURRENT_DOCUMENT_URL')
    storage.removeItem('CURRENT_SOURCE_HASH')
  }
}
