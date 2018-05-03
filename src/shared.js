import sharedMixin from './utils/mixin'
import createModuleAdaptor from './utils/module-adaptor'

// create windmill module adaptor for weex
if (weex.config.container === 'windmill') {
  weex.requireModule = createModuleAdaptor(weex.requireModule)
}

// use shared mixins
Vue.mixin(sharedMixin)
