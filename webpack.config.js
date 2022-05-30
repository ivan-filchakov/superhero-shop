const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    tinymce: './src/vendor/tinymce.min.js',
    main: './src/index.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: [ 'tinymce', 'main' ]
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      },
      {
        test: /\.(jpg|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets',
              useRelativePath: true
            }
          },

          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 70
          //     }
          //   }
          // }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}
