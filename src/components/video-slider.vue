<template>
  <div class="background" :style="{ height: `${height}px` }">
    <video ref="player" class="video stretch" :style="{ height: `${height}px` }" :src="videoUrl" :poster="poster" :controls="controls" :autoplay="autoplay" :muted="muted" :loop="loop" :type="type" :size="size"></video>
    <div class="foreground stretch center">
      <div class="video-title center" :style="{ paddingTop: `${paddingTop}px`, height: `${paddingTop+100}px` }">
        <text class="text">{{title}}</text>
      </div>
      <div class="video-info">
        <div class="user-name-row">
          <text class="user-name">{{user.name}}</text>
          <text class="user-status">已认证</text>
        </div>
        <text class="user-role">{{user.role}}</text>
        <text class="user-desc">{{user.desc}}</text>
        <text class="user-details">{{user.details}}</text>
      </div>
      <div class="video-content"></div>
      <div class="video-comments">
        <a :href="link" class="video-tools center">
          <text class="view-all">查看完整简历></text>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['video', 'height'],
    data () {
      const data = Object.assign({
        videoUrl: 'http://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/JfG8tXhHTOvyyHsncCj%40%40sd.mp4',
        poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        controls: false,
        autoplay: true,
        muted: true,
        loop: true,
        type: 'video',
        size: 'stretch',
        title: '候选人推荐'
      }, this.video)
      data.user = {
        name: '钉钉用户',
        role: '大三·浙江工业大学·数字媒体技术',
        desc: '院学生会主席·实习经历(2)',
        details: '工作能力强，沟通能力强，摄影摄像，电脑剪辑'
      }
      data.link = 'http://dotwe.org/raw/dist/8772ebc5eaaea4b856c5c40da5db677e.bundle.wx?_wx_tpl=http://dotwe.org/raw/dist/8772ebc5eaaea4b856c5c40da5db677e.bundle.wx'
      data.paddingTop = 0
      return data
    },
    created () {
      if (this.isIPhoneX()) {
        this.paddingTop = 60
      }
    },
    methods: {
      isIPhoneX () {
        const model = WXEnvironment.deviceModel
        return !!model.match(/iPhone10\,(3|6)/i)
        // return model === 'iPhone10,3' || model === 'iPhone10,6'
      },
      play () {
        const player = this.$refs.player
        if (player) {
          player.play()
        }
      }
    }
  }
</script>

<style scoped>
  .center {
    justify-content: center;
    align-items: center;
  }
  .background {
    width: 750px;
    flex: 1;
    position: relative;
    background-color: #232323;
  }
  .foreground {
    flex-direction: column;
  }
  .stretch {
    position: absolute;
    width: 750px;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  .video-title {
    width: 750px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .text {
    font-size: 46px;
    text-align: center;
    color: #FFFFFF;
  }
  .video-info {
    width: 750px;
    height: 300px;
    padding-left: 20px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  }
  .video-content {
    width: 750px;
    flex: 1;
  }
  .video-comments {
    width: 750px;
    height: 200px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    justify-content: center;
    /* background-color: rgba(0, 0, 0, 0.2); */
  }
  .user-name-row {
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 15px;
  }
  .user-name {
    font-size: 42px;
    color: #F2F2F2;
  }
  .user-status {
    font-size: 30px;
    color: #41B883;
    margin-left: 10px;
  }
  .user-role {
    font-size: 38px;
    color: #EEEEEE;
    margin-bottom: 15px;
  }
  .user-desc {
    font-size: 32px;
    color: #C6C6C6;
    margin-bottom: 10px;
  }
  .user-details {
    font-size: 30px;
    color: #C0C0C0;
  }
  .video-tools {
    width: 300px;
    height: 50px;
    margin-left: 30px;
  }
  .view-all {
    font-size: 32px;
    color: #EEEEEE;
  }
</style>
