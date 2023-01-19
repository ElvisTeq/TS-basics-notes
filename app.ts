function add(n1: number, n2: number) {
  return n1 + n2;
}

// void tyme = no return / undefine
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 10));

// let someValue: undefined

// Function Types
let combineValues: (a: number, b: number) => number; // Specifying how the function should look like

// let combineValues: Function; // To accept any function

combineValues = add;

console.log(combineValues(5, 5));
