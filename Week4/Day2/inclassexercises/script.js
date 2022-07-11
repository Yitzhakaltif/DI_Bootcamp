/*Exercise 1:
//function expression
(function (userName) {
    let div = document.getElementById(`container`);
    let text = document.createTextNode(`Hello ${userName}`);
    div.appendChild(text);

})(`Isaac`);
//arrow function
( (userName) =>{
    let div = document.getElementById(`container`);
    let text = document.createTextNode(`Hello ${userName}`);
    div.appendChild(text);
})(`Isaac`);
*/

/*Exercise #2 Nested functions*/
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
function starwars(nameShip){
    let characters = [];
    function createCharacter(firstName, lastName="smith"){
            characters.push(`${firstName} ${lastName}`);
    }

    function displayCharacter(){
        let fullName = document.getElementById('container');
        let userName = document.createTextNode(`The full name is ${characters} ${nameShip}`);
        fullName.appendChild(userName);
    }
    console.log(characters);
    createCharacter("Isaac", "Altif")
    // createCharacter("Isaac", "Altif")
    // createCharacter("Isaac", "Altif")
    displayCharacter();

}
starwars(`The Devastator`);
starwars(`Republic Attack Cruiser`);

// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?




