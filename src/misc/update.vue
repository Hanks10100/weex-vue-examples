<template>
  <scroller class="wrapper">
    <div class="content">
      <text @click="storeExamples">Store Examples</text>
    </div>
    <div class="content">
      <text @click="storeDoodle">Store Doodle</text>
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
  const examples = getExamples({ scope: 'mobile', filterTODO: false })

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
      uri: `http://192.168.0.103:5000/store/weex-playground-app`,
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
        const doodle = 'eeox'
        store({ name: 'doodle', doodle }, res => {
          console.log(res)
        })
      },
      storeExamples () {
        store({ name: 'examples', examples }, res => {
          console.log(res)
        })
      },
      storeNews () {
        const news = [{
          type: 'article',
          poster: 'https://gw.alicdn.com/tfs/TB1iMVtlZLJ8KJjy0FnXXcFDpXa-1293-496.png',
          title: 'Weex Conf 2018 等你来',
          // summary: '2018年1月19日，分享 Weex 的蜕变之旅',
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
        }]
        store({ name: 'news', news }, res => {
          console.log(res)
        })
      }
    }
  }
</script>
