/*
 * @Author: your name
 * @Date: 2019-07-06 12:14:14
 * @LastEditTime: 2019-10-24 22:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \egg-example\app\controller\article.js
 */
'use strict';

const Controller = require('egg').Controller;
// const service = require('../service/article');
const qs = require("qs");
const parseTime = require('../utils/parseTime.js')
const Remarkable = require('remarkable');
const toc = require('markdown-toc');

// function render(str, options) {
//   return new Remarkable()
//     .use(toc.plugin(options)) // <= register the plugin
//     .render(str);
// }

var results = toc('# AAA\n# BBB\n# CCC\nfoo\nbar\nbaz');
console.log(results)

class Article extends Controller {
  // 查询用户的文章
  async getArticles() {
    const { ctx, app } = this;
    const { type, userId } = ctx.request.query
    const res = await ctx.service.article.select(ctx.request.query)
    const userInfo = await ctx.service.user.queryUser(parseInt(userId))

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
