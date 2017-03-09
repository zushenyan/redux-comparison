const path = require("path");

const PATHS = {};

module.exports = {
  devtool: "eval",
  entry: {
    "redux-thunk":      "./client/redux-thunk/index.js",
    "redux-saga":       "./client/redux-saga/index.js",
    "redux-observable": "./client/redux-observable/index.js",
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
