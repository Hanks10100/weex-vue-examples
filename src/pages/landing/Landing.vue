<template>
  <div class="wrapper">
    <div class="slider-wrapper" ref="slider" :style="{ height: `${viewportHeight * videos.length}px`, top: `${-viewportHeight}px` }">
      <div class="slider center" ref="slides" v-for="(video, i) in videos" :key="i"
        @touchstart="onTouchStart(i)"
        :style="{ top: `${viewportHeight * i}px`, height: `${viewportHeight}px`, backgroundColor: video.color }">
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
  function getRef (elem) {
    return WXEnvironment.platform.toLowerCase() !== 'web' ? elem.ref : elem
  }
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
        const slideRef = getRef(this.$refs.slider)
        this.bindGesture(slideRef)
      },
      bindGesture (element) {
        console.log(' ---> bind gesture', element)
        const tokenObject = Binding.bind({
          eventType: 'pan',
          anchor: element,
          props: [{
            element,
            property: 'transform.translateY',
            expression: `y+${this.offsetY}`
          }]
        }, (e) => {
          if (e.state === 'end') {
            this.offsetY += e.deltaY
            this.bindTiming(element)
          }
        })
        console.log(JSON.stringify(tokenObject))
        this.gestureToken = tokenObject.token
      },
      bindTiming (element) {
        let changedY = -this.offsetY
        if (!this.shouldFallback()) {
          changedY = Math.sign(this.offsetY) * this.viewportHeight - this.offsetY
        }
        console.log(' ---> bind timing', this.offsetY, changedY)
        Binding.bind({
          eventType: 'timing',
          exitExpression: { origin: `t>800` },
          props: [{
            element,
            property: 'transform.translateY',
            expression: `easeOutSine(t,${this.offsetY},${changedY},300)`
          }]
        }, (e) => {
          if (e.state === 'end' || e.state === 'exit') {
            this.offsetY = 0
            this.isInAnimation = false
          }
        })
      },
      shouldFallback () {
        return Math.abs(this.offsetY) / this.viewportHeight < 0.25
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
    position: absolute;
    background-color: #FFFFFF;
  }
  .fullscreen {
    flex: 1;
  }
</style>
