const components = require('./components')
const modules = require('./modules')
const syntax = require('./syntax')
const styles = require('./styles')
const events = require('./events')
const cases = require('./cases')
const others = require('./others')

const examples = [
  components,
  modules,
  syntax,
  styles,
  events,
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
    || example.hash === 'e0025d9264cb5e6dec13710a5899a0a1'
}

function shouldIgnore (item, scope) {
  if (item.scope && scope && item.scope !== scope) {
    return true
  }
  return !!item.ignore
}

module.exports = function getExamples (options = {}) {
  let selected = examples
  const scope = options.scope
  if (scope === 'mobile') {
    selected = [components, modules, syntax]
    others.group.unshift(...cases.group)
    others.group.unshift(...events.group)
    others.group.unshift(...styles.group)
    selected.push(others)
  }

  // filter examples
  return selected.filter(item => {
    if (shouldIgnore(item, scope)) return false
    item.group = item.group.filter(group => {
      if (shouldIgnore(group, scope)) return false
      group.examples = group.examples.filter(_ =>
        !(options.filterTODO && isTODO(_)) && !shouldIgnore(_, scope)
      )
      return !!group.examples.length
    })
    return !!item.group.length
  })
}
