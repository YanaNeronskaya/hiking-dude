const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        entry: {
            client: './src/client/client.tsx',
            bundle: './src/bundle.tsx',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.scss'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            libraryTarget: 'umd',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loaders: ['react-hot-loader/webpack', 'babel-loader'],
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        // isDevelopment
                        //     ? 'style-loader'
                        //     : MiniCssExtractPlugin.loader,
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        // isDevelopment
                        //     ? 'style-loader'
                        //     : MiniCssExtractPlugin.loader,
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                        {
                            loader: 'react-svg-loader',
                            options: {
                                jsx: true, // true outputs JSX tags
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                // filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                // chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
        ],
    },
    {
        entry: {
            server: './src/server/server.tsx',
        },
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
            extensions: ['.ts', '.tsx', '.js', '.scss'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            libraryTarget: 'commonjs2',
        },
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: ['null-loader'],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                        {
                            loader: 'react-svg-loader',
                            options: {
                                jsx: true, // true outputs JSX tags
                            },
                        },
                    ],
                },
            ],
        },
    },
];
