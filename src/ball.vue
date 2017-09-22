<template>
  <div class="wrapper">
    <div>
      <image class="image" :style="imageStyle" ref="pic" @click.once="fullscreen('pic')" resize="contain" src="http://img.alicdn.com/imgextra/i4/70337381/TB2DTGEa3b.PuJjSZFpXXbuFpXa_!!70337381-2-beehive-scenes.png"></image>
    </div>
    <div class="mask" :style="{ opacity: maskOpacity }" ref="mask" @click="resetImage('pic')" v-if="showImageBg"></div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 400px;
    height: 480px;
    justify-content: center;
    background-color: #333333;
  }
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
  }
</style>

<script>
  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')
  const animation = weex.requireModule('animation')
  const SCREEN_WIDTH = 750
  const SCREEN_HEIGHT = SCREEN_WIDTH * WXEnvironment.deviceHeight / WXEnvironment.deviceWidth
  export default {
    data () {
      return {
        resize: 'cover',
        showImageBg: false,
        // maskOpacity: 0,
        imageStyle: {
          position: 'relative',
          top: 0,
          left: 0
        }
      }
    },
    methods: {
      fullscreen (ref) {
        const $image = this.$refs[ref]
        if ($image) {
          dom.getComponentRect($image, message => {
            if (message.result) {
              const { top, left, width, height } = message.size
              const scale = Math.min(SCREEN_WIDTH / width, SCREEN_HEIGHT / height)
              this.imageStyle.position = 'fixed'
              this.imageStyle.top = top
              this.imageStyle.left = left
              this.showImageBg = true
              modal.toast({ message })
              animation.transition($image, {
                styles: {
                  transform: `scale(${scale}, ${scale})`,
                  transformOrigin: 'center center'
                },
                duration: 300,
                timingFunction: 'ease'
              }, () => {
              })

              // this.nextTick(() => {
                const $mask = this.$refs.mask
                animation.transition($mask, {
                  styles: { opacity: 1 },
                  duration: 300,
                  timingFunction: 'ease'
                }, () => {
                  this.maskOpacity = 1
                  this.showImageBg = false
                })
              // })
            }
          })
        }
      },
      resetImage (ref) {
        const $image = this.$refs[ref]
        if ($image) {
          animation.transition($image, {
            styles: {
              transform: `scale(1, 1)`,
              transformOrigin: 'center center'
            },
            duration: 100,
            timingFunction: 'ease'
          }, () => {
            this.imageStyle.position = 'relative'
            this.imageStyle.top = 0
            this.imageStyle.left = 0
          })
        }
      }
    }
  }
</script>
