// 1. Swap the Values
// You have two variables:
// let x = 10;
// let y = 20;
// How can you swap the values of x and y using a third variable?
// After swapping: x should be 20, y should be 10.
let x = 10;
let y = 20;

let combine = x;
x = y;
y = combine;
console.log("After swapping:");
console.log("X:", x);
console.log("Y:", y);

// 2. Simple Math with Variables
// let a = 8;
// let b = 3;
// Create a new variable sum to store the addition of a and b.
// Create a variable product for multiplication.
// Create a variable average for the average value of a and b.

let a = 8;
let b = 3;

let sum = a + b;
let product = a * b;
let average = (a + b) / 2;
console.log("Math operations:");
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Average:", average);

// 3. Temperature Conversion
// Store a Celsius temperature in a variable and create another variable to store the converted
// Fahrenheit, Reaumur and Kelvin value.
// Formula:
// R = 4/5 * C
// F = 9/5 * C + 32
// K = C + 273.15
// Example: If C = 25, then F = 77

let C = 25;
let R = (4 / 5) * C;
let F = (9 / 5) * C + 32;
let K = C + 273.15;

console.log("Temperature conversions:");
console.log("Celsius:", C);
console.log("Reaumur:", R);
console.log("Fahrenheit:", F);
console.log("Kelvin:", K);

// 4. Predict the Value
// What is the value of result after this code runs?
// let a = 5;
// let b = 2;
// let result = a + b * a;
// Explain why that’s the value (hint: operator precedence).

let result = 15;
console.log("Predict the Value:");
console.log("Value of result:", result);
// The value of result is 15 because of operator precedence. In JavaScript, multiplication (*) has a higher precedence than addition (+). Therefore, the expression b * a is evaluated first, resulting in 2 * 5 = 10. Then, the addition is performed: a + 10, which is 5 + 10 = 15.
