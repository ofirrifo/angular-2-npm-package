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

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, './src'),
            {
                // your Angular Async Route paths relative to this root directory
            }
        ),
    ],


    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, 'node_modules') ]
    },

};
