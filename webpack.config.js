/*
	Simple config for the transpilation of JSX and newer standards of
	JavaScript, in addition to the transformation of Sass into CSS.
	The bundling product is found within /dist.
*/

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
			{ test: /\.(png|jpg)$/, use: { loader: 'url-loader', options: {limit: 10000} }, exclude: /node_modules/ }
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'app/index.html'
	})]
}
