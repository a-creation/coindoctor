const webpack = require('webpack');
const path = require('path');

const entry = [
  './client/index.js'
];

const output = {
  path: path.join(__dirname, '/build'),
  filename: 'bundle.js',
};

module.exports = {
  entry, output,
  mode: 'development',
  devServer: {
    publicPath: ('/build/'),
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }

      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ], 
      }
    ]
  },
};    
          