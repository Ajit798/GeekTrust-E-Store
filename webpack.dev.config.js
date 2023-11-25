const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	mode: 'development',
	devServer: {
		port: 3000,
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		devMiddleware: {
			index: true,
		},
		historyApiFallback: true,
	},
	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
};
