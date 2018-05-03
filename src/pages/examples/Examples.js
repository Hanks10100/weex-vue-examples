import { fetchExamples } from '../../utils'

Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      examples: globalData.examples || [],
      dict: globalData.dict,
      activeTab: 'component',
      activeGroup: 'div'
    }
  },
  onLoad () {
    this.$on('updateExamples', () => {
      fetchExamples(examples => {
        this.examples = examples
        this.$setGlobalData({ examples })
      })
    })
  }
})
