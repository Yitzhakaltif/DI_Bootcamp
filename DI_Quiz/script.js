// # Review on Javascript

// #### Basics

// 1. How to access the second element of the array `let arr = [3, 7, 10]`
//​console.log(arr[1]) 
// 2. For the code below, what does `arrNums.splice(2, 0)` return?

    ```javascript
    let arrNums = [1, 2, 3, 4, 5];
    ```
 //it will remove the element with the index of 2 and that only.
// 3. What is the result of the following code :

    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
    ```
// it will console.log [4, 5, 6, 1, 2, 3, 7, 8, 9] because we are using the rest method.
// 4. What does the following code print to the console?

   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   ```
   // it will console.log callaway.
// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
/*yes ofcourse we can, it is called function expression, and we invoke it by console logging 2 numbers separated by commas an argument, ex: console.log(2, 3)this function returns the product of what is consolelogged of a and b which is 6*/
//6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

    ```javascript
    function x() {
    	a = 5;
    }
    ```
    /* no, they are only local variables because a variable called inside a function is always a local variable.*/
//#### Functions

//7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    ```
    /* this code will return Hello, JavaScript!*/
// 8. Transform this function into an arrow function

      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
/*const sum = (num1, num2)=>{
    return num1 + num2
}
sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))*/
// 9. What does the following code print to the console? Explain the process and concept behind it

     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
     ```
/* we created a function with a nested function that returns text inside of the parent function, so now when we console.log the parent function we should get "poppin' bottles".*/
// #### DOM

// 10. Which of the following events will you add in the `addEventListener()`method? 
//       -->☐ click
//       ☐ onclick

// 11. Does the `addEventListener()` method allow you to add many events to the same element?

    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ``
    // yes it does.
// *12. DOM exercise

    //   1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
     const btn = (el)=>{
        const Button = document.getElementsByTagName(`button`)
        
     }
    //   2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red

// #### Array Methods

// 14. What is the value of `passed` in the following code?

     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
     //it selects every number in the marks array thatis greater than or equal to 50 so [67, 60, 89, 90, 67]

// 15. What does the following code log?

   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   ```
// it logs [50, 88]
// 16. Use a javascript array method to square the value of every element in the array. 

   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
   //    input.forEach(function(element, index, array){
//     array[index] = element* element;
// });
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```
// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 

     ```javascript
     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     const total = (secondInput = []) => {
        const isPositive = num => typeof num === 'number' && num > 0;
        const res = secondInput.reduce((acc, val) => {
           if(isPositive(val)){
              acc += val;
           };
           return acc;
        }, 0);
        return res;
     };
     console.log(total(secondInput))//42
     ```
     
   
// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

     ```javascript```
     const input = 'George Raymond Richard Martin';
     //code 
     ```console.log(initials)//'GRRM'
     ```
     abbrev_name = function (str1) {
        var split_names = str1.trim().split(" ");
        if (split_names.length > 1) {
            return (split_names[0] + " " + split_names[1].charAt(0) + ".");
        }
        return split_names[0];
    };
    console.log(abbrev_name(input));
// #### Object and Classes

// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
//They are passed by Value
//ex:
/*function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y);//*/
// 19. What will be printed in the console

    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 

    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
//Chocolate cake is for $10
// 20. Refactor this code using Classes
/*class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.displayInfo = function () {
            console.log(this.name + " is for $ " + this.price);
        };
    }
} 
 
     const cake = new Item("Chocolate Cake", 10);
     cake.displayInfo();*/
// #### Promises

// 21. What will be the output and why ? What will be the state of the promise ?

    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```
// the output will be "SUCCESS!" because we are using the upper case method and also because we are resolving the promise.
// 22. What log will be made by the following code, after 2 seconds?

    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```
    //"OK"

// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process

    ```javascript
    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    ```
//the variable result will wait for the promise to be executed after one second and "done!" will be logged.

// *24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
//     1. Create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM



//     2. Make sure to use try and catch