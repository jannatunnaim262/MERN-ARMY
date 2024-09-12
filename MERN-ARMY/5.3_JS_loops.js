//  for (initialization; Condition; Increment / decrement){

//  }


//  for (var i = 0; i<10; i++){
//    var hll = "Hello World " + i;
//    console.log(hll);
   
//     console.log(typeof(hll));
    
//  }




 // While loops

//  while(condition){
//     // code to execute while condition is true
//  }


//  var i = 1;
//  while(i<=10){
// console.log(i);
// i++;
//  }


//  do {
//     // code to execute
//  } while(condition);

// var i = 5;
// do {
//     console.log(i);
//     i++;
// } while(i == 1); 


// Syntax
// for(var key in onject){
//   // execute all codes
// }

// var person = {name: "Naim",age: 24,city:"Dhaka"};

// for (var key in person){
//   console.log(person[key]);

// }


// for (var value of iterable){

// }


// var numbers = [1,2,3,4,5];
// for(var number of numbers){
//   console.log(number);
// }


// Using for loop
for(var i=0; i<3; i++){
  console.log("for loop iteration: " + i );
}

// using while loop
var j = 0;
while(j<3){
  console.log("While loop iteration: " + j);
  j++
}

//Using do-while loop
var k = 0;
do{
  console.log("do-while iteration: " + k);
  k++;
}while (k<3);

// Using for...in loop
var person = {name: "John", age: 24}
for(var key in person){
  console.log(key + ": " + person[key]);
}

// Using for ...of loop
var array = [10,20,30];
for(var value of array){
  console.log(value);
}

