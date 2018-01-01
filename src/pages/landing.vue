<template>
  <div class="wrapper">
    <doodle class="doodle" />
    <div class="menu-list">
      <div :class="['menu-row', `menu-row-${r+1}`]" v-for="(row, r) in menus" :key="r">
        <a :href="menu.name | link" :class="['menu-item', `menu-item-${i+1}`,`menu-item-${menu.name}`]" v-for="(menu, i) in row" :key="menu.name">
          <text :class="['menu-text', `menu-text-${menu.name}`]">{{menu.title}}</text>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Doodle from '../components/Doodle.vue'
  export default {
    components: { Doodle },
    data () {
      return {
        menus: [[
          { name: 'guide', title: 'Guide' },
          { name: 'examples', title: 'Examples' }
        ], [
          { name: 'news', title: 'News' },
          { name: 'about', title: 'About' }
        ]]
      }
    }
  }
</script>

<style scoped>
  .doodle {
    width: 750px;
    height: 750px;
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
    background-color: #F2F2F2;
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
    color: #8B8B8B;
  }
</style>
