/*webpack.dev.config.js - to configure dev related bundles*/
var path = require('path');
var webpack = require('webpack');
var WatchTimePlugin = require('webpack-watch-time-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
template: __dirname + '/wwwroot/js/html/index.html',
filename: 'index.html',
inject: 'body'
})
module.exports = {
    entry: {
        "app": [
          path.join(__dirname, 'wwwroot/js', 'Main.js')
        ]
    },

    output: {
        path: path.join(__dirname, 'wwwroot/js', 'release'),
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    resolve: {
        alias: {
          'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.css', '.png', '.jpg'],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("bundle"),
      WatchTimePlugin,
      HtmlWebpackPluginConfig
    ],
    watch: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'                
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};
