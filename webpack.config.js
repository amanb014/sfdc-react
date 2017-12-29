var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './src/app.js',
	output:{
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
	},
	module:{
		loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
	},
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
	 plugins: [
        new HtmlWebpackPlugin({
        	title: 'Vacation Tracker',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html',
        })],
        resolve: {
    extensions: ['.js', '.jsx']
  }
}