Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      guideLessons: globalData.guideLessons || [],
      lenssonIndex: 0
    }
  }
})
