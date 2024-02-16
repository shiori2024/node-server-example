const db = require("../models");
// 导入model层
const User = db.user;
// 原神启动！（其实是Sequelize内置好的interface查询条件
const Op = db.Sequelize.Op;

// 创建并保存用户名
exports.create = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(404).json({
      status: 'error',
      message: "用户名和密码不能为空"
    });
    return;
  }

  // 将req请求存到临时用户对象
  const user = {
    username: req.body.username,
    password: req.body.password,
    nickname: req.body.nickname || null,
    email: req.body.email || null
  };

  // 保存到数据库
  User.create(user)
    .then(data => {
      // 数据库处理成功返回data对象
      res.status(201).json({
        status: 'success',
        message: '用户创建成功',
        data
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message:
          err.message || "创建用户时，发生错误！"
      });
    });
};

// 数据库查询所有条目
exports.findAll = (req, res) => {
  // 条件语句
  // let condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  User.findAll()
    .then(data => {
      res.status(200).json({
        status: 'success',
        message: '用户信息查询成功',
        data
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message:
          err.message || "查询数据库发生错误！"
      });
    });
};

// 按照条目 ID 搜索
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    // 使用findByPk方法直接查找具有匹配id的数据行  
    const data = await User.findByPk(id);
    if (data) {
      // 如果找到了用户，返回整个数据行  
      res.status(200).json({
        status: 'success',
        message: '用户信息查询成功',
        data
      });
    } else {
      // 如果没有找到用户，返回404错误  
      return res.status(404).json({ error: `没有找到ID为 ${id} 的用户` });
    }
  } catch (err) {
    // 如果在查询过程中发生错误，记录错误并返回500错误  
    console.error(err); // 在生产环境中，您可能希望使用更复杂的错误日志记录  
    return res.status(500).json({ error: `查询ID为 ${id} 时出错` });
  }
};

// 更新指定 ID 条目
exports.update = async (req, res) => {
  const id = req.params.id;

  // 从请求体中获取必要的字段  
  const { nickname, username, password, email } = req.body;

  // 验证请求体是否包含必要的字段  
  if (!nickname) {
    return res.status(400).json({
      status: 'error',
      message: '请求体中必须包含 nickname 字段！'
    });
  }

  // 将req请求存到临时用户对象
  const user = {
    username: req.body.username,
    password: req.body.password,
    nickname: req.body.nickname || null,
    email: req.body.email || null
  };
  // 使用 Sequelize 的 update 方法更新用户信息  
  try {
    const num = await User.update(
      user,
      {
        where: {
          id: {
            [Op.eq]: id // 使用 Op.eq 来明确比较操作符  
          }
        }
      }
    );

    if (num > 0) {
      res.status(202).json({
        status: 'success',
        message: '更新成功！'
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: `未找到ID为 ${id} 的用户进行更新！`
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `更新用户时出错: ${err.message}`
    });
  }
};

// 根据 ID 删除指定条目
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(204).json({
          status: 'success',
          message: "删除成功！"
        });
      } else {
        res.status(404).json({
          status: 'error',
          message: `id为:【${id}】的用户删除失败！`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message:
          err.message || "删除数据时出错"
      });
    });
};

// 删除数据库中所有条目
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(204).json({
        status: 'success',
        message: `删除了${nums}条数据 `
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message:
          err.message || "删除所有条目时出错"
      });
    });
};