const path = require('path');
const HtmlPlugin = require('../index.js');

module.exports = {
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlPlugin()]
}