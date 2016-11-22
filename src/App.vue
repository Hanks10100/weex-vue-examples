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
  }
  .logo {
    margin-left: 250;
    margin-bottom: 30;
    width: 250;
    height: 250;
  }
  .title {
    font-size: 60;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    font-size: 30;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20;
  }
</style>
