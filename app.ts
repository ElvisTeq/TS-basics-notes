let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

// userName = userInput; // won't work

// need to use "if" to make it work
if (typeof userInput === "string") {
  userName = userInput;
}
