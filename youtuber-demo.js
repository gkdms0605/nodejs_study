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
app.get('/youtubers', ((req, res) => {
    let youtubers = {}
    db.forEach((value, key) => {    // value: 데이터, key: 인덱스
        youtubers[key] = value
        console.log(key, value)
    });

    res.json(youtubers)
}))

// rest api (youtuber id별 조회)
app.get('/youtubers/:id', ((req, res) => {
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
}))

//rest api (youtuber 등록)
app.use(express.json())     // http 외 모듈인 '미들웨어' - json 설정
app.post('/youtubers', ((req, res) => {
    console.log(req.body)

    // id 자동 증가
    db.set(id, req.body)
    res.send(`${db.get(id++).channelTitle}님 유튜브 생활을 응원합니다!`)
}))

// youtuber 삭제
app.delete('/youtubers/:id', ((req, res) => {
    let {id} = req.params
    id = parseInt(id)
    let text = ""

    const youtuber = db.get(id)
    if (youtuber == undefined){
        text = "해당하는 id의 유튜버 정보를 찾을 수 없습니다."
    } else{
        let name = youtuber.channelTitle
        db.delete(id)
        text = `${name}님, 아쉽지만 다음에 또 뵙겠습니다.`
    }
    res.json({
        massage: text
    })
}))

//youtuber 전체 삭제
app.delete('/youtubers', (req, res) => {
    let text = ""
    // data 값이 1개 이상일 경우 전체삭제
    if(db.size >= 1){
        text = `전체 ${db.size} 유튜버가 삭제되었습니다.`
        db.clear()
    }
    // 값이 없을 경우
    else {
        text = "삭제할 유튜버가 없습니다."
    }

    res.json({
        massage: text 
    })
})

// youtuber update -> id별
app.put("/youtubers/:id", (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    let text = ""

    let youtuber = db.get(id)
    if(youtuber == undefined){
        text = "해당하는 id의 유튜버 정보를 찾을 수 없습니다."
    }
    else {
        let newTitle = req.body.channelTitle
        let oldTitle = youtuber.channelTitle
        youtuber.channelTitle = newTitle

        db.set(id, youtuber)
        text = `채널명이 ${oldTitle}에서 ${newTitle}(으)로 변경되었습니다.`
    }

    res.json({
        massage: text 
    })
})