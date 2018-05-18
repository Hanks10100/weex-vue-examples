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
      this.language = language
      this.$setGlobalData({ language })
    })
  },
  onReady () {
    console.log(` => about page ready`)
  },
  onShow () {
    console.log(` => about page show`)
  }
})
