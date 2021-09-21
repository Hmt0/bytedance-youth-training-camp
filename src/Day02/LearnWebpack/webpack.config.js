const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const os = require('os');

module.exports = {
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.jsx', 'json']
    },
    entry: path.resolve(__dirname, 'src/main.js'),
    module: {
        noParse: /node_modules\/(jquery\.js)/,
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                use: {
                    loader: 'thread-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 加载样式
                    'css-loader' // 编译css文件
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            // 需要被处理的文件的路径
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}