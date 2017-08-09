// 1. Functions
function printPerson(person: { name: string }): void {
    console.log(person.name);
}
printPerson({ name: 'John' });
// printPerson({lastName: 'John'}); // parameter is not compatible
interface Person {
    name: string;
}

interface PrintPersonUtil {
    (person: Person): void;
}

let safePrintPerson: PrintPersonUtil = (person: Person) => {
    console.log(person.name);
}

safePrintPerson({ name: 'John' });

// 2. Classes

interface Point2D {
    readonly x: number;
    readonly y: number;
}

interface Point3D extends Point2D {
    readonly z: number;
}

class Place implements Point3D {
    constructor(readonly x: number, readonly y: number, readonly z: number = 0) { }
    getDistance(place: Point2D) {
        return Math.sqrt(Math.pow(this.x - place.x, 2) + Math.pow(this.y - place.y, 2));
    }
}

let city = new Place(1, 2, 3);
// city.x = 3;
let A = new Place(0, 0);
console.log(A.getDistance({ x: 3, y: 4 })); // output: 5

// 2. Indexable types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['John', 'Smith'];
let myStr: string = myArray[0];
// or
let myObj: StringArray = { 0: 'a', 1: 'b' };


// 3. Compatibility

interface Traingle {
    side: number;
}

interface Square {
    side: number;
}

interface Shape {
    side: boolean;
}

let triangle: Traingle = { side: 10 };
let square: Square = { side: 20 };
let shape: Shape = { side: true };
triangle = square;
// square = shape; // incompatible assignment