const commonConfig = require('./__common__');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    filename: '[name].bundle.[fullhash].js',
    path: path.resolve(__dirname, '../../dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      templateParameters: {
        title: 'Mail Man',
      },
    }),
  ],
});
