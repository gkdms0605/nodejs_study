// JS 배열 비구조화

const array = [1, 2, 3, 4, 5]
// const num1 = array[0]
// const num4 = array[3]

// console.log(num1)
// console.log(num4)
// 위 코드를 보다 단순화 시켜보자!


// const [num2, num3, num5] = array
const [ , num2, num3, , num5] = array

console.log(num2)   // 1 -> 2
console.log(num3)   // 2 -> 3
console.log(num5)   // 3 -> 5