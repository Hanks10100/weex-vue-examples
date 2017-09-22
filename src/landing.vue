<template>
  <div class="wrapper">
    <div class="main">
      <div ref="screen" class="screen"></div>
    </div>
    <div class="menu-list">
      <div class="menu-row" v-for="(row, r) in menus" :key="r">
        <a :href="menu.hash | url" class="menu-item" v-for="(menu, i) in row" :key="i" :ref="`menu${r+i}`">
          <text class="menu-text">{{menu.title}}</text>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .wrapper {
    justify-content: space-around;
    background-color: #F5F5F5;
  }
  .main {
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    height: 500px;
  }
  .screen {
    width: 750px;
    height: 100px;
    height: 500px;
    border-left-width: 2px;
    border-right-width: 2px;
    border-top-width: 8px;
    border-bottom-width: 8px;
    border-style: solid;
    border-color: #CCC;
    border-radius: 100px;
    background-color: #FFF;
    box-shadow: inset 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  .menu-list {
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
    border-color: #CCC;
    background-color: #FFF;
    justify-content: center;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  }
  .menu-text {
    text-align: center;
    font-size: 50px;
    color: #808080;
  }
</style>

<script>
  const animation = weex.requireModule('animation')
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
          hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        }, {
          title: 'Examples',
          hash: '8acee0446b41edce51d1c335ecd13d78',
        }], [{
          title: 'News',
          hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        }, {
          title: 'Chat',
          hash: '03e9275f49963a4367e08c41edc725d7',
        }]]
      }
    },
    mounted () {
      // animation.transition(this.$refs.screen, {
      //   styles: { height: 500 },
      //   duration: 300,
      //   timingFunction: 'ease-out',
      //   needLayout: true
      // })
    }
  }
</script>
