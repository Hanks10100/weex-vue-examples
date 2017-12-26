module.exports = {
  type: 'syntax',
  name: { zh: '语法', en: 'Syntax' },
  group: [{
    type: 'text-binding',
    name: { zh: '文本绑定', en: 'Text Binding' },
    title: { zh: '文本绑定', en: 'Text Binding' },
    desc: {
      zh: '数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值。',
      en: 'The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces).'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/syntax.html#插值',
      en: 'https://vuejs.org/v2/guide/syntax.html#Interpolations'
    },
    examples: [{
      hash: {
        zh: '34e42c91e1f86591563ec8897e6a095c',
        en: '207411d00e8af32213443b4d0c5db689'
      },
      title: { zh: '文本插值', en: 'Inline TextNode' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB1V5IXcMMPMeJjy1XdXXasrXXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB19gKsb8fH8KJjy1XbXXbLdXXa-540-844.png'
      }
    }, {
      hash: '68b02a5371eb7da5cb9dde1946ce2b68',
      title: { zh: '使用表达式', en: 'Using Expression' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1veLGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }]
  }, {
    type: 'v-bind',
    name: 'v-bind',
    title: { zh: '绑定属性值（v-bind）', en: 'v-bind' },
    desc: {
      zh: 'v-bind 可以动态地绑定一个或多个特性，或一个组件 prop 到表达式。可以简写成 `:` (半角冒号)。',
      en: 'Dynamically bind one or more attributes, or a component prop to an expression.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/api/#v-bind',
      en: 'https://vuejs.org/v2/api/#v-bind'
    },
    examples: [{
      hash: 'b62f1a5f4973f43fae9adca02864eb8b',
      title: { zh: '绑定属性值', en: 'Binding Props' },
      screenshot: 'https://gw.alicdn.com/tfs/TB150aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      hash: 'b142f24d2f0ab27f5f65448d2aa16970',
      title: { zh: '绑定表达式', en: 'Using Expression' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1veLGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '3a2cc3c7a465f6a07c4bd3a868c7e393',
      title: { zh: '样式值绑定', en: 'Style Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1o.62bH_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '2bc0de9ec2448a1f852f354349f66600',
      // hash: 'b4b1f5e4679efbe3c94864a1404bfeaf',
      title: { zh: '类名绑定', en: 'Class Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1o.62bH_I8KJjy1XaXXbsxpXa-540-844.png'
    }]
  }, {
    type: 'v-for',
    name: 'v-for',
    title: { zh: '循环指令（v-for）', en: 'v-for' },
    desc: {
      zh: 'v-for 基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression` 为当前遍历的元素提供别名。',
      en: 'We can use the v-for directive to render a `alias in expression` based on an array. The v-for directive requires a special syntax in the form of item in items.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/list.html',
      en: 'https://vuejs.org/v2/guide/list.html'
    },
    examples: [{
      hash: '38904c807f66b1a11de5ddf0d40b3d30',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1R_7.bjihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: '2cd124954175721d9145571bf722ce7a',
      title: { zh: '下标索引', en: 'Array Index' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dAivaLBNTKJjy0FdXXcPpVXa-540-844.png'
    }, {
      hash: '2b4222b828fac65257d9ed9f8932f2a1',
      title: { zh: '遍历 JS 对象', en: 'v-for With an Object' },
      screenshot: 'https://gw.alicdn.com/tfs/TB10r25bH_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '7364e9c3c25ab2cbc945903cea7b0878',
      title: { zh: '多层循环', en: 'Multiple v-for' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1giSLfwoQMeJjy0FoXXcShVXa-540-844.png'
    }]
  }, {
    type: 'v-if',
    name: 'v-if',
    title: { zh: '条件指令（v-if)', en: 'v-if' },
    desc: {
      zh: 'v-if 根据表达式的值的真假条件渲染元素，在切换时元素及它的数据绑定/组件被销毁并重建。同类指令还有 v-else 和 v-else-if。',
      en: 'Conditionally render the element based on the truthy-ness of the expression value.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/conditional.html',
      en: 'https://vuejs.org/v2/guide/conditional.html'
    },
    examples: [{
      hash: '736a5dd112a1a114a559218ed20cae08',
      title: 'v-if',
      screenshot: 'https://gw.alicdn.com/tfs/TB1BAuGb2DH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: 'b6b244c4d8623565e77d9de324ca8de1',
      title: 'v-else',
      screenshot: 'https://gw.alicdn.com/tfs/TB1P.TpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '22faff4ee6f235c0e8fb98b21c1ea662',
      title: 'v-else-if',
      screenshot: 'https://gw.alicdn.com/tfs/TB1P.TpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'v-on',
    name: 'v-on',
    title: { zh: '事件绑定（v-on）', en: 'v-on' },
    desc: {
      zh: '可以用 v-on 指令监听 DOM 事件来触发一些 JavaScript 代码，可以简写成 `@`。用在普通元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。',
      en: 'We can use the v-on directive to listen to DOM events and run some JavaScript when they’re triggered.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/events.html#监听事件',
      en: 'https://vuejs.org/v2/guide/events.html'
    },
    examples: [{
      hash: 'a3607094a4bf73a069a5c51efb47fe98',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '8e3a1cbcf1ba9af94fe6f77e9668e354',
      title: { zh: '内联语句', en: 'Inline Statement' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '3a019f2eca4a6966ee0c3b91e5b2fc5b',
      title: { zh: '传递参数', en: 'Inline Handler' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '8581f4d2ff8fb48bdc547d2465c0cf24',
      title: { zh: 'once 修饰符', en: '.once Modifier' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'v-model',
    name: 'v-model',
    title: { zh: '表单双向绑定（v-model）', en: 'v-model' },
    desc: {
      zh: '可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。',
      en: 'You can use the v-model directive to create two-way data bindings on form input and textarea elements. It automatically picks the correct way to update the element based on the input type.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/forms.html',
      en: 'https://vuejs.org/v2/guide/forms.html'
    },
    examples: [{
      hash: 'e1e4413c5252dc763b01f26ce60d5ee4',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '39684e82ad9a8e0b175f49e058cf7af6',
      title: { zh: '绑定 <textarea>', en: 'Using <textarea>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1y738XiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '各种表单组件', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'lazy 修饰符', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'trim 修饰符', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'number 修饰符', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'v-once',
    name: 'v-once',
    title: { zh: '一次性渲染（v-once）', en: 'v-once' },
    desc: {
      zh: '只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。',
      en: 'Render the element and component once only. On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performance.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/api/#v-once',
      en: 'https://vuejs.org/v2/api/#v-once'
    },
    examples: [{
      hash: 'db5a71d3f621f32261a4208943358092',
      title: { zh: '使用 v-once', en: 'Using v-once' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1dcTaewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: 'f66f49ad00f58ab8bd1fa580d27900f8',
      title: {
        zh: '不使用 v-once',
        en: 'Without v-once'
      },
      screenshot: 'https://gw.alicdn.com/tfs/TB1cITaewMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'filters',
    name: 'Filters',
    title: { zh: '过滤器（Filters）', en: 'Filters' },
    desc: {
      zh: 'Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache 插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示。',
      en: 'Vue.js allows you to define filters that can be used to apply common text formatting.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/filters.html',
      en: 'https://vuejs.org/v2/guide/filters.html'
    },
    examples: [{
      hash: '28df0a4424a9e9fe1411020de20d52c0',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1U8nAdr_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: 'b4eac5ccef8ef954858e9ef0c6aca9d7',
      title: { zh: '传递额外参数', en: 'Pass Arguments' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1SV_adBfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: '7b4a2ee438abe343b0a2f38556e730f1',
      title: { zh: '过滤器串联', en: 'Chained Filters' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1lETpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'mixins',
    name: 'Mixins',
    title: { zh: '混合（Mixins）', en: 'Mixins' },
    desc: {
      zh: '混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。',
      en: 'Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/mixins.html',
      en: 'https://vuejs.org/v2/guide/mixins.html'
    },
    examples: [{
      hash: 'c69cb31319ffe8e0b25543cfabcf06d6',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1HJHcdtfJ8KJjy0FeXXXKEXXa-540-844.png'
    }, {
      hash: '804d427a56528c3dc2706e77b93df516',
      title: { zh: '全局混合', en: 'Global Mixin' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1HJHcdtfJ8KJjy0FeXXXKEXXa-540-844.png'
    }, {
      hash: '92ab52525cb0d7d55d1ef007df90cf77',
      title: { zh: '生命周期混合', en: 'Lifecycle Mixin' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1bRLCdwDD8KJjy0FdXXcjvXXa-540-844.png'
    }, {
      hash: 'ee84c44bb3f4b23f83d52aecad30f8ea',
      title: { zh: '选项合并', en: 'Mixin Options' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1FUTpdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'component',
    name: { zh: '组件', en: 'Component' },
    title: { zh: '组件', en: 'Component' },
    desc: {
      zh: '组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树。',
      en: 'The component system is another important concept in Vue, because it’s an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components. If we think about it, almost any type of application interface can be abstracted into a tree of components'
    },
    docLink: {
      zh: 'https://cn.vuejs.org/v2/guide/index.html#组件化应用构建',
      en: 'https://vuejs.org/v2/guide/#Composing-with-Components'
    },
    examples: [{
      hash: '0ee7b5af70129e89b662ab07f927cf0a',
      title: { zh: '使用子组件', en: 'Composing Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'a91730c73df88b1649149dd2ebd61d20',
      title: { zh: '传递属性', en: 'Passing Data with Props' },
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'f5b561041de77d9fba8e70e0226c548e',
      title: { zh: '子组件的引用', en: 'Child Component Refs' },
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '多层子组件', en: 'Deep Composed Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '生命周期', en: 'Lifecycles' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '注册全局组件', en: 'Global Registration' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'df46cfd946e3479ffce93196b86e9d9c',
      title: { zh: '递归组件', en: 'Recursive Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1U868icrI8KJjy0FhXXbfnpXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '异步组件', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '内联模板', en: '' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'built-in',
    name: { zh: '内置组件', en: 'Built-in' },
    title: { zh: '内置组件', en: 'Built-in Components' },
    examples: [{
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '动态组件 <component>', en: 'Dynamic Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '用 <slot> 分发内容', en: 'Content Distribution with Slots' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '单个 solt', en: 'Single Slot' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '具名 slot', en: 'Named Slot' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '<transition>', en: '<transition>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '<transition-group>', en: '<transition-group>' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    // }, {
    //   hash: 'ccefdea9e9ef695acca7fb1b439277e2',
    //   title: { zh: '<keep-alive>', en: ' <keep-alive>' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'communication',
    name: { zh: '组件通信', en: 'Communication' },
    title: { zh: '组件通信', en: 'Component Communication' },
    examples: [{
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '自定义事件', en: 'Custom Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '父子组件通信', en: 'Parent-Child Communication' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '表单组件传值', en: 'Form Components' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ccefdea9e9ef695acca7fb1b439277e2',
      title: { zh: '非父子组件通信', en: 'Non Parent-Child Communication' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
}
