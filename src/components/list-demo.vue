<template>
  <list class="list" @loadmore="onloadmore">
    <cell class="row" v-for="item in rows">
      <text class="item-title">row {{item.id}}</text>
    </cell>
  </list>
</template>

<style>
  .list {
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
      rows: []
    }
  },
  mounted: function () {
    for (var i = 0; i < 30; i++) {
      this.rows.push({
        id: i + 1
      })
    }
  },
  methods: {
    onloadmore: function (event) {
      console.log('on load more', event)
      for (var i = 0; i < 30; i++) {
        this.rows.push({
          id: 'load more: ' + (i + 1)
        })
      }
    }
  }
}
</script>
