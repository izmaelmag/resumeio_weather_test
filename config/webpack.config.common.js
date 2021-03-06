const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const CommonConfig = {
  target: "web",

  entry: {
    weather: path.resolve(__dirname, '../source/index.jsx'),
  },

  output: {
    path: path.resolve(__dirname, '../build/static/js'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  optimization: {
    noEmitOnErrors: true,
    mergeDuplicateChunks: true
  },

  resolve: {
    extensions: ['.js', '.jsx', '.svg'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          },
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../build/index.html'),
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true,
    }),

    new CopyPlugin([
      {
        to: path.resolve(__dirname, '../build/'),
        from: path.resolve(__dirname, '../public/'),
        ignore: ['*.html'],
        cache: true
      },
    ])
  ]
};

module.exports = CommonConfig;
