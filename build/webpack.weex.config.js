var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  { raw: true }
)

module.exports = {
  entry: {
    'examples/hello': path.resolve('src/examples', 'hello.vue?entry=true'),
    'examples/image': path.resolve('src/examples', 'image.vue?entry=true'),
    'vue-bundle': path.resolve('src', 'entry.vue?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].weex.js'
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
