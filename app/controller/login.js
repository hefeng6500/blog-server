'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
const jwt = require('jsonwebtoken');
const service = require('../service/user')


class HomeController extends Controller {
  async getCode(){
    const { ctx } = this;
    let codeInfo = svgCaptcha.create({
			width: 120,
			height: 40,
      size: 4, // 验证码长度
      ignoreChars: '012iIlLoOzZ', // 验证码字符中排除 
      noise: 3, // 干扰线条的数量
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#d8e3e7', // 验证码图片背景颜色
    });
    ctx.body = {
      success: 1,
      message: '',
      data: {
        data: codeInfo.data,
        text: codeInfo.text
      }
    }
  }

  async login() {
    const { ctx, app } = this;
    const username = ctx.request.body.username
    const password = ctx.request.body.password
		const code = ctx.request.body.code
		
    ctx.body = await ctx.service.user.login(username,password)
  }

  async success(){
    this.ctx.body = this.ctx.state.user;
  }
}

module.exports = HomeController;
