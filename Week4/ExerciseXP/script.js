/* // #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
//It will alert the number 3
// run in the console:
q1()
//alerted 3
//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
//it will alert 5 twice, console 5
// run in the console:
q22()
q2()
q22()
//alerted 0 and 5.
//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
//it will alert hello
// run in the console:
q3()
q32()
//alerted hello
//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
 }

//it will alert "test"
 // run in the console:
 q4()
 //alerted test
//#5
 var a = 2;
 if (true) {
     var a = 5;
     alert(a);
 }
 //it will alert 5
 //run in the console:
 alert(a);
 //alerted 5 twice.
/*


//Exercise 2
const winBattle = () =>{
let experiencePoints = winBattle === true ? 10:1;
console.log(experiencePoints);
}
winBattle();
*/


 /*
   //Exercise 3
   let arg = "";

   let arg2 = arg === "" ? "yes it's a string":"no its not a string"
   console.log(arg2);
   */

/* 
  //Exercise 4
  let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
 colors.forEach(function(element, index){
  console.log(`#${index +1} choice is ${element}`);
 })
 const includesViolet = colors.includes("Violet");
 if (includesViolet === true){
  console.log("Yeah") }
  else {console.log("No . . .")};

*/

  /* 
  // Exercise 5
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((v, i) => {
  i + 1 < ordinal.length
    ? console.log(`${i + 1}${ordinal[i + 1]} choice is ${v}`)
    : console.log(`${i + 1}${ordinal[0]} choice is ${v}`);
});
*/

/*
 //Exercise 6
  
  let bankAmount = 20000;
  const vat = 0.17;
  let details = ["+200", "-100", "+146", "+167", "-2900"];
  details.forEach((v, i) => {
    v < 0 ? (details[i] = v * (1 + vat)) : v;
    bankAmount += parseInt(details[i]);
  });
  console.log(details);
  console.log(bankAmount);
  */