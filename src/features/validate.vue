<template>
  <list class="list">
    <template v-for="(content, c) in group">
      <cell class="content-cell" :key="content.title">
        <text class="content-title">{{content.title}}</text>
      </cell>
      <cell :class="['example-cell', `example-cell-${i+1}`]" v-for="(example, i) in content.examples" :key="i">
        <div :class="['example', `example-${i+1}`]">
          <text class="example-title">{{example.title}}</text>
          <text :class="['example-result', readable(example.result)]">{{readable(example.result)}}</text>
        </div>
      </cell>
    </template>
  </list>
</template>

<script>

  // 注入 global & window
  try {
    global._override_global_ = '_override_global_'
    window._override_global_ = '_override_global_'
  } catch (e) {}

  // 注入 global.prototype
  try {
    var proto = Object.getPrototypeOf(global)
    proto._override_global_prototype_ = '_override_global_prototype_'
  } catch (e) {}

  // 注入 Object.prototype
  // try {
  //   Object.prototype._shared_prop_ = '_shared_prop_'
  // } catch (e) {}

  // 注入 Array.prototype
  try {
    Array.prototype.last = function () { return -1 }
  } catch (e) {}

  // 注入 WXEnvironment
  try {
    WXEnvironment._inject_ = '_inject_'
  } catch (e) {}

  // 不添加 var
  try {
    _no_var_1 = '_no_var_'
    for (_no_var_2 in WXEnvironment) {}
  } catch (e) {}

  // 注入当前 context
  try {
    var context = (new Function('return this'))()
    context._inject_context_ = '_inject_context_'
  } catch (e) {}

  // 覆盖 timer 接口
  try {
    function mockTimeout () { console.log('mock timeout') }
    if (typeof global !== 'undefined') {
      global.setTimeout = mockTimeout
    }
    if (typeof setTimeout !== 'undefined') {
      setTimeout = mockTimeout
    }
    var context = (new Function('return this'))()
    context.setTimeout = mockTimeout
  } catch (e) {}

  // 覆盖 console.log 接口
  // try {
  //   console.log = function () {
  //     console.error('hack console.log')
  //     return 'hack'
  //   }
  // } catch (e) {}

  // 覆盖 Promise 接口
  try {
    function mockPromise () { this._name = 'mock Promise' }
    if (typeof global !== 'undefined') {
      global.Promise = mockPromise
    }
    if (typeof Promise !== 'undefined') {
      Promise = mockPromise
    }
    var context = (new Function('return this'))()
    context.Promise = mockPromise
  } catch (e) {}

  // 给 Vue 添加变量
  try {
    Vue._xxx_ = '_xxx_'
  } catch (e) {}

  // 给 Vue.prototype 添加变量
  try {
    Vue.prototype._yyy_ = '_yyy_'
  } catch (e) {}

  // 给 Vue 函数原型添加变量
  try {
    var proto = Object.getPrototypeOf(Vue)
    proto._zzz_ = '_zzz_'
  } catch (e) {}

  // 把 document 挂在执行环境上
  try {
    var context = (new Function('return this'))()
    context._document_ = weex.document
  } catch (e) {}

  // 把节点挂在全局变量上
  // try {
  //   Object.prototype._node_map_ = weex.document.nodeMap
  // } catch (e) {}

  // 向 document 注入变量
  try {
    weex.document._inject_ = '_inject_'
  } catch (e) {}

  // 向 document 原型注入变量
  // try {
  //   var proto = Object.getPrototypeOf(weex.document)
  //   proto._inject_proto_ = '_inject_proto_'
  // } catch (e) {}

  // 注入 service 变量
  try {
    service._inject_service_ = function () {}
  } catch (e) {}

  // 注入 service 原型变量
  try {
    var proto = Object.getPrototypeOf(service)
    proto._inject_service_proto_ = function () {}
  } catch (e) {}

  // 覆盖 BroadcastChannel
  try {
    service.BroadcastChannel = function () {
      return 'hacked'
    }
  } catch (e) {}

  // 在 BroadcastChannel 中挂载变量
  try {
    var proto = Object.getPrototypeOf(service.BroadcastChannel)
    proto._inject_ = function () {}
  } catch (e) {}

  // 修改 BroadcastChannel 原型
  try {
    service.BroadcastChannel.close = function () {
      return 'do nothing'
    }
  } catch (e) {}

  export default {
    methods: {
      readable (result) {
        switch (result) {
          case undefined:
          case null: return '--';
          case true: return 'broken';
          case false: return 'prevented';
        }
        return result
      }
    },
    data () {
      return {
        group: [{
          title: '注入全局变量',
          examples: [{
            title: '注入 global & window',
            result: typeof _override_global_ !== 'undefined'
          }, {
            title: '注入 global.prototype',
            result: typeof _override_global_prototype_ !== 'undefined'
          }, {
            title: '注入 Object.prototype',
            result: typeof Object.prototype._shared_prop_ !== 'undefined' || typeof ({})._shared_prop_ !== 'undefined'
          }, {
            title: '注入 Array.prototype',
            result: typeof Array.prototype.last !== 'undefined' || typeof ([]).last !== 'undefined'
          }, {
            title: '注入 WXEnvironment',
            result: typeof WXEnvironment._inject_ !== 'undefined'
          }, {
            title: '不添加 var',
            result: typeof _no_var_1 !== 'undefined' || typeof _no_var_2 !== 'undefined'
          }, {
            title: '注入当前 context',
            result: typeof _inject_context_ !== 'undefined'
          }]
        }, {
          title: '覆盖全局接口',
          examples: [{
            title: '覆盖 timer 接口',
            result: typeof setTimeout(function(){}, 0) === 'undefined'
          }, {
            title: '覆盖 console.log 接口',
            result: typeof console.log('abc') !== 'undefined'
          }, {
            title: '覆盖 Promise 接口',
            result: typeof (new Promise(function(){}))._name !== 'undefined'
          }]
        }, {
          title: 'Hack Vue',
          examples: [{
            title: '给 Vue.xxx 添加变量',
            result: typeof Vue._xxx_ !== 'undefined'
          }, {
            title: '给 Vue.prototype.xxx 添加变量',
            result: typeof (new Vue())._yyy_ !== 'undefined'
          }, {
            title: '给 Vue 函数原型添加变量',
            result: typeof Vue._zzz_ !== 'undefined'
          }]
        }, {
          title: '污染 virtual dom tree',
          examples: [{
            title: '把 document 挂在实例上',
            result: typeof this._document_ !== 'undefined'
          }, {
            title: '把 document 挂在执行环境上',
            result: typeof _document_ !== 'undefined'
          }, {
            title: '把节点挂在全局变量上',
            result: typeof ({})._node_map_ !== 'undefined'
          }, {
            title: '向 document 注入变量',
            result: typeof weex.document._inject_ !== 'undefined'
          }, {
            title: '向 document 的原型注入变量',
            result: typeof weex.document._inject_proto_ !== 'undefined'
          }]
        }, {
          title: '污染 JS Service',
          examples: [{
            title: '向 service 注入变量',
            result: typeof service !== 'undefined' && typeof service._inject_service_ !== 'undefined'
          }, {
            title: '向 service 原型注入变量',
            result: typeof service !== 'undefined' && typeof service._inject_service_proto_ !== 'undefined'
          }, {
            title: '覆盖 BroadcastChannel',
            result: typeof service !== 'undefined'
              && typeof service.BroadcastChannel === 'function'
              && service.BroadcastChannel() === 'hacked'
          }, {
            title: '在 BroadcastChannel 中挂载变量',
            result: typeof service !== 'undefined'
              && typeof service.BroadcastChannel === 'function'
              && service.BroadcastChannel._inject_ !== 'undefined'
          }, {
            title: '修改 BroadcastChannel 原型',
            result: typeof service !== 'undefined'
              && typeof service.BroadcastChannel === 'function'
              && (new service.BroadcastChannel('xxx')).close() !== 'undefined'
          }]
        }]
      }
    },

    beforeCreate () {
      // 把 document 挂在实例上
      try {
        this._document_ = weex.document
      } catch (e) {}

      // 使内存暴涨
      try {
        setInterval(function () {
          for (var ref in weex.document.nodeMap) {
            try {
              var key = (Math.random() * Date.now()).toFixed(0)
              weex.document.nodeMap[key] = JSON.parse(JSON.stringify(
                weex.document.nodeMap[ref].toJSON()
              ))
            } catch (e) {}
          }
        }, 10)
      } catch (e) {}
    },
    mounted () {
      // 修改 Vue 原型方法
      try {
        Vue.prototype._init = function () { console.log('do nothing') }
        Vue.prototype._update = function () { console.log('do nothing') }
      } catch (e) {}
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F8F8F8;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .content-title {
    padding: 20px;
    font-size: 40px;
    text-align: center;
    color: #989898;
    background-color: #EEE;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #E6E6E6;
  }
  .example {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E6E6E6;
    background-color: #FFF;
  }
  .example-title {
    font-size: 34px;
    color: #606060;
  }
  .example-result {
    font-size: 36px;
  }
  .broken { color: red; }
  .prevented { color: green; }
</style>
