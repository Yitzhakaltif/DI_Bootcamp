

// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
//1.
let pattern = "";

for (let i = 1; i <= 6; i++) {
    pattern += "*".repeat(i) + "\n";
}

console.log(pattern);


//2.
pattern = "";

for (let i = 1; i <= 6; i++) {
    for (let hi = 1; hi <= i; hi++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);
// Do this Daily Challenge by youself, without looking at the answers on the internet.