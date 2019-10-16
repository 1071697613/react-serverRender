'use strict'

const merge = require('webpack-merge');
const path = require('path');
const config = require('./config');
const baseWebpackConfig = require('./webpack.base.conf');
const utils = require('./utils');

const serverWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  target: 'node',  // 打包出来的内容使用在node环境中
  entry: {
    app: path.join(__dirname, './app/main.jsx')
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'main.js',
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    libraryTarget: 'commonjs2' // 打包后的代码使用的模块方案
  },
  devtool: config.dev.devtool,
});

module.exports = serverWebpackConfig;