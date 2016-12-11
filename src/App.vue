<template>
  <web-demo></web-demo>
</template>

<script>
  export default {
    components: {
      'web-demo': require('./components/web-demo.vue')
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
</style>
