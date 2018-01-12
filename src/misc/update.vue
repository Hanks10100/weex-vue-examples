<template>
  <scroller class="wrapper">
    <div class="content">
      <text @click="storeDoodle">Store Doodle</text>
    </div>
    <div class="content">
      <text @click="storeExamples">Store Examples</text>
    </div>
    <div class="content">
      <text @click="storeGuide">Store Guide</text>
    </div>
    <div class="content">
      <text @click="storeAbout">Store About</text>
    </div>
    <div class="content">
      <text @click="storeNews">Store News</text>
    </div>
    <div class="content">
      <text>{{output}}</text>
    </div>
  </scroller>
</template>

<style scoped>
  .content {
    margin: 20px;
  }
</style>


<script>
  import xhr from 'xhr'
  import getExamples from '../../examples'
  import guide from '../shared/sliders'
  const examples = getExamples({ scope: 'mobile', filterTODO: true })

  const about = [
    {
      title: { en: 'Apache Software Foundation', zh: 'Apache 软件基金会' },
      link: 'http://www.apache.org/'
    }, {
      title: { en: 'Who is using Weex', zh: '谁在使用 Weex' },
      link: {
        en: 'http://weex-project.io/who-is-using-weex.html',
        zh: 'http://weex-project.io/cn/who-is-using-weex.html'
      },
    }, {
      title: { en: 'Contribution', zh: '参与贡献' },
      link: {
        en: 'http://weex-project.io/contributing.html',
        zh: 'http://weex-project.io/cn/contributing.html'
      },
    }, {
      title: { en: 'Resources', zh: '资源' },
      link: {
        en: 'http://weex-project.io/resources.html',
        zh: 'http://weex-project.io/cn/resources.html'
      },
    }, {
      title: { en: 'Release Note', zh: '版本变更' },
      link: {
        en: 'http://weex-project.io/releasenote.html',
        zh: 'http://weex-project.io/cn/releasenote.html'
      },
    }, {
      title: { en: 'FAQ', zh: '常见问题' },
      link: {
        en: 'http://weex-project.io/faq.html',
        zh: 'http://weex-project.io/cn/faq.html'
      }
    }
  ]

  const news = [
    {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1iMVtlZLJ8KJjy0FnXXcFDpXa-1293-496.png',
      title: 'Weex Conf 2018 等你来',
      summary: '2018年1月19日，分享 Weex 的蜕变之旅',
      link: 'http://weex-project.io/weexconf2018/',
      time: '2018年1月5日 17:30',
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png',
      title: 'Getting Started With Weex',
      link: 'http://weex-project.io/guide/',
      time: '2018年1月1日 0:0',
      related: [{
        poster: 'https://gw.alicdn.com/tfs/TB1qOlHdgMPMeJjy1XbXXcwxVXa-328-328.png',
        title: '快速上手 Weex',
        link: 'http://weex-project.io/cn/guide/index.html'
      }]
    }, {
      type: 'article',
      poster: 'https://img.alicdn.com/tps/TB1xS6JOVXXXXcnXXXXXXXXXXXX-2000-500.jpg',
      title: 'Weex Conf 2017',
      link: 'https://yq.aliyun.com/activity/145',
      time: '2017年1月12日 9:30',
      related: [{
        title: '【资料合集】Weex Conf 回顾集锦',
        link: 'https://yq.aliyun.com/articles/68818'
      }]
    }, {
      type: 'article',
      poster: 'https://yqfile.alicdn.com/eed85e0086e30d1b49d006ef8f104f609dc73f1b.png',
      title: 'Apache再次接受阿里开源产品捐赠：移动开发框架Weex进入孵化',
      link: 'https://yq.aliyun.com/articles/66576',
      time: '2016年12月15日 12:01'
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1xA4Tl8fH8KJjy1XbXXbLdXXa-1080-726.jpg',
      title: 'Weex meets Vue',
      summary: '记一次 Weex 前端团队的讨论',
      link: 'https://github.com/weexteam/article/issues/77',
      time: '2016年9月9日 17:25'
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1AqLil2DH8KJjy1XcXXcpdXXa-1440-809.png',
      title: 'Weex 在 GitHub 中开源！',
      link: 'https://weibo.com/5897827106/DCFtruTbc',
      time: '2016年6月30日 20:20'
    }
  ]

  function encodeJSON (json) {
    const arr = []
    json.token = '4fe14953b4af234a0876c5c1247f6250'
    Object.keys(json).forEach((key) => {
      if (typeof json[key] === 'object') {
        arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(json[key])));
      } else {
        arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(json[key]));
      }
    })
    return arr.join('&')
  }

  function store (params, done) {
    xhr({
      uri: `http://dotwe.org/store/weex-playground-app`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodeJSON(params)
    }, (error, response, body) => {
      if (body) {
        done(body)
      }
    })
  }

  export default {
    el: '#root',
    data () {
      return {
        output: ''
      }
    },
    methods: {
      storeDoodle () {
        const doodle = {
          from: (new Date()).getTime(),
          to: (new Date(2018, 1, 7, 3, 24, 0)).getTime(),
          src: 'b73e356ee63f8613de8ba30a378fcad9',
          next: '1d4b9b89b3e2eacd9b61e9cffb59efed',
          // duration: 10000
        }
        store({ name: 'doodle', doodle }, res => {
          console.log(res)
        })
      },
      storeExamples () {
        console.log(examples)
        store({ name: 'examples', examples }, res => {
          console.log(res)
        })
      },
      storeGuide () {
        console.log(guide)
        store({ name: 'guide', guide }, res => {
          console.log(res)
        })
      },
      storeAbout () {
        console.log(about)
        store({ name: 'about', about }, res => {
          console.log(res)
        })
      },
      storeNews () {
        store({ name: 'news', news }, res => {
          console.log(res)
        })
      }
    }
  }
</script>
