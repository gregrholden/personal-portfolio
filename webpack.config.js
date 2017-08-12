const path = require('path');

module.exports = {
  entry: {
    App: './app/src/scripts/App.js',
    Vendor: './app/src/scripts/Vendor.js'
  },
  output: {
    path: path.resolve(__dirname, "app/assets/scripts"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
