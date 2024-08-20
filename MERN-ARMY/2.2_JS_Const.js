// Variable Declared with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

const x= 10;
//x = 20; //not allowed

// Must be assigned
// const y;
// y = 10; // Not allowed

// const array

const arr = [2,3,5];
arr[0] = 10;
console.log(arr)

arr.push(10)
console.log(arr)

console.log(arr);


// Constant Object
const obj = {
    name: "Naim", // Property
    age: "24", // property
    city: "Dhaka", // Property
sayHello: function(){
    console.log("Hello World"); // Method
}
};


// You can change const object property

obj.name = "Jannatun"; // Modify Property
console.log(obj) // Modify property
console.log(obj.age); // Object print



// Block Scope

const y = 10;

{
    const y = 20;
    console.log(y);
}

console.log(y);