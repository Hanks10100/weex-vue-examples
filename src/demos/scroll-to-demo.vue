<template>
  <div class="wrapper">
    <scroller class="scroller">
      <div class="row" v-for="(item, index) in rows" :ref="'item' + index">
        <text class="item-title" :ref="'text' + index">row {{item.id}}</text>
      </div>
    </scroller>
    <text ref="button" @click="go" style="text-align: center; background-color: #eeeeee;">
      Go to 10th line.
    </text>
  </div>
</template>

<script>
  var dom = weex.require('dom')

  module.exports = {
    data: function () {
      return { rows: [] }
    },
    created: function () {
      for (var i = 0; i < 30; i++) {
        this.rows.push({
          id: i
        })
      }
    },
    methods: {
      go: function () {
        console.log('go', this.$refs.button)
        var el = this.$refs.item10[0]
        // var el = this.$refs.text10[0]
        dom.scrollToElement(el, { offset: 0 })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    display: block;
  }
  .scroller {
    height: 500px;
  }
  .row {
    height: 60px;
  }
</style>
