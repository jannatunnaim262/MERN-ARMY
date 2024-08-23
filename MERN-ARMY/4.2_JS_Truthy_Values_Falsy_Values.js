// Javascript Truthy and Falsy Values

// Falsy Values

/*
A falsy value is one that is considered false when encountered in a boolean context. Javascript has only six falsy values

1 : 'false' -- The boolean false
2 : '0' -- The number zero
3 : '""' (empty string) -- A string with no characters
4 : 'null' -- Represents the international absence of any object value
5 : 'undefined' -- indicates that a variable jas been declared but not assigned a value
6 : 'NaN' -- Stands for "Not-a-number"; it is a result of an invalid or undefined mathemetical operation

*/
// Examples--1
if(false){
    console.log("Hello world");   
}
if(0){
    console.log("Hello World");
}
if(""){
    console.log("Hello World");
}
if(null){
    console.log("Hello World");
}
if(undefined){
    console.log("Hello World");
}
if(NaN){
    console.log("Hello World");
}


// Example--2
let falsyValues = [false,0,"",null,undefined,NaN];

falsyValues.forEach((value) =>{
console.log(value + " is falsy: " + Boolean(value) );
});

// Truthy Values
/*
* A Truthy value is one of that is considered true when encountered in a boolean context.
Any value that is not falsy is truthy, This includes but is not limited for.

* Any non-zero number (e.g, 1, -1. 3. 3.14)
* Any non-empty string (e.g. "hello", "0")
* Object and arrays (even empty ones)
* The boolean true
*/
// Example

if (true){
    console.log("Hello World"); // Hello World
}
if (1){
    console.log("Hello World"); // Hello World
}
if (" "){
    console.log("Hello World"); // Hello World
}
if ({}){
    console.log("Hello World!!"); // Hello World
}