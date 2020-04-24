const { createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
  app.use("/auth/", createProxyMiddleware({ target: "http://localhost:3001/" }));
  app.use("/api/", createProxyMiddleware({ target: "http://localhost:3001/" }));
  app.use("/users/", createProxyMiddleware({ target: "http://localhost:3001/" }));
  app.use("/books/", createProxyMiddleware({ target: "http://localhost:3001/" }));
};
