// 1. Print Numbers
// Write a program that prints numbers from 1 to 10 using a for loop.
// Expected Output: 1 2 3 4 5 6 7 8 9 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Even or Odd Checker
// Ask the user for a number and check whether it is even or odd using an if...else.
const NumChecker = (num) => {
  if (num % 2 === 0) {
    return `The number ${num} is Even`;
  } else {
    return `The number ${num} is Old `;
  }
};

console.log(NumChecker(8));
console.log(NumChecker(5));

// 3. Simple Calculator (Addition)
// Create a program that takes two numbers from the user and displays their sum.
const Calculator = (num1, num2) => {
  let result = num1 + num2;
  return `The Sum of the Calculation is: ${result}`;
};

console.log(Calculator(2, 4));

// 4. Grade Checker
// Write a program that accepts a student’s score and outputs their grade:
// ○ 90–100 = A
// ○ 80–89 = B
// ○ 70–79 = C
// ○ Below 70 = Fail
const GradeChecker = (score) => {
  if (score >= 99 && score <= 100) {
    return "You got A Grade";
  } else if (score >= 80) {
    return "You got B Grade";
  } else if (score >= 70) {
    return "You got C Grade";
  } else if (score < 70) {
    return "You Failed";
  }
};

console.log(GradeChecker(60));

// 5. Multiplication Table Generator
// Ask the user for a number and print its multiplication table (e.g., 5 × 1 ... 5 × 10).
const MultiplicationTable = (num) => {
  let table = "";
  for (let i = 1; i <= 12; i++) {
    table += `${num} × ${i} = ${num * i}\n`;
  }
  return `The Multiplication Table is: ${table}`;
};

console.log(MultiplicationTable(7));

// 6. Array of Fruits
// Create an array of fruits. Display each fruit using a loop.
const fruits = ["Mango", "Orange", "Apple", "Berries"];

fruits.forEach((item) => console.log("List of fruits:", item));
