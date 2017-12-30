<template>
  <div>
    <embed v-if="showEmbed" style="flex:1" :src="src" />
    <div v-else class="center" style="flex:1">
      <image class="logo" src="https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"></image>
      <div class="btn center" @click="scan">
        <image class="scan-bg" src="https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"></image>
        <text class="btn-text">Scan QR Code</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showEmbed: false,
        md5: '2d8da136e33f63a0bfe4b1e42362405b'
      }
    },
    computed: {
      src () {
        const md5 = this.md5
        if (WXEnvironment.platform === 'Web') {
          return `http://dotwe.org/raw/htmlVue/${md5}`
        }
        const url = `http://dotwe.org/raw/dist/${md5}.bundle.wx`
        return `${url}?_wx_tpl=${url}`
      }
    },
    methods: {
      scan () {
        // TODO: open scan QR code page
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
</style>
