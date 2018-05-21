<template>
  <div class="wrapper">
    <div class="doodle center">
      <div class="center">
        <image class="logo" src="https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"/>
        <div class="btn center">
          <image class="scan-bg" src="https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"/>
          <text class="btn-text">Scan QR Code</text>
        </div>
      </div>
    </div>
    <div class="menu-list">
      <div :class="['menu-row', `menu-row-${r+1}`]" v-for="(row, r) in menus" :key="r">
        <div v-for="(menu, i) in row" :key="menu.name"
          @click="jumpTo(menu.name)"
          :class="['menu-item', `menu-item-${i+1}`]">
          <text :class="['menu-text', `menu-text-${language}`]">{{menu.title}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      console.log(' => landing page mounted.')
      this.pageKeys = Object.keys(this.$page)
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #FFFFFF;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .doodle {
    width: 750px;
    height: 880px;
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
    top: 0;
    left: 0;
  }
  .btn-text {
    color: #505050;
    font-size: 56px;
    text-align: center;
  }
  .menu-list {
    flex: 1;
  }
  .menu-row {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #CCC;
  }
  .menu-item {
    flex: 1;
    background-color: #FBFBFB;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .menu-item:active {
    background-color: #F2F2F2;
  }
  .menu-item-1 {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #CCC;
  }
  .menu-text {
    text-align: center;
    font-size: 52px;
    font-weight: bold;
    color: #8B8B8B;
  }
  .menu-text-zh {
    font-size: 56px;
  }
</style>
