const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const CleanWebPackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})

// Clean build directory every time we build our app.
// 1st arg: array of paths.
// 2nd arg: obj of options (optional).
const CleanWebPackPluginConfig = new CleanWebPackPlugin(['build']);

// Minify Javascript.
const UglifyJsPluginConfig = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
});

// Minify CSS.
const OptimizeCSSAssetsPluginConfig = new OptimizeCSSAssetsPlugin({});

// Extract all css into a seperate file.
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: "[name].[hash].css",
})

module.exports = merge(common, {
  optimization: {
    minimizer: [
      UglifyJsPluginConfig,
      OptimizeCSSAssetsPluginConfig
    ]
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    CleanWebPackPluginConfig,
    DefinePluginConfig,
    MiniCssExtractPluginConfig,
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  }
})