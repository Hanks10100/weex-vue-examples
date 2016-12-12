<template>
  <list-demo></list-demo>
</template>

<script>
  export default {
    components: {
      'list-demo': require('./components/list-demo.vue')
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
