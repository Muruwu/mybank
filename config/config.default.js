'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511751467690_7036';

  // add your config here
  config.middleware = ['errorHandler'];

  config.mybank = {
    url: 'http://test.tc.mybank.cn/gop/gateway.do',
    signUrl: 'http://localhost:8080/getSign',
  };

  config.sequelize = {
    dialect: 'postgres',
    database: 'mybank',
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    password: 'postgres',
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '6',
    },
    agent: false,
  };
  return config;
};
