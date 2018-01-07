const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

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
        use: [isWeex ? 'weex-loader' : 'vue-loader']
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
  landing: path.resolve('src/entries', 'landing.js'),
  about: path.resolve('src/entries', 'about.js'),
  examples: path.resolve('src/entries', 'examples.js'),
  news: path.resolve('src/entries', 'news.js'),
  guide: path.resolve('src/entries', 'guide.js'),
  // 'chat-bot': path.resolve('src/entries', 'chat-bot.js'),
  // settings: path.resolve('src/entries', 'settings.js'),
  update: path.resolve('src/entries', 'update.js')
})
