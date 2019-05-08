const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  // favicon: "./src/static/favicon.ico"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[hash].js'
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        loader: "file-loader",
        options: { name: '/static/[hash].[ext]' }
      },
      {
        test: /\.(otf|ttf)$/,
        loader: "file-loader",
        options: { name: '/static/[hash]' }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
