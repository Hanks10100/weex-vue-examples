<template>
  <div class="wrapper">
    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index">
        <text class="item-title" :ref="'text'+index">{{name}}</text>
      </div>
    </scroller>
    <text @click="goto10" class="button">Go to 10</text>
    <text @click="goto20" class="button">Go to 20</text>
  </div>
</template>

<script>
  var dom = weex.require('dom')

  export default {
    data: function () {
      return {
        rows: []
      }
    },
    created: function () {
      for (var i = 0; i < 30; i++) {
        this.rows.push('row ' + i)
      }
    },
    methods: {
      goto10: function (count) {
        var el = this.$refs.item10[0]
        dom.scrollToElement(el)
      },
      goto20: function (count) {
        var el = this.$refs.item20[0]
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
  .button {
    text-align: center;
    background-color: #EEEEEE;
  }
</style>
