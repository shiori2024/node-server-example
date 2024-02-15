/**
 * @description
 * @author shiori2024
 * @param {*} app
 * @param {*} router
 * @param {*} userController
 * POST /api/users - 创建一个新用户，由 userController.create 处理。
 * PUT /api/users/:id - 更新指定ID的用户，由 userController.update 处理。
 * DELETE /api/users/:id - 删除指定ID的用户，由 userController.delete 处理。
 * DELETE /api/users/delAll - 删除所有用户，不要轻易使用该接口，由 userController.deleteAll 处理。
 * GET /api/users - 获取所有用户，由 userController.findAll 处理。
 * GET /api/users/:id - 根据ID查找用户，由 userController.findOne 处理。 
 */

module.exports = app => {
    const userController = require("../controllers/userController")
    let router = require("express").Router()
    router.post("/", userController.create)
    router.put("/:id", userController.update)
    router.delete("/:id", userController.delete)
    router.delete("/delAll", userController.deleteAll)
    router.get("/",userController.findAll)
    router.get("/:id",userController.findOne)
    app.use("/api/users", router)
}