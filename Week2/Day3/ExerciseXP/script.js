/*Exercise 1 : List Of People
//Instructions
let people = ["Greg", "Mary", "Devon", "James"];


//Part I - Review About Arrays
//1. Write code to remove “Greg” from the people array.
people.splice(0, 1);
//2. Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");

//3. Write code to add your name to the end of the people array.
people.push("Yitzhak");
//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
//5. Write code to make a copy of the people array using the slice method.
let peopleCopy = people.slice(1, people.length-1);
//a. The copy should NOT include “Mary” or your name.
//b. Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
//c. Hint: Check out the documentation for the slice method

//6. Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(peopleCopy.indexOf("Foo"));

//7. Create a variable called last which value is the last element of the array.
let last = peopleCopy[people.length - 1];
console.log(people);
console.log(peopleCopy);
//Hint: What is the relationship between the index of the last element in the array and the length of the array?



//Part II - Loops
//1. Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}
//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for(let i = 0; i < people.length; i++){
    console.log(people[i])
    if(people[i] == "Jason"){
        break;
    }
}
//Hint: take a look at the break statement in the lesson.
*/


/*Exercise 2 : Your Favorite Colors
//Instructions
//1. Create an array called colors where the value is a list of your five favorite colors.
let colors = ["blue", "red", "white", "green"];
let suff = ["st", "nd", "rd", "th", "th"]
//2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i=0; i<colors.length; i++) {
    console.log(`My #${i+1}${suff[i]} choice is ${colors[i]}`);
}
*/





/*Exercise 3 : Repeat The Question
//Instructions
//1. Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
 //let user = Number(prompt("Enter a number!"));
 //console.log(user);

//console.log(typeof user);
//2. While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?
let user;
do {
    user = parseInt(prompt('Give me a number'));
}
while(user < 10 || Number.isNaN(user));
//from your help in the meeting.
*/

    /*  Exercise 4 : Building Management
    //  Instructions:
     let building = {
         numberOfFloors : 4,
         numberOfAptByFloor : {
             firstFloor : 3,
             secondFloor : 4,
             thirdFloor : 9,
             fourthFloor : 2,
         },
         nameOfTenants : ["Sarah", "Dan", "David"],
         numberOfRoomsAndRent:  {
             sarah: [3, 990],
             dan :  [4, 1000],
             david : [1, 500],
         },
     }
     
     
    //  Review About Objects
    //  Copy and paste the above object to your Javascript file.
     
    //  Console.log the number of floors in the building.
    console.log(building["numberOfFloors"]);

    //  Console.log how many apartments are on the floors 1 and 3.
     console.log(building["numberOfAptByFloor"]["firstFloor"], building.numberOfAptByFloor["thirdFloor"]);
    //  Console.log the name of the second tenant and the number of rooms he has in his apartment.
     console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]);
    //  Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
        if (building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["david"][1] > building.numberOfRoomsAndRent["dan"][1]) {
        building.numberOfRoomsAndRent["dan"][1] = 1200;
        console.log(building.numberOfRoomsAndRent["dan"][1]);}
        */

 /*Exercise 5 : Family
// Instructions
// 1. Create an object called family with a few key value pairs.
let family = {
    father: "Peter",
    mother: "Louis",
    son: "Chris",
    daughter: "Meg"
}
// 2. Using a for in loop, console.log the keys of the object.
// 3. Using a for in loop, console.log the values of the object.
//questions 2 and three together
for (let key in family) {
console.log(key);
console.log(family[key]);
}
*/

/*Exercise 6
//Instructions
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
//1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence);
*/
/*Exercise 7 : Secret Group
//Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//2. Console.log the name of their secret society. The output should be “ABJKPS”
names.sort();
let societyName = "";
for (let i = 0; i < names.length; i++) {
    societyName += names[i][0];
}
console.log(societyName);
*/









