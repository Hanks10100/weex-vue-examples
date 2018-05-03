Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      examples: globalData.examples || [],
      dict: globalData.dict,
      showLoading: false,
      activeTab: 'component',
      activeGroup: 'div'
    }
  }
})
