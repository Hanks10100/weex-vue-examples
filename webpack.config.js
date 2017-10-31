var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin({
  banner:  '// { "framework": "Vue" }\n',
  raw: true
})

var entry = {
  'vue-bundle': path.resolve('src', 'entry.js')
}

var nativeConfig = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].weex.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        use: ['weex-loader']
      }
    ]
  },
  plugins: [bannerPlugin]
}


var webConfig = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].web.js'
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

module.exports = [nativeConfig, webConfig]
