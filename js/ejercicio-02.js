//  Implementación propia de la función find()
function myFind(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        //  si el elemento cumple con la función, lo retorna
        if (func(arr[i])) {
            return arr[i]
        }
    }
}

const arr = [1, 77, 24, 52, -14],
    arr1 = ['chau', 'hola', ':D']

console.log(myFind(arr, (el) => el > 15)) //  77
console.log(myFind(arr, (el) => el > 15 && el < 50)) //  24
console.log(myFind(arr1, (el) => el == ':D')) //   :D
