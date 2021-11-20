const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP_BACKEND_URL: JSON.stringify("https://ugotuj.herokuapp.com"),
    }),
  ],
});
