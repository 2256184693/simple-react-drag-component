
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

var config = {
  mode: 'production',
  // devtool: 'inline-source-map',
  entry: resolve('./src/index.js'),
  output: {
    filename: 'main.js',
    path: resolve('./dist'),
    library: 'react-drag-component',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }
    ]
  }
};

module.exports = config;