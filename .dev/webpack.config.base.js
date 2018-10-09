const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].chunk.js',
        path: path.resolve('./dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack-loader',
                ],
            },
        ],
    },
    resolve: {
        modules: [path.resolve('./'), path.resolve('./node_modules'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: path.resolve('./index.js'), inject: true }),
        new ProgressBarPlugin(),
        new WebpackNotifierPlugin(),
    ],
    performance: { hints: false },
}