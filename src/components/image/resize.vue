<template>
  <div>
    <image class="image" resize="cover" src="http://img.alicdn.com/imgextra/i4/70337381/TB2DTGEa3b.PuJjSZFpXXbuFpXa_!!70337381-2-beehive-scenes.png"></image>
    <text class="title">cover</text>

    <image class="image" resize="contain" src="http://img.alicdn.com/imgextra/i4/70337381/TB2DTGEa3b.PuJjSZFpXXbuFpXa_!!70337381-2-beehive-scenes.png"></image>
    <text class="title">contain</text>

    <image class="image" resize="stretch" src="http://img.alicdn.com/imgextra/i4/70337381/TB2DTGEa3b.PuJjSZFpXXbuFpXa_!!70337381-2-beehive-scenes.png"></image>
    <text class="title">stretch</text>
  </div>
</template>

<style scoped>
  .title {
    text-align: center;
    font-size: 40px;
    color: #999999;
  }
  .image {
    width: 600px;
    height: 300px;
    margin-top: 30px;
    margin-left: 75px;
    border-color: #41B883;
    border-style: solid;
    border-width: 2px;
    background-color: #666666;
  }
</style>
