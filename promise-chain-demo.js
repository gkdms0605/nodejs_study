// 비동기 처리 promise chainning
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("완료!"), 3000);
}).then(
    function(result){   
        console.log(result);
        return result + " !!!!!";
    }, 
    function(err){      

    }
).then(
    function(result){   
        console.log(result);
        return result + " !!!!!!!!!!";
    }, 
    function(err){      

    }
).then(
    function(result){   
        console.log(result);
    }, 
    function(err){      

    }
)

