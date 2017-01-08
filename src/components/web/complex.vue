<template>
  <div class="wrapper">
    <div class="group">
      <input class="input" ref="input" type="url" autofocus="false" value="https://m.taobao.com"></input>
    </div>
    <div class="group">
      <text class="button" @click="loadURL">LoadURL</text>
      <text class="button" @click="reload">reload</text>
    </div>
    <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish"></web>
  </div>
</template>

<script>
  const webview = weex.require('webview')

  export default {
    data: function () {
      return {
        url : 'https://m.alibaba.com'
      }
    },
    methods: {
      loadURL: function (e) {
        var vm = this
        this.url = this.$refs.input.value
        setTimeout(function () {
          console.log('will go back.')
          webview.goBack(vm.$refs.webview)
        }, 2000)
      },
      reload: function (e) {
        console.log('will reload webview')
        webview.reload(this.$refs.webview)
      },
      start: function (event) {
        console.log('pagestart', event)
      },
      finish: function (event) {
        console.log('pagefinish', event)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    align-items: stretch;
  }
  .group {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
  }
  .input {
    width: 600px;
    font-size: 36px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBBBBB;
  }
  .button {
    width: 225px;
    text-align: center;
    background-color: #D3D3D3;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    font-size: 30px;
  }

  .webview {
    border-width: 2px;
    border-style: solid;
    border-color: blue;
  }
</style>
