const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devConfig = require('./webpack.config.development');
const path = require('path');

new WebpackDevServer(webpack(devConfig), {
  noInfo: true,
  contentBase: path.resolve(__dirname, '../build'),
  publicPath: '/',
  watchContentBase: true,
  compress: true,
  port: 8080,
  hot: true,
  inline: true,

  after: () => {
    console.log('\033[2J');
  }
}).listen(8080, '0.0.0.0', err => {
  if (err) {
    console.error(err)
  }

  console.log(`[WDS]: Server Running at http://localhost:8080`);
});
