<template>
  <scroller-demo></scroller-demo>
</template>

<script>
  export default {
    components: {
      'scroller-demo': require('./components/scroller-demo.vue')
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
