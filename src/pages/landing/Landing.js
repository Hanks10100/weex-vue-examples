Page('landing', {
  data (globalData) {
    return {
      language: globalData.language || 'en',
      pageKeys: [],
      menus: [[
        { name: 'guide', title: 'Guide' },
        { name: 'examples', title: 'Examples' }
      ], [
        { name: 'news', title: 'News' },
        { name: 'about', title: 'About' }
      ]]
    }
  },
  onLoad (...args) {
    console.log(` => landing page load (${JSON.stringify(args)})`)
  },
  onReady (...args) {
    console.log(` => landing page ready (${JSON.stringify(args)})`)
  },
  onShow (...args) {
    console.log(` => landing page show (${JSON.stringify(args)})`)
  },
  onHide () {
    console.log(' => landing page hide')
  },
  onUnload () {
    console.log(' => landing page unload')
  }
})
