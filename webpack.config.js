const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line global-require
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie <9'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'src/sass/')
              ]
            }
          }
        ]
      })
    }, {
      test: /\.(jpg|png|gif|svg)$/,
      use: {
        loader: 'url-loader'
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['lib']),
    new ExtractTextPlugin({
      filename: 'styles.css'
    })
  ]
};
