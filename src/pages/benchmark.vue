<template>
  <list class="canvas">
    <template v-for="x in repeat">
      <cell :key="'title' + x">
        <text class="title">BENCHMARK</text>
      </cell>
      <cell class="row" v-for="(vector, r) in matrix" :key="x + r">
        <div class="cell" v-for="(number, c) in vector" :key="c" :style="{width:cellSize, height:cellSize}">
          <text class="text" :style="{fontSize:fontSize}">{{number}}</text>
        </div>
      </cell>
      <cell :key="x + depth">
        <mesh style="height:750px" :depth="depth"></mesh>
      </cell>
    </template>
  </list>
</template>

<script>
  const COLUMN = 10
  const ROW = 10
  const REPEAT = 3
  const DEPTH = 20

  Vue.component('mesh', {
    name: 'mesh',
    props: {
      depth: {
        type: Number,
        default: 20
      }
    },
    render (h) {
      const iter = parseInt(this.depth, 10)
      const boxStyle = {
        'justifyContent': 'center',
        'alignItems': 'stretch',
        'margin': 2,
        'borderWidth': 1,
        'borderStyle': 'solid',
        'borderColor': 'rgb(65, 184, 131)',
        'backgroundColor': 'rgba(65, 184, 131, 0.08)'
      }
      if (iter > 0) {
        return h('div',{ style: { flex: 1, flexDirection: iter%2 === 0 ? 'row': 'column' } }, [
          h('div', { style: Object.assign({ flex: 1 }, boxStyle) }),
          h('div', { style: Object.assign({ flex: iter - 1 }, boxStyle) }, [
            h('mesh', { attrs: { depth: iter - 1 } })
          ]),
          h('div', { style: Object.assign({ flex: 1 }, boxStyle) }),
        ])
      }
      return null
    }
  })

  export default {
    data () {
      const VIEWPORT = 750
      const matrix = []
      for (let i = 0; i < ROW; i++) {
        matrix.push([])
        for (let j = 0; j < COLUMN; j++) {
          matrix[i].push(Math.floor(Math.random() * 10))
        }
      }
      return {
        repeat: REPEAT,
        depth: DEPTH,
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
  .title {
    padding: 20px;
    background-color: #EEE;
    color: #AAA;
    font-size: 50px;
    text-align: center;
  }
  .text {
    color: rgb(65, 184, 131);
    text-align: center;
    font-weight: 200;
  }
</style>
