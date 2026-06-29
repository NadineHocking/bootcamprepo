// JavaScript Expressions and Conditions Exercise

// 1. Variable Declaration and Assignment
let num1 = 10; // A number
let num2 = "10"; // A string with a numeric value
let isTrue = true; // A boolean

// 2. Using Comparison Operators

// Comparison using '>'
let isGreater = num1 > 5; // Checks if num1 is greater than 5
console.log("Is num1 greater than 5?", isGreater); // true

// TODO: Comparison using '<='
let isLessOrEqual = num1 <= 10;
console.log("Is num1 less than or equal to 10?", isLessOrEqual); // true

// 3. Strict vs. Value Comparison
// TODO: Value comparison using '=='
let valueEqual = num1 == num2;
console.log("Is num1 equal to num2 (value comparison)?", valueEqual); // true

// TODO: Strict comparison using '==='
let strictEqual = num1 === num2;
console.log("Is num1 equal to num2 (strict comparison)?", strictEqual); // false
// 4. Conditional Statements

// Example of an if/else condition using a comparison
if (num1 === 10) {
  console.log("num1 is exactly equal to 10 (strict comparison)."); // This block will run
} else {
  console.log("num1 is not exactly equal to 10.");
}

// Another conditional statement to check if num1 is greater than 15
if (num1 > 15) {
  console.log("num1 is greater than 15.");
} else {
  console.log("num1 is not greater than 15.");
}

// 5. TODO - Conditional Statements with Logical Operators
if (num2 === "10" && num1 === "10") {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

if (num1 < 15 && (num2 === "10" || num1 === 10)) {
  console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}

console.log(num1 ? 15 : 5); // Ternary operator example

// TODO: what's the difference between the && and || operators?
// The && operator (logical AND) returns true if both conditions are true, while the || operator (logical OR) returns true if at least one of the conditions is true.

/// TODO: Add a conditional statement to check if num1 is less than 15 and num2 is exactly equal to '10'.
if (num1 < 15 && num2 === '10') {
    console.log("num1 is less than 15 and num2 is exactly equal to '10'.");
}
var dayOTheWeek = "Monday";
switch (dayOTheWeek) {
  case "Monday":
    console.log("It's Monday, the start of the week!");
    break;
  case "Wednesday":
    console.log("It's Wednesday, we're halfway through the week!");
    break;
  case "Friday":
    console.log("It's Friday, the weekend is near!");
    break;
  default:
    console.log("It's just another day.");
    break;
}
