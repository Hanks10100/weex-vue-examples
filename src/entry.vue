<template>
  <app></app>
</template>

<script>
  module.exports = {
    components: {
      'app': require('./App.vue')
    },
    created: function () {
      console.log('Entry created.')
    },
    mounted: function () {
      console.log('Entry mounted.')
    }
  }
</script>
