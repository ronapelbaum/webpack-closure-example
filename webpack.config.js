const path = require('path');

module.exports = {
    entry: {
        'es6': path.resolve(__dirname, 'src', 'es6/app.js'),
        'closure': path.resolve(__dirname, 'src', 'closure/app.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'closure-loader',
                options: {
                    paths: [
                        path.resolve(__dirname, 'src', 'closure'),
                    ],
                    es6mode: true,
                    watch: false,
                    // fileExt: '.js',
                },
            }
        ]
    }
};