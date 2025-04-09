let string  = '{"num":1}';

try {
    // username
    let json = JSON.parse(string);
    let name = json.name;
    
    if(json.name){
        console.log(json.name);
    }
    else {
        throw new SyntaxError('입력 값에 이름이 없습니다.');
    }

    console.log(name);
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err)
}