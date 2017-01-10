<template>
  <div class="wrapper">
    <text class="text">globalEvent</text>
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
  var globalEvent = weex.requireModule('globalEvent')
  module.exports = {
    mounted: function () {
      console.log(globalEvent)
      globalEvent.addEventListener("geolocation", function (e) {
        console.log("get geolocation")
      });

      var evt = new Event('geolocation')
      evt.data = { foo: 'bar' }
      document.dispatchEvent(evt)
    }
  }
</script>
