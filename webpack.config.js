var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  { raw: true }
)

module.exports = {
  entry: {
    'vue-bundle': path.join(__dirname, 'src', 'entry.vue?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['weex-vue-loader']
      }
    ]
  },
  plugins: [bannerPlugin]
}
