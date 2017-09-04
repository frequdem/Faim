const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputPath = path.resolve(__dirname, './build');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: outputPath,
        filename: 'Faim.build.js',
        library: 'Faim',
        libraryTarget: 'window'
    },
    module: {
        loaders: [ {
            test: /\.ts$/,
            loader: 'ts-loader'
        } ]
    },
    resolve: {
        extensions: [ '.web.js', '.ts', '.js' ]
    },
    externals: {
        'jquery': 'jQuery'
    },
    plugins: [
        new CleanWebpackPlugin([outputPath + '/*'])
    ]
};