<template>
  <div class="wrapper" style="height: 1171px">
    <div class="section">
      <div class="box shadow"></div>
    </div>
    <div class="section">
      <div class="box inset-shadow"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: space-around;
  }
  .section {
    justify-content: center;
    align-items: center;
  }
  .box {
    width: 500px;
    height: 300px;
    background-color: #F0F0F0;
  }
  .shadow {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  .inset-shadow {
    box-shadow: inset 0 8px 20px rgba(0, 0, 0, 0.2);
  }
</style>

