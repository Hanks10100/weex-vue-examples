<template>
  <slider-demo></slider-demo>
</template>

<script>
  export default {
    components: {
      'slider-demo': require('./components/slider-demo.vue')
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
