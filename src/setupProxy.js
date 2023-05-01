const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/airlabs/api/', '/tasks', '/shop/api', '/orders/api'],
    createProxyMiddleware({
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/airlabs/api': '',
        '^/shop/api': '',
        '^/orders/api': '',
      },
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
