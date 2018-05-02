<template>
  <div class="wrapper">
    <embed v-if="showDoodle && doodle.src" @click="magic" style="flex:1" :src="doodle.src | url" />
    <div v-else class="center" style="flex:1">
      <image class="logo" src="https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"/>
      <div class="btn center" @click="scan">
        <image class="scan-bg" src="https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"/>
        <text :class="['btn-text', 'btn-text-' + language]">{{i18n(SCAN)}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchDoodle } from '../utils'
  const modal = weex.requireModule('modal')
  const navigator = weex.requireModule('navigator')
  const event = weex.requireModule('event')

  function isValidDoodle (doodle) {
    const now = (new Date()).getTime()
    return doodle && doodle.src
      && parseInt(doodle.from, 10) < now
      && now < parseInt(doodle.to, 10)
  }

  export default {
    props: ['lang'],
    data () {
      return {
        language: this.lang || 'en',
        showDoodle: false,
        seenDoodle: false,
        SCAN: { en: 'Scan QR Code', zh: '扫描二维码' },
        doodle: {}
      }
    },
    beforeCreate () {
      fetchDoodle(({doodle}) => {
        if (isValidDoodle(doodle) && !this.seenDoodle) {
          this.doodle = doodle
          this.showDoodle = true
          doodle.duration && setTimeout(() => {
            this.showDoodle = false
            this.seenDoodle = true
          }, parseInt(doodle.duration, 10))
        }
      })
    },
    methods: {
      scan () {
        try {
          event.openURL('weex://go/scan')
        } catch (e) {
          try {
            navigator.push({ url: 'weex://go/scan' })
          } catch (e) {}
        }
      },
      magic () {
        if (this.doodle && this.doodle.next) {
          this.showDoodle = false
          navigator.push({
            url: this.createURL(this.doodle.next, {
              language: this.language
            })
          })
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 750px;
    height: 318px;
  }
  .btn {
    width: 450px;
    height: 160px;
    margin: 50px;
    opacity: 0.7;
  }
  .btn:active {
    opacity: 1;
  }
  .scan-bg {
    width: 450px;
    height: 160px;
    position: absolute;
    top: 0; left: 0;
  }
  .btn-text {
    color: #505050;
    font-size: 56px;
    text-align: center;
  }
  .btn-text-zh {
    font-size: 64px;
  }
</style>
