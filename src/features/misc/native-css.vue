<template>
  <div class="canvas">
    <div class="row" v-for="vector in matrix">
      <div class="cell" v-for="number in vector" :style="{width:cellSize, height:cellSize}">
        <text class="text" :style="{fontSize:fontSize}">{{number}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  var VIEWPORT = 750
  var COLUMN = 3
  var ROW = 10

  module.exports = {
    data: function () {
      var matrix = []
      for (var i = 0; i < ROW; i++) {
        matrix.push([])
        for (var j = 0; j < COLUMN; j++) {
          matrix[i].push(Math.floor(Math.random() * 10))
        }
      }
      return {
        cellSize: (VIEWPORT / COLUMN - 4) + 'px',
        fontSize: Math.round(VIEWPORT / COLUMN / 2) + 'px',
        matrix: matrix
      }
    }
  }
</script>

<style scoped>
  .row {
    flex-direction: row;
  }
  .cell {
    justify-content: center;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 2px;
    margin-right: 2px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(65, 184, 131);
    background-color: rgba(65, 184, 131, 0.25);
  }
  .text {
    color: rgb(65, 184, 131);
    text-align: center;
    font-weight: 200;
  }
</style>
