import { languageKey } from '../../utils'

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
  onLoad () {
    this.$on('setLanguage', language => {
      this.language = language
      this.followSystemLanguage = false
      storage.setItem(languageKey, language)
      this.$setGlobalData({
        language,
        followSystemLanguage: false
      })
    })
    this.$on('followSystemLanguage', () => {
      this.followSystemLanguage = true
      storage.removeItem(languageKey)
      if (this.language !== this.systemLanguage) {
        this.language = this.systemLanguage
        this.$setGlobalData({
          language: this.language,
          followSystemLanguage: true
        })
      }
    })
  }
})
