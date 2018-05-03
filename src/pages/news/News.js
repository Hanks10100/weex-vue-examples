Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      dict: globalData.dict,
      news: globalData.news || [],
      lenssonIndex: 0,
      refreshNote: globalData.dict.REFRESH,
      refreshing: false,
      visibleCount: 6
    }
  }
})
