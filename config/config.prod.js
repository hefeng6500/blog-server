'use strict';

module.exports = appInfo => {
  const config = exports = {
    cluster: {
      listen: {
        port: 3001,
        hostname: '127.0.0.1',
        // path: '/api',
      }
    },
    mysql: {
      client: {
        host: '主机地址',
        port: '端口号',
        user: 'mysql用户名',
        password: 'mysql密码',
        database: '数据库名',
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    },

    jwt: {
      secret: "nodeServer"
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549424148438_2260';
  config.tokenSecret = "nodeServer"


  // add your config here
  config.middleware = [
    'tokenValid'
  ];

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['https://www.hefeng6500.cn']
  };
  config.cors = {
    credentials: true,
    origin:'https://www.hefeng6500.cn',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };


  config.passportGithub = {
    key: 'your_clientID',
    secret: 'your_clientSecret',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };
  return config;
};

