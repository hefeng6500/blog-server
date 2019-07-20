'use strict';

const Controller = require('egg').Controller;
// const service = require('../service/article');
const qs = require("qs");
const parseTime = require('../utils/parseTime.js')

class Article extends Controller {
  // 查询用户的文章
  async getArticles() {
    const { ctx, app } = this;
    const { type, user_id } = ctx.request.query
    const res = await ctx.service.article.select(ctx.request.query)
    const userInfo = await ctx.service.user.queryUser(parseInt(user_id))

    if (type === 'details') {
      res.create_time = parseTime(new Date(res.create_time).getTime())
      res.last_modify = parseTime(new Date(res.last_modify).getTime())
      res.username = userInfo.username
    }

    ctx.body = {
      success: 1,
      message: 'success',
      data: {
        data: res
      }
    }
  }
  // 发布文章
  async publishArticle() {
    const { ctx, app } = this;
    const res = await ctx.service.article.create(ctx.request.body)

    ctx.body = {
      success: 1,
      message: 'success',
      data: {
        data: res
      }
    }
  }
}

module.exports = Article
