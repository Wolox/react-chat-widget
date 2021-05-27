'use strict'

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'react-chat-widget',
    libraryTarget: 'umd',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'web',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /dev/],
        use: ['babel-loader', 'ts-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
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
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/scss/')]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    /**
     * Known issue for the CSS Extract Plugin in Ubuntu 16.04: You'll need to install
     * the following package: sudo apt-get install libpng16-dev
     */
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css'
    }),
  ],
  externals: {
    react: {
      commonjs: 'React',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      commonjs: 'ReactDOM',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },
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
