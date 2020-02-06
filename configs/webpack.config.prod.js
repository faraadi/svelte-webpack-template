const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const distPath = path.resolve(rootPath, "dist");
const publicPath = path.resolve(rootPath, "public");
const srcPath = path.resolve(rootPath, "src");

module.exports = {
    mode: "production",
    entry: {
        bundle: path.resolve(srcPath, "index.js")
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: distPath,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name(fileName) {
                        if (fileName.match(/\.(png|svg|jpg|jpeg|gif)$/)) {
                            return "images/[name].[hash].[ext]";
                        }
                        else if (fileName.match(/\.(woff|woff2|eot|ttf|otf)$/)) {
                            return "fonts/[name].[hash].[ext]";
                        };
                        return '[path][name].[ext]';
                    },
                },
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'public', "index.html"),
            templateParameters: {
                'PUBLIC_URL': process.env.PUBLIC_URL
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: publicPath, to: distPath
            }
        ]),
        new DuplicatePackageCheckerPlugin(),
    ],
    devtool: false
};