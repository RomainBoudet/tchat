const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 8090;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // Styles
      {
        test: /\.(s?css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: paths.build,
    },
    client: {
      overlay: true,
      progress: true,
      logging: 'info',
    },
    // On peut ajouter des headers dans toutes les réponses ! https://webpack.js.org/configuration/dev-server/#devserverheaders
    /* headers: [
      {
        key: 'X-Custom',
        value: 'foo',
      },
      {
        key: 'Y-Custom',
        value: 'bar',
      },
    ], */
    open: true,
    compress: true,
    hot: true,
    watchFiles: {
      options: {
        ignored: /node_modules/,
      } 
    },
    port,
  },
});
