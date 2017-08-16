// { "framework": "Vue" }

new Promise(s => s()).then(function() {

  new Vue({
    el: 'body',
    render: function (h) {
      return h('div', {}, [
        h('text', {}, 'Yo')
      ])
    }
  })

})
