// 引入数据库配置，可变更
const dbConfig = require('../config/db.default.js');
const Sequelize = require('sequelize');
// 实例化sequelize
const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect
    }
)

// sequelize对象集合
const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize
// sequelize模型
db.tutorial = require('./turtorial.model')(sequelize, Sequelize)

module.exports = db