const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appDirectory = path.resolve(__dirname, '../');

module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: [path.resolve(appDirectory, 'index.web.tsx')],
  // 出口
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/},
      //    loader配置
      {
        test: /\.css$/, // 检测.css结尾文件
        use: ['style-loader', 'css-loader'],
      },
      // {
      //     test: /\.less$/,
      //     use: ["style-loader", "css-loader", "less-loader"]
      // },
      // {
      //     test: /\.s[ac]ss$/,
      //     use: ["style-loader", "css-loader", "sass-loader"]
      // },
      // {
      //     test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
      //     type: "asset/resource",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '音视频',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:3].css',
    }),
  ],
  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js', '.tsx', '.ts', '.jsx'],
  },
};
