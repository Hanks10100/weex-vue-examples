<template>
  <div class="wrapper">
    <embed class="doodle" :src="doodle | url"></embed>
    <div class="menu-list">
      <div :class="['menu-row', `menu-row-${r+1}`]" v-for="(row, r) in menus" :key="r">
        <a :href="menu.hash | url" :class="['menu-item', `menu-item-${i+1}`,`menu-item-${menu.name}`]" v-for="(menu, i) in row" :key="menu.name">
          <text :class="['menu-text', `menu-text-${menu.name}`]">{{menu.title}}</text>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  const stream = weex.requireModule('stream')
  function createURL (hash) {
    if (WXEnvironment.platform === 'Web') {
      return `http://dotwe.org/raw/htmlVue/${hash}`
    }
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    filters: { url: createURL },
    data () {
      return {
        doodle: '9a55664ca51986295ce6982766760ed6',
        menus: [[{
          name: 'guide',
          title: 'Guide',
          hash: '14d51b459007f697613319b1d82c61a9',
        }, {
          name: 'examples',
          title: 'Examples',
          hash: '8acee0446b41edce51d1c335ecd13d78',
        }], [{
          name: 'blogs',
          title: 'Blogs',
          hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        }, {
          name: 'about',
          title: 'About',
          hash: '45bf501ff7671054202a9263d17cacc6',
        }]]
      }
    },
    beforeCreate () {
      // fetch the latest doodle and menus
      // stream.fetch({
      //   method: 'GET',
      //   type: 'json',
      //   url: ''
      // }, res => {
      //   if (res.ok && res.data) {
      //     this.doodle = res.data.doodle
      //     // TODO: update menus
      //   }
      // })
    }
  }
</script>

<style scoped>
  .doodle {
    width: 750px;
    height: 750px;
    background-color: #BBB;
  }
  .menu-list {
    flex: 1;
  }
  .menu-row {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #CCC;
  }
  .menu-item {
    flex: 1;
    background-color: #FBFBFB;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .menu-item:active {
    background-color: #EEE;
  }
  .menu-item-1 {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #CCC;
  }
  .menu-text {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    color: #808080;
  }
</style>
