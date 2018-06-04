<template>
  <div class="background" :style="{ height: `${height}px` }">
    <video class="video stretch" :style="{ height: `${height}px` }" :src="videoUrl" :poster="poster" :controls="controls" :autoplay="autoplay" :muted="muted" :loop="loop" :type="type" :size="size"></video>
    <div class="stretch center">
      <text class="text">{{title}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['video', 'title', 'height'],
    data () {
      const videoConfig = Object.assign({
        videoUrl: 'http://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/JfG8tXhHTOvyyHsncCj%40%40sd.mp4',
        poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        controls: true,
        autoplay: true,
        muted: true,
        mutedString: '',
        loop: true,
        type: 'video',
        size: 'stretch'
      }, this.video)
      return videoConfig
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
  .stretch {
    position: absolute;
    width: 750px;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #FFFFFF;
  }
</style>
