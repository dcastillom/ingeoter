const webpack = require('webpack')
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'production'

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '_build'),
		filename: 'bundle.js',
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{ 
				test: /\.vue$/, 
				loader: 'vue-loader' 
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	plugins: [
		//uglify js
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: { warnings: false },
		// 	output: { comments: false },
		// 	sourceMap: false
		// }),
		//env plugin
        new ExtractTextPlugin('[name].[hash].css'),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
		})
	]
}