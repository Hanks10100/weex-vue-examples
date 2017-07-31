<!-- http://dotwe.org/vue/ce9a206fb4c0e60788360f6228fda36e -->

<template>
  <list class="list">
    <cell class="cell" v-for="(item, i) in panels" @click="change(i)">
      <div class="panel" :style="{ width: item.width, height: item.height }">
        <text class="text">{{item.label}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        panels: ['A', 'B', 'C', 'D', 'E'].map(label => ({ label, width: 600, height: 200 }))
      }
    },
    methods: {
      change (i) {
        const item = this.panels[i]
        if (item) {
          item.width = item.width === 600 ? 350 : 600
          item.height = item.height === 200 ? 350 : 200
        }
      }
    }
  }
</script>

<style scoped>
  .cell {
    flex-direction: row;
    justify-content: center;
  }
  .panel {
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(0, 180, 255);
    background-color: rgba(0, 180, 255, 0.2);


    transition-property: width, height;
    transition-duration: .3s;
    transition-delay: .05s;
    transition-timing-function: ease-in-out;
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #00B4FF;
  }
</style>
