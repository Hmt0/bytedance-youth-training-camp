const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true 
        // v5的优化：清除dist文件夹
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // 从后往前执行
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management"
        }),
    ],
    devServer: {
        static: './dist',
    }
}