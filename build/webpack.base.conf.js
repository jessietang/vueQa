var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    entry: {/*页面入口文件配置*/
        app: './src/main.js'
    },
    output: { /*入口文件输出配置*/
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js' /*app.js*/
    },
    resolve: { /*其他解决方案配置*/ /*resolve 用来配置应用层的模块（要被打包的模块）解析*/
        extensions: ['', '.js', '.vue', '.json'], /*//自动扩展文件后缀名，意味着我们require模块或者import模块可以省略不写后缀名*/
        fallback: [path.join(__dirname, '../node_modules')],
        alias: { /*//模块别名定义，方便后续直接引用别名，无须多写长长的地址*/
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: { /*resolveLoader 用来配置 loader 模块的解析*/
        fallback: [path.join(__dirname, '../node_modules')]
    },
    /*module.loaders 是最关键的一块配置。它告知 webpack 每一种文件都需要使用什么加载器来处理*/
    module: {
        /*加载器配置*/
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue' /*loader: vue-loader*/
            },
            {
                test: /\.js$/,
                loader: 'babel', /*loader: babel-loader*/
                include: [
                    path.join(projectRoot, 'src')
                ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json' /*loader: json-loader*/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url', /*loader: url-loader*/  /*它会将样式中引用到的图片转为模块来处理*/
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url', /*loader: url-loader*/
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    vue: {
        loaders: utils.cssLoaders({sourceMap: useCssSourceMap}),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    }
}
