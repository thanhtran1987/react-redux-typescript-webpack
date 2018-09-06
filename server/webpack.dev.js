const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(require('./base.config'), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify('http://localhost:8080'),
      },
    }),
  ],
  module: {
    rules: [{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }],
  },
});
