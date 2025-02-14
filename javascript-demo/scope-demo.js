if (true) {
    var num1 = 7; // 전역변수
    const num2 = 3; // 블록 {} 스코프 (지역변수)
    let num3= 5; // 블록 {} 스코프, 선언된 중괄호 밖에서는 사용 불가능

    // num2 = 10; const는 변수값 변경 불가.
    num3 = 21;

    console.log(num1+"x"+num2+"="+num3) // 불편해요ㅠㅠㅠㅠㅠㅠ -> `${}`사용 (템플릿 문자열)
    console.log(`${num1} x ${num2} = ${num3}`) 
}

console.log(num1)
// console.log(num2) -> error
// console.log(num3) -> error