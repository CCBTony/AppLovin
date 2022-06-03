function getServer(openPage, PROXY_HOST, PORT) {
  const port = PORT || '9001';
  const devServer = {
    proxy: PROXY_HOST, // 后端地址
    host: '0.0.0.0',
    static: {
      directory: './dist',
    },
    hot: true,
    client: {
      overlay: true,
    },
    open: [openPage],
    port,
    https: true,
  };
  if (PROXY_HOST) {
    // proxy 服务
    devServer.proxy = {
      '/api/*': { target: PROXY_HOST },
    };
  } else {
    devServer.onBeforeSetupMiddleware = ({ app }) => app.use('/api/*', require('../../mock'));
  }
  return devServer;
}

module.exports = {
  getServer,
};
