function beerBottleSong(number, subtract) {
    number = number - subtract;
    return number;
}

let userNum = parseInt(prompt("Enter an amount of bottles"));

for (let i = 1; 0 < userNum; i++) {
    console.log(`${userNum} bottles of beer on the wall`);
    console.log(`${userNum} bottles of beer`);
    
    if (userNum < i) {
        i = userNum;
    }

    if (i == 1) {
        console.log(`Take ${i} down, pass it around`);
    } else {
        console.log(`Take ${i} down, pass them around`);
    }

    userNum = beerBottleSong(userNum, i);
    console.log(`${userNum} bottles of beer on the wall`);
    console.log(" ");
}