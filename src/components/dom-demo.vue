<template>
  <div class="wrapper">
    <div ref="inner" class="inner">
      <text class="text">box</text>
    </div>
  </div>
</template>

<style>
  .wrapper {
    height: 100%;
    position: relative;
  }
  .inner {
    position: absolute;
    top: 200px;
    left: 150px;
    width: 300px;
    height: 300px;
    background-color: #DDD;
  }
  .text {
    font-size: 50px;
  }
</style>

<script>
  var dom = weex.require('dom')
  module.exports = {
    methods: {
      getComponentRect () {
        // console.log(dom)
        var result
        var res = dom.getComponentRect(this.$refs.inner, function (option) {
          result = option
          console.log('get result:', result)
        })
        console.log('res', res)
        console.assert(res === result)
        console.log('viewport:', dom.getComponentRect('viewport'))
      },
      addRule () {
        var res = dom.addRule('transition', {
          transform: 'translate(0, 100px)'
        })
        console.log('addRule res:', res)
      }
    },
    mounted: function () {
      this.addRule()
      this.getComponentRect()
    }
  }
</script>
