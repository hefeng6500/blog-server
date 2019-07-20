'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
const jwt = require('jsonwebtoken');
const service = require('../service/user')
const qs = require("qs")

class HomeController extends Controller {
  async getCode() {
    const { ctx, app } = this;
    let codeInfo = svgCaptcha.create({
      width: 120,
      height: 32,
      size: 4, // 验证码长度
      ignoreChars: '012iIlLoOzZ', // 验证码字符中排除 
      noise: 3, // 干扰线条的数量
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#d8e3e7', // 验证码图片背景颜色
    });
    ctx.session.login_code = codeInfo.text
    ctx.body = {
      success: 1,
      message: '',
      data: {
        data: codeInfo.data
      }
    }
  }

  async login() {
    const { ctx, app } = this;

    const { code, type } = ctx.request.body
    const username = ctx.request.body.username
    const password = ctx.request.body.password
    const validCode = ctx.request.body.validCode

    // function formatCookies(str){
    //   let arr = str.split("; ")
    //   let newObj = {}
    //   arr.forEach(item=>{
    //     let itemArr = item.split("=")
    //     let obj = {}
    //     obj[itemArr[0]] = itemArr[1]
    //     newObj = { ...newObj,...obj}
    //   })
    //   console.log(newObj)
    //   return newObj
    // }

    // let cookies = formatCookies(ctx.request.header.cookie)

    if (code.toLowerCase() === ctx.session.login_code.toLowerCase()) {
      ctx.body = await ctx.service.user.login(username, password)
    } else {
      ctx.status = 400
      ctx.body = {
        success: 0,
        message: "验证码错误",
      }
    }
  }

  async success() {
    this.ctx.body = this.ctx.state.user;
  }
}

module.exports = HomeController;
