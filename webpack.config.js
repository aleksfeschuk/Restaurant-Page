const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin"); 

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
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
          filename: "images/[name][hash][ext]",
        }
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "dist/images" }, 
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), 
    port: 3000,
    open: true,
  },
};
