Page('examples', {
  data (globalData) {
    return {
      language: globalData.language || 'en'
    }
  },
  onLoad (...args) {
    console.log(` => example page load (${JSON.stringify(args)})`)
  },
  onReady () {
    console.log(` => example page ready`)
  },
  onShow () {
    console.log(` => example page show`)
  },
  onHide () {
    console.log(` => example page hide`)
  },
  onUnload () {
    console.log(` => example page unload`)
  }
})
