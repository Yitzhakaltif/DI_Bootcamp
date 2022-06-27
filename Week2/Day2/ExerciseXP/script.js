/*exercise1:
//Instructions
//1. Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 2;
let y = 4;
//2. Write an if/else statement that checks which number is bigger.
if (y > 2){
    console.log("y is the bigger number")
} else{
    console.log("x is the bigger number")
}
*/

/*Exercise 2: Chihuahua
//Instructions
//1. Create a variable called newDog where it’s value is “Chihuahua”.
const newDog = "Chihuahua";
//2. Check and display how many letters are in newDog.
//console.log(newDog.length);
//3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
//console.log(newDog.toUpperCase());
//console.log(newDog.toLowerCase());
//4. Check if the variable newDog is equal to “Chihuahua”
if (newDog==="Chihuahua"){
    console.log("I love Chihuahuas, it's my favorite dog breed")
} else{
    console.log("I dont care, I prefer cats")
}
//a. if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//b. else, console.log ‘I dont care, I prefer cats’
*/


/*Exercise 3: Even Or Odd
//Instructions
//1. Prompt the user for a number and save it to a variable.
let user = prompt("select a number");
//2. Check whether the variable is even or odd.
if (user%2==0){
    console.log("this number is even");
}
else {
    console.log("This is an odd number");
}
//a. If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//b. If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
*/

/*Exercise 4: Group Chat
//Instructions
//Below is an array of users that are online in a group chat.

let users = ["Lea123", "Princess45", "cat&doglovers","helooo@000"];
//1. Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
if (users.length==0) {
    console.log("no one is online");
}
else if(users.length==1){
    console.log(users[0] + "is online");
}

else if(users.length==2){
   console.log(users[0] + ", and" + user[1] + "are online");
}
else{
   console.log(users[0] + "," +  users[1] + ", and 2 other users are online");
}
//a. If there is no users (the users array is empty), console.log “no one is online”.
//b. If there is 1 user, console.log “<name_user> is online”.
//c. If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
//d. If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
*/