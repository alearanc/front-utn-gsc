abstract class GeometricFigure {
    type: string
    constructor(type: string) {
        this.type = type
    }

    abstract perimeter(length: number): number
    abstract area(length: number): number
}

class Square extends GeometricFigure {
    length: number
    constructor(length: number) {
        super('Square')
        this.length = length
    }

    perimeter(): number {
        return this.length * 4
    }
    area(): number {
        return this.length ** 2
    }
}

class Circumference extends GeometricFigure {
    radio: number
    constructor(radio: number) {
        super('Circumference')
        this.radio = radio
    }
    perimeter(): number {
        return Math.floor(Math.PI * this.radio * 2)
    }

    area(): number {
        return Math.floor(Math.PI * this.radio ** 2)
    }
}

let square = new Square(3)
console.log(`Longitud del lado: ${square.length}`)              //  Longitud del lado: 3
console.log(`Perímetro del cuadrado: ${square.perimeter()}`)    //  Perimetro del cuadrado: 12
console.log(`Área del cuadrado: ${square.area()}`)              //  Area del cuadrado: 9

let circumference = new Circumference(4)
console.log(`Longitud del radio: ${circumference.radio}`)                       //  Longitud del radio: 4
console.log(`Perímetro de la circunferencia: ${circumference.perimeter()}`)     //  Perimetro de la circunferencia: 25
console.log(`Área de la circunferencia: ${circumference.area()}`)               //  Area de la circunferencia: 50