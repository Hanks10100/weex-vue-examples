<template>
  <demo></demo>
</template>

<script>
  export default {
    components: {
      'demo': require('./components/scroller-demo.vue')
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
