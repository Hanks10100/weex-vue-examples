
Vue.config.isReservedTag = function () { return false }

Vue.component('text', {
  functional: true,
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

module.exports = {
  VERSION: '0.0.1'
}
