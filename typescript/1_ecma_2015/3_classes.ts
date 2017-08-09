// 1. Structure
abstract class Shape1 {
    abstract name: string;
    protected parent: string;
    readonly version: string = '1';
    constructor(name: string) {
        this.name = name;
        this.parent = 'shape';
    }
    abstract perimeter(): number;
    abstract area(): number;
}

class Rectangular1 extends Shape1 {
    name: string;
    private width: number;
    private height: number;

    static PI: number = 3.14;

    constructor(name: string, width: number, height: number = width) {
        super(name);
        this.width = width;
        this.height = height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }

    area() {
        return this.width * this.height;
    }

    protected getParent() {
        return this.parent;
    }
}

class Square1 extends Rectangular1 {
    constructor(name: string, side: number) {
        super(name, side);
    }
    get root() {
        return this.parent;
    }
}

// let john = new Shape1('John'); // you shouldn create instance with abstract class
let anatoli = new Rectangular1('Anatoli', 20, 30);
console.log(anatoli.area()); // output: 600
let valentin = new Square1('Valentin', 20);
console.log(valentin.perimeter()); // output: 80
console.log(valentin.root); // output: shape
console.log(valentin.version); // 1
// valentin.version = 2; // illegal operation: assignment to the readonly
console.log(Rectangular1.PI); // static property

// 2. Compatibility

class Cat {
    alive: true
}

class Dog {
    alive: true
}

class Stone {
    alive: false;
}

let cat = new Cat()
let dog = new Dog();
let stone = new Stone();

cat = dog;
// dog = stone; // not compatible
