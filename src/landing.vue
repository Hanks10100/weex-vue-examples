<template>
  <div class="wrapper">
    <div class="main">
      <div class="intro"></div>
    </div>
    <div class="menu">
      <div class="menu-row" v-for="(row, r) in menus" :key="r">
        <a :href="menu.hash | url" class="menu-item" v-for="(menu, i) in row" :key="i">
          <text class="menu-text">{{menu.title}}</text>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .wrapper {
    justify-content: space-between;
  }
  .main {
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }
  .intro {
    width: 600px;
    height: 600px;
    border-width: 2px;
    border-color: #DDD;
    border-radius: 300px;
  }
  .menu {
    height: 500px;
    justify-content: center;
    align-items: center;
  }
  .menu-row {
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .menu-item {
    width: 300px;
    height: 200px;
    margin-left: 15px;
    margin-right: 15px;
    border-width: 2px;
    border-color: #DDD;
    justify-content: center;
  }
  .menu-text {
    text-align: center;
    font-size: 50px;
    color: #808080;
  }
</style>

<script>
  function createURL (hash) {
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    filters: { url: createURL },
    data () {
      return {
        menus: [[{
          title: 'Guide',
          hash: '03e9275f49963a4367e08c41edc725d7',
        }, {
          title: 'Examples',
          hash: 'e4d7c4e695287a6dbf9f67b5cbaf8061',
        }], [{
          title: 'News',
          hash: '03e9275f49963a4367e08c41edc725d7',
        }, {
          title: 'Chat',
          hash: '03e9275f49963a4367e08c41edc725d7',
        }]]
      }
    }
  }
</script>
