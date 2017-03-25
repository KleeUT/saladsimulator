const path = require('path');
const webpack = require('webpack');
module.exports = {
  //   entry: './src/index.js',
  // context: path.resolve(__dirname, './src'), // new
  // 
  // entry: { bootstrap: 'bootstrap-loader', app: './index.js' },
  // // entry: ['./src/index.js'],
  // output: {
  //     filename: '/[name].bundle.js',
  //     path: path.resolve(__dirname, 'dist')
  // },
  // devServer: {
  //     contentBase: path.resolve(__dirname, './'),  // New
  // },
  context: path.resolve(__dirname, './src'),
  entry: { app: './js/index.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',                          // New
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      // Use one of these to serve jQuery for Bootstrap scripts:

      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery' },

      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, use: 'imports-loader?jQuery=jquery' },
    ],
  },
};