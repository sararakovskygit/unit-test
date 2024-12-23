// Function to add two numbers
const add = (a, b) => a + b;
  
  // Function to subtract two numbers
  const subtract = (a, b)=> {
    return a - b;
  }
  
  // Function to multiply two numbers
  const multiply =(a, b)=> {
    return a * b;
  }
  
  // Function to divide two numbers (with error handling for division by zero)
  const divide = (a, b)=> {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  // Export the functions to make them available for testing
  module.exports = { add, subtract, multiply, divide };
  