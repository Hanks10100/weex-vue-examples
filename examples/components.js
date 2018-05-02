module.exports = {
  type: 'component',
  name: { zh: '组件', en: 'Component' },
  group: [{
    type: 'div',
    name: 'div',
    title: { zh: '<div> 组件', en: '<div>' },
    desc: {
      zh: '<div> 组件是用于包装其它组件的最基本容器。支持所有的通用样式、特性、flexbox 布局。其类似于 HTML 的 <div> 容器，但不能直接在里面添加文本（字符串），如果要展示文本，应该使用 <text> 组件。',
      en: '<div> is the most fundamental component which is a contianer to wrap any other components. It supports all the common styles, attributes and layout of flexbox.',
    },
    docLink: {
      en: 'http://weex-project.io/references/components/div.html',
      zh: 'http://weex-project.io/cn/references/components/div.html',
    },
    examples: [{
    //   hash: 'd813b9f5d1e8ef95b0cfa32d469af236',
    //   title: { zh: '最简例子', en: 'Sample' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB11h7wewMPMeJjy1XcXXXpppXa-540-844.png'
    // }, {
      hash: 'fb2522e71268aa8fb573eb20129ac4eb',
      title: { zh: '嵌套', en: 'Nested' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1uKLGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '3488279c3502d1234b437c2f718f3a55',
      title: { zh: '重叠', en: 'Overlap' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1FPAzd3MPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '7613db44f6c03a5849937fbbdeebf69d',
      title: { zh: '文字节点', en: 'Text Node' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1qlG2cwoQMeJjy1XaXXcSsFXa-540-844.png'
    }]
  }, {
    type: 'text',
    name: 'text',
    title: { zh: '<text> 组件', en: '<text>' },
    desc: {
      zh: '<text> 是 Weex 内置的组件，用来将文本按照指定的样式渲染出来。<text> 只能包含文本值，不支持子组件，你可以使用 {{}} 标记插入变量值作为文本内容。',
      en: 'The weex builtin component ‘text’ is used to render text with specified style rule. tag can contain text value only. You can use variable interpolation in the text content with the mark {{}}.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/text.html',
      en: 'http://weex-project.io/references/components/text.html'
    },
    examples: [{
      hash: {
        zh: '3e0220d7b379955a26039131f153a360',
        en: 'a718b029a7ba9cea08e84a6c22ec9bc4'
      },
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: {
        zh: 'https://gw.alicdn.com/tfs/TB1V5IXcMMPMeJjy1XdXXasrXXa-540-844.png',
        en: 'https://gw.alicdn.com/tfs/TB19gKsb8fH8KJjy1XbXXbLdXXa-540-844.png'
      }
    }, {
      hash: '25b96fb0283300df1b183d019d835e4f',
      title: { zh: 'lines 属性', en: '"lines"' },
      screenshot: 'https://gw.alicdn.com/tfs/TB19JaYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      scope: 'website',
      hash: '7e123f72106c5dbba7675f6ee3bd35d2',
      title: { zh: '保留首尾空格', en: 'Trim space' },
      screenshot: 'https://gw.alicdn.com/tfs/TB140aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
      hash: '161cd0771fd95f9e73c7663d4674c4f4',
      title: { zh: '实体字符', en: 'Entity character' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1c41UcMoQMeJjy1XaXXcSsFXa-540-844.png'
    }]
  }, {
    type: 'image',
    name: 'image',
    title: { zh: '<image> 组件', en: '<image>' },
    desc: {
      zh: '<image> 组件用于渲染图片，并且它不能包含任何子组件。需要注意的是，必须明确指定 width 和 height，否则图片无法显示。',
      en: 'image tag is used to render a specified picture, and it shouldn’t contain any child component. <img> is not supported currently.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/image.html',
      en: 'http://weex-project.io/references/components/image.html'
    },
    examples: [{
      // hash: 'c8d67a852dca4865b06cf372cd5b3c17',
      hash: 'e9cda6ca9ec05f2ff1852be82fc8f91f',
      title: { zh: '最简例子', en: 'Sample' },
      // screenshot: 'https://gw.alicdn.com/tfs/TB150aYcMoQMeJjy0FpXXcTxpXa-540-844.png'
      screenshot: 'https://gw.alicdn.com/tfs/TB12KPGbS_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '5bac698a83ca8c0467426746be011252',
      title: { zh: 'resize 属性', en: '"resize" Attribute' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1wKHLbILJ8KJjy0FnXXcFDpXa-540-844.png'
    }, {
      hash: '97d978c234dffe96f594c7c10e9119d0',
      title: { zh: '浮层文字', en: 'Layers' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1Mx1UcMoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '23703f3be5512d0419086d8e7937bd8d',
      title: { zh: '图片实际大小', en: 'Original Size' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sAh1gMMPMeJjy1XbXXcwxVXa-540-844.png'
    }, {
      hash: '571231d08dee12a8feaa76d1109fbcdc',
      title: { zh: 'Gif 图片', en: 'Gif Image' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1cbYxdwMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: 'Base64 图片', en: 'Base64 Image' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'list',
    name: 'list',
    title: { zh: '<list> 组件', en: '<list>' },
    desc: {
      zh: '<list> 组件是提供垂直列表功能的核心组件，拥有平滑的滚动和高效的内存管理，非常适合用于长列表的展示。最简单的使用方法是在 <list> 标签内使用数组循环生成的多个 <cell> 标签。',
      en: 'The List component, which inherits from Scroller component, is a core component, and it provides the most popular features for using a list of items.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/list.html',
      en: 'http://weex-project.io/references/components/list.html'
    },
    examples: [{
      hash: '3faed12fc18c947255abfa8354570170',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1pgDZcMoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '56f59761b7217e0f126f1de99a21a239',
      title: '<header>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1N_zLdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<loading>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<refresh>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'f4e660c403c0fd5140ac2747f498d948',
      title: { zh: 'loadmore 事件', en: '"loadmore" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'c7f682768e18b83bfca7f1327dfab9cd',
      title: { zh: 'appear 事件', en: '"appear" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1MnzLdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }]
  }, {
    type: 'scroller',
    name: 'scroller',
    title: { zh: '<scroller> 组件', en: '<scroller>' },
    desc: {
      zh: '<scroller> 是一个竖直的，可以容纳多个排成一列的子组件的滚动器。如果子组件的总高度高于其本身，那么所有的子组件都可滚动。',
      en: 'A scroller is a component in vertical direction which can have multiple child components in one column. If total height of its child components exceed the height of the scroller, the whole child components will be scrollable.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/scroller.html',
      en: 'http://weex-project.io/references/components/scroller.html'
    },
    examples: [{
      hash: '586ca3414132895999430f6e44d81419',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'c626a5fb4981e8e8bce92d7b012c26b4',
      title: { zh: '水平滚动', en: 'Horizontal Scroll' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1QkqGb2DH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<loading>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: '<refresh>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'eb1f5edea6cb8f4fea06d67dc071eff7',
      title: { zh: 'loadmore 事件', en: '"loadmore" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '7e17173fb09cd29f3daa3a87739df60d',
      title: { zh: 'appear 事件', en: '"appear" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1MnzLdxrI8KJjy0FpXXb5hVXa-540-844.png'
    }, {
      hash: '14df0c05474fd16d4690e22194a69599',
      title: 'scrollTo',
      screenshot: 'https://gw.alicdn.com/tfs/TB1ZIPecwoQMeJjy0FoXXcShVXa-540-844.png'
    }]
  }, {
    type: 'slider',
    name: 'slider',
    title: { zh: '<slider> 组件', en: '<slider>' },
    desc: {
      zh: '<slider> 组件用于在一个页面中展示多个图片，在前端，这种效果被称为 轮播图。',
      en: 'A slide’s player to show slides (mostly as pictures) one page by another. The default interval between two slides is 3 seconds.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/slider.html',
      en: 'http://weex-project.io/references/components/slider.html'
    },
    examples: [{
      hash: '091cd18fe9cc00550b956f0fe3d7259b',
      title: { zh: '最简例子', en: 'Simple' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1aIH3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: 'cbe5742a1b9e0dc7586b0102b658b42b',
      title: { zh: '自动播放', en: 'Auto Play' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1ecL3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: 'd835d18c6d411299f3aa8c68011d6748',
      title: { zh: '<indicator>', en: 'With Indicator' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sdb3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: 'a68f08ca82e2cc52126f3a02dbb1ac3e',
      title: { zh: '间隔时间', en: 'Interval' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1XJj3hiqAXuNjy1XdXXaYcVXa-540-844.png'
    }, {
      hash: '2d8da136e33f63a0bfe4b1e42362405b',
      title: '<slider-neighbor>',
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'input',
    name: 'input',
    title: { zh: '<input> 组件', en: '<input>' },
    desc: {
      zh: 'Weex 内置的 <input> 组件用来创建接收用户输入字符的输入组件。 <input> 组件的工作方式因 type 属性的值而异，比如 text, password, url, email, tel 等。此组件不支持子组件和 click 事件。',
      en: 'The weex builtin component input is used to create input controls to receive the user’s input characters.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/input.html',
      en: 'http://weex-project.io/references/components/input.html'
    },
    examples: [{
      hash: '9ff5e5ded4969d19f76e028bf1440309',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '185e8574389d3242a79090414c336e4d',
      title: 'Placeholder',
      screenshot: 'https://gw.alicdn.com/tfs/TB1XPmcdgoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: 'aab3e1a3835c9cdbed53fb127738507f',
      title: { zh: '初始状态', en: 'Initial State' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1rnh_diERMeJjy0FcXXc7opXa-540-844.png'
    }, {
      hash: '75492bb1c1af2b44293ce11164c0b3ba',
      title: { zh: '输入框类型', en: 'Input Type' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1qDh_diERMeJjy0FcXXc7opXa-540-844.png'
    }, {
      hash: '38cfc531ae3c0a10ac10236cd869e9eb',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'textarea',
    name: 'textarea',
    title: { zh: '<textarea> 组件', en: '<textarea>' },
    desc: {
      zh: 'textarea 是 Weex 内置的一个组件，用于用户交互，接受用户输入数据。可以认为是允许多行的 <input> 组件。',
      en: 'The weex builtin component textarea is used to create interactive controls to accept data from users. It can be a multi-line input.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/textarea.html',
      en: 'http://weex-project.io/references/components/textarea.html'
    },
    examples: [{
      hash: '126de8266778ddc7e967ef4cf1c98dec',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1TSyddgoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: '03caa359a9c4bf9fdc8a1d343f7f7a69',
      title: { zh: '默认行数', en: 'Default "rows"' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1AsF1diERMeJjSspjXXcpOXXa-540-844.png'
    }]
  }, {
    type: 'switch',
    name: 'switch',
    title: { zh: '<switch> 组件', en: '<switch>' },
    desc: {
      zh: '<switch> 是 Weex 的内置组件，用来创建与 iOS 一致样式的按钮。例如在 iPhone 中的设置应用中的飞行模式按钮就是一个 switch 按钮。',
      en: 'The weex builtin component switch is used to create and manage an IOS styled On/Off buttons, for example, the Airplane mode button in the Settings app is a switch button.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/switch.html',
      en: 'http://weex-project.io/references/components/switch.html'
    },
    examples: [{
      hash: 'd6769c27e18ab999ced059fff760ba0e',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1p7eDdGagSKJjy0FhXXcrbFXa-540-843.jpg'
    }, {
      hash: '8a049fb7ff19c0ee9316a483b235dd26',
      title: { zh: '初始状态', en: 'Initial State' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1u0HRc2NNTKJjSspkXXaeWFXa-540-844.jpg'
    }, {
      hash: 'b48549c39f2e82178ce8b94b395d1d0b',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB14HWzdGagSKJjy0FbXXa.mVXa-540-844.jpg'
    }]
  }, {
    type: 'video',
    name: 'video',
    title: { zh: '<video> 组件', en: '<video>' },
    desc: {
      zh: '<video> 组件可以让我们在 Weex 页面中嵌入视频内容。<text> 是唯一合法的子组件。',
      en: 'The video component can be used to embed video content in a weex page.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/video.html',
      en: 'http://weex-project.io/references/components/video.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '播放控制', en: 'Play Control' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'web',
    name: 'web',
    title: { zh: '<web> 组件', en: '<web>' },
    desc: {
      zh: '使用 <web> 组件在 Weex 页面中嵌入一张网页内容。src 属性用来指定资源地址。你也可以使用 webview module 来控制 web 的行为，比如前进、后退和重载。',
      en: 'Use web component to display any web content in the weex page. The src attribute is used to specify a special source. You also can use webview module to control some web operation such as goBack,goForward and reload.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/web.html',
      en: 'http://weex-project.io/references/components/web.html'
    },
    examples: [{
      hash: '4e64eeb667e3d3959c310eb1e66d3105',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1LpGHdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '页面跳转', en: 'Jump' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '传递参数', en: 'Pass Params' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '事件处理', en: 'Handle Events' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'richtext',
    name: 'richtext',
    scope: 'website',
    title: { zh: '富文本组件', en: '<richtext>' },
    desc: {
      zh: '',
      en: ''
    },
    examples: [{
      hash: '36a1999a7957de7bcbeb7cca95ba46d2',
      title: { zh: '图文混排', en: 'Use richtext' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1VPOPcMMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '8e3c274f5cae4a391a14ac81c890325f',
      title: { zh: '内容输入', en: 'With Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1SzOPcMMPMeJjy1XdXXasrXXa-540-844.png'
    }]
  }, {
    type: 'waterfall',
    name: 'waterfall',
    title: { zh: '瀑布流组件', en: '<waterfall>' },
    desc: {
      zh: '提供瀑布流布局的组件。',
      en: 'A component providing waterfall layout.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/waterfall.html',
      en: 'http://weex-project.io/references/components/waterfall.html'
    },
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'recycle-list',
    name: 'recycle-list',
    // scope: 'website',
    title: { zh: '<recycle-list> 组件', en: '<recycle-list>' },
    desc: {
      zh: '<recycle-list> 是一个新的列表容器，具有回收和复用的能力，可以大幅优化内存占用和渲染性能。（仅在 >= 0.18.0 的版本中支持）',
      en: 'The <recycle-list> is a new list container with the ability to recycle and reuse the component template. I can greatly optimize memory usage and rendering performance.'
    },
    docLink: {
      zh: 'http://weex-project.io/cn/references/components/recycle-list.html',
      en: 'http://weex-project.io/references/components/recycle-list.html'
    },
    examples: [{
      hash: '927b9bfb487a42b775f36d7243026839',
      title: { zh: '文本绑定', en: 'Text Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1LeVoovDH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: '56d434a1641b96df58c8f3d02d082f08',
      title: { zh: '属性绑定', en: 'Attribute Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1_pLKolfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: 'a633b3562355db1e38a2c5893664f5cb',
      title: { zh: '使用 v-for', en: 'Using v-for' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1oxNRor_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '546e29abce30c86205c69dbda8671013',
      title: { zh: '多层循环', en: 'Multiple v-for' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1W4JRor_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '836e767308c33a5d456b7ff51154c515',
      title: { zh: '条件渲染', en: 'v-if/v-else' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1bsM4ohrI8KJjy0FpXXb5hVXa-540-844.png'
    // }, {
    //   hash: '788cc577f5d591201ce479ff5fc39116',
    //   title: { zh: '双向绑定', en: 'Using v-model' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB10YZCom_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: '5337dfdbe278c45b407ee2913d0eedd9',
      title: { zh: '绑定事件', en: 'Event Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1BjcCom_I8KJjy0FoXXaFnVXa-540-844.png'
    }, {
      hash: 'a38633d93a78c9ca98264e60b59ddd7d',
      title: { zh: '一次性渲染', en: 'Using v-once' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1AxNRor_I8KJjy1XaXXbsxpXa-540-844.png'
    }, {
      hash: '1447937c097aedf64e7f746615069fe9',
      title: { zh: '绑定样式', en: 'Style Binding' },
      screenshot: 'https://gw.alicdn.com/tfs/TB14K04oTnI8KJjy0FfXXcdoVXa-540-844.png'
    }, {
      hash: 'f2f74da321f900d3c52612a75a06d0de',
      title: { zh: 'loadmore 事件', en: '"loadmore" Event' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '79b892c91b3b0a6f18c73654f95a4e7a',
      title: { zh: '无限列表', en: 'Infinite Scroll' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1JGrQilfH8KJjy1XbXXbLdXXa-540-844.png'
    }]
  }, {
    type: 'recycle-list-component',
    name: 'recycle-list-component',
    // scope: 'website',
    title: { zh: '在 <recycle-list> 中使用子组件', en: '<recycle-list> with components' },
    examples: [{
      hash: '4bb36641cf23c3a11b085a2ace33c369',
      title: { zh: '静态子组件', en: 'Static Component' },
      screenshot: 'https://gw.alicdn.com/tfs/TB101VoovDH8KJjy1XcXXcpdXXa-540-844.png'
    // }, {
    //   hash: 'b2ae44c36724cf5541696f0f1cafadbe',
    //   title: { zh: '有属性无状态', en: 'Stateless Props' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1LeVoovDH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: 'bd6b43a0e78347766b5cbc87b3ffb47e',
      title: { zh: '属性更新', en: 'Update Props' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1LeVoovDH8KJjy1XcXXcpdXXa-540-844.png'
    }, {
      hash: '66a80b9dab170990ae7a07d1d265f5bc',
      title: { zh: '含内部状态', en: 'Stateful Component' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tXHKolfH8KJjy1XbXXbLdXXa-540-844.png'
    }, {
      hash: '1d88de057476c1d1d7ac923337385416',
      title: { zh: '移除组件', en: 'Remove Cell' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1j5d_XVGWBuNjy0FbXXb4sXXa-540-844.png'
    }, {
    //   hash: 'd214675550ff33d393363b92748603d8',
    //   title: { zh: '使用生命周期', en: 'Using Lifecycle' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1JNJRor_I8KJjy1XaXXbsxpXa-540-844.png'
    // }, {
      hash: '3639df8581e885b5ddd5f6e06041297d',
      title: 'watch & computed',
      screenshot: 'https://gw.alicdn.com/tfs/TB1X10oovDH8KJjy1XcXXcpdXXa-540-844.png'
    }]
  }]
}
