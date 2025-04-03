const crypto = require('crypto');

const password = '1111';

// 비밀번호 암호화
const salt = crypto.randomBytes(10).toString('base64');
const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

console.log(hashPassword);

// 회원 가입 시 암호화된 비밀번호와 salt 값을 같이 저장 →
// 로그인 시 DB에서 salt 값을 꺼낸 후 클라이언트에게 받은 비밀번호를 암호화 (DB 비밀번호 비교)