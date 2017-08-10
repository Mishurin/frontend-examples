var HTMLWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/typescript/4_angular',
	entry: [
		'./src/vendors.ts',
		'./src/index.ts',
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080/',
	],
	output: {
		path: './bin',
		filename: '[name].entry.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new HTMLWebPackPlugin({
			template: './src/index.html',
			inject: 'head'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};