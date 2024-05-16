const webpack = require('webpack');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        firstComp: './src/js/firstComp/index.js',
        vendor: ['lodash']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js/components')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // This assumes that your vendor import exist in your node_modules directory
                return module.context &&
                module.context.indexOf('node_modules') !== -1

            }
        })
    ]
}