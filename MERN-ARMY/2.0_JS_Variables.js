// JavaScript Variable

// JavaScript variables can be declared in 4 ways:

/*

1. Automatically
2. using "var"
3. using "let"
4. using "const"

*/

// 1. Automatically assigned a value
x = 5;
y = 6;
z = x + y;
console.log(z);

// 2 using "var"
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

// 3 using "let"
let a = 5;
let b = 6;
let c = a + b;
console.log(z);

// 4 using "const"
const d = 5;
const e = 6;
const f = d + e;
console.log(f);


// 5. Mixed
let g = 5;
const h = 6;
g = g + h;
console.log(g);

// One statement many Variables
let i = 5, j = 6,k = i + j;
console.log(k);


//Variable Naming Convertions
var myName;
var Myname;
var my_name;

// Example for only "var"
var F = "10";
var G = 10;
var H = F + G;
console.log(typeof H);