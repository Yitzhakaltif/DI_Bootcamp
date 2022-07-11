let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//1
let displayGroceries = () => {
    groceries.fruits.forEach(element => {
        console.log(element)
    })};
displayGroceries()

//2
let cloneGroceries = () => {
    let user = client;
    client = "Betty";
    let shopping = groceries;
    shopping.totalPrice = "35$"
    shopping.payed = false
    console.log(user);
    console.log(shopping);
}
cloneGroceries();