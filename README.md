# 服务端
一个Nodejs服务端模板项目。  
[中文说明](README.md) | [English](README-en.md)
## 项目简介

基于 Node.js + Express + Sequelize + MySQL 的RESTful API服务端。

## 项目结构

```
├── server.js
├── app
    ├── sql
    ├── config
    │   ├── db.default.js
    │   ├── db.mysql.js
    ├── controller
    │   ├── admin
    │   │   ├── admin.controller.js
    │   ├── turtorial
    │   │   ├── turtorial.controller.js
    ├── models
    │   ├── index.js
    │   └──  turtorial.controller.js
    ├── routes
        └── index.js
```

## 项目运行
```sh
# 安装依赖
npm install
# 启动服务
node server.js
# or
nodemon .\server.js
```
