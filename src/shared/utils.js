export function createURL (name) {
  if (WXEnvironment.platform === 'Web') {
    return `/?page=${name}.web.js`
  }
  // TODO
  return `${name}.weex.js`
}
