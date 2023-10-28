//  Implementación de función map() propia
function myMap(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return result
}

//  Otra manera utilizando forEach()
function myMap2(arr, func) {
    let result = []
    arr.forEach((i) => {
        result.push(func(i))
    })
    return result
}

//  test
let arr1 = [4, 9, 16, 25],
    arr2 = myMap2(arr1, Math.sqrt),
    arr3 = myMap2(['1', '2', 'hola', '7'], (a) => a + a)

console.log(arr2) // [2, 3, 4, 5]
console.log(arr3) // ['11', '22', 'holahola', '77']
