const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const paths = {
  assets: path.resolve(__dirname, './assets'),
  dist: path.resolve(__dirname, './dist'),
  node: path.resolve(__dirname, './node_modules'),
  src: path.resolve(__dirname, './src')
};
module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@js': path.resolve('assets/js')
    }
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          // options: { 
          //   minimize: true,
          //   attributes: {
          //     root: paths.src,
          //   }
          //  }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      excludeChunks: ['server']
    })
  ]
}