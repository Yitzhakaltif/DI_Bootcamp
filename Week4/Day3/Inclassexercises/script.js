/*
// Exercises # Map
// ## Exercise 1
let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]
// 1. Using the array above, use the map method, to create a new array that contains only the name of the actors
const namesPeople = famousPeople.map((person) => person["name"])
// 2. Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// const jobs = famousPeople.map((peopleJob) => peopleJob[`job`])
// console.log(jobs);
const somePeopleOneLine = famousPeople.map((person) => (
	{name:person["name"],job:person["job"]})
)

console.log(somePeopleOneLine)
// 3. BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
// ## Exercise 2
// const studentsFootball = [
//  {name: 'Rich', score: 33}, 
//  {name: 'Peter', score: 55}
// ];
// 1. Create a new array of objects, containing the name, score and isAboveAverage

// if the students has a score bigger that 50, the key isAboveAverage will be true, else
// the key isAboveAverage will be false. Use ternary operator
// Result expected
// const studentsNew = [
//     {name: 'Rich', score: 33, isAboveAverage : false}, 
//     {name: 'Peter', score: 55, isAboveAverage : true}
// ];
*/

/*
// # Filter
// ## Exercise 1:  create a new array that filters only the positive value
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
const positiveNumbers = numbers.filter((num) => num>0);
console.log(positiveNumbers)

// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below
const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

// const goodCharacters = characters.filter((elem) => elem[`series`].includes(`Star Trek: The Next Generation`));
// console.log(goodCharacters);

// //to get only their names 
// const nameGoodCharacters = goodCharacters.map((person)=>person[`name`]);
// console.log(nameGoodCharacters);

//chaining
const newArray = characters
				.filter((elem)=>elem["series"].includes('Star Trek: The Next Generation'))
				.map((person)=>person["name"]);

console.log(newArray)
*/


// # Reduce
// ## Exercise 1
const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];
// Find the sum of the score of the students using reduce
// const scoreSum = students.reduce((sum)=>sum[`score`]);
// console.log(scoreSum);
const scoreSum = students.reduce((acc, person) => acc+person[`score`], 0);
console.log(scoreSum);
// console.log(nameGoodCharacters);
// ## Exercise 2
// 1. Turn an array of voter objects into a count of how many people voted
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

const numVoters = voters.reduce((acc, person)=>{
    if (person[`voted`] == true){
        return ++acc;
    }else{
        return acc;
    }
}, 0)
console.log(numVoters);

const numVotersSecond = voters.reduce((acc,person) => acc+person[`voted`],0);
console.log(numVotersSecond);

