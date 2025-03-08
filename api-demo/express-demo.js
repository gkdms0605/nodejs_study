const express = require('express');
const dotenv = require('dotenv')

dotenv.config({ path: __dirname + '/../.env'})

const app = express();

// GET "/"
app.get('/', function (req, res) {
    res.send('Hello World!')
})

let nodeJs = {
	name : "Node.js를 공부해보자",
	price : 20000,
	description : "송아쌤이 지음"
}

app.get('/products/1', function(req, res) {
    res.json(nodeJs)
    // res.json({
    //     name : "Node.js를 공부해보자",
	//     price : 20000,
	//     description : "송아쌤이 지음"
    // })
    // res.send("상품 1")
    // res.send(20000)  -> 다음 텍스트는 전달되지 않음. 한 번에 전부 보내기엔 사용자 관점에서 식별이 어려움.
})


app.listen(process.env.PORT)