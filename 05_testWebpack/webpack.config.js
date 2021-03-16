const path = require('path')        //core module of node.js

module.exports = {
    entry: './src/index.js', //also webpack default
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')   //needs an absolute directory, path is required for that
    },
    //watch: true     //webpack runs steadily, only needed when without dev server
    devServer: {
        port: 9966,
        contentBase: path.resolve(__dirname, 'dist'),    //folder as base for webserver
        hot: true           //enables hot module replacement
    },
    mode: "development"     //stops warning message to in production mode
}