const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true
};

config.devtool = 'inline-source-map'; // a tool to find errors in the compiled code, but show them against the source code for easier debugging

module.exports = config;