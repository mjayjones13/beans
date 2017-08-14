const baseWebpackConfig = require("./base.config.js");

module.exports = Object.assign({},
    baseWebpackConfig,
    {
        devServer: {
            contentBase: "./dist"
        }
    }
);