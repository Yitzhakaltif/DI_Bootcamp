
if (
    !confirm("Let's play the game!")
  ) {
    alert("Bye");
  } else {
    let word1 = prompt("First word").toLowerCase();
    let word2 = prompt("Second word").toLowerCase();
  
    let arrWord1 = word1.replaceAll(" ", "").split("");
    let arrWord2 = word2.replaceAll(" ", "").split("");
    let arrWordTwoCopy = [...arrWord2];
  
    arrWord1.forEach((par) => arrWord2.splice(arrWord2.indexOf(par), 1));
    arrWordTwoCopy.forEach((par) => arrWord1.splice(arrWord1.indexOf(par), 1));
  
    if (arrWord1.length < 1 && arrWord2.length < 1) {
      alert(`${word1} is an anagram of ${word2}`);
    } else {
      alert(`${word1} is not an anagram of ${word2}`);
    }
  }

    
 