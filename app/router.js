'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 挂载鉴权路由
  app.passport.mount('github');

  router.prefix('/api') // 添加路由前缀

  router.get('/', controller.home.index);
  router.get('/getCode', controller.login.getCode);
  router.post('/login', controller.login.login);

};
