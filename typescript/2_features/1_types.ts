// 1. Boolean
let isOn: boolean = true;
isOn = false;
// 2. Number
let num: number = 5;
num = 0xf00d;
num = 0b1010;
num = 0o744;
// 3. String
let str = 'John';
// 4. Array
let numArr: number[] = [1, 2, 3];
let strArr: Array<string> = ['a', 'b', 'c'];
// 5. Tuple
let tuple: [string, number] = ['a', 1];
// tuple = [1, 2]; // incompatible shape
// 6. Enum
enum Color { Red, Green, Blue };
let colorNum: number = Color.Red;
let colorName: string = Color[0];
// 7. Any
let someJSON: string = '{"a": 1}';
let parsedObj = JSON.parse(someJSON); // has any type
console.log(parsedObj.a); // it is ok since parsed object has type of 'any'
console.log(parsedObj.b); // compiles well but will emit error in runtime
let safeParsedObj = <{ a: number }>JSON.parse(someJSON);
safeParsedObj = safeParsedObj as { a: number };
// safeParsedObj = safeParsedObj as {b: number}; // not compatible
console.log(safeParsedObj.a);
// console.log(safeParsedObj.b) // not existent property according to the cast above
// 8. Void
let v: void = undefined;
function oneWayTicket(money: number): void {
    console.log('See you!');
}
let result = oneWayTicket(100);
// 9. Null
let nil: null = null;
// let x: number = nil; // not compatible
let x: any = nil;
let y: number | null = nil; // working
// 10. Undefined
let un: undefined = undefined;
// let o: number = un; // not compatible
let p: any = un;
let r: number | undefined = un; // working
// 11. Never
function infiniteLoop(): never {
    while (true) {
    }
}
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// 12. Composite types. Unions
type a = number | string;
type state = 'on' | 'off';

let m: a;
m = 100;
m = "value";
// m = true; // not compatible

let light: state;
light = 'on';
light = 'off';