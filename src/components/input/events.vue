<template>
  <div class="wrapper">
    <input ref="input" class="input" type="text" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur">
  </div>
</template>

<script>
  const modal = weex.require('modal')

  export default {
    methods: {
      oninput (event) {
        console.log('oninput:', event.value)
      },
      onchange (event) {
        console.log('onchange:', event.value)
      },
      onfocus (event) {
        console.log('onfocus:', event.value)
      },
      onblur (event) {
        console.log('onblur:', event.value)
        modal.toast({
          message: `input blur: ${event.value}`,
          duration: 2
        })
      }
    }
  }
</script>

<style>
  .input {
    font-size: 50px;
    width: 650px;
    margin-top: 50px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
</style>
