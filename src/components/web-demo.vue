<template>
  <div class="browserStyle">
    <div style="flex-direction: row">
      <input ref="urlInput" type="url"  autofocus="false" class="textStyle" value="https://www.baidu.com">
      </input>
    </div>
    <div style="flex-direction: row">
      <section class="buttonSytle" @click="loadURL">LoadURL</section>
    </div>
    <div>
      <web ref="webview" :src="url" class="webStyle"></web>
    </div>
  </div>
</template>

<script>

  module.exports = {
    data() {
      return { url : "https://m.taobao.com" }
    },

    methods: {
      loadURL: function (e) {
        this.url = this.$refs.input.value
      }
    }
  }
</script>

<style>
  .browserStyle {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color:#778899 ;
  }

  .textStyle {
    width: 750px;
    height: 50px;
    background-color: #D3D3D3;
    font-size: 30px;
  }

  .buttonSytle {
    width:200px;
    height: 50px;
    background-color: #D3D3D3;
    margin:10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 30px;
  }

  .webStyle {
    width: 750px;
    height: 1000px;
    background-color: #8B0000;
  }
</style>
