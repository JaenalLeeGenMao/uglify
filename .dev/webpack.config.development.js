const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const Base = require('./webpack.config.base')

const options = {
    babelrc: false,
    cacheDirectory: true,
    presets: [
        ['@babel/preset-env', { modules: false, useBuiltIns: 'usage' }],
        '@babel/preset-stage-0',
        '@babel/preset-react',
    ],
    plugins: [
        'react-hot-loader/babel',
        // The following three only due to react-hot-loader having trouble with real classes atm
        '@babel/plugin-proposal-decorators',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-classes',
    ],
}

module.exports = {
    ...Base,
    module: {
        rules: [
            ...Base.module.rules,
            { test: /\.jsx?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options } },
            { test: /\/App\.js$/, loader: 'react-hot-loader-loader' },
        ],
    },
    entry: ['webpack-hot-middleware/client', 'index.js'],
    plugins: [
        ...Base.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin(),
    ],
    devServer: { hot: true, contentBase: path.resolve('./'), stats: 'errors-only', historyApiFallback: true },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
}