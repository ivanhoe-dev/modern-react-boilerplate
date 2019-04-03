const Fibers = require('fibers');
const Sass = require('sass');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [
        './src/app.js', // React Root Component
    ],
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    context: '/',
                    name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)$/,
                loader: 'file-loader',
                options: {
                    context: '/',
                    name: 'fonts/[name].[ext]',
                },
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: Sass, // Dart Sass
                        fiber: Fibers, // Synchronous compilation (x2 speed)
                        sourceMap: true,
                    },
                }],
            },
        ],
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:9000/',
            },
            {
                reload: false,
            },
        ),
    ],
    devServer: {
        hot: true,
        open: false,
        watchContentBase: true,
        contentBase: './',
        port: 9000,
    },
};
