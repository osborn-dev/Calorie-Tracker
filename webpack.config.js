const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    mode: 'development',
    entry: {
       bundle: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name] [contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack app',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}