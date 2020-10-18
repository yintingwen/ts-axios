const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const open = require('open')
const router = require('./routes')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  quiet: true
}))

app.use(webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
}))

app.use(express.static(webpackConfig.output.path))

app.use('/api', router)

app.listen(8080)
// open('http://localhost:8080')
