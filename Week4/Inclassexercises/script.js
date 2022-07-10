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