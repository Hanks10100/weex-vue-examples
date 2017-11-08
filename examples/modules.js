module.exports = {
  type: 'module',
  name: { zh: '模块', en: 'Module' },
  group: [{
    type: 'modal',
    name: 'modal',
    title: 'modal 模块',
    desc: 'modal 模块提供了以下展示消息框的 API：toast、alert、confirm 和 prompt。',
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
      hash: 'ec8e7a35e1b2ca69af42a8e9e78b6d45',
      title: 'confirm',
      screenshot: 'https://gw.alicdn.com/tfs/TB1PWmedogQMeJjy0FjXXaExFXa-540-844.png'
    }, {
      hash: '3dc53746432468b662f4ade89a2dcd47',
      title: 'prompt',
      screenshot: 'https://gw.alicdn.com/tfs/TB13B9gdgoQMeJjy0FpXXcTxpXa-540-844.png'
    }]
  }, {
    type: 'dom',
    name: 'dom',
    title: 'dom 模块',
    desc: '操作页面中的 Virtual-DOM 或者获取其信息。需要注意的是原生平台中并没有 Web 标准中的 DOM 结构。',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/dom.html',
      en: 'http://weex-project.io/references/modules/dom.html'
    },
    examples: [{
      hash: 'c38fbd7922d42810393c7a23529d48a1',
      title: 'scrollTo',
      screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '获取布局数据',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'addRule',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'stream',
    name: 'stream',
    title: 'stream 模块',
    desc: '发送网络请求并获取响应。',
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
    title: 'animation 模块',
    desc: 'animation 模块被用于在组件上执行动画。动画可以对组件执行一系列简单的变换 (位置、大小、旋转角度、背景颜色和不透明度等)。',
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
      title: 'tarnsform',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'navigator',
    name: 'navigator',
    title: 'navigator 模块',
    desc: '众所周知，在浏览器里，我们可以通过前进或者回退按钮来切换页面，iOS/Android 的 navigator 模块就是用来实现类似的效果的。除了前进、回退功能，该模块还允许我们指定在切换页面的时候是否应用动画效果。',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/navigator.html',
      en: 'http://weex-project.io/references/modules/navigator.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'push',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: 'pop',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'storage',
    name: 'storage',
    title: 'storage 模块',
    desc: 'storage 模块可以对本地数据进行存储、修改、删除，并且该数据是永久保存的，除非手动清除或者代码清除。但是，storage 模块有一个限制就是浏览器端（H5）只能存储小于5M的数据，而在 Android 和 iOS 中是没什么限制的。',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/storage.html',
      en: 'http://weex-project.io/references/modules/storage.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '数据存取',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '数据查询',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '数据清除',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'clipboard',
    name: 'clipboard',
    title: 'clipboard 模块',
    desc: 'clipboard 模块可以实现从系统的剪贴板中获取内容或者设置内容。',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/clipboard.html',
      en: 'http://weex-project.io/references/modules/clipboard.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '377c4f4a6030b5842938afb814cf169f',
      title: '复制环境信息',
      screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
    }]
  }, {
    type: 'picker',
    name: 'picker',
    title: 'picker 模块',
    desc: '以下为 picker 相关的 API：用于数据选择，日期选择，时间选择。（ H5模块如需使用，请手动引入weex-picker组件）',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/picker.html',
      en: 'http://weex-project.io/references/modules/picker.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '数据选择',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '日期选择',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '时间选择',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'webview',
    name: 'webview',
    title: 'webview 模块',
    desc: '一系列的 <web> 组件操作接口。 比如 goBack、goForward、和 reload。通常与 <web> 组件共用。',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/webview.html',
      en: 'http://weex-project.io/references/modules/webview.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '页面跳转',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '页面刷新',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'meta',
    name: 'meta',
    title: 'meta 模块',
    desc: 'meta 模块可用于声明单个页面的元信息，通常是一些页面的配置，如容器的显示宽度 (viewport) 等。',
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
    title: 'WebSocket 模块',
    desc: 'WebSockets 是一种先进的技术, 这使得在用户的 H5/iOS/Android 和一个服务器之间打开一个的交互式通信会话成为可能, 有了这个 API，你可以向服务器发送消息, 并接收事件驱动的响应, 无需轮询服务器的响应。',
    docLink: {
      zh: 'http://weex-project.io/cn/references/modules/websocket.html',
      en: 'http://weex-project.io/references/modules/websocket.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '使用范例',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
}
