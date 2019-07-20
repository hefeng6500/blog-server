'use strict';

const Controller = require('egg').Controller;

class User extends Controller {
  async queryUser() {
    const { ctx, app } = this;
    const res = await ctx.service.user.queryUser(ctx.request.query)
    
    this.ctx.body = res
  }
}

module.exports = User;