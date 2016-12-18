<template>
  <!-- <list class="list" @loadmore="onloadmore"> -->
  <list class="list">
    <refresh class="refresh" @refresh="onrefresh">
      <loading-indicator class="loading-indicator"></loading-indicator>
    </refresh>
    <cell class="row" v-for="item in rows">
      <text class="item-title">row {{item.id}}</text>
    </cell>
    <loading class="loading" @loading="onloading">
      <loading-indicator class="loading-indicator"></loading-indicator>
    </loading>
  </list>
</template>

<style>
  .list {
    height: 750px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #BBB;
  }
  .loading {
    width: 750px;
    flex-direction: row;
    justify-content: center;
  }
  .loading-indicator {
    width: 160px;
    height: 160px;
    color: green;
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
    onloadmore: function (event, finish) {
      console.log('on load more', event)
      for (var i = 0; i < 30; i++) {
        this.rows.push({
          id: 'load more: ' + (i + 1)
        })
      }
    },
    onrefresh: function (event, finish) {
      console.log('refresh ...')
      setTimeout(finish, 3000)
    },
    onloading: function (event, finish) {
      console.log('loading ...')
      setTimeout(finish, 3000)
    }
  }
}
</script>
