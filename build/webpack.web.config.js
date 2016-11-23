var path = require('path')
var webpack = require('webpack')

console.log(path.resolve('src', 'entry.vue'))

module.exports = {
  entry: {
    'vue-bundle': path.resolve('src', 'entry.js')
  },
  output: {
    path: 'dist',
    filename: '[name].web.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['vue-loader']
      }
    ]
  }
}
