const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: "development",
   entry: 
      // index: "./src/Bank.js",
       "./src/map.js",
   output: {
      filename: "map.js",
      path: path.resolve(__dirname, "dist"),
      clean:  true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "src", "map.html"),
      }),
   ],
   module:{
      rules:[
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            // test: /\.s[ac]ss$/i,
            test: /\.(sa|sc|c)ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
      ]
   }
};