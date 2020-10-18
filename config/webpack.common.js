const path = require('path')
const webpackMerge = require('webpack-merge')

const commonConfig = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: './',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        include: [path.join(__dirname, '../src')], // 指定检查的目录
        use: ['ts-loader', 'eslint-loader']
      }
    ]
  }
}

module.exports = webpackMerge.merge(commonConfig)
