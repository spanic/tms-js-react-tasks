require('dotenv').config();

const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('static'));

app.use(
  '/airlabs/api',
  createProxyMiddleware({
    target: 'https://airlabs.co',
    pathRewrite: {
      '^/airlabs/api': '/api/v9',
    },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.path += `${req.query ? '&' : '?'}api_key=${
        process.env.AIRLABS_API_KEY
      }`;
    },
    logLevel: 'debug',
    secure: false,
    changeOrigin: true,
  })
);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(4000, () => {
  console.log('Express.js server started on port 4000');
});
