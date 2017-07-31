<template>
  <div style="margin-top:100px" @click="handleClick">
    <text ref="txt">normal</text>
    <child ref="sub"></child>
  </div>
</template>

<script>
  import Child from './child.vue'
  const animation = weex.requireModule('animation');
  export default {
    components: { Child },
    data () { return {} },
    mounted () {
      console.log(Object.keys(this.$refs.txt))
      console.log(Object.keys(this.$refs.sub))
      // console.log(this.$refs.sub.$el)

      animation.transition(this.$refs.sub, {
        styles: {
          transform: 'scale(0.5)'
        }
      })
    }
  }
</script>
