function add(n1, n2) {
    return n1 + n2;
}
// void tyme = no return / undefine
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 10));
// let someValue: undefined
// Function Types
var combineValues; // Specifying how the function should look like
// let combineValues: Function; // To accept any function
combineValues = add;
console.log(combineValues(5, 5));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
