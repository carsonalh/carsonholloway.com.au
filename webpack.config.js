const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 3000,
        hot: true,
        open: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use:[ 'style-loader', 'css-loader', 'postcss-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};