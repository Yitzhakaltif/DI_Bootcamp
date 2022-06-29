/*Exercise 1 : Information

//Part I : function with no parameters
function infoAboutMe(){
   let sentence = {
      name: "Isaac",
      age: 18,
      hobbies: "basketball"
      
   }
   return sentence;
};
infoAboutMe();
*/

/*Part II : function with three parameters

function infoAboutPerson(personName, personAge, personFavoriteColor){

   console.log(`Your name is ${personName}, you are ${personAge}, your favorite color is ${personFavoriteColor}`);
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/

/*Exercise 2 : Tips

function calculateTip() {
    let bill = Number(prompt("Amount of the bill?"));
    let tip;

    if (bill < 50){
        tip = 0.2;
    } else if (50 <= bill && bill < 200) {
        tip = 0.15;
    } else if (200 <= bill) {
        tip = 0.1;
    }
    
    console.log(`Bill is $${bill}, tip is $${tip}, total: $${tip * bill + bill}`);
}
calculateTip();
*/


/*Exercise 3 : Find The Numbers Divisible By 23

function isDivisible(divisor){
   
   let outcome = [];
   let k = 0;
   let sum = 0;

   for (let i = 0; i < 500; i++) {
       if (i % divisor == 0) {
           outcome[k] = i;
           sum += i;
           k++;
       }
   }
   console.log(outcome)
   console.log(sum);
}

isDivisible(23);
*/

/*Exercise 4 : Shopping List

let stock = { 
   "banana": 6, 
   "apple": 0,
   "pear": 12,
   "orange": 32,
   "blueberry":1
}  

let prices = {    
   "banana": 4, 
   "apple": 2, 
   "pear": 1,
   "orange": 1.5,
   "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];

 function myBill(){
   let totalPrice = 0;
    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            totalPrice += prices[item];
            stock[item]--;           
        }
    }
   
    console.log(totalPrice);
    console.log(stock);
}

myBill();
*/

/*Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange){
   let change = [0.25, 0.10, 0.05, 0.01];
   let sumOfChange =0;
   for (const i in amountOfChange ){
      sumOfChange += amountOfChange[i]*change[i];}
      if (sumOfChange>itemPrice){
         return true;
      }
      else {
         return false;
      }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
*/

//Exercise 6 : Vacations Costs
/*1.*/
function hotelCost(){
   let nightCost = 140;
    let numOfNights;

    while (true) {
        numOfNights = parseInt(prompt("How many nights would you like to stay kind sir?"));
        if (!isNaN(numOfNights)) {
            break;
        }
    }
    return numOfNights * nightCost;
}



/*2.*/
function planeRideCost(){
    
   let destinationPrice = {london: 183, paris: 220, other: 300};
   let destination;

   while (true) {
       destination = prompt("What is your destination?");
       if (typeof(destination) == "string") {
           break;
       }
   }

   if (!(destination in destinationPrice)) {
       destination = "other";
   }
   
   return destinationPrice[destination.toLowerCase()];
}

/*3*/

function rentalCarCost(){
   let dayCost = 40;
    let numOfDays;

    while (true) {
        numOfDays = parseInt(prompt("How many days?"));
        if (!isNaN(numOfDays)) {
            break;
        }
    }

    if (numOfDays <= 10) {
        return dayCost * numOfDays;
    } else if(numOfDays>10){
        return dayCost * numOfDays * 0.95;
    }
}




/*4*/
function totalVacationCost(){

let hotel = hotelCost();
let plane = planeRideCost();
let car = rentalCarCost();
let totalVacationCost = hotel + plane + car;
console.log(`Hotel cost: ${hotel}$, destination cost: ${plane}$, and car rental cost: ${car}$`);
console.log(`Total cost: ${totalVacationCost}$`);
}
totalVacationCost();
















