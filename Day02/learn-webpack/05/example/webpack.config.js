const path = require('path');


module.exports = {
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.md$/i,
                loader: path.resolve(__dirname, "../bundle.js")
            }
        ]
    }
}