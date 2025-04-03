async function f() {
    // promise 한 개당 하나의 query라고 가정해보기
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("첫 번째 쿼리 "), 2000); 
    });

    let result1 = await promise1;
    console.log(result1);

    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(result1 + "두 번째 쿼리 "), 2000); 
    });

    let result2 = await promise2;
    console.log(result2);

    let promise3 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(result2 + "세 번째 쿼리"), 2000); 
    });

    let result3 = await promise3;
    console.log(result3);
}

f();