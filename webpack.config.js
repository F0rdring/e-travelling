var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
    entry: SRC_PATH + '/app/main.ts',
    output: {
        path: BUILD_PATH,
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.css'],
        alias: {
            'static': path.resolve(SRC_PATH, 'static')
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(html|css)$/,
                loaders: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader',
                include: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                loaders: 'url-loader?limit=0&name=static/img/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loaders: 'file-loader?name=static/fonts/[name].[ext]'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ mangle: { keep_fnames: false } }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'src/static/css'), to: 'static/css' },
            { from: path.resolve(__dirname, 'src/static/img'), to: 'static/img' },
            { from: path.resolve(__dirname, 'src/static/lib'), to: 'static/lib' },
            { from: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/fonts'), to: 'assets/fonts' },
            { from: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/images'), to: 'assets/images' },
            { from: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/styles'), to: 'assets/styles' },
            { from: path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/assets/icons'), to: 'assets/icons' }
        ]),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: SRC_PATH + '/index.html',
            favicon: SRC_PATH + '/static/img/favicon.ico',
            inject: true
        })
    ]
}