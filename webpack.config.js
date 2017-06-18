var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
  	path: path.join(__dirname, 'build'),
  	publicPath: "build/",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
    ]
  },
  plugins: []
};
