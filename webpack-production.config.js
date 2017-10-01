/*
	Webpack config for bundling a production-ready
	version of the application.
*/

let devConfig = require('./webpack.config.js');
let webpack = require('webpack');

let productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify("production")
    },
});

devConfig.plugins.push(productionPlugin);

module.exports = devConfig;
