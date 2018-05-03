Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      followSystemLanguage: !!globalData.followSystemLanguage,
      dict: globalData.dict,
      aboutApp: globalData.aboutApp
    }
  }
})
