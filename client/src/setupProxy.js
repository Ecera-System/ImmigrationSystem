const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1', // Specify the prefix for API requests
    createProxyMiddleware({
      target: 'http://localhost:5000/', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
