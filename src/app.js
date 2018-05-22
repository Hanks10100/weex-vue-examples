import { fetchExamples, fetchGuide, fetchAbout, fetchNews } from './utils/index'
import { guideLessons, aboutApp } from './utils/mock'
const modal = requireModule('modal')

App({
  globalData: {
    language: 'zh',
    dict: {
      SCAN_QR_CODE: { en: 'Scan QR Code', zh: '扫描二维码' },
      LANGUAGE: { en: 'Language', zh: '语言' },
      LANGUAGE_TYPE: { en: 'English', zh: '简体中文' },
      FOLLOW_SYSTEM: { en: 'Follow System', zh: '跟随系统' },
      READ_MORE: { en: 'read more', zh: '查看更多' },
      REFRESH: { en: 'Release to refresh', zh: '释放刷新' },
      REFRESHING: { en: 'Fetching ...', zh: '正在加载……' },
      UPDATED: { en: 'Updated', zh: '已更新' },
      LOAD_MERE: { en: 'Load more', zh: '加载更多' },
      NO_MORE_NEWS: { en: 'No more news', zh: '到底了' }
    },
    examples: [],
    guideLessons,
    aboutApp,
    news: []
  },
  onLaunch (...args) {
    console.log(` => app launch (${JSON.stringify(args)})`)
    modal.toast({ message: 'App Launched!' })

    fetchExamples(result => {
      console.log(` => fetch examples: (${JSON.stringify(result)})`)
      this.examples = result
    }, error => {
      console.log(` => failed to fetch examples: (${JSON.stringify(error)})`)
    })
    fetchAbout(result => this.aboutApp = result)
    fetchGuide(result => this.guideLessons = result)
    // fetchNews(result => this.news = result)
    fetchNews(result => {
      console.log(` => fetch news: (${JSON.stringify(result)})`)
      this.news = result
    }, error => {
      console.log(` => failed to fetch news: (${JSON.stringify(error)})`)
    })
  },
  onShow () {
    console.log(` => app show`)
  },
  onHide () {
    console.log(' => app hide')
  }
})
