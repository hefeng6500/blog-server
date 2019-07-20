'use strict';

const Controller = require('egg').Controller;
// const service = require('../service/article');
const qs = require("qs");

class Article extends Controller {
  // 发布文章
  async publishArticle() {
    const { ctx, app } = this;
    const { title, content, tags, category, type, forms, createTime } = ctx.request.body

    const res = await ctx.service.service.create(ctx.request.body)

    ctx.body = {
      success: 1,
      message: '发布成功！',
      data: {
        data: res
      }
    }
  }
}

module.exports = Article
