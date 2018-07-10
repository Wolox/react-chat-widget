'use strict'

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'react-chat-widget',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line
                autoprefixer({
                  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie <9'],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src/scss/')]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['lib']),
    /**
     * Known issue for the CSS Extract Plugin in Ubuntu 16.04: You'll need to install
     * the following package: sudo apt-get install libpng16-dev
     */
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFileName: '[id].css'
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
