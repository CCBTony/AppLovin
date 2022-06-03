const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

class FileListPlugin {
  constructor() {}
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      let assets = compilation.assets;
      const files = [];
      Object.entries(assets).forEach(([filename]) => {
        if (filename.includes('serviceWorker')) return;
        files.push(filename);
      });
      const serviceWorkerContent = compilation.assets['serviceWorker.js']._value
        .toString()
        .replace(`[123]`, JSON.stringify(files));
      compilation.assets['serviceWorker.js'] = {
        source() {
          return serviceWorkerContent;
        },
        size() {
          return serviceWorkerContent.length;
        },
      };
    });
  }
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
      '@assets': path.resolve(__dirname, '../../assets'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.API_BACK': JSON.stringify(process.env.API_BACK || ''),
    }),
    new FileListPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, '../../assets/js'), to: path.resolve(__dirname, '../../dist') }],
    }),
  ],
};
