// Type Aliases
type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text"; // Literal Type combine with Union Type

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result;

  // Not always needs runtime check "depends of the logic"
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// The third parameter is a "Literal Type"
const combinedNumbers = combine(30, 26, "as-number");
console.log(combinedNumbers);

const combinedNames = combine("Elvis", "Lily", "as-text");
console.log(combinedNames);
