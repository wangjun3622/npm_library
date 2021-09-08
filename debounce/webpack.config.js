// webpack.config.js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: "production",
  entry: path.join(__dirname, "./index.ts"),
  output: {
    path: path.join(__dirname, "./library_debounce"),
    filename: "index.js",
    library: "deboudce",
    libraryTarget: "umd",
  },
  plugins: [
    new CleanWebpackPlugin(), // 编译之前清空 /dist
  ],
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true, // 开启代码压缩
  },
};

module.exports = config;
