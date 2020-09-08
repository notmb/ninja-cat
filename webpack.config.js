const path = require('path');

module.exports = {
  entry: './src/ninja.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};