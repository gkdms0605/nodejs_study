const express = require('express');
const app = express();
app.listen(1234)

app.get('/hello', function (req, res) {
    res.json({
        say: "hello"
    })
})

app.get('/bye', function (req, res) {
    res.json({
        say: "bye"
    })
})

app.get('/nicetomeetyou', function (req, res) {
    res.json({
        say: "nice to meet u"
    })
})
