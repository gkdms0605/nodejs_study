const express = require("express")
const app = express()
const port = 1234

app.get('/', function (req, res) {
    res.send("hello, world!")
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})