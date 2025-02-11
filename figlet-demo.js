// figlet 모듈을 가져오자.
var figlet = require("figlet");

// figlet 함수 호출 figlet(매개변수: "text", 함수(콜백함수))
// 함수의 매개변수로 변수 또는 값을 전달하는 게 아니라, 함수를 전달하는 것! = 콜백함수
figlet("kimjuo babo", function (err, data) {
    // 함수의 이름이 없는 콜백함수 = 함수를 쓸 일이 다른 데는 없어서...
    // figlet 개발자가 매개변수로 함수를 받도록 설계

    // 첫 번째 매개변수 "text" 라는 문자열 받아 아스키 아트 제작 -> 두 번째 매개변수 function을 실행.
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});