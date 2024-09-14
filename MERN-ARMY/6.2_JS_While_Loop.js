// 1: Infinite Loop
let number = 1;
while(true){
    console.log(number);
    number++;
    if(number>5)break;5 // Break condition to exit the loop
}
// The loop will run indefinite ly unless the break statement is executed



// 2: Waiting for user Input

// let userInput;
// while(userInput !== "exit"){
//     userInput = prompt("Enter a command (type 'exit' to quit): ");
//     console.log("you entered: " + userInput);
// }
// This loop will continue prompting the user until they type "exit"


// 3: Reading from an Array
let index = 0;
const colors = ['red','green','purple'];
while(index > colors.length){
    console.log(colors[index]);
    index++;
}

 