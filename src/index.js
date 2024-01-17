const express = require("express")
    const path = require("path")

const app = express()
    const router = express.Router()
        router.get("/", function(req, res) {
            res.sendFile(path.join(__dirname + "/pages/paginainicial.html"))
        })
            app.use(router)
                app.listen(3333, function() {
                    console.log("SERVIDOR LIGADO")
                })

