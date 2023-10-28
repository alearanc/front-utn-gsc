"use strict";
class GeometricFigure {
    constructor(type) {
        this.type = type;
    }
}
class Square extends GeometricFigure {
    constructor(length) {
        super('Square');
        this.length = length;
    }
    perimeter() {
        return this.length * 4;
    }
    area() {
        return this.length ** 2;
    }
}
class Circumference extends GeometricFigure {
    constructor(radio) {
        super('Circumference');
        this.radio = radio;
    }
    perimeter() {
        return Math.floor(Math.PI * this.radio * 2);
    }
    area() {
        return Math.floor(Math.PI * this.radio ** 2);
    }
}
let square = new Square(3);
console.log(`Longitud del lado: ${square.length}`);
console.log(`Perímetro del cuadrado: ${square.perimeter()}`);
console.log(`Área del cuadrado: ${square.area()}`);
let circumference = new Circumference(4);
console.log(`Longitud del radio: ${circumference.radio}`);
console.log(`Perímetro de la circunferencia: ${circumference.perimeter()}`);
console.log(`Área de la circunferencia: ${circumference.area()}`);
//# sourceMappingURL=ts-exercise-02.js.map