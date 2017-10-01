const path = require("path");

module.exports = {
    entry:  "./lib/client/js/beans.js",
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: "beans.bundle.js",
        library: "Beans",
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    externals: {
        "jquery": "jQuery"
    }
};