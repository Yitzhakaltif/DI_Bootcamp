// // Exercise # JSON
// // # Exercise with JSON
// // 1. Parse this JSON string into a JS object
// // 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// // 3. Create another variable to stringify the JS object. Console.log the variable
// // 4. Then use pretty print (look at the lesson)
// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// const sportQ1 = (function (){
// 	let quizObj = JSON.parse(jsonString);
// console.log(quizObj);

// let retrieveAllOptions = quizObj["quiz"]["sport"]["q1"]["options"]
// console.log(retrieveAllOptions);
// retrieveAllOptions.forEach((element) => console.log(element))


// //stringify
// let stringQuiz = JSON.stringify(quizObj, null, 2)
// console.log(stringQuiz)
// })()

// Exercises
// # Exceptions
// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

function divide(numenator,denominator){
	console.log("a is : ", numenator, "b is : ", denominator , "-----------")
	try {
		let result;

		if (denominator !== 0) {
			result = numenator/denominator;
		} else {
			throw new RangeError("Attempted to divide by zero.")
		}

		console.log("result : ", result)
	} catch (error) {
		console.log(error.message)
	
}}


divide(5,0);





// ## Exercise 2
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
console.log("after")
// 1. Which type of error will be thrown ? Look on the different types errors on Google
// A type Error will be thrown
// 2. Is the console.log("after") will be shown on the console ?
// Yes






