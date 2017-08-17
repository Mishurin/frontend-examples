const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'main-a': './src/main-a.js',
        'main-b': './src/main-b.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pagea.html',
            filename: 'pagea.html',
            chunks: ['main-a', 'common']
        }),
        new HtmlWebpackPlugin({
            template: './src/pageb.html',
            filename: 'pageb.html',
            chunks: ['main-b', 'common']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        }),
        new CleanWebpackPlugin(['dist'])
    ],
};