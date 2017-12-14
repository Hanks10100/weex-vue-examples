module.exports = {
  type: 'module',
  name: { zh: '模块', en: 'Module' },
  group: [{
    type: 'modal',
    name: 'modal',
    title: { zh: 'modal 模块', en: 'modal' },
    desc: {
      zh: 'modal 模块提供了以下展示消息框的 API：toast、alert、confirm 和 prompt。',
      en: 'Weex provides a series of message boxes: toast, alert, confirm and prompt.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/modal.html',
      en: 'http://weex-project.io/references/modules/modal.html'
    },
    examples: [{
      hash: '5e49976681ea1ae7bbcbce4c92b7771f',
      title: 'toast',
      screenshot: 'https://gw.alicdn.com/tfs/TB1TPWcdogQMeJjy0FiXXXhqXXa-540-844.png'
    }, {
      hash: 'd00060031b25fbfbdffdbf08b5524e51',
      title: 'alert',
      screenshot: 'https://gw.alicdn.com/tfs/TB1JsqddgoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '88b0782ba54695a66622988bfeb89fbd',
      title: 'confirm',
      screenshot: 'https://gw.alicdn.com/tfs/TB1PWmedogQMeJjy0FjXXaExFXa-540-844.png'
    }, {
      hash: '7763e5b0322cf625ec5221dea13ea5ec',
      title: 'prompt',
      screenshot: 'https://gw.alicdn.com/tfs/TB13B9gdgoQMeJjy0FpXXcTxpXa-540-844.png'
    }]
  }, {
    type: 'dom',
    name: 'dom',
    title: { zh: 'dom 模块', en: 'dom' },
    desc: {
      zh: '操作页面中的 Virtual-DOM 或者获取其信息。需要注意的是原生平台中并没有 Web 标准中的 DOM 结构。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/dom.html',
      en: 'http://weex-project.io/references/modules/dom.html'
    },
    examples: [{
      hash: '14df0c05474fd16d4690e22194a69599',
      title: 'scrollTo',
      screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: '13afb9ed3e3a79eda435113478fd83d9',
      title: 'getComponentRect',
      screenshot: 'https://gw.alicdn.com/tfs/TB1v5zscMvD8KJjy0FlXXagBFXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'addRule',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'stream',
    name: 'stream',
    title: { zh: 'stream 模块', en: 'stream' },
    desc: {
      zh: '发送网络请求并获取响应。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/stream.html',
      en: 'http://weex-project.io/references/modules/stream.html'
    },
    examples: [{
      hash: '2ae062b6a04124a35bbe2da3b1e5c07b',
      title: 'fetch',
      screenshot: 'https://gw.alicdn.com/tfs/TB1SAFdbLDH8KJjy1XcXXcpdXXa-540-844.png'
    }]
  }, {
    type: 'animation',
    name: 'animation',
    title: { zh: 'animation 模块', en: 'animation' },
    desc: {
      zh: 'animation 模块被用于在组件上执行动画。动画可以对组件执行一系列简单的变换 (位置、大小、旋转角度、背景颜色和不透明度等)。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/animation.html',
      en: 'http://weex-project.io/references/modules/animation.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'transform',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'navigator',
    name: 'navigator',
    title: { zh: 'navigator 模块', en: 'navigator' },
    desc: {
      zh: '众所周知，在浏览器里，我们可以通过前进或者回退按钮来切换页面，iOS/Android 的 navigator 模块就是用来实现类似的效果的。除了前进、回退功能，该模块还允许我们指定在切换页面的时候是否应用动画效果。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/navigator.html',
      en: 'http://weex-project.io/references/modules/navigator.html'
    },
    examples: [{
      hash: '28815dba72ee4091dfdb471f3b294e3e',
      title: 'push',
      screenshot: 'https://gw.alicdn.com/tfs/TB1Wh_CcILJ8KJjy0FnXXcFDpXa-540-844.png'
    }, {
      hash: '2af40e54aeef15228cb221c3cd57ae8f',
      title: 'pop',
      screenshot: 'https://gw.alicdn.com/tfs/TB1syzscMvD8KJjy0FlXXagBFXa-540-844.png'
    }]
  }, {
    type: 'storage',
    name: 'storage',
    title: { zh: 'storage 模块', en: 'storage' },
    desc: {
      zh: 'storage 模块可以对本地数据进行存储、修改、删除，并且该数据是永久保存的，除非手动清除或者代码清除。但是，storage 模块有一个限制就是浏览器端（H5）只能存储小于5M的数据，而在 Android 和 iOS 中是没什么限制的。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/storage.html',
      en: 'http://weex-project.io/references/modules/storage.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'setItem',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'getItem',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'removeItem',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'clipboard',
    name: 'clipboard',
    title: { zh: 'clipboard 模块', en: 'clipboard' },
    desc: {
      zh: 'clipboard 模块可以实现从系统的剪贴板中获取内容或者设置内容。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/clipboard.html',
      en: 'http://weex-project.io/references/modules/clipboard.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '3abe25e7dd6d52bf35edffd62ac6199e',
      title: { zh: '复制环境信息', en: 'Copy Environment Message' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
    }]
  }, {
    type: 'picker',
    name: 'picker',
    title: { zh: 'picker 模块', en: 'picker' },
    desc: {
      zh: '以下为 picker 相关的 API：用于数据选择，日期选择，时间选择。（ H5模块如需使用，请手动引入weex-picker组件）',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/picker.html',
      en: 'http://weex-project.io/references/modules/picker.html'
    },
    examples: [{
      hash: 'eddde63fc2f57debed15d4f0eaf38d7e',
      title: 'pick',
      screenshot: 'https://gw.alicdn.com/tfs/TB128rrcL6H8KJjy0FjXXaXepXa-540-844.png'
    }, {
      hash: 'e71e82157a8c65b33ac213a6a399c971',
      title: 'pickDate',
      screenshot: 'https://gw.alicdn.com/tfs/TB1gybCcILJ8KJjy0FnXXcFDpXa-540-844.png'
    }, {
      hash: 'cd8cae300c4b02d3e6f6f7ba54307029',
      title: 'pickTime',
      screenshot: 'https://gw.alicdn.com/tfs/TB1TyzscMvD8KJjy0FlXXagBFXa-540-844.png'
    }]
  }, {
    type: 'webview',
    name: 'webview',
    title: { zh: 'webview 模块', en: 'webview' },
    desc: {
      zh: '一系列的 <web> 组件操作接口。 比如 goBack、goForward、和 reload。通常与 <web> 组件共用。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/webview.html',
      en: 'http://weex-project.io/references/modules/webview.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'goBack',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'goForward',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'reload',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'meta',
    name: 'meta',
    title: { zh: 'meta 模块', en: 'meta' },
    desc: {
      zh: 'meta 模块可用于声明单个页面的元信息，通常是一些页面的配置，如容器的显示宽度 (viewport) 等。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/meta.html',
      en: 'http://weex-project.io/references/modules/meta.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'setViewport',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'WebSocket',
    name: 'WebSocket',
    title: { zh: 'WebSocket 模块', en: 'WebSocket' },
    desc: {
      zh: 'WebSockets 是一种先进的技术, 这使得在用户的 H5/iOS/Android 和一个服务器之间打开一个的交互式通信会话成为可能, 有了这个 API，你可以向服务器发送消息, 并接收事件驱动的响应, 无需轮询服务器的响应。',
      en: ''
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/websocket.html',
      en: 'http://weex-project.io/references/modules/websocket.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '使用范例', en: 'Use WebSocket' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
}
