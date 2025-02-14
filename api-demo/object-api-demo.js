const express = require('express');
const app = express();
app.listen(1234)

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

app.get("/:nickname", function(req, res) {

    const {nickname} = req.params

    if (nickname == "@15ya"){
        res.json(youtuber1)
    } else if (nickname == "@iamtwo") {
        res.json(youtuber2)
    }
    // 예외 처리
    else {
        res.json({
            message: "i dont know TOT"
        })
    }
})

