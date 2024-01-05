const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App with Webpack",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};

const developmentConfig = {
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true,
    compress: true,
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return { ...commonConfig, ...developmentConfig };
  }

  return commonConfig;
};
