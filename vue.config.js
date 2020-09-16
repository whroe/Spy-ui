
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
pages = pageMethod.pages();
module.exports = {
    lintOnSave:false,
    devServer: {
        overlay:{
            warning:false,
            errors:false
        },

    }
}