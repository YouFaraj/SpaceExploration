const Path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};