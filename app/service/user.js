const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class UserService extends Service {
  async login(username, password) {
    const { ctx, config, app } = this;

    const results = await app.mysql.query(`SELECT * FROM user WHERE username=? AND password=?`, [username, password]);
    const user = results[0]
    // const token = jwt.sign({
    //   name: user.username,
    //   id: user.id,
    // }, config.tokenSecret, { expiresIn: '20s' });

    const token = app.jwt.sign({
      name: user.username,
      id: user.id,
    }, config.jwt.secret, { expiresIn: '20min' });

    let userInfo = {
      success: 1,
      message: '',
      data: {
        userId: user.id,
        username: user.username,
        token: token
      }
    }

    return userInfo
  }
}

module.exports = UserService;