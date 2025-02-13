const express = require('express');
const app = express();
app.listen(1234)

app.get('/test', function (req, res) {
    res.send('Test Succes!')
})

app.get('/test/1', function (req, res) {
    res.send("One")
})
