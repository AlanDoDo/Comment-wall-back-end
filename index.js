const express = require('express')
const cors = require('cors')
const path = require('path')

// 解析html
var ejs = require('ejs')
var config = require('./config/default')


const app = express()

app.use(cors());

// 获取静态路径
// app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/data'));
app.use(express.static(__dirname + '/dist'));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8"); // 添加这一行即可

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});


// 加入html视图
// app.set('views', path.join(__dirname, '/viewssss'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// 解析前端数据
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 引入路由
require('./routes/index')(app);
require('./routes/files')(app);


app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});