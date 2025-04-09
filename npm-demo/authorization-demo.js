const express = require('express');
const app = express();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config({path: __dirname + '/../.env'});
app.listen(process.env.PORT);

app.get('/jwt', (req, res) => {
    const token = jwt.sign({
        username: "haeun lee"
    }, process.env.SECRET_KEY,  {
        expiresIn: '1m',
        issuer: 'admin'
    })

    res.cookie("jwt", token, {
        httpOnly: true
    })
    res.send("토큰 발행 완료");
})

app.get('/jwt/decoded', (req, res) => {
    let receivedtoken = req.headers["authorization"];
    let decoded = jwt.verify(receivedtoken, process.env.SECRET_KEY);

    // 토큰 만기 - 500에러가 아닌 예외처리
    // 유효 기간이 지났다? -> 로그인(인증) 세션이 만료되었습니다. 
    res.json(decoded);
})