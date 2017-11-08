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
      hash: 'd813b9f5d1e8ef95b0cfa32d469af236',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB11h7wewMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'ad002b5e26cf55475661b22e81682f79',
      title: { zh: '嵌套', en: 'Nested' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1z9P1ewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '7613db44f6c03a5849937fbbdeebf69d',
      title: { zh: '文字节点', en: 'Text Node' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1qlG2cwoQMeJjy1XaXXcSsFXa-540-844.png'
    }]
  }, {
    type: 'text',
    name: 'text',
    title: { zh: '<text> 组件', en: '<text>' },
    desc: '<text> 是 Weex 内置的组件，用来将文本按照指定的样式渲染出来。<text> 只能包含文本值，不支持子组件，你可以使用 {{}} 标记插入变量值作为文本内容。',
    docLink: 'http://weex-project.io/cn/references/components/text.html',
    examples: [{
      hash: '3e0220d7b379955a26039131f153a360',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1V5IXcMMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '25b96fb0283300df1b183d019d835e4f',
      title: { zh: 'lines 属性', en: '"lines"' },
      screenshot: 'https://gw.alicdn.com/tfs/TB19JaYcMoQMeJjy0FpXXcTxpXa-540-844.png'
    }, {
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
    desc: '<image> 组件用于渲染图片，并且它不能包含任何子组件。需要注意的是，必须明确指定 width 和 height，否则图片无法显示。',
    docLink: 'http://weex-project.io/cn/references/components/image.html',
    examples: [{
      hash: 'c8d67a852dca4865b06cf372cd5b3c17',
      title: { zh: '最简例子', en: 'Sample' },
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
    title: { zh: '<list> 组件', en: '<list>' },
    desc: '<list> 组件是提供垂直列表功能的核心组件，拥有平滑的滚动和高效的内存管理，非常适合用于长列表的展示。最简单的使用方法是在 <list> 标签内使用数组循环生成的多个 <cell> 标签。',
    docLink: 'http://weex-project.io/cn/references/components/list.html',
    examples: [{
      hash: '3faed12fc18c947255abfa8354570170',
      title: { zh: '最简例子', en: 'Sample' },
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
      hash: 'f4e660c403c0fd5140ac2747f498d948',
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
    title: { zh: '<scroller> 组件', en: '<scroller>' },
    desc: '<scroller> 是一个竖直的，可以容纳多个排成一列的子组件的滚动器。如果子组件的总高度高于其本身，那么所有的子组件都可滚动。',
    docLink: 'http://weex-project.io/cn/references/components/scroller.html',
    examples: [{
      hash: '586ca3414132895999430f6e44d81419',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1tK66cMMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: 'c626a5fb4981e8e8bce92d7b012c26b4',
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
      hash: 'eb1f5edea6cb8f4fea06d67dc071eff7',
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
    title: { zh: '<input> 组件', en: '<input>' },
    desc: 'Weex 内置的 <input> 组件用来创建接收用户输入字符的输入组件。 <input> 组件的工作方式因 type 属性的值而异，比如 text, password, url, email, tel 等。此组件不支持子组件和 click 事件。',
    docLink: 'http://weex-project.io/cn/references/components/input.html',
    examples: [{
      hash: '9ff5e5ded4969d19f76e028bf1440309',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }, {
      hash: '185e8574389d3242a79090414c336e4d',
      title: 'placeholder',
      screenshot: 'https://gw.alicdn.com/tfs/TB1XPmcdgoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: 'aab3e1a3835c9cdbed53fb127738507f',
      title: '初始状态',
      screenshot: 'https://gw.alicdn.com/tfs/TB1rnh_diERMeJjy0FcXXc7opXa-540-844.png'
    }, {
      hash: '75492bb1c1af2b44293ce11164c0b3ba',
      title: '输入框类型',
      screenshot: 'https://gw.alicdn.com/tfs/TB1qDh_diERMeJjy0FcXXc7opXa-540-844.png'
    }, {
      hash: '38cfc531ae3c0a10ac10236cd869e9eb',
      title: '事件处理',
      screenshot: 'https://gw.alicdn.com/tfs/TB1IQ9cdgMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'textarea',
    name: 'textarea',
    title: { zh: '<textarea> 组件', en: '<textarea>' },
    desc: 'textarea 是 Weex 内置的一个组件，用于用户交互，接受用户输入数据。可以认为是允许多行的 <input> 组件。',
    docLink: 'http://weex-project.io/cn/references/components/textarea.html',
    examples: [{
      hash: '126de8266778ddc7e967ef4cf1c98dec',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1TSyddgoQMeJjy0FoXXcShVXa-540-844.png'
    }, {
      hash: '03caa359a9c4bf9fdc8a1d343f7f7a69',
      title: '默认行数',
      screenshot: 'https://gw.alicdn.com/tfs/TB1AsF1diERMeJjSspjXXcpOXXa-540-844.png'
    }]
  }, {
    type: 'switch',
    name: 'switch',
    title: { zh: '<switch> 组件', en: '<switch>' },
    desc: '<switch> 是 Weex 的内置组件，用来创建与 iOS 一致样式的按钮。例如在 iPhone 中的设置应用中的飞行模式按钮就是一个 switch 按钮。',
    docLink: 'http://weex-project.io/cn/references/components/switch.html',
    examples: [{
      hash: 'd6769c27e18ab999ced059fff760ba0e',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1p7eDdGagSKJjy0FhXXcrbFXa-540-843.jpg'
    }, {
      hash: '8a049fb7ff19c0ee9316a483b235dd26',
      title: '初始状态',
      screenshot: 'https://gw.alicdn.com/tfs/TB1u0HRc2NNTKJjSspkXXaeWFXa-540-844.jpg'
    }, {
      hash: 'b48549c39f2e82178ce8b94b395d1d0b',
      title: '事件处理',
      screenshot: 'https://gw.alicdn.com/tfs/TB14HWzdGagSKJjy0FbXXa.mVXa-540-844.jpg'
    }]
  }, {
    type: 'video',
    name: 'video',
    title: { zh: '<video> 组件', en: '<video>' },
    desc: '<video> 组件可以让我们在 Weex 页面中嵌入视频内容。<text> 是唯一合法的子组件。',
    docLink: 'http://weex-project.io/cn/references/components/video.html',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
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
    title: { zh: '<web> 组件', en: '<web>' },
    desc: '使用 <web> 组件在 Weex 页面中嵌入一张网页内容。src 属性用来指定资源地址。你也可以使用 webview module 来控制 web 的行为，比如前进、后退和重载。',
    docLink: 'http://weex-project.io/cn/references/components/web.html',
    examples: [{
      hash: '4e64eeb667e3d3959c310eb1e66d3105',
      title: { zh: '最简例子', en: 'Sample' },
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
    title: { zh: '富文本组件', en: '<richtext>' },
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
    title: { zh: '瀑布流组件', en: '<waterfall>' },
    desc: '提供瀑布流布局的组件。',
    docLink: 'http://weex-project.io/cn/references/components/waterfall.html',
    examples: [{
      hash: '4624d605004fc7eb9f14ca9c5a226fe3',
      title: { zh: '最简例子', en: 'Sample' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
}
