// TODO: create windmill module adaptor for weex
export default function createModuleAdaptor (moduleGetter) {
  return function requireModule (moduleName) {
    switch (moduleName) {
      case 'stream': {
        return networkToStream(moduleGetter('@windmill/network'))
      }
      case 'mtop':
      case 'user':
      case 'modal':
      case 'storage':
      case 'navigator':
        return moduleGetter(`@windmill/${moduleName}`)
      default: return moduleGetter(moduleName)
    }
  }
}

// convert windmill network module to weex stream
function networkToStream (network) {
  return {
    fetch (options, callback, progressCallback) {
      // TODO: adjust options
      const req = network.request(options, response => {
        callback({
          status: response.status, // TODO: map to number
          statusText: response.status,
          ok: response.status === 'SUCCESS',
          data: response.data,
          headers: options.headers
        })
      }, error => {
        // TODO: handle error message
        callback()
      })
      req.on('progress', progressCallback)
    }
  }
}
