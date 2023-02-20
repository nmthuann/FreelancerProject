const express = require('express');
const router = express.Router()
// định nghĩa route
function routes(app) {
    app.get('/', (req,res) => {
        return res.send("hello")
    });
    return app.use("/", router)
}   
module.exports = routes;