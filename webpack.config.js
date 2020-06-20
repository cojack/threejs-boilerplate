const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.ts',
	target: 'web',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new DashboardPlugin(),
		new HtmlWebpackPlugin({template: './index.html'}),
		new CopyPlugin({
			patterns: [
				{from: 'assets', to: 'assets'}
			]
		})
	],
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src')
		],
		extensions: ['.ts', '.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000
	}
};
