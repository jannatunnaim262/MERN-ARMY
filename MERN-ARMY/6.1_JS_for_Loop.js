// 1: Looping through array
let fruits = ["apple","banana","cherry"];

for(let i = 0; i<fruits.length; i++){
  console.log(fruits[i])
}
// fruits.length gives the total number of elements in the array

// 2: Loop with Decrement
for(let i = 5; i>0; i--){
  console.log(i);
}
// i-- decrement i by 1 agter each iteration.

// 3: Loop with multiple variables
for(let i = 0, j = 10; i<5; i++, j -= 2){
  console.log("i:",i, "j:",j);
}

/*
for(;;){
consol.log("This will run forever");
break;
}
*/