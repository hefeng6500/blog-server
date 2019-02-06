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
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'nodeserver',    
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549424148438_2260';
  config.tokenSecret = "nodeServer"
  

  // add your config here
  config.middleware = [
    'tokenVaild'
  ];

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:3000']
  };
  config.cors = {
    // origin:'*',
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

