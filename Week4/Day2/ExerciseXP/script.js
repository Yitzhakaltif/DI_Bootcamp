/*Exercise 1
const sum = (numOne, numTwo) => {return numOne + numTwo;}; console.log(sum(4,4))
*/

/*Exercise 2
//1
function one() {
    let weight = prompt(`Enter a weight in kg`)*1000;
    console.log(weight);
      }  
one();

//2
const two = function weight() {
   let weight = prompt(`Enter a weight in kg`)*1000;
    console.log(weight);
}
two();

//3
//function declaration tells the JavaScript engine about a function's name, return type, and parameters, but function expression allows us to create an anonymous function which doesn't have any function name. 
//4
const three = () => {let weight = prompt(`Enter a weight in kg`)*1000; console.log(weight) };three();
*/

/*Exercise 3
//1
(function (children, jobTitle, parterName, location) {
    let div = document.getElementById(`container`);
    let text = document.createTextNode(`You will be an ${jobTitle} in ${location}, and married to ${parterName} with ${children} kids.`);
    div.appendChild(text);

})(`4`,`Engineer`,`Rachel`,`Israel`);
*/

/*Exercise 4

(function (userName=prompt(`enter your name`)) {
    let div = document.createElement(`div`);
    div.innerHTML = userName;
    document.getElementById(`navName`).appendChild(div);
})();
*/

/*Exercise 5

function makeJuice(bevarageSize){
    let ingredients = [];
    function addIngredients(one, two, three){
        for (var i = 0, j = arguments.length; i < j; i++){
            ingredients.push(arguments[i]);
        }
        console.log(ingredients);
        let div = document.getElementById(`container`);
        let text = document.createTextNode(`The client wants a ${bevarageSize} juice, containing ${one}, ${two}, and ${three}.`);
        div.appendChild(text);
        }addIngredients(`Lemon`,`Orange`,`Banana`);addIngredients(`Lemon`,`Orange`,`Banana`);
        
        function displayJuice(one, two, three){
            let divTwo = document.getElementById(`containerTwo`);
        let textTwo = document.createTextNode(`The client wants a ${bevarageSize} juice, containing ${one}, ${two}, and ${three}.`);
        divTwo.appendChild(textTwo);
        }displayJuice(`BlackBerry`,`Guava`,`BlueBerry`);
}makeJuice(`Medium`);
*/


