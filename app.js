const express = require("express")
const app = express()
const port = 1234

app.get('/', function (req, res) {
    res.send("hello, world!")
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})

app.use(express.json())
app.post('/test', function(req, res) {
    // HTTP body로부터 받아온 데이터 출력하기
    
    console.log(req.body)
    res.json(req.body)

})