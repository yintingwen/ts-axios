const webpackMerge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')

const config = {
  entry: './src/demo/index.ts',
}

module.exports = webpackMerge.merge(webpackCommonConfig, config)
