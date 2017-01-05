<template>
  <div class="wrapper">
    <text class="button" @click="showToast">Toast</text>
    <text class="button" @click="showAlert">Alert</text>
    <text class="button" @click="showConfirm">Confirm</text>
    <text class="button" @click="showPrompt">Prompt</text>
  </div>
</template>

<script>
  var modal = weex.require('modal')

  export default {
    methods: {
      showToast: function (event) {
        console.log('will show toast')
        modal.toast({
          message: 'This is a toast',
          duration: 0.3
        })
      },
      showAlert: function (event) {
        console.log('will show alert')
        modal.alert({
          message: 'This is a alert',
          duration: 0.3
        }, function (value) {
          console.log('alert callback', value)
        })
      },
      showConfirm: function (event) {
        console.log('will show confirm')
        modal.confirm({
          message: 'Do you confirm ?',
          duration: 0.3
        }, function (value) {
          console.log('confirm callback', value)
        })
      },
      showPrompt: function (event) {
        console.log('will show prompt')
        modal.prompt({
          message: 'This is a prompt',
          duration: 0.3
        }, function (value) {
          console.log('prompt callback', value)
        })
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBBBBB;
    background-color: #EEEEEE
  }
</style>
