const express = require('express');
const app = express();
app.listen(1234)

app.get('/products/:n', function(req, res){
    // : -> URL에 들어오는 : 뒤의 값을 매개변수로 입력 req.params에 값 저장. 

    // console.log(req.params)
    // console.log(req.params.n)

    let number = req.params.n;

    if (number > 10){
        console.log("url로 전달받은 숫자가 10보다 커요.");
    }

    if (parseInt(number) < 20){     // 권장
        console.log("url로 전달받은 숫자가 20보다 작아요.");
    }

    res.json({
        num: req.params.n
    })
})

// URL로 닉네임을 받아오자
// app.get("/:nickname", function(req, res) {
//     res.json({
//         nickname: req.params.nickname
//     })
// })


// url: https://youtu.be/gwF7sw4R78A?si=rWjRmwUYby1lvFKT&t=452
app.get('/watch', function (req, res) {
    // const q = req.query
    // console.log(q.si)
    // console.log(q.t)

    const {si, t} = req.query
    console.log(si)
    console.log(t)

    res.json({
        video: si,
        timeline: t
    })
})


// app.get('/products/1', function(req, res) {
//     res.json({
//         num:1
//     })
// })

// app.get('/products/2', function(req, res) {
//     res.json({
//         num:2
//     })
// })

// app.get('/products/3', function(req, res) {
//     res.json({
//         num:3
//     })
// })

