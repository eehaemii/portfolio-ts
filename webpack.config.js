const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    // output: {
    //   path: path.join(__dirname, "/dist"),
    //   filename: "[name].js",
    // },
    devServer: {
      port: 3002,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
        },
        // 이미지 파일 설정
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          type: "asset/resource",
        },
        // svg inline 이미지 설정
        {
          test: /\.(svg)$/,
          type: "asset/inline",
        },
        // 폰트 파일 설정
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "font/[hash][ext][query]",
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              }
            : false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
