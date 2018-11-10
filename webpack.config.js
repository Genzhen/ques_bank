const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let webpackConfig = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].[hash:5].js",
        publicPath:'/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|postcss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            importLoaders: 1,
                            // localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: 'postcss-loader'
                    }
                ]

            },
            {
                test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        name:'public/images/[name].[ext]?[hash]'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                }, ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            from:path.join(__dirname,'./src/assets/'),
            to:path.resolve(__dirname, './dist/assets/'),
        }]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'ques_bank',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: _modeflag ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
            chunkFilename: _modeflag ? "styles/[id].[contenthash:5].css" : "styles/[id].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
          })
    ]
}
module.exports = merge(_mergeConfig, webpackConfig);







// module.exports = {
    // entry: {
    //     app: './src/index.js'
    // },
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: "js/[name].[hash:5].js"
    // },
    // devtool: '#eval-source-map',
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     // compress: true,
    //     port: 8081
    // },
    // module: {
    //     rules: [{
    //             test: /\.js$/,
    //             loader: "babel-loader",
    //             exclude: /node_modules/
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [{
    //                     loader: MiniCssExtractPlugin.loader
    //                 }, {
    //                     loader: "css-loader",
    //                     options: {
    //                         modules: true,
    //                         importLoaders: 1,
    //                         // localIdentName: '[name]__[local]--[hash:base64:5]'
    //                     }
    //                 }, {
    //                     loader: 'postcss-loader'
    //                 }
    //                 // "style-loader",

    //             ]
    //             // loader: 'style-loader!css-loader'

    //         },
    //         {
    //             test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
    //             // loader: 'url-loader',
    //             use: [{
    //                 loader: 'url-loader',
    //                 options: {
    //                     limit: 10 * 1024
    //                 }
    //             }]
    //         },
    //         {
    //             test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //             loader: "url-loader",
    //             options: {
    //                 limit: 10000,
    //                 name: 'fonts/[name].[ext]?[hash]'
    //             }
    //         },
    //         {
    //             test: /\.vue$/,
    //             use: [{
    //                 loader: 'vue-loader',
    //                 //     options: {
    //                 //         modules: true,
    //                 //         loaders: {
    //                 //             'less': [
    //                 //                 'vue-style-loader',
    //                 //                 'css-loader',
    //                 //                 'less-loader'
    //                 //             ]
    //                 //             //         // "css": new ExtractTextPlugin({
    //                 //             //         //     loader: "css-loader",
    //                 //             //         //     fallback: "vue-style-loader"

    //                 //             //         // }),
    //                 //             //         // "less": new ExtractTextPlugin({
    //                 //             //         //     loader: "css-loader!style-loader",
    //                 //             //         //     fallback: "vue-style-loader"
    //                 //             //         // }),
    //                 //         }
    //                 //     }
    //                 // }, {
    //                 //     loader: MiniCssExtractPlugin.loader
    //             }, ]
    //             // loader: 'vue-loader',

    //         }
    //     ]
    // },
    // resolve: {
    //     extensions: ['.js', '.vue', '.json'],
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js',
    //         '@': path.resolve(__dirname, './src')
    //     }
    // },
    // optimization: {
    //     minimizer: [new UglifyJsPlugin()]
    // },
    // plugins: [
    //     new VueLoaderPlugin(),
    //     // new ExtractTextPlugin("styles/app.css"),
    //     // new webpack.optimize.CommonsChunkPlugin({
    //     //     name: 'vender',
    //     //     minChunks: 2
    //     // }),
    //     // new UglifyJsPlugin({
    //     //     uglifyOptions: {
    //     //         compress: {
    //     //             warnings: false
    //     //         }
    //     //     },
    //     //     sourceMap: true
    //     // }),
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         title: 'ques_bank',
    //         template: './src/index.html'
    //     }),
    //     new MiniCssExtractPlugin({
    //         filename: "[name].css",
    //         chunkFilename: "[id].css"
    //     }),
    //     // new MiniCssExtractPlugin({
    //     //     filename: style.css
    //     //   }),
    //     new webpack.HotModuleReplacementPlugin()
    // ]
// }
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map';
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         //抽取从node_modules引入的模块，如vue
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vender',
//             minChunks: function (module, count) {
//                 var sPath = module.resource;
//                 return sPath &&
//                     /\.js$/.test(sPath) &&
//                     sPath.indexOf(
//                         path.join(__dirname, 'node_modules')
//                     ) === 0
//             }
//         })
//     ])
// }