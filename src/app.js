import * as utils from './utils'
import { guideLessons, aboutApp } from './utils/mock'

App({
  globalData: {
    language: 'en',
    systemLanguage: 'en',
    followSystemLanguage: true,
    dict: {
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
    news: [],
    guideLessons,
    aboutApp
  },
  onLaunch () {
    utils.fetchExamples(examples => this.examples = examples)
    utils.fetchGuide(lessons => this.guideLessons = lessons)
    utils.fetchAbout(about => this.aboutApp = about)
    utils.fetchNews(news => this.news = news)
  },
  onShow () {
    const storage = requireModule('storage')
    utils.getSystemLanguage(lang => this.systemLanguage = lang)
    storage.getItem(utils.languageKey, event => {
      if (event.result === 'success') {
        this.followSystemLanguage = false
        this.language = event.data
      } else {
        this.followSystemLanguage = true
        this.language = this.systemLanguage
      }
    })
  }
})
