module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nickname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return User;
};

/*
初始化 Sequelize 之后，我们不需要在写任何增删改查函数，直接调就可以了。
*/