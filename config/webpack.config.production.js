const merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common');

const ProductionConfig = {
  mode: 'production',
  devtool: 'cheap-source-maps',

  optimization: {
    minimize: true
  }
};

module.exports = merge(CommonConfig, ProductionConfig);
