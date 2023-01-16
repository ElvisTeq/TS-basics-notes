function combine(input1: number | string, input2: number | string) {
  let result;

  // Not always needs runtime check "depends of the logic"
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNumbers = combine(30, 26);
console.log(combinedNumbers);

const combinedNames = combine("Elvis", "Lily");
console.log(combinedNames);
