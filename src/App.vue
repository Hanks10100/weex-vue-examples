<template>
  <body style="height:100%;">
    <demo class="wrapper" style="height:100%;"></demo>
  </body>
</template>

<script>
  export default {
    components: {
      'demo': require('./examples/hello.vue')
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 750px;
    height: 100%;
  }
</style>
