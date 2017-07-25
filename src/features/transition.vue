<template>
  <list class="list">
    <cell class="cell" v-for="(item, i) in panels" @click="change(i)">
      <div class="panel" :style="{ height: item.height }">
        <text class="text">{{item.label}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        panels: [
          { label: 'A', height: 200 },
          { label: 'B', height: 200 },
          { label: 'C', height: 200 },
          { label: 'D', height: 200 },
          { label: 'E', height: 200 },
          { label: 'F', height: 200 },
          { label: 'G', height: 200 }
        ]
      }
    },
    methods: {
      change (i) {
        const item = this.panels[i]
        if (item) {
          item.height = item.height === 200 ? 500 : 200
        }
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 600px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(0, 180, 255);
    background-color: rgba(0, 180, 255, 0.2);


    transition-property: height;
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
