// async & await - Promise를 더 쉽고 간편하게 사용할 수 있는 방법 (비동기 처리가 쉽다.)

// function f() {} : 일반 함수
// async function f() {} : async 함수

async function f() {
    return Promise.resolve(7);   
    // promise 객체 반환 중 (async는 반환할 때 무조건 promise 객체 형태로 반환 (resolve, reject 형식으로))
    // promise 형태로 반환하지 않을 경우 return 값을 promise.resolve(return value) 형태로 반환.

}

f.then(
    function (result) {
        console.log("promise solve: ", result);
    },
    function (error) {
        console.log("promise reject: ", error);
    }
)