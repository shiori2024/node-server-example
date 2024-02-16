/**
 * @description
 * @author shiori2024
 * @time 2024/02/16
 * @param {*} app
 * @param {*} interviewController
 * POST /api/interview - 创建新文章，由 interviewController.create 处理。
 * PUT /api/interview/:id - 更新指定ID的文章，由 interviewController.update 处理。
 * DELETE /api/interview/:id - 删除指定ID的文章，由 interviewController.delete 处理。
 * DELETE /api/interview/delAll - 删除所有文章，不要轻易使用该接口，由 interviewController.deleteAll 处理。
 * GET /api/interview - 获取所有文章，由 interviewController.findAll 处理。
 * GET /api/interview/:id - 根据ID查找文章，由 interviewController.findOne 处理。 
 */

module.exports = app => {
    const interviewController = require("../controllers/interviewController")
    let router = require("express").Router()
    router.post("/", interviewController.create)
    router.put("/:id", interviewController.update)
    router.delete("/:id", interviewController.delete)
    router.delete("/delAll", interviewController.deleteAll)
    router.get("/",interviewController.findAll)
    router.get("/:id",interviewController.findOne)
    app.use("/api/interview", router)
}