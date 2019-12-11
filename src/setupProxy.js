const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/forecast/22af062ee7f2ed78fd2c208f8807e93c/43.1566,77.6088',
        proxy({
          target: 'https://api.darksky.net',
          changeOrigin: true,
        })
      );
};