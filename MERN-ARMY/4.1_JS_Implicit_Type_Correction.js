// Implicit type of Correction
// When a number is added to a string, Javascript converts the numbe to a string and then concatanetes them

// 1 String and Number

let result  = "5" + 3;
console.log(result); // 53 (number 3 is considered into a string)
console.log(typeof result);

// Boolean and Number
// When a boolean is used in a numeric context, Javascript converts true to 1 and false to 0

let boolResult = true + 3;
console.log(boolResult); //boolean 3 is corrected into a number
console.log(typeof boolResult);

//Equality Comparison (==)
// The == operator performs type coection if the operands are different types before comapring them

console.log(1 == "1"); // true (number 1 is coerced into a string)
console.log(1 == "1.0"); // true (number 1 is coerced into a string)
console.log(1 == true); // true (number 1 is coerced into a string)
console.log(false == 0); //true

//4 Strict Equality Comparison (===)

console.log(1 === "1"); // false (types are different)
console.log(1 === "1.0"); // false (types are different)
console.log(1 === true); // false (types are different)
console.log(false === 0); // false (types are different)

