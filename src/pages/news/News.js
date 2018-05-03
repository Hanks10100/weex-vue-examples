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
  },
  onLoad () {
    this.$on('updateNews', (shouldFeedback) => {
      fetchNews(res => {
        if (Array.isArray(res.news)) {
          this.news = res.news
          this.$setGlobalData({ news: this.news })
          shouldFeedback && this.$emit('newsUpdated', res.news)
        }
      })
    })
  }
})
