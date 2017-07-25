<template>
  <list class="list">
    <cell class="cell" weex-for="item in panels">
      <div class="panel">
        <text class="text">%item.label%</text>
      </div>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        panels: [
          { label: 'A' },
          { label: 'B' },
          { label: 'C' },
          { label: 'D' },
          { label: 'E' },
          { label: 'F' },
          { label: 'G' }
        ]
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 600px;
    height: 300px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(0, 180, 255);
    background-color: rgba(0, 180, 255, 0.2);
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #00B4FF;
  }
</style>
