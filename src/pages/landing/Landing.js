Page({
  data (globalData) {
    return {
      language: globalData.language || 'en',
      menus: [[
        { name: 'guide', title: { en: 'Guide', zh: '教程' } },
        { name: 'examples', title: { en: 'Examples', zh: '实例' } }
      ], [
        { name: 'news', title: { en: 'News', zh: '资讯' } },
        { name: 'about', title: { en: 'About', zh: '关于' } }
      ]]
    }
  }
})
