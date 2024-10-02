const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      ,
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
