// Else if

let age = 25;
let hasTicket = true;

if(age >= 18 && hasTicket){
    console.log("You can ente the concert");
} else if(age >=18 && !hasTicket){
    console.log("You need a ticket to enter the concert");
} else if(age < 18 && hasTicket){
    console.log("You need to be ar least 18 to enter the concert");
} else {
    console.log("You need both a ticket and to be at least 18 to enter the concert");
}