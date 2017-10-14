<template>
  <div class="wrapper">
    <div class="main">
      <div ref="screen" class="screen">
        <image class="poster" resize="cover" :src="poster"></image>
      </div>
    </div>
    <div class="menu-list">
      <div class="menu-row" v-for="(row, r) in menus" :key="r">
        <a :href="menu.hash | url" :class="['menu-item', `menu-item-${menu.name}`]" v-for="(menu, i) in row" :key="i" :ref="`menu${r+i}`">
          <text :class="['menu-text', `menu-text-${menu.name}`]">{{menu.title}}</text>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .wrapper {
    justify-content: space-around;
    background-color: #F5F5F5;
    min-height: 100%;
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
    justify-content: center;
    align-items: center;
  }
  .poster {
    width: 750px;
    height: 500px;
    /* width: 400px;
    height: 400px; */
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
    border-width: 6px;
    background-color: #FFF;
    justify-content: center;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
    background-color: #BCAADB;
    border-color: #9f71f1;
  }
  .menu-text {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #808080;
    color: #7d49da;
  }
  /* .menu-item-guide {
    border-color: #80CE8D;
    background-color: #B4FFCE;
  }
  .menu-text-guide {
    color: #49b75b;
  } */
  /* .menu-item-examples {
    background-color: #8DEEFD;
    border-color: #00B8DE;
  }
  .menu-text-examples {
    color: #00a0c1;
  } */
  /* .menu-item-news {
    background-color: #FFDDCE;
    border-color: #ffb99a;
  }
  .menu-text-news {
    color: #ff915e;
  } */
  /* .menu-item-chat {
    background-color: #BCAADB;
    border-color: #9f71f1;
  }
  .menu-text-chat {
    color: #7d49da;
  } */
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
        poster: 'https://cdn.dribbble.com/users/230740/screenshots/3838011/rcs_eagles_dribbble_preview.jpg',
        menus: [[{
          name: 'guide',
          title: 'Guide',
          hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        }, {
          name: 'examples',
          title: 'Examples',
          hash: '8acee0446b41edce51d1c335ecd13d78',
        }], [{
          name: 'news',
          title: 'News',
          hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        }, {
          name: 'chat',
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
