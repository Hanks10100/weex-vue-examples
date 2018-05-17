App({
  globalData: {
    language: 'en',
    dict: {
      LANGUAGE: { en: 'Language', zh: '语言' }
    },
    examples: ['A', 'B', 'C'],
    aboutApp: 'app'
  },
  onLaunch (...args) {
    console.log(` => app launch (${JSON.stringify(args)})`)
  },
  onShow (...args) {
    console.log(` => app show (${JSON.stringify(args)})`)
  },
  onHide () {
    console.log(' => app hide')
  }
})
