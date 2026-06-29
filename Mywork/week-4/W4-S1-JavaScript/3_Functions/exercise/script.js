function multiplyNumbers(a, b) {
  return a * b;
}

let result = multiplyNumbers(5, 10);
console.log("The result is: " + result)


// Calculate funtion with 3 parameters, two numbers and a string. The function should return the sum of the two numbers and the string concatenated together.


function calculate(num1, num2, operation) {
    // 1. Input Validation: Check if both arguments are valid numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Invalid input: both arguments must be numbers.";
    }

    // 2. Bonus: Handle operations using a switch/case statement
    switch (operation) {
        case "add":
            return num1 + num2;
            
        case "subtract":
            return num1 - num2;
            
        case "multiply":
            return num1 * num2;
            
        case "divide":
            // Optional check for division by zero
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
            
        // 3. Default Case for Unknown Operations
        default:
            return "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }
}

// --- Test Cases ---
console.log(calculate(10, 5, "add"));       // Output: 15
console.log(calculate(10, 5, "subtract"));  // Output: 5
console.log(calculate(10, 5, "multiply"));  // Output: 50
console.log(calculate(10, 5, "divide"));    // Output: 2

// Test Case: Invalid Input
console.log(calculate("10", 5, "add"));     // Output: "Invalid input: both arguments must be numbers."
console.log(calculate(10, NaN, "add"));     // Output: "Invalid input: both arguments must be numbers."

// Test Case: Unknown Operation
console.log(calculate(10, 5, "addd"));      // Output: "Unknown operation. Please use 'add', 'subtract', 'multiply', or 'divide'."

// Test Case: Division by zero edge case
console.log(calculate(10, 0, "divide"));    // Output: "Error: Division by zero is not allowed."