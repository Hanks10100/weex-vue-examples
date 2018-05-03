const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const { VueLoaderPlugin } = require('vue-loader')

const weexLoaderOptions = {}
const vueLoaderOptions = {
  optimizeSSR: false,
  postcss: [
    // to convert weex exclusive styles.
    require('postcss-plugin-weex')(),
    require('autoprefixer')({
      browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
    }),
    require('postcss-plugin-px2rem')({
      // base on 750px standard.
      rootValue: 75,
      // to leave 1px alone.
      minPixelValue: 1.01
    })
  ],
  compilerModules: [
    {
      postTransformNode: el => {
        // to convert vnode for weex components.
        require('weex-vue-precompiler')()(el)
      }
    }
  ]
}

function createConfig (option = {}) {
  const { isWeex, minify } = option
  const suffix = `.${isWeex ? 'weex' : 'web'}${minify ? '.min': '' }.js`
  const webpackConfig = {
    entry: option.entry,
    output: {
      path: path.resolve(__dirname, option.outputPath || 'dist'),
      filename: (option.outputName || 'bundle') + suffix
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: isWeex ? 'weex-loader' : 'vue-loader',
          options: isWeex ? weexLoaderOptions : vueLoaderOptions
        }]
      }]
    },
		node: {
			// prevent webpack from injecting useless polyfill
			__filename: false,
			__dirname: false,
			child_process: false,
			Buffer: false,
			global: false,
			console: false,
			setImmediate: false,
			process: false,
			timers: false,
			dgram: false,
			fs: false,
			path: false,
			net: false,
			crypto: false,
			http: false,
			https: false,
			url: false,
			dns: false,
			tls: false,
			vm: false
		},
    plugins: []
  }
  if (minify) {
    webpackConfig.plugins.push(new UglifyJSPlugin())
  }
  if (isWeex) {
    webpackConfig.plugins.push(new webpack.BannerPlugin({
      banner:  '// { "framework": "Vue" }\n"use weex:vue";\n',
      raw: true
    }))
  } else {
    // webpackConfig.plugins.unshift(new VueLoaderPlugin())
  }
  return webpackConfig
}

function generateWebpackConfigs (options) {
  const buildOptions = []
  for (const name in options) {
    const option = typeof options[name] === 'string'
      ? ({ entry: options[name] })
      : options[name]
    option.outputName = name
    buildOptions.push(Object.assign({}, option, { isWeex: true, minify: false }))
    buildOptions.push(Object.assign({}, option, { isWeex: false, minify: false }))
    buildOptions.push(Object.assign({}, option, { isWeex: true, minify: true }))
    buildOptions.push(Object.assign({}, option, { isWeex: false, minify: true }))
  }
  return buildOptions.map(opt => createConfig(opt))
}

module.exports = generateWebpackConfigs({
  landing: path.resolve('src/pages/landing', 'Landing.js'),
  about: path.resolve('src/pages/about', 'About.js'),
  examples: path.resolve('src/pages/examples', 'Examples.js'),
  news: path.resolve('src/pages/news', 'News.js'),
  guide: path.resolve('src/pages/guide', 'Guide.js'),
  // update: path.resolve('misc', 'update.js')
})
