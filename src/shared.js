console.log(' => run shared.js')

Vue.mixin({
  created () {
    this.$page.$call('modal.toast', {
      message: `lifecycle created.`
    })
  }
})
