let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let inputs = [noun, adjective, person, verb, place];
for (const item of inputs) {
    item.required = true;
}

let story = document.getElementById("story");
function btnClick(event) {
    let button = document.getElementById("lib-button");
    story.textContent = `The ${noun.value} ${adjective.value} ${person.value} in ${verb.value} with ${place.value}`;
event.preventDefault();
    console.log(button);
    
}
console.log(story);