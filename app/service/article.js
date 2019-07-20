const Service = require('egg').Service;
const parseTime = require('../utils/parseTime.js')



class Article extends Service {
  // 文章创建
  async create(data) {
    const { ctx, config, app } = this;
    const { userId, title, content, tags, category, type, forms, createTime, lastModify } = data

    // INSERT INTO article_list
    // VALUES(NULL, 1, '2019-07-20 13:52:00', '2019-07-20 13:52:00', 'TITLE', 'CONTENT', 'TAG', 'category', '1', '2', 1, 0, 500);

    // userId: '',
    // 	createTime: Date.now(),
    // 	lastModify: '',
    //   title: this.state.title,
    //   content: this.state.markdown.value(),
    //   tags: this.state.tags,
    //   category: this.state.category,
    //   type: this.state.type,
    //   forms: this.state.forms,

    const results = await app.mysql.insert('article_list', {
      article_id: null,
      user_id: userId,
      create_time: '2019-07-20 13:52:00',
      last_modify: '2019-07-20 13:52:00',
      title: title,
      content: content,
      tags: tags.join(),
      category: category.join(),
      type: type,
      forms: forms,
      numbers: content.length,
    })
    console.log(results)
    return results
  }
  // 文章修改
  async update() {

  }
  //文章查询
  async select(params) {
    const { ctx, config, app } = this;
    const { userId, type } = params
    let result = ''
    if (type === 'list') {
      result = await app.mysql.select('article_list', {
        where: { user_id: userId }, // WHERE 条件
        columns: [
          'user_id','article_id','title','read_times','comment_times','praise'
        ], // 要查询的表字段
        orders: ['create_time'], // 排序方式
        limit: 10, // 返回数据量
        offset: 0, // 数据偏移量
      })
      
    } else {
      result = await app.mysql.get('article_list', { article_id: params.article_id })
    }
    return result
  }

  // 文章删除
  async delete() {

  }
}

module.exports = Article
