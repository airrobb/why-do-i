const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'envify-loader!babel'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style",
        "css!sass")
     }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  sassLoader: {
     includePaths: [path.resolve(__dirname, "./styles")]
   },
   plugins: [
    new ExtractTextPlugin("app.css")
 ]
}
