<template>
  <list class="wrapper">
    <cell class="group">
      <text class="group-title">组件</text>
      <div class="line" v-for="(name, i) in components" :key="i">
        <text class="key">{{name}}</text>
        <text :class="['value', 'green']">Yes</text>
      </div>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        components: [
          'div', 'text', 'a', 'image', 'input', 'list', 'cell',
          'scroller', 'loading', 'refresh', 'header', 'slider', 'indicator',
          'switch', 'textarea', 'web', 'video', 'tabbar', 'embed',
          'richtext', 'waterfall'
        ],
        modules: [{
          name: 'dom',
          methods: ['scrollToElement', 'getComponentRect', 'addRule']
        }, {
          name: 'modal',
          methods: ['toast', 'alert', 'confirm', 'prompt']
        }, {
          name: 'stream',
          methods: ['fetch']
        }, {
          name: 'animation',
          methods: ['transition']
        }, {
          name: 'navigator',
          methods: ['push', 'pop']
        }, {
          name: 'storage',
          methods: ['setItem', 'getItem', 'removeItem', 'length', 'getAllKeys']
        }, {
          name: 'clipboard',
          methods: ['getString', 'setString']
        }, {
          name: 'meta',
          methods: ['setViewport', 'getComponentRect']
        }, {
          name: 'picker',
          methods: ['pick', 'pickDate', 'pickTime']
        }, {
          name: 'webview',
          methods: ['goBack', 'goForward', 'reload']
        }]
      }
    },
    created () {
    }
  }
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .line {
    flex-direction: row;
    margin-bottom: 16px;
  }
  .key {
    width: 480px;
    font-size: 40px;
    margin-left: 60px;
    color: #888888;
  }
  .value {
   font-size: 40px;
   color: #555555;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
