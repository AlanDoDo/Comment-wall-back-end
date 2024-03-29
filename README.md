## Comment-wall-back-end

留言墙后端是留言墙应用程序的后端组件，负责处理数据存储、用户验证和其他业务逻辑。它与前端界面（如网页、移动应用等）一起工作，为用户提供完整的留言墙功能。

![](https://alandodo-1315761622.cos.ap-beijing.myqcloud.com/blog/x287.jpg)

![](https://alandodo-1315761622.cos.ap-beijing.myqcloud.com/blog/x288.jpg)

## 安装
```
npm install
```

## 运行
```
nodemon index.js
```

### 下载express插件
```
cnpm install express --save
```

### 创建后端目录
* |-- serve
    * |-- index.js
    * |-- package.json
    * |-- 后端开发记录.md
    * |-- config/
    * |   |-- default.js
    * |-- controller
    * |-- lib/
    * |   |-- db.js
    * |-- routes/

### 下载mysql插件
```
cnpm install mysql --save
```

### 下载multer插件
有利于图片上传
```
cnpm install multer --save
```

### 下载ejs插件
用于解析html
```
cnpm install ejs --save
```

### 下载multer插件
引入附件上传插件
```
cnpm install multer --save
```