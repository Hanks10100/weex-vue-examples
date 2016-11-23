
Vue.config.isReservedTag = function () { return false }

Vue.component('text', {
  functional: true,
  // props: ['class', 'style'],
  render (createElement, context) {
    return createElement(
      'div',
      {
        staticStyle: context.data.staticStyle,
        staticClass: 'weex-container ' + context.data.staticClass
      },
      [createElement('span', null, context.children)]
    )
  }
})

Vue.component('image', {
  functional: true,
  props: ['src'],
  render (createElement, context) {
    const configs = {
      staticClass: context.data.staticClass,
      staticStyle: context.props.staticStyle,
      attrs: { src: context.props.src }
    }
    return createElement(
      'div',
      { staticClass: 'weex-container' },
      [createElement('img', configs)]
    )
  }
})

module.exports = {
  VERSION: '0.0.1'
}
