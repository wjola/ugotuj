const path = require('path');

module.exports = {
    mode: 'development', 
    entry: ['regenerator-runtime/runtime.js', './src/app.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
              ]
            }
          }
        }]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public')
        },
        port: 9000
    }
};