var jwt = require('jsonwebtoken'); // jwt 호출
var dotenv = require('dotenv'); // dotenv 호출

dotenv.config({ path: __dirname + "/../.env" }); // dotenv 사용

// const privateKey = 'shhhh';

console.log(process.env.SECRET_KEY)

var token = jwt.sign({foo: 'bar'}, process.env.SECRET_KEY); //token 발행 (서명)
// 생성 = jwt 서명을 했음 (payload, passwordKey) + SHA256 alg

console.log(token);

// 만약 검증을 성공하면, payload 값을 확인할 수 있음.
var decoded = jwt.verify(token, process.env.SECRET_KEY);
console.log(decoded);