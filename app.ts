let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

// userName = userInput; // won't work

// need to use "if" to make it work
if (typeof userInput === "string") {
  userName = userInput;
}

// never = for functions that we intent to return nothing, mostly for error functions
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("Error", 500);
