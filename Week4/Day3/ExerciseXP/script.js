/*Exercise 1

//1. Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); //we get an array like this = ['bread, 'carrot', potato, chicken, apple, orange]

// ------2------
const country = "USA";
console.log([...country]); //we get an array with U,S,A inside ['U','S','A']

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray);
[...[, ,]]; //we get an array with 2 undefined elements

*/


/* Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//1 
const welcomeStudents = users.map((element) => {
    console.log(`Hello, ${element["firstName"]}`)
});
  
//2 & bonus
const newArray = users
				.filter((elem)=>elem["role"].includes('Full Stack Resident'))
				.map((person)=>person["lastName"]);

console.log(newArray)
*/


/* Exercise 3 : Star Wars

let epic = ['a ', 'long ', 'time ', 'ago ', 'in a ', 'galaxy ', 'far far ', 'away '];

//1
const epicString= epic.reduce((acc, string) => {
    return acc + string;
  }); console.log(epicString);

*/

/* Exercise 4 : Employees #2

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

//1
// const passed = students.filter((elem)=>elem[Object.isPassed].includes('true'));
// console.log(passed);
const passed = students
                    .filter((elem) => elem.isPassed == true)
                    .map((person) => {
                       return `Good job ${person["name"]}, you passed the course in ${person["course"]}`});
                   

console.log(passed);
*/



