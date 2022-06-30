function playTheGame() {
    let userConfirm = confirm("Would you like to play the game?");
    let answer = true;
    let i = 0;

    if (userConfirm == true) {
        while (answer) {            
            let userNumber = parseInt(prompt("Enter a number from 0 to 10"));
            console.log("Enter a number from 0 to 10");
            i++;
            answer = validNumber(userNumber);
            
            if (i > 3 && answer === true) {
                alert("Out of chances");
                console.log("Out of chances");
                answer = false;

            } else {
                console.log("i:", i);
            }
        }

    } else {
        alert("No problem, Goodbye");
    }
}

function validNumber(userNumber) {
    if (isNaN(userNumber)) {
        alert("Sorry Not a number, Goodbye");
        console.log("Sorry Not a number, Goodbye");
        return true;
        
    } else if (userNumber != /[0-10]/ && (userNumber < 0 || userNumber > 10)) {
        alert("Sorry it's not a good number, Goodbye");
        console.log("Sorry it's not a good number, Goodbye");
        return true;

    } else {
        let computerNumber = Math.floor(Math.random() * 2);
        console.log("Computer Number:", computerNumber);
        return game(userNumber, computerNumber);
    }
}

function game(userNumber, computerNumber) {
    
    if (userNumber == computerNumber) {
        alert("WINNER!");
        console.log("WINNER!");
        return false;

    } else if (computerNumber < userNumber) {
        alert("Your number is bigger then the computer's, guess again");
        console.log("Your number is bigger than the computer's, guess again");
        return true;

    } else {
        alert("Your number is smaller then the computer's, guess again");
        console.log("Your number is smaller than the computer's, guess again");
        return true;
        
    }
}


