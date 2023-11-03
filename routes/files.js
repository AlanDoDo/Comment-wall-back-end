// 引入附件上传插件
const multer = require('multer');
const path = require('path');

// 生成随机数
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    // 构建绝对路径，将 '/data/photo' 路径放到项目根目录下
    const uploadPath = path.resolve('./', 'data/photo');
    cb(null, uploadPath);
  },
  //保存在 destination 中的文件名
  filename: function (req, file, cb) {
    // 正则匹配后缀名
    let type = file.originalname.replace(/.+\./, ".");

    cb(null, Date.now() + random(1, 100) + type);
  }
});

const upload = multer({ storage: storage });

module.exports = function (app) {
  app.post('/profile', upload.single('file'), function (req, res, next) {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
    // console.log(req.files);
    let name = req.file.filename;
    let imgurl = '/photo/' + name;
    res.send(imgurl);
  });

};
