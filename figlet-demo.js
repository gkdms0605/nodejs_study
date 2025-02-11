// figlet 모듈을 가져오자.
var figlet = require("figlet");

// figlet 함수 호출 figlet(매개변수: "text", 함수(콜백함수))
// 함수의 매개변수로 변수 또는 값을 전달하는 게 아니라, 함수를 전달하는 것! = 콜백함수
figlet("kimjuo babo", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});