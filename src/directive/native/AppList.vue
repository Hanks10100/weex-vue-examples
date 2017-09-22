<template>
  <div style="flex-direction:row">
    <div class="box"  v-for="(app, i) in apps" :key="i">
      <image class="icon" :src="app.icon"></image>
      <text class="title">{{app.title}}</text>
    </div>
  </div>
</template>

<style scoped>
  .box {
    width: 180px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .title {
    width: 180px;
    font-size: 30px;
    text-align: center;
    padding-top: 15px;
    color: #999999;
  }
  .icon {
    width: 140px;
    height: 140px;
    margin-left: 20px;
  }
</style>

<script>
  export default {
    props: ['apps']
  }
</script>
