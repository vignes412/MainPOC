
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "app": path.join(__dirname, 'src', 'Main.js')
    },
    output: {
        path: path.join(__dirname, '', 'release'),
        filename: "[name].min.js",
        chunkFilename: "[id].min.js"
    },
    resolve: {
      alias: {
        'react': path.join(__dirname, 'node_modules', 'react')
      },
      extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.css', '.png', '.jpg'],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: false,
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({ name: "bundle", filename: "bundle.min.js" })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
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
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.png$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
        ]
    }
};
