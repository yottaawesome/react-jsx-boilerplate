/* eslint-disable max-lines-per-function */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  // We need to set this manually due to https://github.com/webpack/webpack/issues/7074
  // Note that official documentation at https://webpack.js.org/configuration/mode/ states the following:
  //      Sets process.env.NODE_ENV on DefinePlugin to value production .
  // This is misleading, as printing the process.env.NODE_ENV variable out shows it is undefined,
  // causing the style-loader/minicssextractplugin rule to fail to behave as expected.
  let isDevelopment = (process.env.NODE_ENV = argv["mode"]) !== "production";

  return {
    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].[name].js"
    },

    devtool: "source-map",

    devServer: {
      contentBase: "./dist",
      overlay: true,
      historyApiFallback: true
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["babel-loader", "eslint-loader"]
        },
        // The following loader rules are necessary for s/css modules
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              // As of css-loader 3, the options have changed
              // https://github.com/webpack-contrib/css-loader
              options: {
                modules: {
                  localIdentName: "[folder]__[local]__[hash:base64:5]"
                },
                localsConvention: "camelCase"
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                fallback: "file-loader"
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].[contenthash].css"
      }),
      new HTMLWebpackPlugin({
        template: path.join(__dirname, "./src/index.html")
      })
    ]
  };
};
