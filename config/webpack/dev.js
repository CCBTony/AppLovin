const commonConfig = require('./__common__');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { getServer } = require('./__helpers__');

module.exports = merge(commonConfig, {
  entry: './src/main.HMR.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  devServer: getServer('#/', process.env.PROXY_HOST, process.env.PORT),
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      templateParameters: {
        title: 'Mail Man (dev)',
      },
    }),
  ],
});
