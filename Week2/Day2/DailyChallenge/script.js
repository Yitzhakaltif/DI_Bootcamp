/*Instructions*/
//1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//For example, “The movie is not that bad, I like it”.
let sentence = "The movie is not that bad, it was great";

//2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");

//3. Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad");

//4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
//For example, the result here should be : “The movie is good, I like it”
if (wordBad > (wordNot + 3))
    {console.log(sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3, sentence.length));}
//If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
else{
    console.log(sentence);}