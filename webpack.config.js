var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/frontend/main',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'main.js',
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    transformToRequire: {
                        img: 'src',
                        image: 'xlink:href',
                        'source': 'src',
                    }
                }
            },
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpe?g|gif|svg|jpg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: './images/[name].[hash:8].[ext]',
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|acc)(\?.*)?$/,
                use: 'url-loader',
            },
            {
                test: /\.(woff2|eot|ttf|otf|svg|woff)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: './fonts/[name].[hash:7].[ext]',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/frontend/index.html',
            filename: './index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
}