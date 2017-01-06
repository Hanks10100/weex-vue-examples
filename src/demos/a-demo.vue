<template>
  <div class="wrapper">
    <a href="http://dotwe.org/a468998152ee680413588c38bd61c29e">
      <p class="text">click</p>
    </a>
  </div>
</template>

<style>
  .wrapper {
    text-align: center;
  }
  .text {
    font-size: 50px;
  }
</style>

<script>
  var navigator = weex.require('navigator')
  module.exports = {
    mounted: function () {
      // console.log(navigator)
      setTimeout(() => {
        navigator.push({ url: '#/abc' })
        setTimeout(() => {
          navigator.push({ url: '#/def' })
          setTimeout(() => {
            navigator.pop()
            setTimeout(() => {
              navigator.push({ url: '#/xyz' })
            }, 800)
          }, 800)
        }, 800)
      }, 1000)
    }
  }
</script>
