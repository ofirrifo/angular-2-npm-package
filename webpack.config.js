var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/main.ts',

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },

    module:{
        rules:[
            {
                test: /\.ts$/,
                use:{
                    loader: 'awesome-typescript-loader'
                }
            }
        ],
    },



    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, 'node_modules') ]
    },

};
