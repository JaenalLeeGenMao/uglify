const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Base = require('./webpack.config.base')

const options = {
    babelrc: false,
    cacheDirectory: true,
    presets: [['@babel/preset-env', { modules: false, loose: true, useBuiltIns: 'usage' }], '@babel/preset-stage-0', '@babel/preset-react'],
    plugins: [
        ['@babel/transform-runtime', { helpers: true, polyfill: false, regenerator: true, moduleName: '@babel/runtime' }],
    ],
}

module.exports = {
    ...Base,
    module: {
        rules: [
            ...Base.module.rules,
            { sideEffects: false, test: /\.jsx?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options } },
        ],
    },
    entry: ['index.js'],
    plugins: [
        ...Base.plugins,
        new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: 'static', defaultSizes: 'gzip' }),
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    ],
    devtool: undefined,
    optimization: { runtimeChunk: true, splitChunks: { chunks: 'all' } },
    mode: 'production',
}
