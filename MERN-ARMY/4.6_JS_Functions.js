// Javascript Functions

function tocelcius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

console.log(tocelcius(77));




// const greet =  function greetFunction(){
//     console.log("Hello World");
// }
// greet();


// const greet = () => console.log("Hello World");
// greet();


// const sum = (a,b) => a+b;
// console.log(sum(2,3));


// function firstAddition(a,b){
//     return a+b;
// }
// console.log(firstAddition(2,3));
// firstAddition(5,6);


function greet(name = "Naim"){
    console.log('Hello, ${name}!');    
}
greet();