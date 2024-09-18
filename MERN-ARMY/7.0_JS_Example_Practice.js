// 1. Check Odd or Even: Write a program that checks whether a given number is odd or even using an if-else statement.

// Solution :

var num = 15;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/**
 *2. Grade Calculation Using If-Else: Write a program that takes a student's score and prints the grade:
A for 90 and above
B for 80 to 89
C for 70 to 79
D for 60 to 69
F for below 60
 */

var score = 40;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/**
 *3. Simple Calculator Using Switch: Create a basic calculator that takes two numbers and an operator (+, -, *, /) and returns the result using a switch statement.
 */

let num1 = 10;
let num2 = 15;

let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invaid Operator");
}

//4. Countdown Using While Loop: Write a program that counts down from 10 to 1 using a while loop.

var i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

/**
 * 5. Multiplication Table Using For Loop: Create a program that prints the multiplication table for the number 7 (from 1 to 10) using a for loop.
 */

var multiplication = 7;

for (i = 1; i<=20; i++){
  console.log(` ${multiplication} ${"X"}  ${i} ${"="} ${multiplication*i}`);
}


/**
 * 6. Check Divisibility: Write a program that checks if a number is divisible by both 3 and 5.
 */

var num = 15;
if(num % 3 === 0 && num % 5 === 0){
  console.log("This number " + num + " is divisable by both 3 and 5");
} else {
  console.log("This number " + num + " is not divisable by both 3 and 5");
}




// With For loop

// for(num = 1; num<=100; num++){
// if(num % 3 === 0 && num % 5 === 0){
//   console.log("This number " + num + " is divisable by both 3 and 5");
// } else {
//   console.log("This number " + num + " is not divisable by both 3 and 5");
// }
// }


/**
 * 7.Print First 10 Odd Numbers Using For Loop: Write a program that prints the first 10 odd numbers using a for loop.
 */


for (var i = 1; i<=10; i++){
  if (i % 2 !== 0){
    console.log("Odd number :"+ i);
  }
  if (i % 2 === 0){
    console.log("Even number :"+ i);
  }
}



/**
 * 8.Temperature Conversion (Celsius to Fahrenheit): Write a program to convert a given temperature from Celsius to Fahrenheit using the formula: F = C * 9/5 + 32.
 */

var celcius = 35;
var farenheit = celcius * 9/5 + 32;
console.log("Farenheit is :"+farenheit);


/**
 * 9. Check Number Sign: Write a program that checks whether a number is positive, negative, or zero using if-else statements.
 */

var num = 10;

if (num > 0){
  console.log("Positive");
} else if (num < 0){
  console.log("Negative");
} else {
  console.log("Zero");
}


/**
 * 10.Calculate Sum of First 10 Natural Numbers: Write a program that calculates the sum of the first 10 natural numbers using a for loop.
 */

var sum = 0;
for(i = 1; i<=10; i++){
   sum = sum + i; 
}
console.log(sum);