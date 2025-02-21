const arr = [1, 2, 3, 4, 5]

// 배열에서 하나씩 데이터를 꺼내면 호출되는 콜백함수 (매개변수로 요소를 전달)
arr.forEach((a, b, c) => {
    // console.log(`a: ${a}, b: ${b}, c: ${c}`)    //각각 데이터, idx, 데이터 리스트를 가져옴.
})

let map = new Map()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach((a, b) => {
    console.log(`a: ${a} b: ${b} c: ${c}`)   //각각 value, key, values를 가져옴.
})
