// Javascript Data Type

/*
* Primitive Data Type
1: String
2: Number
3: Boolean
4: Null
5: Undefined
6: Symbol
7: BigInt

* Object Data Type
1: Object
2: Function
3: Array
4: Date
5: RegExp
6: Map
7: Set
8: WeakSet
9: Symbol Iterator

Special Case
1: NaN
*/


// 1: String 
// * Represent Textual Data
// *String are created by enclosing text in  single quotes (''), double quotes ("") or backticks (``)
// Example
let name = "Naim";
let greeting = "Hello";
let templateString = `Hi, ${greeting}, ${name}`;
console.log(templateString);


// 2: Number
// * Represent numeric data
// * Integers and floats are treated as number

let count = 10;
let totalPrices =  99.99;
let sum = count + totalPrices;
console.log(sum);
console.log(typeof sum); // number


// 3: Boolean
// * Logical data type that can only have two values: true or false
// * used for conditional logic
let isLogged = true;
let isAuthorized = false;
console.log(typeof isLogged); //boolean

// 4: Null
// * Represents an intentionnal absence of any object value
// * 'Null' if often used to signify that a variable should have no value
let myVar = null;
console.log(myVar);
console.log(typeof myVar); //Object


// 5: Undefined
// * Represents a variable that has been declared not yet assigned
let myUndefinedVar;
console.log(myUndefinedVar);
console.log(typeof myUndefinedVar); // undefined


// 6: Symbol
// * Introduced in ES6
// * A unique and immutable primitve value
let uniqueId = Symbol("Id");
console.log(uniqueId);
console.log(typeof uniqueId); //Symbol


// 7:BigInt
// *BigInt Introduced in ES10
// * A numeric primitive value that can be represents arbitarily large integers

let bigInt = BigInt(1974273273272397);
console.log(bigInt);
console.log(typeof bigInt); //bigInt


// Object Data Types

// 1: Object
// * A collection of key-value pairs, Key are string( or ``), and values can be an data type
// * Object can also contain function (called methods)

let person = {
    name: "Naim",
    age: 24,
    city: "Narayangonj",
    interest: ["Cricket","Gardening"],
    greet(){
        console.log(`hello, my name is ${this.name}, my age is ${this.age}, Im from ${this.city}`);
    }
}
person.greet();
person.interest.push("Movie");
person.interest[1] = "Series"
console.log(person.interest);


// 2: Function
// * A block of code that can be executed multiple times
// * Functions are object that represent code block which can be executed
// * Functions can be assigned top variables, passed as arguments, and returned from other functions


function greets(){
    console.log(`Hello, Naim`);
    }
    greets();

    function greet(name){
        console.log(`Hello, ${name}`);
        }
        greet("Naim");


function addNumber(a,b){
    return a + b;
}
console.log(addNumber(5,10));


// 3 Array
let fruits = ["Apple","Banana","Mango","Strawberry"];
console.log(fruits);
console.log(typeof fruits);

// ()  Parenthesis
// {}  Carlibres
// []  Square Brackets


// 4 Date
// * Represents date and time
let today = new Date();
console.log(today);
console.log(typeof today);

// 5 RegExp (Regular Expression)
// * Represents Regular Expression used for pattern matching within strings

let regex = /[a-z]/g;
console.log(regex);
console.log(typeof regex);

// 6 Map

let myMap = new Map();
myMap.set("name", "John Doe");
myMap.set("age", 30);
myMap.set("Country", "Bangladesh")
console.log(myMap);
console.log(typeof myMap);


// 7 Set
// * Set is a collection of a unique values. like the array, but values cannot be duplicate

let mySet = new Set();
mySet.add("Apple");
mySet.add("Banana"); // You cants store same data twice
mySet.add("mango");
mySet.add("Jackfruits");
console.log(mySet);
console.log(typeof mySet);


// Weakset

let weakMap = new WeakMap();
let obj = {name: "John Doe"};
weakMap.set(obj, "This is John Doe");
console.log(weakMap);
console.log(typeof weakMap);


// Symbole Iterator
// * Property of an object that returns an iterator for the object

let myArray = ["apple","mango","orange"];
let iterator = myArray[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Reverse Letter

let name2 = "I am Naim";

let splitname2 = name2.split("");
console.log(splitname2);

let reversarr = splitname2.reverse();
console.log(reversarr);

let reverseJoin = reversarr.join("")
console.log(reverseJoin);


let name3 = "I am Naim";

let splitname3 = name3.split(" ");
console.log(splitname3);

let reversarrr = splitname3.reverse();
console.log(reversarr);

let reverseJoinn = reversarrr.join(" ")
console.log(reverseJoinn);


// Special Case
// 1 NaN -- Not a Number

let a  = 10;
let b = "20";
let c = a + b;
console.log(c);
console.log(typeof c);
console.log(0/0); // NaN
console.log(undefined + 10);
console.log(parseInt("dsrhdfgfd"));
console.log(Number("46565"));
console.log(isNaN("hgdhgd"));