/**
 *  Variable declared with "let" have block scope
 * Variable declared with "let" must be declared before use
 * Variable declared with "let" cannot be redeclared on the same scope
 */

//Block Scope
let x = 10;

{
    let x = 20;
    console.log(x);
}
// cannot be used in here
console.log(x);

var b  = 10;
{
var b = 20;
var b = "Hello";
console.log(b);
}

console.log(b) //Outputs 20

var p = 2; Allowed
// let p =10;  // Not Allowed

{
    let q = 3; //allowed
}
{
    let p = 2; // allowed
    var p = 4; //Not allowed
    console.log(p); // Outputs
}