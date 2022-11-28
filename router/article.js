//文章的路由模块
// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入需要的处理函数模块
const artCate_handler = require('../router_handler/article')

// 发布新文章
//router.post('/add', artCate_handler.addArticle);

// 向外共享路由对象
module.exports = router;