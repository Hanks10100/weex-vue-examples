<template>
  <div class="wrapper">
    <div class="slider-wrapper" :style="{ height: `${viewportHeight * videos.length}px`, top: `${-viewportHeight}px` }">
      <div class="slider center" ref="slides" v-for="(video, i) in videos" :key="i"
        @touchstart="onTouchStart(i)"
        :style="{ height: `${viewportHeight}px`, backgroundColor: video.color }">
        <video-slider class="fullscreen"></video-slider>
      </div>
    </div>
  </div>
</template>

<script>
  import Binding from 'weex-bindingx'
  import VideoSlider from '../../components/video-slider.vue'
  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')
  export default {
    components: { VideoSlider },
    data () {
      return {
        offsetY: 0,
        isInAnimation: false,
        gestureToken: 0,
        viewportHeight: 800,
        videos: [
          { name: 'A', color: 'rgba(255, 88, 88, 0.3)' },
          { name: 'B', color: 'rgba(106, 230, 106, 0.3)' },
          { name: 'C', color: 'rgba(53, 143, 255, 0.3)' }
        ]
      }
    },
    created () {
      this.getViewportHeight()
    },
    methods: {
      getViewportHeight () {
        dom.getComponentRect('viewport', res =>{
          if (res.result) {
            this.viewportHeight = parseInt(res.size.height, 10)
          }
        })
      },
      onTouchStart (index) {
        if (this.isInAnimation) {
          if (this.gestureToken != 0) {
            Binding.unbind({
              eventType: 'pan',
              token: this.gestureToken
            })
            this.gestureToken = 0
          }
          return
        }
        const slide = this.$refs.slides[index]
        this.bindGesture(slide)
      },
      bindGesture (element) {
        const tokenObject = Binding.bind({
          eventType: 'pan',
          anchor: element,
          props: [{
            element,
            property: 'transform.translateX',
            expression: `y+${this.offsetY}`
          }, {
            element,
            property: 'transform.translateY',
            expression: `y+${this.offsetY}`
          }]
        }, (e) => {
          if (e.state === 'end') {
            this.offsetY += e.deltaY
            this.bindTiming()
          }
        })
        this.gestureToken = tokenObject.token
      }
    }
  }
</script>

<style scoped>
  .center {
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    width: 750px;
    position: relative;
    background-color: #333333;
    flex-direction: column;
  }
  .slider-wrapper {
    width: 750px;
    position: absolute;
    background-color: #DDDDDD;
    flex-direction: column;
  }
  .slider {
    width: 750px;
    flex: 1;
    background-color: #FFFFFF;
  }
  .fullscreen {
    flex: 1;
  }
</style>
