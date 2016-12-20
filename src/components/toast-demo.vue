<template>
  <div>
      <input
        ref="input"
        type="text"
        placeholder="Input Something"
        class="input"
        autofocus="true"
        value=""
        @change="onchange"
        @input="oninput"
      />
      <text>oninput: {{txtInput}}</text>
      <text>onchange: {{txtChange}}</text>
  </div>
</template>

<style>
  .input {
    font-size: 60px;
    height: 80px;
    width: 400px;
  }
</style>

<script>
  var modal = weex.require('modal')
  module.exports = {
    data: function () {
      return {
        txtInput: '',
        txtChange: ''
      }
    },
    methods: {
      onchange: function(event) {
        console.log(event)
        this.txtChange = this.$refs.input.value;
        modal.toast({ message: this.txtChange })
      },
      oninput: function(event) {
        this.txtInput = this.$refs.input.value;
      }
    }
  };
</script>
