<template>
  <div>
    <text>Keep Alive</text>
    <keep-alive>
      <text v-if="aa">AAA</text>
      <text v-if="bb">BBB</text>
    </keep-alive>
  </div>
</template>

<script>
  import TypeA from './type-a.vue'
  export default {
    components: {
      'aaa': TypeA
    },
    data () {
      return {
        aa: true,
        bb: false
      }
    }
  }
</script>

