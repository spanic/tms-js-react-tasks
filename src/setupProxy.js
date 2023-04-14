const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/airlabs/api/', '/tasks', '/shop/api'],
    createProxyMiddleware({
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/airlabs/api': '',
        '^/shop/api': '',
      },
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
