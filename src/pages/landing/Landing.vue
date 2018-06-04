<template>
  <div class="wrapper">
    <div class="slide-wrapper" ref="anchor" :style="{ height: `${viewportHeight}px` }">
      <div class="slide-inner" ref="slideBoard"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        :style="{ height: `${viewportHeight * videos.length}px` }">
        <div class="slide-frame center" v-for="(video, i) in videos" :key="i"
          :style="{ height: `${viewportHeight}px` }">
          <video-slider :video="video" :title="video.title" :height="viewportHeight"></video-slider>
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
        offsetX: 0,
        offsetY: 0,
        direction: '',
        listenTouchMove: true,
        isInAnimation: false,
        currentFrame: 0,
        gestureToken: 0,
        viewportHeight: 800,
        startTouch: {
          pageX: 0,
          pageY: 0
        },
        videos: [{
          title: 'A',
          videoUrl: 'http://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/JfG8tXhHTOvyyHsncCj%40%40sd.mp4',
          poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        }, {
          title: 'B',
          videoUrl: 'https://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/YS15b7rseL9oEYNj3NV%40%40sd.mp4',
          poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        }, {
          title: 'C',
          videoUrl: 'http://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/JfG8tXhHTOvyyHsncCj%40%40sd.mp4',
          poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        // }, {
        //   title: 'D',
        //   videoUrl: 'https://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/YS15b7rseL9oEYNj3NV%40%40sd.mp4',
        //   poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        // }, {
        //   title: 'E',
        //   videoUrl: 'http://tbm.alicdn.com/55VcBwLJpvxKC9hKFAm/JfG8tXhHTOvyyHsncCj%40%40sd.mp4',
        //   poster: 'https://img.alicdn.com/imgextra/i2/6000000006823/TB2Ta_hdrBmpuFjSZFuXXaG_XXa_!!0-0-tbvideo.jpg',
        }]
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
      onTouchStart (event) {
        this.verticalScroll()
        // console.log(` ---> touch start: (${JSON.stringify(event)})`)
        // const touch = event.changedTouches[0]
        // this.startTouch.pageX = parseInt(touch.pageX)
        // this.startTouch.pageY = parseInt(touch.pageY)
        // this.listenTouchMove = false
        // setTimeout(() => this.listenTouchMove = true, 5)
      },
      onTouchMove (event) {
        if (this.listenTouchMove) {
          // console.log(` ---> touch move: (${JSON.stringify(event)})`)
          const touch = event.changedTouches[0]
          const moveX = parseInt(touch.pageX) - this.startTouch.pageX
          const moveY = parseInt(touch.pageY) - this.startTouch.pageY
          const isVertical = Math.abs(moveX) < Math.abs(moveY)
          switch (true) {
            case (isVertical && moveX < 0): this.direction = 'up'; break
            case (isVertical && moveX >= 0): this.direction = 'down'; break
            case (!isVertical && moveY < 0): this.direction = 'right'; break
            case (!isVertical && moveY >= 0): this.direction = 'left'; break
          }
          console.log(` --->  moveX: ${moveX}, moveY: ${moveY}, direction: ${this.direction}`)
          if (moveX <= moveY) {
            // this.verticalScroll()
          } else {
            // modal.toast({ message: this.direction })
          }
          this.listenTouchMove = false
        }
      },

      // handle vertial scroll
      verticalScroll () {
        if (!this.isInAnimation) {
          const element = getRef(this.$refs.slideBoard)
          const startY = -this.currentFrame * this.viewportHeight
          console.log(` ---> vertical scroll: offsetY: ${this.offsetY}, startY: ${startY}, element: ${element}`)
          this.followHand(element, { y: startY }, () => {
            this.bindTiming(element)
          })
        } else if (this.gestureToken !== 0) {
          Binding.unbind({
            eventType: 'pan',
            token: this.gestureToken
          })
          this.gestureToken = 0
        }
      },
      followHand (element, config, callback) {
        const props = []
        if (config.x !== undefined) {
          props.push({
            element,
            property: 'transform.translateX',
            expression: `x+${config.x}`
          })
        }
        if (config.y !== undefined) {
          props.push({
            element,
            property: 'transform.translateY',
            expression: `y+${config.y}`
          })
        }
        const tokenObject = Binding.bind({
          anchor: element,
          eventType: 'pan',
          props
        }, (e) => {
          if (e.state === 'end') {
            this.offsetX += e.deltaX
            this.offsetY += e.deltaY
            callback()
          }
        })
        this.gestureToken = tokenObject.token
      },
      bindTiming (element) {
        const startX = this.offsetX
        const startY = this.offsetY - this.currentFrame * this.viewportHeight
        let changedX = -this.offsetY
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
</style>
