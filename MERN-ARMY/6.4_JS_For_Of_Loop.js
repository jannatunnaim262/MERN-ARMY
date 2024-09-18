

const emogis = ["😊","😒","🤣"];

for (const emog of emogis){
    console.log(emog);  /*😊😒🤣*/
}

// 1: Iterating over a string

const message = "Hello";

for (const char of message){
    console.log(char);
}

// 2 : Iterating Over a Map

const map = new Map([
    ["name", "Alice"],
    ["age", 24],
    ["city", "Tokyo"] 
]);

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}
// Map Entries : In a Map each iteration provides an array where the first elemets is the key and the second element is the value



// 3 : Iterating ove a Set
const number = new Set ([1,2,3,4,5]);
for (const num of number){
    console.log(num);
}

 
// 4 : Using for ... of with Generators

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
for (const num of numberGenerator()){
    console.log(num);
}

