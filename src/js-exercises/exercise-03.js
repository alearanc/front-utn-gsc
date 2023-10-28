//  Implementación propia de la función filter()
function myFilter(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

let arr1 = ['perro', 'gato', 'hipopótamo', 'otorrinonaringólogo']
let arr2 = [1, 3, 24, -24, 10, 33]

let result1 = myFilter(arr1, (el) => el.length > 7)
let result2 = myFilter(arr2, (el) => el < 14)

console.log(result1) //  [ 'hipopótamo', 'otorrinonaringólogo' ]
console.log(result2) //  [ 1, 3, -24, 10 ]
