const jwt = require('jsonwebtoken')
const util = require('util')

const verify = util.promisify(jwt.verify);

module.exports = (options, app) => {
  const { config } = app
  return async function(ctx, next) {
    try {
      // 获取jwt
      const token = ctx.header.authorization; 
      if (token) {
        try {
          // 解密payload，获取用户名和ID
          let payload = await verify(token.split(' ')[1], config.tokenSecret);
          ctx.user = {
            name: payload.name,
            id: payload.id
          };
        } catch (err) {
          console.log('token verify fail: ', err)
        }
      }
      await next();
    } catch (err) {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
          success: 0,
          message: '用户身份认证过期，请重新登录'
        };
      } else {
        err.status = 404;
        ctx.body = {
          success: 0,
          message: '404'
        };
      }
    }
  }
}