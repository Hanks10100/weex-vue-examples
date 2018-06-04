<template>
  <div class="wrapper">
    <div class="wrapper tabs" ref="pageTab"
      @touchstart="horizontalSwipe"
      :style="{ height: `${viewportHeight}px` }">
      <div class="slide-wrapper" :style="{ height: `${viewportHeight}px` }">
        <div class="slide-inner" ref="slideBoard"
          @touchstart="verticalScroll"
          @touchmove="onTouchMove"
          :style="{ height: `${viewportHeight * videos.length}px` }">
          <div class="slide-frame center" v-for="(video, i) in videos" :key="i"
            :style="{ height: `${viewportHeight}px` }">
            <video-slider :video="video" :title="video.title" :height="viewportHeight"></video-slider>
          </div>
        </div>
      </div>
      <div class="aside center" :style="{ height: `${viewportHeight}px` }">
        <text class="text">更多信息</text>
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
        isInSideBar: false,
        isScrolling: false,
        isSwiping: false,
        currentFrame: 0,
        gestureToken: 0,
        viewportWidth: 750,
        viewportHeight: 1000,
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
            this.viewportWidth = parseInt(res.size.width, 10) || 750
            this.viewportHeight = parseInt(res.size.height, 10)
          }
        })
      },

      // onTouchStart (event) {
      //   this.handleGesture()
      //   // console.log(` ---> touch start: (${JSON.stringify(event)})`)
      //   // const touch = event.changedTouches[0]
      //   // this.startTouch.pageX = parseInt(touch.pageX)
      //   // this.startTouch.pageY = parseInt(touch.pageY)
      //   // this.listenTouchMove = false
      //   // setTimeout(() => this.listenTouchMove = true, 5)
      // },

      // onTouchMove (event) {
      //   if (this.listenTouchMove) {
      //     // console.log(` ---> touch move: (${JSON.stringify(event)})`)
      //     const touch = event.changedTouches[0]
      //     const moveX = parseInt(touch.pageX) - this.startTouch.pageX
      //     const moveY = parseInt(touch.pageY) - this.startTouch.pageY
      //     const isVertical = Math.abs(moveX) < Math.abs(moveY)
      //     switch (true) {
      //       case (isVertical && moveX < 0): this.direction = 'up'; break
      //       case (isVertical && moveX >= 0): this.direction = 'down'; break
      //       case (!isVertical && moveY < 0): this.direction = 'right'; break
      //       case (!isVertical && moveY >= 0): this.direction = 'left'; break
      //     }
      //     console.log(` --->  moveX: ${moveX}, moveY: ${moveY}, direction: ${this.direction}`)
      //     if (moveX <= moveY) {
      //       // this.handleGesture()
      //     } else {
      //       // modal.toast({ message: this.direction })
      //     }
      //     this.listenTouchMove = false
      //   }
      // },

      // handle vertial scroll
      verticalScroll () {
        if (!this.isInAnimation) {
          this.isScrolling = true
          const element = getRef(this.$refs.slideBoard)
          const startY = -this.currentFrame * this.viewportHeight
          this.followHand(element, { y: startY }, () => {
            const targetY = {
              start: this.offsetY - this.currentFrame * this.viewportHeight,
              changed: -this.offsetY
            }
            const sign = Math.sign(this.offsetY)
            if (this.shouldScroll()) {
              targetY.changed = sign * this.viewportHeight - this.offsetY
              this.currentFrame = Math.min(Math.max(0, this.currentFrame - sign), this.videos.length)
            }
            this.easeTo(element, { y: targetY }, () => {
              this.isScrolling = false
            })
          })
        } else {
          this.resetBinding()
        }
      },

      horizontalSwipe () {
        if (!this.isInAnimation) {
          this.isSwiping = true
          const element = getRef(this.$refs.pageTab)
          const index = this.isInSideBar | 0
          const startX = -index * this.viewportWidth
          this.followHand(element, { x: startX }, () => {
            const sign = Math.sign(this.offsetX)
            const targetX = {
              start: this.offsetX - index * this.viewportWidth,
              changed: -this.offsetX
            }
            if (this.shouldSwipe()) {
              targetX.changed = sign * this.viewportWidth - this.offsetX
              this.isInSideBar = !this.isInSideBar
            }
            this.easeTo(element, { x: targetX }, () => {
              this.isSwiping = false
            })
          })
        } else {
          this.resetBinding()
        }
      },

      // 是否取消滚动并过渡回当前视频
      shouldScroll () {
        const nextFrame = this.currentFrame - Math.sign(this.offsetY)
        return nextFrame >= 0 && nextFrame < this.videos.length
          && Math.abs(this.offsetY) / this.viewportHeight > 0.25
      },

      // 是否横向滑动到另一页
      shouldSwipe () {
        const sign = this.isInSideBar ? 1 : -1
        return sign * this.offsetX > 0
          && Math.abs(this.offsetX) / this.viewportWidth > 0.35
      },

      // 使元素跟手移动
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
            callback && callback()
          }
        })
        this.gestureToken = tokenObject.token
      },

      // (带动画)滚动到指定位置
      easeTo (element, target, callback) {
        const ease = 'easeOutSine'
        const props = []
        if (target.x !== undefined) {
          props.push({
            element,
            property: 'transform.translateX',
            expression: `${ease}(t,${target.x.start},${target.x.changed},300)`
          })
        }
        if (target.y !== undefined) {
          props.push({
            element,
            property: 'transform.translateY',
            expression: `${ease}(t,${target.y.start},${target.y.changed},300)`
          })
        }
        Binding.bind({
          eventType: 'timing',
          exitExpression: { origin: `t>800` },
          props
        }, (e) => {
          if (e.state === 'end' || e.state === 'exit') {
            this.offsetX = 0
            this.offsetY = 0
            this.isInAnimation = false
            callback && callback()
          }
        })
      },
      resetBinding () {
        if (this.gestureToken !== 0) {
          Binding.unbind({
            eventType: 'pan',
            token: this.gestureToken
          })
          this.gestureToken = 0
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
  .wrapper {
    width: 750px;
    background-color: #333333;
    flex-direction: column;
  }
  .tabs {
    width: 1500px;
    flex-direction: row;
    justify-content: space-between;
  }
  .slide-wrapper {
    width: 750px;
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
  .aside {
    background-color: #F6F6F6;
    width: 750px;
  }
  .text {
    font-size: 100px;
    color: #666666;
  }
</style>
