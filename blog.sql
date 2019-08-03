-- 创建数据库
DROP DATABASE IF EXISTS nodeserver;

CREATE DATABASE nodeserver;
USE nodeserver;

-- 创建用户表
DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user (
  user_id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  password VARCHAR(32) NOT NULL,
  sex CHAR(1),
  real_name VARCHAR(32) NOT NULL,
  register_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  account_modify_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_address VARCHAR(32),
  last_login_ip VARCHAR(32)
);
INSERT INTO
  user
VALUES
  (
    NULL,
    '行者无疆',
    '8f4de129e33c7bfcbfdde47608b0458c',
    '0',
    '杨龙',
    '2019-07-10 20:20:55',
    '2019-07-10 20:20:55',
    '2019-07-10 20:20:55',
    '广东省深圳市电信',
    '113.104.248.240'
  );
-- 创建文章列表
  DROP TABLE IF EXISTS article_list;
CREATE TABLE article_list (
    article_id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modify TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    title VARCHAR(32),
    content TEXT,
    tags VARCHAR(32),
    category VARCHAR(32),
    type TINYINT,
    forms TINYINT,
    numbers INT,
    praise INT DEFAULT 0,
    read_times INT DEFAULT 0,
    comment_times INT DEFAULT 0
  );

-- 插入文章列表
INSERT INTO article_list VALUES (
  NULL,
  1,
  '2019-07-20 20:00:00','2019-07-20 20:00:00','标题','内容','html','HTML', 0, 1, 2, 0, 0, 0
);