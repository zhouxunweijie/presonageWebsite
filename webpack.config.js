
var Path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry:"./src/main.js",
    output:{
        path:Path.resolve(__dirname,"./dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.less$/,
                loader:"style-loader!css-loader!less-loader"
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                loader:"file-loader",
                options:"[name].[ext]?[hash]"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
    },
    devtool: '#eval-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map',
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
