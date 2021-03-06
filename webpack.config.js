var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'src/client/public');
var APP_DIR = path.join(__dirname, 'src/client/app');

var config = {
  devtool: 'cheap-module-source-map',
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map",
  },
  resolve: {
    extensions: ["",".js",".jsx"],
    alias: {
      "highlight.js": path.join(__dirname, "highlight.js/build/highlight.min.js"),
      "react": "preact-compat",
      "react-dom": "preact-compat"
    },
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: "raw-loader"
      },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 20}),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
  ]
};

module.exports = config;
