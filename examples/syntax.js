module.exports = {
  type: 'syntax',
  name: { zh: '语法', en: 'Syntax' },
  group: [{
    type: 'Mustache',
    name: 'Mustache',
    title: '文本绑定的语法',
    desc: '数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值。',
    docLink: 'https://cn.vuejs.org/v2/guide/syntax.html#插值',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '文本插值',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '使用表达式',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-bind',
    name: 'v-bind',
    title: '绑定属性值',
    desc: 'v-bind 可以动态地绑定一个或多个特性，或一个组件 prop 到表达式。可以简写成 `:` (半角冒号)。',
    docLink: 'https://cn.vuejs.org/v2/api/#v-bind',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '绑定表达式',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '样式值绑定',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '类名绑定',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-for',
    name: 'v-for',
    title: '循环指令',
    desc: 'v-for 基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 alias in expression 为当前遍历的元素提供别名。',
    docLink: 'https://cn.vuejs.org/v2/guide/list.html',
    examples: [{
      hash: '38904c807f66b1a11de5ddf0d40b3d30',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1R_7.bjihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: '2cd124954175721d9145571bf722ce7a',
      title: '下标索引',
      screenshot: 'https://gw.alicdn.com/tfs/TB1dAivaLBNTKJjy0FdXXcPpVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '遍历 JS 对象',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '7364e9c3c25ab2cbc945903cea7b0878',
      title: '多层循环',
      screenshot: 'https://gw.alicdn.com/tfs/TB1giSLfwoQMeJjy0FoXXcShVXa-540-844.png'
    }]
  }, {
    type: 'v-if',
    name: 'v-if',
    title: '条件指令',
    desc: 'v-if 根据表达式的值的真假条件渲染元素，在切换时元素及它的数据绑定/组件被销毁并重建。同类指令还有 v-else 和 v-else-if。',
    docLink: 'https://cn.vuejs.org/v2/guide/conditional.html',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'v-else',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'v-else-if',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-on',
    name: 'v-on',
    title: '事件绑定',
    desc: '可以用 v-on 指令监听 DOM 事件来触发一些 JavaScript 代码，可以简写成 `@`。用在普通元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。',
    docLink: 'https://cn.vuejs.org/v2/guide/events.html#监听事件',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '内联方法',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '修饰符',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-modal',
    name: 'v-modal',
    title: '表单双向绑定',
    desc: '可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。',
    docLink: 'https://cn.vuejs.org/v2/guide/forms.html',
    examples: [{
      hash: 'e1e4413c5252dc763b01f26ce60d5ee4',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'textarea',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '各种表单组件',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'lazy 修饰符',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'trim 修饰符',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'number 修饰符',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-once',
    name: 'v-once',
    title: '一次性渲染',
    desc: '只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。',
    docLink: 'https://cn.vuejs.org/v2/api/#v-once',
    examples: [{
      hash: 'db5a71d3f621f32261a4208943358092',
      title: '使用 v-once',
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: 'f66f49ad00f58ab8bd1fa580d27900f8',
      title: '不使用 v-once',
      screenshot: 'https://gw.alicdn.com/tfs/TB1cITaewMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'component',
    name: 'component',
    title: '动态组件',
    desc: '通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。',
    docLink: 'https://cn.vuejs.org/v2/guide/components.html#动态组件',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'slot',
    name: 'slot',
    title: '内容分发',
    desc: '为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发(或 “transclusion”)。Vue.js 实现了一个内容分发 API，参照了当前 Web 组件规范草案，使用特殊的 <slot> 元素作为原始内容的插槽。',
    docLink: 'https://cn.vuejs.org/v2/guide/components.html#使用-Slots-分发内容',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '单个 solt',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '具名 slot',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'filter',
    name: 'filter',
    title: '过滤器',
    desc: 'Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache 插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示。',
    docLink: 'https://cn.vuejs.org/v2/guide/filters.html',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '传递额外参数',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '过滤器串联',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'mixin',
    name: 'mixin',
    title: '混合',
    desc: '混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。',
    docLink: 'https://cn.vuejs.org/v2/guide/mixins.html',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '全局混合',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '选项合并',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '生命周期混合',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'transition',
    name: 'transition',
    title: '节点过渡动画',
    desc: '<transition> 元素作为单个元素/组件的过渡效果。<transition> 不会渲染额外的 DOM 元素，也不会出现在检测过的组件层级中。它只是将内容包裹在其中，简单的运用过渡行为。',
    docLink: 'https://cn.vuejs.org/v2/api/#transition',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'keep-alive',
    name: 'keep-alive',
    title: '缓存组件',
    desc: '<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。',
    docLink: 'https://cn.vuejs.org/v2/api/#keep-alive',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
}
