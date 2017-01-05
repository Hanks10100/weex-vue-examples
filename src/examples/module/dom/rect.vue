<template>
  <div class="wrapper">
    <div ref="box" class="box">
      <text>Width: {{size.width}}</text>
      <text>Height: {{size.height}}</text>
      <text>Top: {{size.top}}</text>
      <text>Bottom: {{size.bottom}}</text>
      <text>Left: {{size.left}}</text>
      <text>Right: {{size.right}}</text>
    </div>
  </div>
</template>

<script>
  var dom = weex.require('dom')

  export default {
    data: function () {
      return {
        size: {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    },
    mounted: function () {
      var vm = this
      var result = dom.getComponentRect(this.$refs.box, function (option) {
        vm.size = option.size
        console.log('getComponentRect:', option)
      })
      console.log('return value:', result)
      console.log('viewport:', dom.getComponentRect('viewport'))
    }
  }
</script>

<style scoped>
  .wrapper {
    position: relative;
  }
  .box {
    position: absolute;
    top: 200px;
    left: 150px;
    width: 300px;
    height: 300px;
    background-color: #DDD;
  }
</style>
