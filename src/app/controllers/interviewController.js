// 控制层，主要编写业务逻辑处理响应请求
const db = require("../models");
// 导入model层
const Interview = db.interview;
// Sequelize内置好的interface查询条件
const Op = db.Sequelize.Op;

// 创建并保存
exports.create = (req, res) => {
  if (!req.body.title || !req.body.content || !req.body.nickname) {
    res.status(404).json({
      status: 'error',
      message: "面经标题，内容和作者不能为空！"
    });
    return;
  }

  // 将req请求存到临时对象
  const interview = {
    title: req.body.title,
    content: req.body.content,
    nickname: req.body.nickname,
    fromLink: req.body.fromLink || null
  };

  // 保存到数据库
  Interview.create(interview)
    .then(data => {
      // 数据库处理成功返回data对象
      res.status(201).json({
        status: 'success',
        message: '面经发布成功！',
        data
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message:
          err.message || "发布面经时，发生错误！"
      });
    });
};

// 数据库查询所有条目
exports.findAll = (req, res) => {
  Interview.findAll()
    .then(data => {
      res.status(200).json({
        status: 'success',
        message: '面经库信息查询成功！',
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
    const data = await Interview.findByPk(id);
    if (data) {
      // 如果找到了用户，返回整个数据行  
      res.status(200).json({
        status: 'success',
        message: '面经库信息查询成功！',
        data
      });
    } else {
      // 如果没有找到该文章，返回404错误  
      return res.status(404).json({ error: `没有找到ID为 ${id} 的面经文章！` });
    }
  } catch (err) {
    // 如果在查询过程中发生错误，记录错误并返回500错误  
    //console.error(err); 在生产环境中，您可能使用更复杂的错误日志记录，如logger之类的  
    return res.status(500).json({ error: `查询ID为【${id}】的文章时出错` });
  }
};

// 更新指定 ID 条目
exports.update = async (req, res) => {
  const id = req.params.id;

  // 从请求体中获取必要的字段，根据业务需求判断，文章更新功能验证conten字段是否更新就行  
  const { content } = req.body;

  // 验证请求体是否包含必要的字段  
  if (!content) {
    return res.status(400).json({
      status: 'error',
      message: '请求体中必须包含 content 字段！'
    });
  }

  // 将req请求存到临时对象
  const interview = {
    title: req.body.title,
    content: req.body.content,
    nickname: req.body.nickname
  };
  // 使用 Sequelize 的 update 方法更新信息  
  try {
    const num = await Interview.update(
      interview,
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
        message: '面经更新成功！'
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: `未找到ID为 ${id} 的文章进行更新！`
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `更新时出错: ${err.message}`
    });
  }
};

// 根据 ID 删除指定条目
exports.delete = (req, res) => {
  const id = req.params.id;

  Interview.destroy({
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
          message: `id为:【${id}】的面经文章删除失败！`
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
  Interview.destroy({
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