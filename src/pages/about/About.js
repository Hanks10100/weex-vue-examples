Page('about', {
  data (globalData) {
    return {
      language: globalData.language || 'en',
      dict: globalData.dict,
      aboutApp: globalData.aboutApp
    }
  },
  onLoad (...args) {
    console.log(` => about page load (${JSON.stringify(args)})`)
    console.log(` => data of about page: (${JSON.stringify(this.aboutApp)})`)
    this.$on('setLanguage', language => {
      console.log(` => will change language to: ${language}`)
      this.language = language
      if (typeof getApp === 'function') {
        const app = getApp()
        app.language = language
      } else {
        console.log(' => no getApp api, try to call $setGlobalData instead.')
        this.$setGlobalData({ language })
      }
    })
  },
  onReady () {
    console.log(` => about page ready`)
  },
  onShow () {
    console.log(` => about page show`)
  }
})
