//文章的处理函数模块

// 导入解析 formdata 格式表单数据的包
const multer = require('multer')
// 导入处理路径的核心模块
const path = require('path')
// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({ dest: path.join(__dirname, '../uploads') })

//发布文章的处理函数
exports.addArticle = (req,res) => {
    //res.send('okok')
    console.log(req.body) // 文本类型的数据
    console.log('--------分割线----------')
    console.log(req.file) // 文件类型的数据
    res.send('ok')
}