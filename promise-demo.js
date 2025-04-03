// promise "객체" : 약속을 지키는 친구

let promise = new Promise(function(resolve, reject) {    // Promise 객체 생성, 매개 변수로 함수를 받음.
    // executor : 지켜야 할 일 -> 성공할 경우 resolve(결과), 실패할 경우 reject(에러) 둘 중 하나를 출력
    setTimeout(() => resolve("완료!"), 3000);
}); 

// promise의 기본 메서드: then, promise가 할 일을 끝마친 후 호출해야 하는 함수.
promise.then(
    function(result){   // 성공 값(resolve)이 반환되었을 경우 실행되는 함수
        console.log(result);
    }, 
    function(err){      // 실패 값(reject)이 반환되었을 경우 실행되는 함수

    }
);

