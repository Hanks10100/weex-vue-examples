<template>
  <div class="wrapper">
    <image class="logo" src="https://vuejs.org/images/logo.png"></image>
    <div class="intro">
      <text class="title">Weex Vue Demo</text>
      <text class="subtitle">This component is written in Vue 2.0 Syntax.</text>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .logo {
    margin-left: 250px;
    margin-bottom: 30px;
    width: 250px;
    height: 250px;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    font-size: 30px;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20px;
  }
</style>
