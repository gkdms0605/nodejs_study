const express = require('express');
const app = express();
app.listen(1234)

const fruits = [
    {id: 1, name: "apple"},
    {id: 2, name: "orange"},
    {id: 3, name: "strawberry"},
    {id: 4, name: "blueberry"}
]

app.get('/fruits', (req, res) => {
    res.json(fruits)    //json array
})

app.get('/fruits/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    let findFruit = ""

    findFruit = fruits.find(f => f.id == id) // fruits 객체 중 id값이 params.id와 같은 객체를 찾음

    if(findFruit){
        res.json(findFruit)
    } else {
        res.status(404).send(   // json도 가능
            "Cannot find fruits with that id"
        )
    }
})