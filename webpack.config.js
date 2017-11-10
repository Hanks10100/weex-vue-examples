var path = require('path')
var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

function addMinSuffix (string) {
  return string.replace(/\.js$/i, '.min.js')
}

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
    },
    plugins: []
  }
  if (option.minify) {
    commonConfig.output.filename = addMinSuffix(commonConfig.output.filename)
    commonConfig.plugins.push(new UglifyJSPlugin())
  }
  if (isNative) {
    var bannerPlugin = new webpack.BannerPlugin({
      banner:  '// { "framework": "Vue" }\n',
      raw: true
    })
    commonConfig.plugins.push(bannerPlugin)
  }
  return commonConfig
}

function duplicateOptions (options) {
  if (!Array.isArray(options)) {
    return []
  }
  const buildOptions = []
  options.forEach(option => {
    if (option.isNative === false) {
      buildOptions.push(Object.assign({ minify: true }, option))
      buildOptions.push(Object.assign({ minify: false }, option))
    } else {
      buildOptions.push(Object.assign({ isNative: true, minify: true }, option))
      buildOptions.push(Object.assign({ isNative: false, minify: true }, option))
      buildOptions.push(Object.assign({ isNative: true, minify: false }, option))
      buildOptions.push(Object.assign({ isNative: false, minify: false }, option))
    }
  })
  return buildOptions
}

var options = [{
  entry: path.resolve('src', 'entry.js')
}, {
  isNative: false,
  entry: path.resolve('src/website', 'entry.js'),
  outputPath: 'docs',
  outputName: 'website.js'
}]

module.exports = duplicateOptions(options).map(function (option) {
  return createBuildConfig(option)
})
