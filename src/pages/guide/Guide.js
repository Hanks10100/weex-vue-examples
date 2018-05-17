Page('guide', {
  data (globalData) {
    return {
      language: globalData.language || 'en'
    }
  },
  onLoad (...args) {
    console.log(` => guide page load (${JSON.stringify(args)})`)
  },
  onReady () {
    console.log(` => guide page ready`)
  },
  onShow () {
    console.log(` => guide page show`)
  },
  onHide () {
    console.log(` => guide page hide`)
  },
  onUnload () {
    console.log(` => guide page unload`)
  }
})
