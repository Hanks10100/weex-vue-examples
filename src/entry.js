const App = require('./App.vue')
const components = require('../lib/weex-vue-components')

new Vue({
  el: '#weex',
  render: h => h(App)
});
