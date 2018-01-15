var path = require('path');

var JS_DIR = 'js/';
var JS_DIR_ABSOLUTE = path.resolve(__dirname, JS_DIR);

module.exports = {
    entry: {
        main: JS_DIR_ABSOLUTE + '/index.jsx'
    },
    output: {
        filename: './' + JS_DIR + 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: JS_DIR_ABSOLUTE,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
}
