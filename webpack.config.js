const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: [__dirname + "/src/js/app.js", __dirname + "/src/scss/app.scss"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  output: {
    path: __dirname + "/www/",
    filename: "js/[name].bundle.[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: __dirname + "/www/index.html",
      template: "./src/templates/index.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: __dirname + "/www/about.html",
      template: "./src/templates/about.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: __dirname + "/www/gallery.html",
      template: "./src/templates/gallery.html",
      inject: true,
    }),
  ],
  devServer: {
    static: __dirname + "/www",
  },
};
