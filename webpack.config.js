var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: './dist'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			// exclude: /node_modules/,
			query: {
				presets: ['react', 'es2015', 'stage-2'],
				cacheDirectory: true
			}
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			// title: 'Employee Service',
			template: './src/index.tmpl.html',
			filename: './index.html'
		})
	]
};