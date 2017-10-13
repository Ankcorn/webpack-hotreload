const  path = require('path')
const webpack = require('webpack')


const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PRODUCTION = process.env.NODE_ENV === ' production'


let entry = PRODUCTION  
    ? ['./src/index.js'] 
    : ['./src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080']

let plugins = PRODUCTION ? [] : [new webpack.HotModuleReplacementPlugin()]
module.exports={
    entry:entry,
    plugins:plugins,
    output:{
        path:path.join(__dirname,'dist'),
        publicPath:'/dist',
        filename:'bundle.js'
    }
}