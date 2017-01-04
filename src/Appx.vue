<template>
  <text class="title">{{title}}</text>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        title: '------------'
      }
    },
    mounted: function () {
      console.log(' => this._data.__ob__', this._data.__ob__)
      this.title = 'mounted'
      console.log(' => title: ' + this.title)
    }
  }
</script>

<style>
  .title {
    font-size: 80px;
    color: #41B883;
    text-align: center;
    margin-top: 200px;
  }
</style>
