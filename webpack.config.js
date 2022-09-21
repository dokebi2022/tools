const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


var config = {    
  mode: process.env.NODE_ENV,
  entry:"./src/js/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'), // './dist'의 절대 경로를 리턴합니다.
    filename: 'main.js',
    clean: {
      keep: /\.git/,
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })],
  resolve: {
    fallback: {
        fs: false,
        net: false,
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve("url/"),
    }
  },
};

module.exports = (env,argv)=>{

  console.log(process.env.NODE_ENV);
  console.log(argv.mode);
  return config;
}