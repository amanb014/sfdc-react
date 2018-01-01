var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    TEMPLATE: path.resolve(__dirname, './src/index.html')
}

module.exports = {
    entry: './src/app.js',
    output:{
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    module:{
    	loaders: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'less-loader'
        }]
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        contentBase: paths.DIST,
        // publicPath : path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Vacation Tracker',
            // // minify: {
            // //     collapseWhitespace: true
            // // },
            // hash: true,
            // template: './src/index.html',
            template: paths.TEMPLATE
        })],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
