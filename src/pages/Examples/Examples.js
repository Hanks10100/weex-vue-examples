Page('examples', {
  data (globalData) {
    return {
      language: globalData.language || 'en',
      examples: globalData.examples || [],
      dict: globalData.dict,
      activeTab: 'component',
      activeGroup: 'div'
    }
  },
  onLoad (...args) {
    console.log(` => examples page load (${JSON.stringify(args)})`)
    console.log(` => examples in onLoad: (${JSON.stringify(this.examples)})`)
  },
  onReady () {
    console.log(` => examples page ready`)
  },
  onShow () {
    console.log(` => examples page show`)
  },
  onHide () {
    console.log(` => examples page hide`)
  },
  onUnload () {
    console.log(` => examples page unload`)
  }
})
