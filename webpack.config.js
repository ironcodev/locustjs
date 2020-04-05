const path = require('path');

module.exports = (env, argv) => {
	const isDevelopment = argv.mode == 'development';
	const isProduction = argv.mode == 'production';

	return {
		entry: path.resolve(__dirname, 'src/index.js'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: isDevelopment ? 'index.development.js': 'index.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/env']
						}
					}
				}
			]
		},
		plugins: []
	};
}