// 1. Variable declarations

var a = 123;
let b = 1;
const c = 1;

// c = 3; // gives an error because of the second assignment
const arr = [1, 2, 3];
arr[0] = 0; // legal assignment
const obj = { a: 1, b: 2 };
obj.a = 0; // legal assignment

// Local scoped vs block scoped variables
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i); // output: 10, 10, 10, ..., 10
}

// Workaround with closure
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i); // output: 0, 1, 2, ..., 9
    })(i);
}

// Solution with block scoped variable
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i); // output: 0, 1, 2, ..., 9
}

// 2. Destructuring

let points = [1, 2];
let [x0, x1] = points;

// Swap
let yes = 1;
let no = 0;
[yes, no] = [no, yes]; // Gives reversed values

// For objects
let president = {
    firstName: 'Donald',
    lastName: 'Trump',
};

let { firstName, lastName } = president;

// Remaining items extraction
let colors = ['red', 'blue', 'green'];
let [red, ...greenAndBlue] = colors;
let employee = { fName: 'John', lName: 'Smith', job: 'engineer' };
let { job, ...person } = employee;

// 3. Spread

let legs = {leg1: true, leg: true};
let arms = {arm1: true, arm2: true};
let body = {body: true};
let head = {head: true};
let being = {...head, ...body, ...legs, ...arms};

let arr1 = [0, 1];
let arr2 = [2, 3];
let union = [...arr1, ...arr2];

// 4. Functions' default values
function calcRectangleArea(a: number, b = a ) {
    return a * b;
}

let areaOfSquare = calcRectangleArea(5);

// Variable number of functions' arguments
function sum(...nums: number[]) {
    return nums.reduce(function(a, b) {
        return a + b;
    });
}

let sumOfNumbers = sum(...[1, 2, 3]);









