const { template, chunk } = require("lodash");
const path = require("path");
const { splitChunks } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    header: path.resolve(__dirname, './header/header.js'),
    body: path.resolve(__dirname, './body/body.js'),
    footer: path.resolve(__dirname, './footer/footer.js')
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jp?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 8564,
    open: true,
  },
  devtools: 'inline-source-map', //this line enables inline source maps
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', //this enables code splitting for all chunks
    },
  },
};