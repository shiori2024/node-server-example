// sequelize模型
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define('tutorial', {
        title: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.TEXT,
        },
        author: {
            type: Sequelize.STRING,
        }
    })
    return Tutorial
}