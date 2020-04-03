const path = require("path");

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://jiepp.com:3001",
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  }
};
