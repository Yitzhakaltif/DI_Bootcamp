/*Exercise 1
1. Create a structured html file linked to a js file

2. Write a JS function that takes a parameter: myAge

3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

4. Call the function
*/
function js(myAge){
    let mom = myAge * 2;
    let dad = mom * 1.2; 
    return (`the age of my ${mom} is twice my age, and my ${dad} is 1.2 the age of my ${mom}`)
}
console.log(js(15));
let hi = hello; 