// array.foreach(callback(currentvalue,index,array)){
//     // code to execute for each element
// };


// Callback: A function that is called for every element being processed.
// currentvalue: The current element being processed
// index (optional): The index of the current element
// array (optional): The array foreach was called upon
// Example
// Here's a basic example of using foreach to log each elements in an array

const fruits1 = ['apple','banana','pineapple'];

fruits1.forEach(function(fruit,index){
console.log(index,fruit);
}
);

// Using Arrow Functions
// You Can use arrow functions for more concise syntax
fruits1.forEach(fruit => console.log(fruit))
// Detailed breakdown
// Callback Function


// 1 Iterating with index

const number = [10, 20, 30];

number.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`); 
});



// 2 : Modifying Array Elements (not recommended for foreach)

number.forEach((number, index, arr) => {
    arr[index] = number * 2; // Double each element
});

console.log(number);


// Object in foreach

const person = {name: "alice", age: 24, city: "berlin"};
Object.keys(person).forEach(key => {
    console.log(`${key} : ${person[key]}`);  
});