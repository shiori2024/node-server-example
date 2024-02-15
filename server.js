// 引入依赖
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path')
const chalk = require('chalk'); // https://www.npmjs.com/package/chalk
const cors = require('cors');
// 实例化express
const app = express();
// 访问 .env文件
const dotenv = require('dotenv')
dotenv.config()
// 跨域设置
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
// 注册中间件
app.use(cors(corsOptions));
// content-type：application/json
app.use(bodyParser.json())
// content-type：application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// 调用sequelize
const db = require('./src/app/models');
db.sequelize.sync()

// 路由
app.get("/", (req, res) => {
    res.json(
        {
            message: "Hello World",
            status: 200
        }
    )
})

// 导入自定义路由模块  
require('./src/app/routes/user')(app);

// 设置监听端口
const PORT = process.env.DEV_PORT || 3000
app.listen(PORT, () => {
    console.log(chalk.bold.green(`🚀Server is running on: ${process.env.DEV_URL}:${PORT}`))
})
