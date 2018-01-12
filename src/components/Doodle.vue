<template>
  <div>
    <embed v-if="showDoodle && doodle.src" @click="magic" style="flex:1" :src="doodle.src | url" />
    <div v-else class="center" style="flex:1">
      <image class="logo" src="https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"/>
      <div class="btn center">
        <image class="scan-bg" @click="scan" src="https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"/>
        <text :class="['btn-text', 'btn-text-' + language]">{{i18n(SCAN)}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchDoodle } from '../shared/utils'
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
          setTimeout(() => {
            this.showDoodle = false
            this.seenDoodle = true
          }, doodle.duration || 8000)
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
            url: this.createURL(this.doodle.next)
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
  }
  .scan-bg {
    width: 450px;
    height: 160px;
    position: absolute;
    top: 0; left: 0;
    opacity: 0.6;
  }
  .scan-bg:active {
    opacity: 1;
  }
  .btn-text {
    color: #727272;
    font-size: 56px;
    text-align: center;
  }
  .btn-text-zh {
    font-size: 64px;
  }
</style>
