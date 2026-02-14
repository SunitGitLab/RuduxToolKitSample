const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // Set the mode to development or production
  mode: 'development', 
  
  // Entry point for the application
  entry: './src/index.jsx', 
  
  // Where to output the bundled code
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  
  // Configure the development server
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true, // For client-side routing
    hot: true,
  },
  
  module: {
    rules: [
      {
        // Rule for JavaScript and JSX files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // You would add more rules here for CSS, images, etc.
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] 
        // Order: sass-loader (compiles SCSS to CSS) -> css-loader -> style-loader
      },
    ]
  },
  
  // Plugins for Webpack
  plugins: [
    // Generates an index.html file and injects the bundle.js script
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};