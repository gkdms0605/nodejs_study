const express = require('express');
const app = express();
app.listen(1234)

let db = new Map()

let product1 = {
    productName : "product1",
    price : 20000
}

let product2 = {
    productName : "product2",
    price : 25000
}

let product3 = {
    productName : "product3",
    price : 30000
}

// db.set(1, "product1")  // 각각 key 값과 value 값을 저장
// db.set(2, "product2")
// db.set(3, "product3")

db.set(1, product1)
db.set(2, product2)
db.set(3, product3)

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))

app.get('/:n', function(req, res) {
    const {n} = req.params
    let num = parseInt(n) 

    if(db.get(num) == undefined){
        res.json({
            message: "없는 상품입니다."
        })
    } else {
        let product = db.get(num)
        product["id"] = num     // product.id = num

        res.json(product)
    }
    
})