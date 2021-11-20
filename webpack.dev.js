const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: {
      index: "/",
    },
    port: 9000,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP_BACKEND_URL: JSON.stringify("http://localhost:5000"),
    }),
  ],
});
