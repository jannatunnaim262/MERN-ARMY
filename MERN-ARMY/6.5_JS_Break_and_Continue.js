// Break in For Loop

for (var i = 1; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}


// Break in While Loop
var count = 0;
while (count < 10){
    if (count === 3) {
        break;
    }
    console.log(count);
    count++
}




// Continue in For Loop

for (var i = 0; i < 5; i++){
    if (i === 2) {
        continue;
    }
    console.log(i); 
}


// Continue in While Loop

var count = 0;

while(count < 5){
    if(count === 2){
        count++
        continue;
    }
    console.log(count);
    count++
}