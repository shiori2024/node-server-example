// Sequelize模型层，数据库表的抽象
module.exports = (sequelize, Sequelize) => {
    const Interview = sequelize.define("interview", {
        // 定义表字段
        // id 唯一值
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        // 标题
        title: {
            type: Sequelize.STRING
        },
        // 用户昵称
        nickname: {
            type: Sequelize.STRING
        },
        // 文章内容
        content: {
            type: Sequelize.TEXT
        },
        // 点赞
        like: {
            type: Sequelize.INTEGER,
            defaultValue: 0

        },
        // 浏览量
        visits: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        // 转载链接
        fromLink: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Interview;
};