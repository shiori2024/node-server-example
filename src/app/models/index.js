const dbConfig = require("../config/db.mysql.config.js"); // 可自定义数据库配置

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// 抛出实例化对象，使其能被其他文件引用
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.interview = require("./interview.model.js")(sequelize, Sequelize);

module.exports = db;