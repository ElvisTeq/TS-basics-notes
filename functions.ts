function add(n1: number, n2: number) {
  return n1 + n2;
}

// void tyme = no return / undefine
function printResult(num: number): void {
  console.log("Result: " + num);
}

// Function Type + Callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // void = no need to return anything
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 10));

// let someValue: undefined

// Function Types
let combineValues: (a: number, b: number) => number; // Specifying how the function should look like

// let combineValues: Function; // To accept any function

combineValues = add;

console.log(combineValues(5, 5));

// Does not need to return anything because of "void"
addAndHandle(10, 20, (result) => {
  console.log(result);
});
