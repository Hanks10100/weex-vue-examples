const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const baseConfig = {
  entry: path.resolve(__dirname, 'src/website/entry.js'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'website.js'
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

const minifyConfig = Object.assign({}, baseConfig, {
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'website.min.js'
  },
  plugins: [new UglifyJSPlugin()]
})

module.exports = [baseConfig, minifyConfig]
