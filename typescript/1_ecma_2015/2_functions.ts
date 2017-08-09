// 1. Function declaration
function declaration() {

}
// 2. Function expression
const expression = function() {

};
// 3. Arrow function
const arrow = () => {

};
// 4. Named function expression
const named = function fn() {

};
// 5. Anonymous function
// Old
document.body.addEventListener('click', function() {
    alert(1);
});
// New
document.body.addEventListener('click', () => {
    alert(1);
});
// 6. Context
// dynamic
let point1 = {
    x: 0,
    y: 0,
    resetFnFactory() {
        return function(this: any) {
            this.x = 0;
            this.y = 0;
        }
    }
}
point1.x = 1;
point1.y = 1;
let resetPoint1 = point1.resetFnFactory();
resetPoint1();
console.log(point1.x, point1.y); // output: 1, 1
// bound
let point2 = {
    x: 0,
    y: 0,
    resetFnFactory() {
        return () => {
            this.x = 0;
            this.y = 0;
        }
    }
}
point2.x = 1;
point2.y = 1;
let resetPoint2 = point2.resetFnFactory();
resetPoint2();
console.log(point2.x, point2.y); // output: 0, 0