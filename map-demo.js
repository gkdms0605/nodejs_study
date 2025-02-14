const express = require('express');
const app = express();
app.listen(1234)

let db = new Map()
db.set(1, "product1")  // 각각 key 값과 value 값을 저장
db.set(2, "product2")
db.set(3, "product3")

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))

app.get('/:n', function(req, res) {
    // let parse = parseInt(req.params.n); -> 비구조화로 보다 간단하게 표현
    
    const {n} = req.params
    let num = parseInt(num) 

    if(db.get(num) == undefined){
        res.json({
            message: "없는 상품입니다."
        })
    } else {
        res.json({
        id: num,
        product: db.get(num)
    })
    }
    
})