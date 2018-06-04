<template>
  <div class="wrapper">
    <div class="slide-wrapper" ref="anchor" :style="{ height: `${viewportHeight}px` }">
      <div class="slide-inner" ref="slideBoard" :style="{ height: `${viewportHeight * videos.length}px` }">
        <div class="slide-frame center" v-for="(video, i) in videos" :key="i"
          @touchstart="onTouchStart(i)"
          :style="{ height: `${viewportHeight}px`, backgroundColor: video.color }">
          <text class="text">{{video.name}}</text>
          <video-slider class=""></video-slider>
        </div>
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
        currentFrame: 0,
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
          if (this.gestureToken !== 0) {
            Binding.unbind({
              eventType: 'pan',
              token: this.gestureToken
            })
            this.gestureToken = 0
          }
          return
        }
        const anchorRef = getRef(this.$refs.anchor)
        const slideRef = getRef(this.$refs.slideBoard)
        this.bindGesture(slideRef)
      },
      bindGesture (element) {
        const startY = this.offsetY - this.currentFrame * this.viewportHeight
        console.log(` ---> bind gesture: offsetY: ${this.offsetY}, startY: ${startY}, element: ${element}`)
        const tokenObject = Binding.bind({
          anchor: element,
          eventType: 'pan',
          props: [{
            element,
            property: 'transform.translateY',
            expression: `y+${startY}`
          }]
        }, (e) => {
          if (e.state === 'end') {
            this.offsetY += e.deltaY
            this.bindTiming(element)
          }
        })
        console.log(` ---> token object: ${JSON.stringify(tokenObject)}`)
        this.gestureToken = tokenObject.token
      },
      bindTiming (element) {
        let startY = this.offsetY - this.currentFrame * this.viewportHeight
        let changedY = -this.offsetY
        const sign = Math.sign(this.offsetY)
        if (!this.shouldFallback()) {
          changedY = sign * this.viewportHeight - this.offsetY
          this.currentFrame = Math.min(Math.max(0, this.currentFrame - sign), this.videos.length)
        }
        console.log(` ---> bind timing: currentFrame: ${this.currentFrame}, offsetY: ${this.offsetY}, startY: ${startY}, changedY: ${changedY}`)
        Binding.bind({
          eventType: 'timing',
          exitExpression: { origin: `t>800` },
          props: [{
            element,
            property: 'transform.translateY',
            expression: `easeOutSine(t,${startY},${changedY},300)`
          }]
        }, (e) => {
          if (e.state === 'end' || e.state === 'exit') {
            this.offsetY = 0
            this.isInAnimation = false
          }
        })
      },
      shouldFallback () {
        const nextFrame = this.currentFrame - Math.sign(this.offsetY)
        return nextFrame < 0 || nextFrame >= this.videos.length
          || Math.abs(this.offsetY) / this.viewportHeight < 0.25
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
    background-color: #333333;
    flex-direction: column;
  }
  .slide-wrapper {
    width: 750px;
    flex: 1;
    flex-direction: column;
  }
  .slide-inner {
    width: 750px;
    background-color: #DDDDDD;
  }
  .slide-frame {
    width: 750px;
    background-color: #FFFFFF;
  }
  .fullscreen {
    flex: 1;
  }
  .text {
    font-size: 100px;
  }
</style>
