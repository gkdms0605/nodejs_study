// map 함수(메서드) vs foreach 차이
const arr = [1, 2, 3, 4, 5]

// 배열에서 하나씩 데이터를 꺼내면 호출되는 콜백함수 (매개변수로 요소를 전달)
const Foreach = arr.forEach((a, b, c) => {
    //각각 데이터, idx, 객체 전체를 가져옴. -> return으로 값을 받을 순 없음
    // console.log(`a: ${a}, b: ${b}, c: ${c}`)  
    return a 
})

const MapArray = arr.map((a, b, c) => {
    //각각 데이터, idx, 객체 전체를 가져옴. -> return으로 값을 받을 수 있음
    // console.log(`a: ${a}, b: ${b}, c: ${c}`)    
    return a
})

console.log(`foreach: ${Foreach}, map: ${MapArray}`)