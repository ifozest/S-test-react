const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: path.resolve('src/index.jsx'),
    vendor: ['react'],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    extensions: ['.jsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.tmpl.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.[hash].css', {
      allChunks: true,
    }),
  ],
  devServer: {
    contentBase: path.resolve('dist'),
    compress: true,
    port: 9000,
    open: true,
    inline: true,
    hot: true,
  },
};
