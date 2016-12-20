<template>
  <storage-demo></storage-demo>
</template>

<script>
  export default {
    components: {
      'storage-demo': require('./components/storage-demo.vue')
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
