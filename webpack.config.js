var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module:{
	loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'less-loader'
        }]
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
