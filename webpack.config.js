const path = require("path");

const PATHS = {};

module.exports = {
  devtool: "eval",
  entry: {
    example1: "./client/example1.js",
    example2: "./client/example2.js",
    example3: "./client/example3.js",
  },
  output: {
    path: "./public",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
