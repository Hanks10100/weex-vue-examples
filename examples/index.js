const components = require('./components')
const modules = require('./modules')
const syntax = require('./syntax')
const styles = require('./styles')
const cases = require('./cases')
const others = require('./others')

const examples = [
  components,
  modules,
  syntax,
  styles,
  cases,
  others
]

// screen shot
// http://dotwe.org/vue/5e9b359de1cbd977dec54654170d2a05

function isTODO (example) {
  return example.hash === ''
    || example.hash === '4624d605004fc7eb9f14ca9c5a226fe3'
    || example.hash === 'ccefdea9e9ef695acca7fb1b439277e2'
    || example.hash === '123b69b57e099036558745298fb6e8ca'
    || example.hash === '2d8da136e33f63a0bfe4b1e42362405b'
}

module.exports = function getExamples (options = {}) {
  let selected = examples
  if (options.scope === 'mobile') {
    selected = [components, modules, syntax]
    others.group.unshift(...cases.group)
    others.group.unshift(...styles.group)
    selected.push(others)
  }
  // filter WIP examples
  if (options.filterTODO) {
    selected = selected.filter(item => {
      item.group = item.group.filter(group => {
        group.examples = group.examples.filter(_ => !isTODO(_))
        return !!group.examples.length
      })
      return !!item.group.length
    })
  }
  return selected
}
