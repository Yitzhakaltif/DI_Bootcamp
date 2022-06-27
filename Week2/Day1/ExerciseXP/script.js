/*//exercise#1:
//1. Store your favorite food into a variable.
let favoriteFood = "onion";
//2. Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
let favoriteMeal = "Lunch";
//3. Console.log I eat <favorite food> at every <favorite meal>
let mealDay = `I eat ${favoriteFood} at every ${favoriteMeal}`
console.log(mealDay)
*/

/*exercise2:
part 1: Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
1:Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
2:Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory
let myWatchedSeriesSentence = `I watched ${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;
3:Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory
let sentence = `i watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
console.log(sentence);

part2: 

1.Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries.splice(2, 1, "friends");

2. Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Suits");

3. Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.splice(0, 0, "peakyBlinders")

4. Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);

5. Console.log the third letter of the series “money heist”.
//console.log(myWatchedSeries[1][2])

6. Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);
*/


/*exercise 3:

//1. Store a celsius temperature into a variable.
let celsiusTemp = "30 degrees Celsius";

//2.
//Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
//Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
let fahrenheitTemp = "86 degrees Fahrenheit";
let sentence = `${celsiusTemp} is ${fahrenheitTemp}.`
console.log(sentence);
*/

/*exercise 4:

//For each expression, predict what you think the output will be in a comment (//) without first running the command.
//Of course, explain each prediction.
//Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
//Using the code below:

let c;
let a = 34;
let b = 21;

    console.log(a+b) //first expression
    // Prediction:it will have the outcome of 55, because 20+30 is 50 and 2+3 is 5, so 50+5 is 55
    // Actual: 55.

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23, because 1+2 is 3, so 3+20 is 23. 
    // Actual:23

    //3. What is the value of c?
    //undefined.

    //4. Analyse the code below, what will be the outcome?

    console.log(3 + 4 + '5');
    //prediction: 7 + string, because 3 aand 4 are numbers and the sum would be 7 and '5'is a string so it would display as a string.
    //actual: 75
    */

    /*exercise 5

    //For each expression, predict what you think the output will be in a comment (//) without first running the command.
//Of course, explain each prediction.
//Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

//1. What is the output of each of the expressions below?
typeof(15)
// Prediction: number, because in the parenthesis it is a normal number without any quotations.
// Actual:number.

typeof(5.5)
// Prediction:number, because it a a decimal which is still a number.
// Actual: number

typeof(NaN)
// Prediction: undefined because it isnt a number nor a word with quotations
// Actual: number

typeof("hello")
// Prediction: string, because it s a word inside quotations
// Actual: string

typeof(true)
// Prediction: Boollean, because it is the word true.
// Actual:Boollean.

typeof(1 != 2)
// Prediction: Boollean because != translates into not true which is a Boollean symbol.
// Actual: Boollean.

"hamburger" + "s"
// Prediction: hamburgers, because they are both words inside strings or quotations and they would display beside eachother
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: undefined because you can't subtract a letter that doesnt exist in a word from it.
// Actual: NaN

"1" + "3"
// Prediction: 13, because they are both inside strings and would display beside each other.
// Actual:13

"1" - "3"
// Prediction: undefined, because you cant subtract 2 strings.
// Actual: -2

"johnny" + 5
// Prediction: johnny5, because it is the same as adding two strings it puts them beside each other
// Actual:johnny5 

"johnny" - 5
// Prediction: Johnny5 because one is a number and the other is a word
// Actual:NaN

99 * "hello"
// Prediction:99hello, because they are both different types and multiplying them would give them beside each other.
// Actual: NaN

1 != 1
// Prediction: false, because 1 does equal 1
// Actual: false

1 == "1"
// Prediction: true, because 1 equals 1
// Actual: true

1 === "1"
// Prediction: true, because 1 does equal 1.
// Actual: true
*/

/*exercise 6:

For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

5 + "34"
// Prediction: 534, because they aren't both set as a number.
// Actual: 534

5 - "4"
// Prediction: NaN because they are both different types.
// Actual: 1

10 % 5
// Prediction: 2 because there are only two 5's in the numner 10
// Actual: 0

5 % 10
// Prediction: 0, no 10 in the number 5
// Actual: 5

"Java" + "Script"
// Prediction:JavaScript, because they stick together when added to each other
// Actual:JavaScript

" " + " "
// Prediction: nothing, nothing will come out of two emty strings
// Actual: ` `

" " + 0
// Prediction: `0` because the 0 woud go inside backticks
// Actual: `0`

true + true
// Prediction: true, because two boolleans that are the same would merge into eachother.
// Actual: 2

true + false
// Prediction: 0, because it is the same as 1-1
// Actual: 2

false + true
// Prediction: 1 because false equals to 0
// Actual: 1

false - true
// Prediction: -1 because it is the same as 0-1
// Actual: -1

!true
// Prediction: false, because with an exlamation mark true becomes false.
// Actual: false

3 - 4
// Prediction: -1, because one number subtracted from a number greater from it becomes negative.
// Actual: -1

"Bob" - "bill"
// Prediction: NaN, they cannot be subtracted from each other because they are both strings
// Actual:NaN */













