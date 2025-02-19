//  express module setting
const express = require("express")
const app = express()
app.listen(1234)

var id = 4;

//youtuber data setting
let youtuber1 = {
    channelTitle: "십오야",
    sub: "593만명",
    videoNum: "993개" 
}

let youtuber2 = {
    channelTitle: "침착맨",
    sub: "227만명",
    videoNum: "6.6천개" 
}

let youtuber3 = {
    channelTitle: "침착맨2",
    sub: "2만명",
    videoNum: "천개" 
}

let db = new Map()
db.set(1, youtuber1)
db.set(2, youtuber2)
db.set(3, youtuber3)

// youtuber list 조회
app.get('/youtubers', function(req, res) {
    res.json({
        message: "test"
    })
})

// rest api (youtuber id별 조회)
app.get('/youtuber/:id', function(req, res) {
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if (youtuber == undefined){
        res.json({
            message: "유튜버 정보를 찾을 수 없습니다."
        })
    } else{
        res.json(youtuber)
    }
})

//rest api (youtuber add)
app.use(express.json())     // http 외 모듈인 '미들웨어' - json 설정
app.post('/youtuber/register', function(req, res) {
    console.log(req.body)

    // id 자동 증가
    db.set(id, req.body)
    res.send(`${db.get(id++).channelTitle}님 유튜브 생활을 응원합니다!`)
})