<template>
  <div>
    <text>Big Eater!</text>
    <video class="video" @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"
      auto-play="false" play-status="pause" :src="src" style="width:750;height:500;"></video>
    <text>state: {{msg}}</text>
  </div>
</template>

<style>
</style>

<script>
  module.exports ={
    data: function () {
      return {
        msg: '',
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
      }
    },
    methods:{
      onstart:function(e){
        this.msg = 'onstart'
      },
      onpause:function(e){
        this.msg = 'onpause'
      },
      onfinish:function(e){
        this.msg = 'onfinish'
      },
      onfail:function(e){
        this.msg = 'onfinish'
      },
    }
  }
</script>
