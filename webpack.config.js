'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        main: './src/main.ts',
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'

    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'raw-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "to-string-loader"
                }, {
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
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

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        })
    ],


    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },

};
