<template>
  <list class="list">
    <template v-for="(group, g) in catalogues">
      <header :key="group.title">
        <div class="group-header center">
          <text class="group-title">{{group.title}}</text>
        </div>
      </header>
      <template v-for="(content, c) in group.contents">
        <cell class="content-cell" :key="content.title">
          <text class="content-title">{{content.title}}</text>
        </cell>
        <cell :class="['article-cell', `article-cell-${i+1}`]" v-for="(article, i) in content.articles" :key="i">
          <div :class="['article', `article-${i+1}`]" v-if="article.link" @click="jumpTo(article.link)">
            <text class="article-title">{{article.title}}</text>
          </div>
          <a :class="['article', `article-${i+1}`]" v-else-if="article.hash" :href="article.hash | url">
            <text class="article-title">{{article.title}}</text>
          </a>
        </cell>
        <cell class="group-gap" :key="c"></cell>
      </template>
    </template>
  </list>
</template>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  function createURL (hash) {
    if (WXEnvironment.platform === 'Web') {
      return `http://dotwe.org/raw/htmlVue/${hash}`
    }
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    filters: {
      url: createURL
    },
    data () {
      return {
        language: 'en',
        catalogues: [{
          title: 'Guide',
          contents: [{
            title: 'Overview',
            articles: [{
              title: 'Get Started',
              link: 'http://weex-project.io/guide/'
            }, {
              title: 'Integrate to Your App',
              link: 'http://weex-project.io/guide/integrate-to-your-app.html'
            }]
          }, {
            title: 'Develop',
            articles: [{
              title: 'Setup Develop Environment',
              link: 'http://weex-project.io/guide/set-up-env.html'
            }, {
              title: 'Integrate Devtool to Android',
              link: 'http://weex-project.io/guide/integrate-devtool-to-android.html'
            }, {
              title: 'Integrate Devtool to iOS',
              link: 'http://weex-project.io/guide/integrate-devtool-to-ios.html'
            }]
          }]
        }, {
          title: 'References',
          contents: [{
            title: 'APIs',
            articles: [{
              title: 'Android APIs',
              link: 'http://weex-project.io/references/android-apis.html'
            }, {
              title: 'iOS APIs',
              link: 'http://weex-project.io/references/ios-apis.html'
            }]
          }, {
            title: 'Build-in Components',
            articles: [{
              title: '<div>',
              link: 'http://weex-project.io/references/components/div.html'
            }, {
              title: '<text>',
              link: 'http://weex-project.io/references/components/text.html'
            }, {
              title: '<image>',
              link: 'http://weex-project.io/references/components/image.html'
            }]
          }, {
            title: 'Build-in Modules',
            articles: [{
              title: 'modal',
              link: 'http://weex-project.io/references/modules/modal.html'
            }, {
              title: 'dom',
              link: 'http://weex-project.io/references/modules/dom.html'
            }, {
              title: 'stream',
              link: 'http://weex-project.io/references/modules/stream.html'
            }]
          }]
        }, {
          title: 'WiKi',
          contents: [{
            title: 'Design',
            articles: [{
              title: 'How it works',
              link: 'http://weex-project.io/wiki/'
            }]
          }, {
            title: 'Style',
            articles: [{
              title: 'Common Styles',
              link: 'http://weex-project.io/wiki/common-styles.html'
            }, {
              title: 'Text Styles',
              link: 'http://weex-project.io/wiki/text-styles.html'
            }]
          }, {
            title: 'Event',
            articles: [{
              title: 'Common Events',
              link: 'http://weex-project.io/wiki/common-events.html'
            }, {
              title: 'Event Bubble',
              link: 'http://weex-project.io/wiki/event-bubble.html'
            }]
          }]
        }, {
          title: 'Other Resources',
          contents: [{
            title: 'Learn',
            articles: [{
              title: 'Learn Vue.js',
              hash: '4f0456987961d45bb5cc0b3f14f92c02'
            }, {
              title: 'Learn Javascript',
              hash: 'e7ea10acfc29f8a08fd75f9fa80f9703'
            }, {
              title: 'Learn CSS',
              hash: '1190538862e882f9bfa96bf3787aa879'
            }, ]
          }]
        }]
      }
    },
    methods: {
      i18n (text) {
        if (typeof text === 'string') {
          return text
        }
        if (Object.prototype.toString.call(text) === '[object Object]') {
          const lang = this.language || 'en'
          return text[lang]
        }
      },
      jumpTo (url) {
        const hash = {
          'en': '06f6a4f7a03ceffc93ec09ddaebb0a51',
          'zh': 'fa7d084ea1dc617e1c4e03ecd65263db'
        }
        storage.setItem('CURRENT_DOCUMENT_URL', this.i18n(url))
        navigator.push({ url: createURL(this.i18n(hash)) })
      }
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F8F8F8;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .group-header {
    background-color: #00B4FF;
    height: 100px;
  }
  .group-title {
    font-size: 50px;
    text-align: center;
    color: #FFF;
  }
  .group-gap {
    height: 60px;
  }
  .content-title {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    font-size: 34px;
    color: #989898;
    background-color: #EEE;
    /* border-top-width: 1px; */
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #E6E6E6;
  }
  .article {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 60px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E6E6E6;
    background-color: #FFF;
  }
  .article-title {
    font-size: 42px;
    color: #606060;
  }
</style>
