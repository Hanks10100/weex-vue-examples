<template>
  <list class="wrapper">
    <cell class="header">
      <image class="poster" resize="cover" :src="currentUser.poster"></image>
      <text class="name">{{currentUser.name}}</text>
      <image class="profile" resize="cover" :src="currentUser.profile"></image>
    </cell>
    <cell class="moment" v-for="(moment, i) in moments" :key="i">
      <image class="author-profile" resize="cover" :src="moment.author.profile"></image>
      <div class="main">
        <text class="author-name link-text">{{moment.author.name}}</text>
        <text class="moment-content">{{moment.content}}</text>
        <div class="moment-media" v-if="moment.media">
          <div class="moment-pictures" v-if="moment.media.pictures && moment.media.pictures.length === 1">
            <image class="picture" resize="contain"
              @load="resize(moment.media, $event)"
              :style="{ width: moment.media.width || 450, height: moment.media.height || 260 }"
              :src="moment.media.pictures[0]"></image>
          </div>
          <div class="moment-pictures" v-if="moment.media.pictures && moment.media.pictures.length > 1">
            <image class="mini-picture" resize="cover" v-for="(src, p) in moment.media.pictures" :key="p" :src="src"></image>
          </div>
          <div class="moment-share" v-if="moment.media.share" @click="openURL(moment.media.share.link)">
            <image class="share-thumbnail" :src="moment.media.share.thumbnail"></image>
            <text class="share-title">{{moment.media.share.title}}</text>
          </div>
        </div>
        <text class="location" v-if="moment.location">{{moment.location}}</text>
        <div class="moment-info">
          <text class="moment-time" v-if="moment.time">{{moment.time}}</text>
          <text class="moment-operation link-text" v-if="moment.author.name === currentUser.name">删除</text>
          <image class="moment-feedback" src="https://gw.alicdn.com/tfs/TB1_POLc3MPMeJjy1XcXXXpppXa-66-46.png"></image>
        </div>
        <image class="moment-arrow" v-if="moment.likes || moment.comments" src="https://gw.alicdn.com/tfs/TB1F0OLc3oQMeJjy0FnXXb8gFXa-30-12.png"></image>
        <div class="moment-likes" v-if="moment.likes && moment.likes.length">
          <text class="like-list link-text">♡ {{moment.likes.join(', ')}}</text>
        </div>
        <div class="comment-list" v-if="moment.comments && moment.comments.length">
          <richtext class="moment-comment" v-for="(comment, x) in moment.comments" :key="x">
            <span class="comment-text link-text">{{comment.author}}</span>
            <span class="comment-text" v-if="comment.reply">@</span>
            <span class="comment-text link-text" v-if="comment.reply">{{comment.reply}}</span>
            <span class="comment-text">:&nbsp;&nbsp;</span>
            <span class="comment-text">{{comment.content}}</span>
          </richtext>
        </div>
      </div>
    </cell>
  </list>
</template>

