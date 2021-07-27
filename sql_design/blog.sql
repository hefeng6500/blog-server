SHOW DATABASES;
DROP DATABASE IF EXISTS blog;
CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
USE blog;
DROP TABLE IF EXISTS user_table;
-- 用户表
CREATE TABLE user_table (
  user_id INT PRIMARY KEY AUTO_INCREMENT comment '用户id',
  username VARCHAR(20) NOT NULL comment '用户名',
  password VARCHAR(20) NOT NULL comment '密码',
  email VARCHAR(50) NOT NULL comment '邮箱',
  phone_number VARCHAR(20) NOT NULL comment '手机号码',
  sex CHAR(1) NOT NULL comment '性别',
  introduce VARCHAR(200) NOT NULL comment '用户签名',
  reg_time DATETIME NOT NULL comment '注册时间',
  last_update_time DATETIME NOT NULL comment '身份信息最后修改时间'
);
-- 文章表
DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  article_id INT PRIMARY KEY AUTO_INCREMENT comment '文章id',
  title VARCHAR(50) NOT NULL comment '文章标题',
  content LONGTEXT NOT NULL comment '文章内容',
  create_time DATETIME NOT NULL comment '创建时间',
  last_update_time DATETIME NOT NULL comment '最后修改时间',
  is_original CHAR(1) NOT NULL comment '是否原创',
  user_id INT NOT NULL comment '用户id',
  like_count INT NOT NULL comment '点赞数量',
  view_count INT NOT NULL comment '浏览量'
);
-- 文章分类表
DROP TABLE IF EXISTS article_category;
CREATE TABLE article_category (
  category_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT comment '分类id',
  category_name VARCHAR(20) NOT NULL comment '分类名称',
  article_id INT NOT NULL comment '文章id'
);
-- 评论表
DROP TABLE IF EXISTS comment_table;
CREATE TABLE comment_table (
  id INT PRIMARY KEY AUTO_INCREMENT comment '评论id',
  article_id INT NOT NULL comment '文章id',
  comment_type VARCHAR(20) comment '评论类型',
  comment_content VARCHAR(1000) NOT NULL comment '评论内容',
  uid INT NOT NULL
);
-- 回复表
DROP TABLE IF EXISTS replay_table;
CREATE TABLE replay_table (
  reply_id INT PRIMARY KEY AUTO_INCREMENT comment '回复id',
  comment_id INT NOT NULL comment '评论id',
  content VARCHAR(1000) NOT NULL comment '回复内容',
  type VARCHAR(20) comment '回复类型',
  replay_time DATETIME NOT NULL comment '回复时间'
);
-- 标签表
DROP TABLE IF EXISTS article_tag;
CREATE TABLE article_tag(
  id INT PRIMARY KEY AUTO_INCREMENT comment '标签id',
  name VARCHAR(20) NOT NULL comment '标签名称',
  atricle_id INT NOT NULL comment '文章id'
);
-- 插入基本测试数据
INSERT INTO
  user_table (
    username,
    password,
    email,
    phone_number,
    sex,
    introduce,
    reg_time,
    last_update_time
  )
VALUES
  (
    "hefeng6500",
    "hefeng9999",
    "2443992009@qq.com",
    18800008888,
    1,
    "每一个不曾起舞的日子都是对生命的辜负",
    "2021-07-27 20:39:30",
    "2021-07-27 20:39:30"
  );