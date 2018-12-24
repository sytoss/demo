const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConst = require('./webpack.const');

module.exports = [
  new CleanWebpackPlugin([webpackConst.DIST_PATH]),
  new HtmlWebpackPlugin({
    inject: 'head',
    template: path.resolve(__dirname, '..', '..', 'src', 'api', 'index.html'),
  }),
  new webpack.HotModuleReplacementPlugin(),
];
