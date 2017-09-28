export default [
  {
    type: 'component',
    name: '组件',
    group: [{
      type: 'div',
      name: 'div',
      title: '<div> 组件',
      desc: '<div> 组件是用于包装其它组件的最基本容器。支持所有的通用样式、特性、flexbox 布局。其类似于 HTML 的 <div> 容器，但不能直接在里面添加文本（字符串），如果要展示文本，应该使用 <text> 组件。',
      docLink: 'http://weex-project.io/cn/references/components/div.html',
      examples: [{
        hash: 'd813b9f5d1e8ef95b0cfa32d469af236',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB11h7wewMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: 'ad002b5e26cf55475661b22e81682f79',
        title: '嵌套',
        screenshot: 'https://gw.alicdn.com/tfs/TB1z9P1ewMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '7613db44f6c03a5849937fbbdeebf69d',
        title: '文字节点',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qlG2cwoQMeJjy1XaXXcSsFXa-540-844.png'
      }]
    }, {
      type: 'text',
      name: 'text',
      title: '<text> 组件',
      desc: '<text> 是 Weex 内置的组件，用来将文本按照指定的样式渲染出来。<text> 只能包含文本值，不支持子组件，你可以使用 {{}} 标记插入变量值作为文本内容。',
      docLink: 'http://weex-project.io/cn/references/components/text.html',
      examples: [{
        hash: '3e0220d7b379955a26039131f153a360',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1V5IXcMMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '25b96fb0283300df1b183d019d835e4f',
        title: 'lines 属性',
        screenshot: 'https://gw.alicdn.com/tfs/TB19JaYcMoQMeJjy0FpXXcTxpXa-540-844.png'
      }, {
        hash: '7e123f72106c5dbba7675f6ee3bd35d2',
        title: '保留首尾空格',
        screenshot: 'https://gw.alicdn.com/tfs/TB140aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
      }, {
        hash: '161cd0771fd95f9e73c7663d4674c4f4',
        title: '实体字符',
        screenshot: 'https://gw.alicdn.com/tfs/TB1c41UcMoQMeJjy1XaXXcSsFXa-540-844.png'
      }]
    }, {
      type: 'image',
      name: 'image',
      title: '<image> 组件',
      desc: '<image> 组件用于渲染图片，并且它不能包含任何子组件。需要注意的是，必须明确指定 width 和 height，否则图片无法显示。',
      docLink: 'http://weex-project.io/cn/references/components/image.html',
      examples: [{
        hash: 'c8d67a852dca4865b06cf372cd5b3c17',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB150aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
      }, {
        hash: '859c22672d2b5d7fb4db9a37c0d5b6ec',
        title: 'resize 属性',
        screenshot: 'https://gw.alicdn.com/tfs/TB1DPa1cMoQMeJjy0FoXXcShVXa-540-844.png'
      }, {
        hash: '97d978c234dffe96f594c7c10e9119d0',
        title: '浮层文字',
        screenshot: 'https://gw.alicdn.com/tfs/TB1Mx1UcMoQMeJjy1XaXXcSsFXa-540-844.png'
      }, {
        hash: '23703f3be5512d0419086d8e7937bd8d',
        title: '图片实际大小',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sAh1gMMPMeJjy1XbXXcwxVXa-540-844.png'
      }, {
        hash: '571231d08dee12a8feaa76d1109fbcdc',
        title: 'Gif 图片',
        screenshot: 'https://gw.alicdn.com/tfs/TB1cbYxdwMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: 'Base64 图片',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'list',
      name: 'list',
      title: '<list> 组件',
      desc: '<list> 组件是提供垂直列表功能的核心组件，拥有平滑的滚动和高效的内存管理，非常适合用于长列表的展示。最简单的使用方法是在 <list> 标签内使用数组循环生成的多个 <cell> 标签。',
      docLink: 'http://weex-project.io/cn/references/components/list.html',
      examples: [{
        hash: '3faed12fc18c947255abfa8354570170',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1pgDZcMoQMeJjy1XaXXcSsFXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '<header>',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '<loading>',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '<refresh>',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: 'ba02d2084739897ccf0351f98e075051',
        title: 'loadmore 事件',
        screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: 'appear 事件',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'scroller',
      name: 'scroller',
      title: '<scroller> 组件',
      desc: '<scroller> 是一个竖直的，可以容纳多个排成一列的子组件的滚动器。如果子组件的总高度高于其本身，那么所有的子组件都可滚动。',
      docLink: 'http://weex-project.io/cn/references/components/scroller.html',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '水平滚动',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '<loading>',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '<refresh>',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '71013c3598e6edbb80bfc6a509247644',
        title: 'loadmore',
        screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: 'c38fbd7922d42810393c7a23529d48a1',
        title: 'scrollTo',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }, {
      type: 'input',
      name: 'input',
      title: '<input> 组件',
      desc: 'Weex 内置的 <input> 组件用来创建接收用户输入字符的输入组件。 <input> 组件的工作方式因 type 属性的值而异，比如 text, password, url, email, tel 等。此组件不支持子组件和 click 事件。',
      docLink: 'http://weex-project.io/cn/references/components/input.html',
      examples: [{
        hash: 'ed21daa55c43139ddac26900526f18b3',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: 'a06f7f8f319e8aedc0e8763ec58c4cf1',
        title: 'placeholder',
        screenshot: 'https://gw.alicdn.com/tfs/TB1XPmcdgoQMeJjy0FoXXcShVXa-540-844.png'
      }, {
        hash: 'ed959174686015dd7ab2d7e558ad8e2d',
        title: '初始状态',
        screenshot: 'https://gw.alicdn.com/tfs/TB1rnh_diERMeJjy0FcXXc7opXa-540-844.png'
      }, {
        hash: 'd4b5539e9eee2a080b2a7d4df7c622f2',
        title: '输入框类型',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qDh_diERMeJjy0FcXXc7opXa-540-844.png'
      }, {
        hash: 'c660d4c324ed5f65ee86be009b290328',
        title: '事件处理',
        screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'textarea',
      name: 'textarea',
      title: '<textarea> 组件',
      desc: 'textarea 是 Weex 内置的一个组件，用于用户交互，接受用户输入数据。可以认为是允许多行的 <input> 组件。',
      docLink: 'http://weex-project.io/cn/references/components/textarea.html',
      examples: [{
        hash: 'd6a7858c51fbe4f57a8749cee8987cf2',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1TSyddgoQMeJjy0FoXXcShVXa-540-844.png'
      }, {
        hash: '2dbf1ef9648e66244638502bc31859a4',
        title: '默认行数',
        screenshot: 'https://gw.alicdn.com/tfs/TB1AsF1diERMeJjSspjXXcpOXXa-540-844.png'
      }]
    }, {
      type: 'switch',
      name: 'switch',
      title: '<switch> 组件',
      desc: '<switch> 是 Weex 的内置组件，用来创建与 iOS 一致样式的按钮。例如在 iPhone 中的设置应用中的飞行模式按钮就是一个 switch 按钮。',
      docLink: 'http://weex-project.io/cn/references/components/switch.html',
      examples: [{
        hash: 'b3247046e3ef38cbf5fe848922e811a9',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '8a049fb7ff19c0ee9316a483b235dd26',
        title: '初始状态',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: 'b48549c39f2e82178ce8b94b395d1d0b',
        title: '事件处理',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'video',
      name: 'video',
      title: '<video> 组件',
      desc: '<video> 组件可以让我们在 Weex 页面中嵌入视频内容。<text> 是唯一合法的子组件。',
      docLink: 'http://weex-project.io/cn/references/components/video.html',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '播放控制',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '事件处理',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'web',
      name: 'web',
      title: '<web> 组件',
      desc: '使用 <web> 组件在 Weex 页面中嵌入一张网页内容。src 属性用来指定资源地址。你也可以使用 webview module 来控制 web 的行为，比如前进、后退和重载。',
      docLink: 'http://weex-project.io/cn/references/components/web.html',
      examples: [{
        hash: '4e64eeb667e3d3959c310eb1e66d3105',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1LpGHdgMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '页面跳转',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '传递参数',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '事件处理',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'richtext',
      name: 'richtext',
      title: '富文本组件',
      desc: '',
      examples: [{
        hash: '36a1999a7957de7bcbeb7cca95ba46d2',
        title: '图文混排',
        screenshot: 'https://gw.alicdn.com/tfs/TB1VPOPcMMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '8e3c274f5cae4a391a14ac81c890325f',
        title: '内容输入',
        screenshot: 'https://gw.alicdn.com/tfs/TB1SzOPcMMPMeJjy1XdXXasrXXa-540-844.png'
      }]
    }, {
      type: 'waterfall',
      name: 'waterfall',
      title: '瀑布流组件',
      desc: '提供瀑布流布局的组件。',
      docLink: 'http://weex-project.io/cn/references/components/waterfall.html',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }]
  }, {
    type: 'module',
    name: '模块',
    group: [{
      type: 'modal',
      name: 'modal',
      title: 'modal 模块',
      desc: 'modal 模块提供了以下展示消息框的 API：toast、alert、confirm 和 prompt。',
      docLink: 'http://weex-project.io/cn/references/modules/modal.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/dom.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/stream.html',
      examples: [{
        hash: '87d3d8334943733cdc1ecfe10e403613',
        title: 'fetch',
        screenshot: 'https://gw.alicdn.com/tfs/TB1iC98cwoQMeJjy0FnXXb8gFXa-540-844.png'
      }]
    }, {
      type: 'animation',
      name: 'animation',
      title: 'animation 模块',
      desc: 'animation 模块被用于在组件上执行动画。动画可以对组件执行一系列简单的变换 (位置、大小、旋转角度、背景颜色和不透明度等)。',
      docLink: 'http://weex-project.io/cn/references/modules/animation.html',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '最简例子',
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
      docLink: 'http://weex-project.io/cn/references/modules/navigator.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/storage.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/clipboard.html',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '最简例子',
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
      docLink: 'http://weex-project.io/cn/references/modules/picker.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/webview.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/meta.html',
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
      docLink: 'http://weex-project.io/cn/references/modules/WebSocket.html',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '使用范例',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }]
  }, {
    type: 'syntax',
    name: '语法',
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
        title: '最简例子',
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
        title: '最简例子',
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
        title: '最简例子',
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
        title: '最简例子',
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
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
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
        title: '最简例子',
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
        title: '最简例子',
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
        title: '最简例子',
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
        title: '最简例子',
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
        title: '最简例子',
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
        title: '最简例子',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }]
  }, {
    type: 'others',
    name: '其他',
    group: [{
      type: 'styles',
      name: '样式',
      examples: [{
        hash: 'ad002b5e26cf55475661b22e81682f79',
        title: '边框/背景',
        screenshot: 'https://gw.alicdn.com/tfs/TB1z9P1ewMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '3488279c3502d1234b437c2f718f3a55',
        title: '半透明',
        screenshot: 'https://gw.alicdn.com/tfs/TB1FPAzd3MPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '5219829fd0a5f59dc9208c8327e02e92',
        title: 'position',
        screenshot: 'https://gw.alicdn.com/tfs/TB1CCP1ewMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '94a627f3ffa7007f3a2e9c97a5e245ec',
        title: 'box shadow',
        screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
      }, {
        hash: 'd1648814d06fdf59cd99ea92c716694a',
        title: '线性渐变',
        screenshot: 'https://gw.alicdn.com/tfs/TB1JQCEhgoQMeJjy1XaXXcSsFXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '伪类选择器',
        screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
      }, {
        hash: 'af853645f7f3dc53126ff47a2b820626',
        title: '网格背景',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: 'a3faee51f04d2ea27f6c5302c0350337',
        title: '透明背景',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '瀑布流',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: 'Grid',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'flexbox',
      name: 'Flexbox',
      title: 'Flexbox 布局',
      desc: 'CSS 弹性盒子布局是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。',
      docLink: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout',
      examples: [{
        hash: 'fb3dbc872b4ccd068bc61a551c02dcc0',
        title: 'flex-direction',
        screenshot: 'https://gw.alicdn.com/tfs/TB1aIJHgMoQMeJjy0FpXXcTxpXa-540-844.png'
      }, {
        hash: '4a7214eafa1c07190e81e2c41d30e030',
        title: 'flex-wrap',
        screenshot: 'https://gw.alicdn.com/tfs/TB1kQQeczihSKJjy0FlXXadEXXa-540-844.png'
      }, {
        hash: '5fc9541e4c0a10484482ae7c539960ca',
        title: 'justify-content',
        screenshot: 'https://gw.alicdn.com/tfs/TB1PNNVgMoQMeJjy0FoXXcShVXa-540-844.png'
      }, {
        hash: 'fc795cfba02d44a895d3df603a675d78',
        title: 'align-items',
        screenshot: 'https://gw.alicdn.com/tfs/TB1ADdPgMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '0650d1e5f089254de707a4af6ea1d736',
        title: 'flex-flow',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qktHgMoQMeJjy0FnXXb8gFXa-540-844.png'
      }, {
        hash: 'cac1573b8689adbfceecf58f4293654c',
        title: 'order',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qMv.cqagSKJjy0FhXXcrbFXa-540-844.png'
      }, {
        hash: '301f115bc9cb5d62c21e4f5272a3491d',
        title: 'align-self',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qDBGgMMPMeJjy1XbXXcwxVXa-540-844.png'
      }, {
        hash: 'bdee705206b8d2a447a51dc3b81fa6d8',
        title: 'align-content',
        screenshot: 'https://gw.alicdn.com/tfs/TB1OQIeczihSKJjy0FlXXadEXXa-540-844.png'
      }, {
        hash: '148cef9b572617067b8cfe208b8e93db',
        title: 'flex-grow',
        screenshot: 'https://gw.alicdn.com/tfs/TB1vvVCgMoQMeJjy1XaXXcSsFXa-540-844.png'
      }, {
        hash: '4149549dbfbef3f6090ff0711f016263',
        title: 'flex-shrink',
        screenshot: 'https://gw.alicdn.com/tfs/TB1QvVCgMoQMeJjy1XaXXcSsFXa-540-844.png'
      }, {
        hash: 'b23c7139b09cfc99e6df3dd0a9f7b326',
        title: 'flex-basis',
        screenshot: 'https://gw.alicdn.com/tfs/TB14h8mb2xNTKJjy0FjXXX6yVXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: 'flex',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'hack',
      name: '黑科技',
      title: 'Expression Binding',
      desc: '',
      docLink: '',
      examples: [{
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '手势绑定',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'useful',
      name: '功能',
      examples: [{
        hash: '377c4f4a6030b5842938afb814cf169f',
        title: '获取环境信息',
        screenshot: 'https://gw.alicdn.com/tfs/TB1yJC8cEgQMeJjy0FjXXaExFXa-540-844.png'
      }, {
        hash: 'd877dd3bab71943e64320679dcd7ddac',
        title: '功能检测',
        screenshot: 'https://gw.alicdn.com/tfs/TB1TOGuc3MPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '8313d0b11a4e90b2f002833ba6b50bc4',
        title: '支持 wasm ？',
        screenshot: 'https://gw.alicdn.com/tfs/TB1cHyefwMPMeJjy1XbXXcwxVXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '自定义字体',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '43dab802ecd9361850ea317a229895a3',
        title: '学习 Vue.js',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'showCase',
      name: '实例',
      examples: [{
        hash: '8b7ccae9e15438c220257fac0d63d43b',
        title: 'Todo List',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '59eebdb3f4aba2058add102a33c9c57e',
        title: '计算器',
        screenshot: 'https://gw.alicdn.com/tfs/TB1tXOrc3MPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4624d605004fc7eb9f14ca9c5a226fe3',
        title: '扫雷',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }]
    }, {
      type: 'realCase',
      name: '仿',
      examples: [{
        // hash: 'f28215d4d9d96de91115cdd1528bcacd',
        hash: '8ee2850f39123a350333eb08beac7115',
        title: '朋友圈',
        screenshot: 'https://gw.alicdn.com/tfs/TB1G7LydwMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '03e9275f49963a4367e08c41edc725d7',
        title: '聊天框',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '013b1e76d2c5419e32bc3e02aa1bef26',
        title: '应用列表',
        screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '6c458803b2a83a336099ff43dae4d1a5',
        title: '商品展示',
        screenshot: 'https://gw.alicdn.com/tfs/TB1juElXjihSKJjy0FfXXbGzFXa-540-844.png'
      }]
    }, {
      type: 'flatten-benchmark',
      name: '平铺压测',
      examples: [{
        hash: 'ae5fd588a6522ebb62c8cc9fa049098b',
        title: '节点 838',
        screenshot: 'https://gw.alicdn.com/tfs/TB1BVwkcMoQMeJjy0FoXXcShVXa-540-844.png'
      }, {
        hash: 'b881a66eaa1133778940bb59836b9635',
        title: '节点 2296',
        screenshot: 'https://gw.alicdn.com/tfs/TB1.OsgcMoQMeJjy0FnXXb8gFXa-540-844.png'
      }, {
        hash: '3fa4de0a3e7dab86d9d8aa2ad380c677',
        title: '节点 3295',
        screenshot: 'https://gw.alicdn.com/tfs/TB1qgsccUgQMeJjy0FiXXXhqXXa-540-844.png'
      }, {
        hash: '01706667abe088ba534cdc0bdb3bb23b',
        title: '节点 5833',
        screenshot: 'https://gw.alicdn.com/tfs/TB1leA3cCFRMKJjy0FhXXX.xpXa-540-844.png'
      }, {
        hash: 'ae643775651ca4190c3250ce0a1ea1fb',
        title: '节点 8990',
        screenshot: 'https://gw.alicdn.com/tfs/TB1o0AicMoQMeJjy0FnXXb8gFXa-540-844.png'
      }, {
        hash: 'aacd3f0c12d7a2befc7c9de9986227a7',
        title: '节点 12948',
        screenshot: 'https://gw.alicdn.com/tfs/TB1glklcMoQMeJjy0FoXXcShVXa-540-844.png'
      }]
    }, {
      type: 'layer-benchmark',
      name: '层级压测',
      examples: [{
        hash: '33c93497fe648eeb3bd5a8b9eb709977',
        title: '层级 100',
        screenshot: 'https://gw.alicdn.com/tfs/TB1G2T7cMMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: '6ee24082dae44130bbedf1970f67fc35',
        title: '层级 200',
        screenshot: 'https://gw.alicdn.com/tfs/TB1kLZicMMPMeJjy1XcXXXpppXa-540-844.png'
      }, {
        hash: '4455c5fc1155d294b8ea147cd1e677c8',
        title: '层级 500',
        screenshot: 'https://gw.alicdn.com/tfs/TB1H1z8cMMPMeJjy1XdXXasrXXa-540-844.png'
      }, {
        hash: 'ba59f9a74547f709dd4e8d6fa7dccbae',
        title: '层级 1000',
        screenshot: 'https://gw.alicdn.com/tfs/TB1I1z8cMMPMeJjy1XdXXasrXXa-540-844.png'
      }]
    }]
  }
]
