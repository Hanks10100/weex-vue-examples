var path = require('path')
var webpack = require('webpack')

function createBuildConfig (option) {
  if (!option) {
    option = {}
  }
  var isNative = option.isNative || false
  var commonConfig = {
    entry: option.entry,
    output: {
      path: path.resolve(__dirname, option.outputPath || 'dist'),
      filename: option.outputName || (isNative ? 'bundle.weex.js' : 'bundle.web.js')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          use: [isNative ? 'weex-loader' : 'vue-loader']
        }
      ]
    }
  }
  if (isNative) {
    var bannerPlugin = new webpack.BannerPlugin({
      banner:  '// { "framework": "Vue" }\n',
      raw: true
    })
    commonConfig.plugins = [bannerPlugin]
  }
  return commonConfig
}

var options = [{
  isNative: false,
  entry: path.resolve('src', 'entry.js')
}, {
  isNative: true,
  entry: path.resolve('src', 'entry.js')
}, {
  isNative: false,
  entry: path.resolve('src/website', 'entry.js'),
  outputPath: 'docs',
  outputName: 'website.js'
}]

module.exports = options.map(function (option) {
  return createBuildConfig(option)
})
