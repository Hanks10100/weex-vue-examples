import { fetchNews } from '../../utils/index'

Page('news', {
  data (globalData) {
    return {
      language: globalData.language || 'en',
      dict: globalData.dict,
      news: globalData.news || [],
      refreshNote: globalData.dict.REFRESH,
      refreshing: false,
      visibleCount: 6
    }
  },
  onLoad (...args) {
    console.log(` => news page load (${JSON.stringify(args)})`)
    console.log(` => news in onLoad: (${JSON.stringify(this.news)}).`)
    this.$on('updateNews', (shouldFeedback) => {
      fetchNews(res => {
        if (Array.isArray(res.news)) {
          this.news = res.news
          this.$setGlobalData({ news: this.news })
          shouldFeedback && this.$emit('newsUpdated', res.news)
        }
      })
    })
  },
  onReady () {
    console.log(` => news page ready`)
  },
  onShow () {
    console.log(` => news page show`)
  },
  onHide () {
    console.log(` => news page hide`)
  },
  onUnload () {
    console.log(` => news page unload`)
  }
})
