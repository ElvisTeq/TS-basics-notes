function add(n1, n2) {
    return n1 + n2;
}
// void tyme = no return / undefine
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 10));
// let someValue: undefined
// Function Types
var combineValues;
combineValues = add;
console.log(combineValues(5, 5));
