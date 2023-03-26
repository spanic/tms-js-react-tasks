const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/airlabs/api/', '/tasks'],
    createProxyMiddleware({
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/airlabs/api': '',
      },
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
