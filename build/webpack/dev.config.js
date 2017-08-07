const baseWebpackConfig = require("./base.config.js");

module.exports = Object.assign({},
    baseWebpackConfig,
    {
        watch: true
    }
);