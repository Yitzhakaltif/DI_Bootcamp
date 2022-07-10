// ## Exercise 1 : guess what will be console logged, and explain why

// 1. Create a global variable
let text = "Hello";

// 2. Create the function
function checkText (){
	// 4.1 In the function",hello; we access the global variable in the local scope
	console.log("In the function",text); 
	// 4.2 modify the global variable
	text += " World";
	// 4.3 "Still in the function",hello world
	console.log("Still in the function",text);
}

// 3. before the function", hello
console.log("before the function", text);

// 4. invoke the function
checkText()

// "after the function", hello world
console.log("after the function", text);




// ## Exercise 2 : guess what will be console logged, and explain why
// 1. Create a global variable
let friend = "Harry";

//2. Create the function
function checkfriend (){
	//4.1 Create a local variable
	let friend = "Alice";
	// 4.2 "In the function",Alice
	console.log("In the function",friend); 
	// 4.3 Adding the lastname to the local variable
	friend += " Smith";
	// 4.4 "Still in the function", Alice Smith
	console.log("Still in the function",friend);
}

//3. before the function", Harry
console.log("before the function", friend);

// 4. Invoke the function
checkfriend()

// 5. after the function", Harry
console.log("after the function", friend);


/*# Functions & Arrow functions
## Exercise 1:
//1. Greet the user with his name, the user's name is a parameter. Do this exercise,
//* first by using function declarations
// function greet (){
function welcome (username){
	alert(`hello ${username}`);
}
welcome('john');
//* then function expression,
const welcomeSecond = function (username){
	alert(`Hello ${username}`)
}

welcomeSecond("John");
//* then arrow function
const welcomeThird = (username) => alert(`Hello ${username}`)
welcomeThird("John");
*/

/*## Exercise 2: Function & Arrow function & Ternary Operator*/
//1. Check if the user's age is higher than 18. Use ternary operator.
//- if the user's age is higher than 18, return "You can drive"
//- else, return "You cannot drive"
//Do this exercise,
//* first by using function declarations

//* then function expression,
//* then arrow function