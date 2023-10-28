"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(45);
numberStack.push(0);
console.log(numberStack.items);
console.log(numberStack.size());
console.log(numberStack.pop());
console.log(numberStack.items);
const booleanStack = new Stack();
booleanStack.push(true);
booleanStack.push(false);
booleanStack.push(false);
booleanStack.push(true);
console.log(booleanStack.items);
console.log(booleanStack.size());
console.log(booleanStack.pop());
console.log(booleanStack.items);
class StackWithoutDuplicates {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (!this.items.includes(item)) {
            this.items.push(item);
        }
    }
    pop() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
}
const stringStack = new StackWithoutDuplicates();
stringStack.push('hola');
stringStack.push('que');
stringStack.push('tal');
stringStack.push('hola');
console.log(stringStack.items);
console.log(stringStack.size());
const numberStack2 = new StackWithoutDuplicates();
numberStack2.push(-654);
numberStack2.push(75);
numberStack2.push(4);
numberStack2.push(4);
console.log(numberStack2.items);
console.log(numberStack2.size());
//# sourceMappingURL=ts-exercise-01.js.map