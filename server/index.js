const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.use(createProxyMiddleware({ target: 'http://3.132.120.26:8080', changeOrigin: true }));
app.listen(3030);