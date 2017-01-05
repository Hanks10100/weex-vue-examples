<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"></div>
  </div>
</template>

<script>
  const animation = weex.require('animation')

  export default {
    methods: {
      move () {
        var testEl = this.$refs.test;
        animation.transition(testEl, {
          styles: {
            color: '#FF0000',
            transform: 'translate(250px, 100px)',
            transformOrigin: 'center center'
          },
          duration: 800, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          console.log('animation finished.')
        })
      }
    }
  }
</script>


<style scoped>
  .wrapper {
    height: 100%;
  }
  .box {
    width: 250px;
    height: 250px;
    background-color: #DDD;
  }
</style>
