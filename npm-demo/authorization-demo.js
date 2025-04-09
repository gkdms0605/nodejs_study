const express = require('express');
const app = express();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config({path: __dirname + '/../.env'});
app.listen(process.env.PORT);

app.get('/jwt', (req, res) => {
    let token = jwt.sign({user_name: '테스터'}, process.env.SECRET_KEY)

    res.cookie("jwt", token, {
        httpOnly: true
    })
    res.send("토큰 발행 완료");
})

app.get('/jwt/decoded', (req, res) => {
    let receivedtoken = req.headers["authorization"];
    let decoded = jwt.verify(receivedtoken, process.env.SECRET_KEY);
    res.json(decoded);
})