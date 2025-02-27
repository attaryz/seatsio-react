var path = require('path');
module.exports = {
    entry: ['./src/main/index.js'],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};
