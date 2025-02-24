const obj1 = {}
const obj2 = {message: "안 빔"}

// Object.keys() -> 숫자 불가능, 객체만 가능 (문자열 포함)
console.log(Object.keys(obj1))  // length == 0
console.log(Object.keys(obj2)) // length == 1

function isEmpty(obj) {
    // if(obj.constructor === Object)
    if(Object.keys(obj) === 0){
        return true;
    } else {
        return false;
    }
}