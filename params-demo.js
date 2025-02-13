const express = require('express');
const app = express();
app.listen(1234)

app.get('/products/:n', function(req, res){
    // : -> URL에 들어오는 : 뒤의 값을 매개변수로 입력 req.params에 값 저장. 

    // console.log(req.params)
    // console.log(req.params.n)

    res.json({
        num: req.params.n
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

