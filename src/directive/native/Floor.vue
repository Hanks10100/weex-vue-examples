<template>
  <div class="floor">
    <text class="A-title">{{floor.title}}</text>
    <text class="A-desc" lines="2">{{floor.desc}}</text>
    <div class="A-image-box">
      <image class="A-image" :src="source" v-for="(source, i) in floor.pictures" :key="i" />
    </div>
    <text class="A-comment">{{floor.count}} 人说好</text>
  </div>
</template>

<style scoped>
  .list {
    background-color: #F5F5F5;
  }
  .floor {
    margin-bottom: 15px;
    background-color: #FFF;
  }
  .A-title {
    font-size: 40px;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 25px;
  }
  .A-desc {
    lines: 2;
    color: #999;
    font-size: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .A-image-box {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
  .A-image {
    width: 245px;
    height: 245px;
  }
  .A-comment {
    color: #52bfe6;
    font-size: 32px;
    text-align: right;
    padding-right: 50px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
</style>

<script>
  export default {
    props: ['floor']
  }
</script>
