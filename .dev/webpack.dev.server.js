const webpack = require('webpack')
const express = require('express')
const middleware = require('webpack-dev-middleware')
const argv = require('yargs').argv
const path = `./webpack.config.${argv.production ? 'production' : 'development'}`
const config = require(path)

const compiler = webpack(config)
const app = express()

app.use(middleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(require('webpack-hot-middleware')(compiler))
app.listen(8080, () => console.log('App listening on port 8080!'))