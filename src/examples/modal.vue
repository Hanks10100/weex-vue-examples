<template>
  <div class="wrapper">
    <text class="title">Event Module Demo</text>
  </div>
</template>

<script>

var modal = require('@weex-module/modal')
module.exports = {
  mounted: function() {
    modal.toast({
      message: 'Show this toast',
      duration: 2
    })
  }
}

</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
</style>
