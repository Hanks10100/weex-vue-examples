<template>
  <scroller class="scroller" @loadmore="onloadmore" loadmoreoffset="100">
    <div v-for="v in items">
      <text style="font-size: 40; color: #000000">{{v.item}}</text>
    </div>
  </scroller>
</template>

<style>
  .scroller {
    height: 750px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #BBB;
  }
</style>

<script>
  module.exports = {
    data: function () {
      return {
        items: [],
        triggered: false
      }
    },
    created: function () {
      for (var i = 0; i < 50; i++) {
        this.items.push({
          'item': 'test data' + i
        });
      }
    },
    methods: {
      onloadmore: function () {
        if (!this.triggered) {
          for (var i = 100; i >= 50; i--) {
            this.items.push({
              'item': 'onloadmore triggered' + i
            });
          }
        }
        this.triggered = true;

      }
    }
  }
</script>
