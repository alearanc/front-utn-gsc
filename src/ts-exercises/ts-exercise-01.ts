class Stack<T> {
    items: T[] = []

    push(item: T): void {
        this.items.push(item)
    }
    pop(): T | undefined {
        return this.items.pop()
    }
    size(): number {
        return this.items.length
    }
}

const numberStack = new Stack<number>()
numberStack.push(1)
numberStack.push(45)
numberStack.push(0)
// numberStack.push('hola')    // Argument of type 'string' is not assignable to parameter of type 'number'

console.log(numberStack.items) //  [1, 45, 0]
console.log(numberStack.size()) //  3
console.log(numberStack.pop()) //  0
console.log(numberStack.items) //  [1, 45]

const booleanStack = new Stack<boolean>()
booleanStack.push(true)
booleanStack.push(false)
booleanStack.push(false)
booleanStack.push(true)
// booleanStack.push(45)       //  Argument of type 'number' is not assignable to parameter of type 'boolean'

console.log(booleanStack.items) //  [true, false, false, true]
console.log(booleanStack.size()) //  4
console.log(booleanStack.pop()) //  true
console.log(booleanStack.items) //  [true, false, false]

class StackWithoutDuplicates<T> {
    items: T[] = []

    push(item: T): void {
        if (!this.items.includes(item)) {
            this.items.push(item)
        }
    }
    pop(): T | undefined {
        return this.items.pop()
    }
    size(): number {
        return this.items.length
    }
}

const stringStack = new StackWithoutDuplicates<string>()
stringStack.push('hola')
stringStack.push('que')
stringStack.push('tal')
stringStack.push('hola')
// stringStack.push(true)   //  Argument of type 'boolean' is not assignable to parameter of type 'string'

console.log(stringStack.items)
console.log(stringStack.size())

const numberStack2 = new StackWithoutDuplicates<number>()
numberStack2.push(-654)
numberStack2.push(75)
numberStack2.push(4)
numberStack2.push(4)

console.log(numberStack2.items) //  [-654, 75, 4]
console.log(numberStack2.size()) //  3
