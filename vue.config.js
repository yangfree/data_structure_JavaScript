const path = require("path");

module.exports = {
  devServer: {
    port: 8082,
    proxy: {
      "/home": {
        target: "http://localhost:3001",
        ws: true,
        changeOrigin: true
      },
      "/resume": {
        target: "http://localhost:3001",
        ws: true,
        changeOrigin: true
      },
      "/message": {
        target: "http://localhost:3001",
        ws: true,
        changeOrigin: true
      },
      "/about": {
        target: "http://localhost:3001",
        ws: true,
        changeOrigin: true
      },
      "/connect": {
        target: "http://localhost:3001",
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
