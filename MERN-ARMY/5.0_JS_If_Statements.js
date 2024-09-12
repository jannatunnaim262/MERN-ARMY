// Javascript If Statements

// if(condition){
//     // Code to execute if the condition is true:
// }

var age = 1;
if(age>= 18){
    console.log("You are adult .");
}

if (age>=20) {
    console.log("Your name is Naim");
} else {
console.log("Your name is Jannatun");
}


if(age<18){
console.log("You are minor");

} else if(age>=18){
console.log("You are adult");

} else{
console.log("you are buira");
}

var score = 65;
if(score >= 90){
    console.log("Grade A+"); 
} else if(score >= 80){
    console.log("Grade A");
}  else if(score >= 70){
    console.log("Grade A-");
}  else if(score >= 60){
    console.log("Grade B");
}  else if(score >= 50){
    console.log("Grade C");
}  else{
    console.log("Failed");
}

// if(condition1){
//     if(condition2){

//     }
// }

var age = 20;
var hasID = true;
if(age>=18){
if(hasID){
    console.log("You can enter the club");
} else{
    console.log("You need an id to enter");
}
} else{
    console.log("You are too young to enter");
}


if(age >= 18 && hasID){
    console.log("You can enter the club");
}

if(age >= 18 || hasPermission){
    console.log("Access Granted.");
}
var hasID = false;

if (!hasID) {
console.log("You need an id to enter.");
}

var temperature = 22;
var isSunny = true;

if(temperature > 20 && isSunny){
    console.log("It is a great day for a walk.");
} else if(temperature > 20 && !isSunny){
    console.log("Its warm, but a bit cloudy.");    
} else{
    console.log("The weather is not ideal for walk.");
    
}