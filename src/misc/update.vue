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
      title: { en: 'Weex Official Website', zh: 'Weex 官方网站' },
      link: {
        en: 'http://weex-project.io/',
        zh: 'http://weex-project.io/cn/'
      }
    }, {
      title: { en: 'Apache Software Foundation', zh: 'Apache 软件基金会' },
      link: 'http://www.apache.org/'
    }, {
      title: { en: 'Who is using Weex', zh: '谁在使用 Weex' },
      link: {
        en: 'http://weex-project.io/who-is-using-weex.html',
        zh: 'http://weex-project.io/cn/who-is-using-weex.html'
      }
    }, {
      title: { en: 'Contribution', zh: '参与贡献' },
      link: {
        en: 'http://weex-project.io/guide/contributing.html',
        zh: 'http://weex-project.io/cn/guide/contributing.html'
      }
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
      poster: 'https://mmbiz.qpic.cn/mmbiz_jpg/33P2FdAnjuibdbD0UvQhic1XXu4YibPcqynFpG1V1x4O8mzn5pXxTg2QzVjZyWMnIyusTKwvoBvhWtkGgAjdThDUg/640',
      title: 'WeexConf 2018干货系列 | Weex技术演进',
      link: 'https://mp.weixin.qq.com/s?__biz=MzAxNDEwNjk5OQ==&mid=2650400957&idx=1&sn=918414aefacb5d80111fbf3d269bc17b',
      time: { zh: '2018年1月25日 9:50', en: '2018/01/25 9:20' },
    }, {
      type: 'article',
      poster: 'https://mmbiz.qpic.cn/mmbiz_jpg/33P2FdAnju9YFyWBwuoqan1SNEPFTsjHrsSNMRI9lMnl82SqGDohAn6vK2uQ363I3rB1yicAZYNXsFzfTKQM0fw/640',
      title: 'WeexConf 2018干货系列 | Weex + UI',
      link: 'https://mp.weixin.qq.com/s?__biz=MzAxNDEwNjk5OQ==&mid=2650400953&idx=1&sn=c36e11e0ad44d2ca6ea459a98a79bfed',
      time: { zh: '2018年1月24日 10:20', en: '2018/01/24 10:20' },
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1u0M5odfJ8KJjy0FeXXXKEXXa-1208-805.jpg',
      title: '参加 WeexConf 2018 是一种什么体验?',
      link: 'https://mp.weixin.qq.com/s?__biz=MzAxNDEwNjk5OQ==&mid=2650400922&idx=1&sn=852cd77194df28b77d1aa9360b36ec8d',
      time: { zh: '2018年1月22日 9:30', en: '2018/01/22 9:30' },
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1iMVtlZLJ8KJjy0FnXXcFDpXa-1293-496.png',
      title: 'Weex Conf 2018 等你来',
      summary: '2018年1月19日，分享 Weex 的蜕变之旅',
      link: 'http://weex-project.io/weexconf2018/',
      time: { zh: '2018年1月5日 17:30', en: '2018/01/05 17:30' },
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png',
      title: 'Getting Started With Weex',
      link: 'http://weex-project.io/guide/',
      time: { zh: '2018年1月5日 17:30', en: '2018/01/01 0:0' },
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
      time: { zh: '2017年1月12日 9:30', en: '2017/01/12 9:30' },
      related: [{
        title: '【资料合集】Weex Conf 回顾集锦',
        link: 'https://yq.aliyun.com/articles/68818'
      }]
    }, {
      type: 'article',
      poster: 'https://yqfile.alicdn.com/eed85e0086e30d1b49d006ef8f104f609dc73f1b.png',
      title: 'Apache再次接受阿里开源产品捐赠：移动开发框架Weex进入孵化',
      link: 'https://yq.aliyun.com/articles/66576',
      time: { zh: '2016年12月15日 12:01', en: '2016/12/15 12:01' }
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1xA4Tl8fH8KJjy1XbXXbLdXXa-1080-726.jpg',
      title: 'Weex meets Vue',
      summary: '记一次 Weex 前端团队的讨论',
      link: 'https://github.com/weexteam/article/issues/77',
      time: { zh: '2016年9月9日 17:25', en: '2016/09/09 17:25' }
    }, {
      type: 'article',
      poster: 'https://gw.alicdn.com/tfs/TB1AqLil2DH8KJjy1XcXXcpdXXa-1440-809.png',
      title: 'Weex 在 GitHub 中开源！',
      link: 'https://weibo.com/5897827106/DCFtruTbc',
      time: { zh: '2016年6月30日 20:20', en: '2016/06/30 20:20' }
    }
  ]

  function encodeJSON (json) {
    const arr = []
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
          to: (new Date(2018, 0, 7, 3, 24, 0)).getTime(),
          // src: '6d342078db4a4544ccc6affd272132bb',
          // next: '1d4b9b89b3e2eacd9b61e9cffb59efed',
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
