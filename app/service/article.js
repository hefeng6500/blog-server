const Service = require('egg').Service;


class Article extends Service {
  // 文章创建
  async create(data) {
    const { ctx, config, app } = this;
    const { title, content, tags, category, type, forms, createTime } = data
    const results = await app.mysql.insert('article_list', {data})
    console.log(results)
    return results
  }
  // 文章修改
  async update() {

  }
  //文章查询
  async query() {

  }

  // 文章删除
  async delete() {

  }
}

module.exports = Article
