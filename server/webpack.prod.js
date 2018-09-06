const merge = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(require('./base.config'), {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify(
          'https://thanhtran1987.github.io/react-redux-typescript-webpack-prod',
        ),
      },
    }),
  ],
});
