const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class UserService extends Service {
  async login(username,password) {
    const { ctx,config, app } = this;
    
    const results = await app.mysql.query(`SELECT * FROM user_list WHERE username=? AND password=?`, [username,password]);
    const user = results[0]
    const token = jwt.sign({
      name: user.username,
      id: user.id,
      time: Date.now()
    }, config.tokenSecret, { expiresIn: '2h' });

    let userInfo = {
      success: 1,
      message: '',
      data: {
        userInfo: user,
        token: token
      }
    }
    return userInfo
  }
}

module.exports = UserService;