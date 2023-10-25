//  Implementacion propia de la funcion reduce()
function myReduce(arr) {
    let acum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        acum += arr[i];
    }

    return acum;
}

let arr1 = [25, 1, 47, 3];
let result1 = myReduce(arr1);
console.log(result1);   //  76