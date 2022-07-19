// Part 1
makeAllCaps = (array) => {
    console.log(array);
    return array.map((i) => i.toUpperCase());
  };
  
  sortWords = (array) => {
    console.log(array);
    return array.sort();
  };
  
  //testing
  Promise.resolve(["tomatoes", "avocados", "cucumbers"])
    .then(makeAllCaps)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

// Part 2

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

let user = prompt("Give word");
let arr = [];

function toJS(morse) {
  return new Promise((resolve, reject) => {
    let jsmorse = JSON.parse(morse); 
    if (morse.length < 1) {
      throw new Error(`You left me Empty!!!!`)
    } else {
      resolve(jsmorse);
    }
  });
}

function toMorse(jsmorse) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < user.length; i++) {
      let morseNew = jsmorse[user[i]];
      if (morseNew == undefined) {
        reject(`"${user}" doesn't exist in the morse javascript object`);
      } else {
        arr.push(morseNew); 
        resolve(morseNew);
      }
    }
  });
}

function joinWords(morseNew) {
  return new Promise((resolve, reject) => {
    console.log(arr);
    for (let i = 0; i < morseNew.length; i++) {
      if (morseNew) {
        let result = arr.join("\n"); 
        resolve(result);
      } else {
        reject(result);
      }
    }
  });
}

toJS(morse)
  .then(toMorse)
  .then(joinWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));