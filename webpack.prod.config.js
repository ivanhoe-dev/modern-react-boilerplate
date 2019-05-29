const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [
        './src/app.js', // React Root Component
    ],
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    context: '/',
                    name: 'images/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)$/,
                loader: 'file-loader',
                options: {
                    context: '/',
                    name: 'fonts/[name].[hash:8].[ext]',
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
                        sourceMap: true,
                    },
                }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' }),
    ],
};
