function wordsInTheStars() {
    
    let userWords = prompt("Enter words seperated with ','").replace(/\s/g, "");
    let userWordsArray = userWords.split(",");

    let maxLength = 0;
    for (let i = 0; i < userWordsArray.length; i++) {
        if (userWordsArray[i].length > maxLength) {
        maxLength = userWordsArray[i].length;
        }
    }

    let framedWords = ["*".repeat(maxLength + 4)];
    for (let word of userWordsArray) {
        framedWords.push(`* ${word + " ".repeat(maxLength - word.length)} *`);
    }
    framedWords.push(framedWords[0]);
    
    console.log(framedWords.join("\n"));
}

wordsInTheStars()
