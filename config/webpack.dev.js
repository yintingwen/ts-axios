const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackCommonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')

const webpackDevConfig = {
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/demo/index.ts'],
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
      inject:true,
      minify:{
        removeComments:true,
        collapseWhitespace:false
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = webpackMerge.merge(webpackCommonConfig, webpackDevConfig)
