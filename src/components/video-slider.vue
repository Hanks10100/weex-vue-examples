<template>
  <div class="wrapper">
    <div class="graph">
      <div class="circle red"></div>
      <div class="circle green"></div>
      <div class="circle blue"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .graph {
    position: relative;
    width: 700px;
    height: 700px;
  }
  .circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-width: 4px;
    border-style: solid;
    border-radius: 250px;
  }
  .red {
    top: 0;
    left: 100px;
    background-color: rgba(255, 88, 88, 0.5);
    border-color: rgba(255, 88, 88, 0.7);
  }
  .green {
    left: 0;
    bottom: 0;
    background-color: rgba(106, 230, 106, 0.5);
    border-color: rgba(59, 195, 59, 0.7);
  }
  .blue {
    right: 0;
    bottom: 0;
    background-color: rgba(53, 143, 255, 0.5);
    border-color: rgba(53, 143, 255, 0.7);
  }
</style>