<style scoped>
  .header {
    height: 600px;
  }
  .poster {
    width: 750px;
    height: 520px;
    background-color: #BBB;
  }
  .profile {
    position: absolute;
    width: 185px;
    height: 185px;
    right: 40px;
    bottom: 0;
    background-color: #AAA;
    border-width: 4px;
    border-color: #F5F5F5;
  }
  .name {
    position: absolute;
    right: 250px;
    bottom: 105px;
    font-size: 36px;
    color: #FFF;
  }
  .moment {
    border-bottom-width: 1px;
    border-bottom-color: #DDD;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: row;
  }
  .author-profile {
    width: 95px;
    height: 95px;
    background-color: #D4D4D4;
    margin-left: 25px;
    margin-right: 15px;
  }
  .link-text {
    color: #5E7EC2;
    color: #576B95;
  }
  .author-name {
    font-size: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .moment-content {
    width: 580px;
    font-size: 30px;
    line-height: 40px;
    padding-top: 5px;
    padding-bottom: 18px;
    color: #353535;
  }
  .moment-pictures {
    flex-direction: row;
    padding-bottom: 8px;
    flex-wrap: wrap;
  }
  .picture {
    width: 450px;
    height: 260px;
  }
  .mini-picture {
    width: 180px;
    height: 180px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .moment-share {
    width: 580px;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #EEEEEE;
  }
  .share-thumbnail {
    width: 85px;
    height: 85px;
    background-color: #DDD;
  }
  .share-title {
    font-size: 28px;
    color: #232323;
    margin-top: 25px;
    margin-left: 15px;
  }
  .moment-info {
    position: relative;
    padding-top: 20px;
    height: 50px;
    width: 580px;
    flex-direction: row;
  }
  .moment-time {
    color: #999999;
    font-size: 24px;
  }
  .moment-operation {
    margin-left: 20px;
    font-size: 24px;
  }
  .moment-feedback {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45px;
    height: 32px;
  }
  .moment-arrow {
    width: 32px;
    height: 13px;
    margin-top: 20px;
    margin-left: 30px;
  }
  .moment-likes {
    width: 580px;
    background-color: #F2F2F2;
    padding-left: 20px;
    padding-right: 10px;
  }
  .like-list {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 28px;
    line-height: 38px;
  }
  .comment-list {
    width: 580px;
    border-top-width: 1px;
    border-top-color: #DDD;
    background-color: #F2F2F2;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 15px;
  }
  .moment-comment {
    padding-top: 6px;
    /* padding-bottom: 10px; */
  }
  .comment-text {
    font-size: 28px;
    line-height: 40px;
    color: #454545;
  }
</style>

<script>
  const mockMoments = [
    {
      author: {
        profile: 'http://img.qqzhi.com/upload/img_0_264028261D222908825_23.jpg',
        name: '孔明'
      },
      content: '精心整理，大家帮忙点个赞！',
      media: {
        share: {
          link: 'https://mp.weixin.qq.com/s/IMQGIklWbdHE3mYVZLFWYw',
          title: '手把手教你制作孔明灯，五分钟学会！',
          thumbnail: 'http://d9.yihaodianimg.com/N01/M08/1D/63/CgQCrlKsgAWAbKvCAAG6a3qH_po82600_380x380.jpg',
        }
      },
      time: '18 分钟前',
      from: '微博',
      likes: ['刘备', '黄月英', '尚香♥', '关羽', '大乔', '小乔', '貂蝉', '甄宓', '曹植', '蔡文姬', '吕布', '张春华', '赵云'],
      comments: [{
        author: '赵云',
        content: '丞相，有好多妹子给你点赞啊'
      }]
    }, {
      author: {
        profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
        name: '刘备'
      },
      content: '勿以恶小而为之，勿以善小而不为。',
      media: {
        pictures: ['http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg'],
      },
      time: '37 分钟前',
      likes: ['刘禅', '孔明', '云长', '翼德', '孙权', '马超'],
      comments: [{
        author: '刘禅',
        content: '爸比，你说的太好啦，这是我人生的金句！'
      }, {
        author: '尚香♥',
        content: '哇塞好帅，图是我拍的 (ღˇ◡ˇღ)'
      }, {
        author: '刘备',
        reply: '刘禅',
        content: '以后每天早上抄十遍'
      }, {
        author: '孔明',
        content: '主公微言大义，定会被后人广为传颂 👍'
      }],
    }, {
      author: {
        profile: 'http://img307.ph.126.net/TcF7wq1cxoyqq54ubF-rXg%3D%3D/3783868111921385084.jpg',
        name: '云长'
      },
      content: '还是大哥见多识广，这些年来跟着大哥学到了很多东西，开阔了视野，感恩。',
      media: {
        pictures: ['http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg']
      },
      time: '1 小时前',
      likes: ['刘备', '孔明', '赵云'],
      comments: [{
        author: '翼德',
        content: '这是什么东西，为什么大哥没给我看过？！'
      }, {
        author: '刘备',
        reply: '翼德',
        content: '快来看，我们在三号帐篷附近'
      }]
    }, {
      author: {
        profile: 'http://img307.ph.126.net/TcF7wq1cxoyqq54ubF-rXg%3D%3D/3783868111921385084.jpg',
        name: '小乔'
      },
      content: '自从公瑾走后，寝食无味，愈发消瘦了',
      media: {
        pictures: [
          'http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg',
          'http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg'
        ]
      },
      time: '1 小时前',
      from: '美拍',
      likes: ['曹操'],
      comments: [{
        author: '大乔',
        content: '唉，我俩都是命苦的人😔'
      }, {
        author: '小乔',
        reply: '大乔',
        content: '😔'
      }, {
        author: '曹操',
        content: '美人越来越漂亮了，来我们铜雀台吧~'
      }, {
        author: '曹操',
        reply: '大乔',
        content: '你也一起来吧~'
      }, {
        author: '刘备',
        reply: '曹操',
        content: '曹公，注意言语，此举不妥'
      }, {
        author: '曹操',
        reply: '刘备',
        content: '你怎么也加了小乔为好友？！'
      }, {
        author: '刘备',
        reply: '曹操',
        content: '娶尚香时加的，她是我大舅子的小姨子'
      }, {
        author: '孔明',
        content: '周夫人节哀，此结果也并非我所愿'
      }, {
        author: '曹操',
        reply: '孔明',
        content: '你怎么也加了小乔为好友？！'
      }]
    }
  ]
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  function createURL (hash) {
    if (WXEnvironment.platform === 'Web') {
      return `http://dotwe.org/raw/htmlVue/${hash}`
    }
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    data () {
      return {
        currentUser: {
          name: '刘备',
          profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
          poster: 'http://pic.fayi.com.cn/Upload/origin/123/62123.jpg'
        },
        moments: mockMoments
      }
    },
    methods: {
      openURL (url) {
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({
          url: createURL('f49079ad025150c8776453d122eb416b')
        })
      },
      resize (media, event) {
        if (event.success) {
          const ratio = event.size.naturalHeight / event.size.naturalWidth
          const width = Math.min(event.size.naturalWidth, 450)
          Vue.set(media, 'width', width)
          Vue.set(media, 'height', Math.min(width * ratio, 600))
        }
      }
    }
  }
</script>
