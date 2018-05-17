Page('news', {
  data (globalData) {
    return {
      language: globalData.language || 'en'
    }
  },
  onLoad (...args) {
    console.log(` => news page load (${JSON.stringify(args)})`)
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
