Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      systemLanguage: globalData.systemLanguage || 'en',
      followSystemLanguage: globalData.followSystemLanguage,
      dict: globalData.dict,
      aboutApp: globalData.aboutApp
    }
  },
  onReady () {
    this.$on('setLanguage', language => {
      this.language = language
      this.$setGlobalData({ language })
    })
    this.$on('followSystemLanguage', () => {
      this.followSystemLanguage = true
      if (this.language !== this.systemLanguage) {
        this.language = this.systemLanguage
        this.$setGlobalData({
          language: this.language
        })
      }
    })
  }
})
