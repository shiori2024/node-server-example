// server.js
// 引入依赖
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// 实例化express
const app = express();
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
// 注册中间件
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./app/models');
db.sequelize.sync()
// 绑定路由
require('./app/routes')(app);

// 路由
app.get("/", (req,res) => {
    res.json(
        {
            message: "Hello World"
        }
    )
})
// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
})