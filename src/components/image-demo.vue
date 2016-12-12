<template>
  <div class="wrapper" >
    <image class="image" resize="cover" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image>
    <section class="title">cover</section>

    <image class="image" resize="contain" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image>
    <section class="title">contain</section>

    <image class="image" resize="stretch" src="https://img.alicdn.com/tps/TB1dX5NOFXXXXc6XFXXXXXXXXXX-750-202.png"></image>
    <section class="title">stretch</section>
  </div>
</template>
<style>
  .title {
    text-align: center;
    font-size: 36px;
  }
  .image {
    width:650px;
    height:300px;
    margin-top: 25px;
    margin-left: 50px;
    border-color: red;
    border-style: solid;
    border-width: 1;
    background-color: #DDD;
  }
</style>
