const path = require("path")
const nodeExternals = require("webpack-node-externals")

const NODE_ENV = "development"
module.exports = {
  entry: "./index.js",
  mode: NODE_ENV,
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
}
