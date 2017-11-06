var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'vue-bundle': path.resolve('src/website', 'entry.js')
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'page.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        use: ['vue-loader']
      }
    ]
  }
}
