const merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common');

const DevelopmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

  optimization: {
    minimize: false
  }
};

module.exports = merge(CommonConfig, DevelopmentConfig);
