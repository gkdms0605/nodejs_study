// async & await - Promise를 더 쉽고 간편하게 사용할 수 있는 방법 (비동기 처리가 쉽다.)

// await은 async 안에서만 동작함.
// await은 promise.then()의 간편화된 코드

// async가 await과 만날 경우 async는 Promise 객체의 일이 끝날 때까지 기다릴 수 있는 공간을 제공함.

async function f() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("완료!"), 2000); 
    });

    let result = await promise;
    console.log(result);
}
// await은 async 안에서 promise 객체를 기다리는 역할

f();