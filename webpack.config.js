var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, 'src')],
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader', options: {
          sourceMap: true,
          importLoaders: 1
        }
      }, {
        loader: 'sass-loader', options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.(svg|png|gif|jpg|ico)$/,
      include: path.resolve(__dirname, 'assets'),
      use: {
        loader: 'file-loader',
        options: {
          context: 'assets',
          name: '[path][name].[ext]'
        }
      }
    }]
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'assets/index.html')
    })
  ]
};