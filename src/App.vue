<template>
  <div class="wrapper">
    <switch-demo></switch-demo>
  </div>
</template>

<script>
  export default {
    components: {
      'switch-demo': require('./components/switch-demo.vue')
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
