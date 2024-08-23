// Javascript Number Methods

// 1: Number()
/*
* Convert a value to a number
*/
var num = Number("123");
console.log(num);
console.log(typeof num);

// 2: ParseInt()
// * Parses a string into an integer

var num = parseInt("45656.65");
console.log(num);
console.log(typeof num);


// 3: ParseFloat()
// * Parses a string into float

var num = parseFloat("45656.65");
console.log(num);
console.log(typeof num);

// 4: toFixed()
// * Formats a number to a specified number of decimal places

var num = 456.46566566655;
var fixedNum = num.toFixed(1);
console.log(fixedNum);


// toString()
// * Converts a number to a string

var num = 123;
var strNum = num.toString();
console.log(strNum); // Output: "123"


// 6 toExponnential()
// * Converts a number into exponential notation

var num = 14343454;
var expNum = num.toExponential(2);
console.log(expNum); // Output: "1.43e+9"


// 7 toPrecision()
// * Formats a number to a specified precision (total number of digits)

var num = 123.4354545;
var preNum = num.toPrecision(4);
console.log(preNum); // Output: 123.43


// 8 valueof()
// * Returns the primitve value of a number object

var num = new Number(123);
console.log(num.valueOf()); // 123


// 9 isInteger
// * Returns true if the is an integer

var num = 123;
console.log(Number.isInteger(num));


// 10 isNaN()
// * Returns true if the value is NaN (Not a Number)

var num = "123"
console.log(isNaN(num));
