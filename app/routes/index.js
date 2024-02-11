module.exports = app => {
    const tutorials = require("../controller/turtorial.controller")
    let router = require("express").Router()
    router.post("/", tutorials.create)
    app.use("/api/tutorials", router)
}