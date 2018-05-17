Page('about', {
  data (globalData) {
    return {
      language: globalData.language || 'en',
      aboutApp: globalData.aboutApp
    }
  },
  onLoad (...args) {
    console.log(` => about page load (${JSON.stringify(args)})`)
  },
  onReady (...args) {
    console.log(` => about page ready (${JSON.stringify(args)})`)
  },
  onShow (...args) {
    console.log(` => about page show (${JSON.stringify(args)})`)
  }
})
