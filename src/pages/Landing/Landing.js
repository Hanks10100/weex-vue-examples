Page('landing', {
  data (globalData) {
    return {
      language: globalData.language || 'en',
      dict: globalData.dict,
      menus: [[
        { name: 'guide', title: { en: 'Guide', zh: '教程' } },
        { name: 'examples', title: { en: 'Examples', zh: '实例' } }
      ], [
        { name: 'news', title: { en: 'News', zh: '资讯' } },
        { name: 'about', title: { en: 'About', zh: '关于' } }
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
