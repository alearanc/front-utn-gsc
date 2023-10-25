function zero(operator) {
    return operator ? operator(0) : 0
}
function one(operator) {
    return operator ? operator(1) : 1
}
function two(operator) {
    return operator ? operator(2) : 2
}
function three(operator) {
    return operator ? operator(3) : 3
}
function four(operator) {
    return operator ? operator(4) : 4
}
function five(operator) {
    return operator ? operator(5) : 5
}
function six(operator) {
    return operator ? operator(6) : 6
}
function seven(operator) {
    return operator ? operator(7) : 7
}
function eight(operator) {
    return operator ? operator(8) : 8
}
function nine(operator) {
    return operator ? operator(9) : 9
}

function dividedBy(b) {
    return function (a) {
        if (b === 0) {
            return 'Nope!'
        } else {
            return Math.floor(a / b)
        }
    }
}

function minus(b) {
    return function (a) {
        return a - b
    }
}

function plus(b) {
    return function (a) {
        return a + b
    }
}

function times(b) {
    return function (a) {
        return a * b
    }
}

console.log(four(dividedBy(zero())))    //  Nope!
console.log(seven(plus(three())))       //  10
console.log(four(dividedBy(two())))     //  2
console.log(four(dividedBy(three())))   //  1
console.log(six(minus(seven())))        //  -1
console.log(nine(times(eight())))       //  72