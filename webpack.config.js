const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
  entry: {
    main: "./src/index.js",
    admin: "./src/admin.js" //admin panels
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",  
        generator: {
          filename: "images/[name][hash][ext]" 
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "dist", "index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "dist", "admin.html"),
      filename: "admin.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/images", to:"images"}],
    }),
  ],
  devServer: {
    static: "./dist", 
    port: 3000,
    open: true,
    historyApiFallback: true, 
    proxy: {
      '/api': {
        target: 'http://localhost:5000', 
        secure: false,
        changeOrigin: true,
      }
    },
  },
};
