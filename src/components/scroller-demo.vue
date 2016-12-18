<template>
  <!-- <scroller class="scroller" @loadmore="onloadmore" loadmoreoffset="100">
    <div class="cell" @appear="onappear" v-for="v in items">
      <text style="font-size: 40; color: #000000">{{v.item}}</text>
    </div>
  </scroller> -->
  <scroller class="h-scroller" scroll-direction="horizontal">
    <div class="h-cell" v-for="v in items">
      <text style="font-size: 40; color: #000000">{{v.item}}</text>
    </div>
  </scroller>
</template>

<style>
  .scroller {
    height: 750px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: blue;
  }
  .cell {
    height: 100px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
  }
  .h-scroller {
    width: 2000px;
    height: 500px;
    background-color: #EEE;
  }
  .h-cell {
    width: 100px;
    height: 100px;
    background-color: #DDD;
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
      for (var i = 0; i < 20; i++) {
        this.items.push({
          'item': 'test data' + i
        });
      }
    },
    methods: {
      onloadmore: function () {
        if (!this.triggered) {
          for (var i = 40; i >= 20; i--) {
            this.items.push({
              'item': 'onloadmore triggered' + i
            });
          }
        }
        this.triggered = true;
      },
      onappear: function (event) {
        console.log('cell appear.', event)
      }
    }
  }
</script>
