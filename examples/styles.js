module.exports = {
  type: 'styles',
  name: { zh: '样式', en: 'Styles' },
  group: [{
    type: 'basics',
    name: { zh: '基本样式', en: 'Basics' },
    examples: [{
      hash: 'ad002b5e26cf55475661b22e81682f79',
      title: { zh: '边框/背景', en: 'Border & Background' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1z9P1ewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '3488279c3502d1234b437c2f718f3a55',
      title: { zh: '半透明', en: 'Translucent' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1FPAzd3MPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: '5219829fd0a5f59dc9208c8327e02e92',
      title: { zh: 'position 布局', en: 'Position Layout'},
      screenshot: 'https://gw.alicdn.com/tfs/TB1CCP1ewMPMeJjy1XdXXasrXXa-540-844.png'
    }, {
      hash: 'd1648814d06fdf59cd99ea92c716694a',
      title: { zh: '线性渐变', en: 'Linear Gradient' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1JQCEhgoQMeJjy1XaXXcSsFXa-540-844.png'
    }, {
      hash: '94a627f3ffa7007f3a2e9c97a5e245ec',
      title: { zh: '阴影', en: 'Box Shadow' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
    // }, {
    //   hash: 'ff1332f9a343d211a72051a04e2e1c3c',
    //   title: { zh: '多层阴影', en: 'Box Shadow' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: 'e68f268dffcf0481935e19c9b0ab315f',
      title: { zh: '伪类选择器', en: 'Pseudo-classes' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1J7goczihSKJjy0FlXXadEXXa-540-844.png'
    }, {
      hash: 'bb3afbc65afb96e4099a8b6b6a03185a',
      title: { zh: '网格背景', en: 'Mesh Background' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1kU3abRTH8KJjy0FiXXcRsXXa-540-844.png'
    }, {
      hash: 'e510f73afb31b3228a5a9ef1b7a5a456',
      title: { zh: '透明背景', en: 'Transparent Background' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1CL3nbMDD8KJjy0FdXXcjvXXa-540-844.png'
    }, {
      hash: 'b90dbc5fbecf160a8f6c10b752b44c53',
      title: { zh: '三角形', en: 'Triangles' },
      screenshot: 'https://gw.alicdn.com/tfs/TB14yzscMvD8KJjy0FlXXagBFXa-540-844.png'
    }, {
      hash: '190d8baf578fb7b4efd82f19322a69da',
      title: { zh: '西瓜（阴影）', en: 'Watermelon (box-shadow)' },
      screenshot: 'https://gw.alicdn.com/tfs/TB1RIzDdx6I8KJjy0FgXXXXzVXa-540-844.png'
    // }, {
    //   hash: '4624d605004fc7eb9f14ca9c5a226fe3',
    //   title: { zh: '瀑布流', en: 'Waterfall' },
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    // }, {
    //   hash: '4624d605004fc7eb9f14ca9c5a226fe3',
    //   title: 'Grid',
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }, {
    type: 'flexbox',
    name: 'Flexbox',
    title: { zh: 'Flexbox 布局', en: 'Flexbox Layout' },
    desc: {
      zh: 'CSS 弹性盒子布局是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。',
      en: 'CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.'
    },
    docLink: {
      zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout',
      en: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'
    },
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
    // }, {
    //   hash: '4624d605004fc7eb9f14ca9c5a226fe3',
    //   title: 'flex',
    //   screenshot: 'https://gw.alicdn.com/tfs/TB1sF_CcMMPMeJjy1XcXXXpppXa-540-844.png'
    }]
  }]
}
