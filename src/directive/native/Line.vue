<template>
  <text class="line">{{name}} ({{kind}})</text>
</template>

<style scoped>
  .line {
    font-size: 50px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #666666;
    background-color: #EEEEEE;
    margin-bottom: 10px;
  }
</style>

<script>
  export default {
    props: ['name', 'kind']
  }
</script>
