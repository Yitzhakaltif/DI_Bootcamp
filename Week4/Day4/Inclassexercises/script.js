// // Exercise 1:
// // # Object destructuring
// // ## Exercise1
// // ### Part I
// // What does the following code return/print?
// // let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// // let {numPlanets, yearNeptuneDiscovered} = facts;
// // ---
// // ## Exercise2
// // 1. Modify the code below, and destructure the object in the parameter
// // (ie. you should have 3 parameters : name, house and goodstudents)
// function getDetails(name,house,goodStudent) {
// 	console.log(name, house, goodStudent)
//  }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodStudent : false});


// // Exercises:
// // # Object destructuring
// // ## Exercise1
// // ### Part II
// // What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // it returns the rest of the objects after numPlanets.
// // ## Exercise2
// // 1. Modify the code below, and destructure the object in the parameter
// // (ie. you should have 4 parameters : name, house, friendName and age)
// function getMoreDetails(objCharacter) {
//     const {name, house,friend:{friendName,age}} = objCharacter
//     console.log(name, house, friendName, age)
//   }
//   //same
//   function getMoreDetailsOther({name, house,friend:{friendName,age}}) {
//     console.log(name, house, friendName, age)
//   }
  
//   getMoreDetails(
//         {name: 'Hermione Granger', 
//           house: 'Gryfindor', 
//           friend :  {
//             friendName : 'Harry Potter', 
//             age : 20
//           }
//         })
  
  
//   getMoreDetailsOther(
//         {name: 'Hermione Granger', 
//           house: 'Gryfindor', 
//           friend :  {
//             friendName : 'Harry Potter', 
//             age : 20
//           }
//         })
// // ## Exercise3
// // 1. Modify the code below, and destructure the object in the parameter
// // (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// function getElonMuskDetails(objElon){
//   const {
//     first:firstname, 
//     last:lastname, 
//     housesLocation:[locationOne, locationTwo],
//     houses : {value : valueHouses}
//   } = objElon
  
//   console.log(firstname, lastname)
//   console.log(locationOne, locationTwo, valueHouses)

// }

// Exercise ## Objects
// ## Exercise 1
// # Part I
// 1) Create a TV function constructor with 3 parameters : brand, channel and volume
// Channel should be 1 by default. Volume should be 50 by default.
// 2) Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// 2) Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// 3) Create an object for the Samsung TV
// 4) Call the inscrease method, and check if the volume changed

class TV {
    constructor(brand, channel=1, volume=50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume;
      
    }
 increaseVolume(){
    this.volumeTV++
    console.log(`The new volume is ${this.volumeTV}`)
 }
 decreaseVolume(){
    this.volumeTV--
    console.log(`The new volume is ${this.volumeTV}`)
 }
}

const samsungTV = new TV(`Samsung`, 3, 43)
console.log(samsungTV);
samsungTV.increaseVolume();

// ## Part II
// 5) Create a subclass for Smart TV
// 6) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default

class SmartTV extends TV{
    constructor(brandSmartTV, channelSmartTV, volumeSmartTV, hasNetflix = true){
        super(brandSmartTV, channelSmartTV, volumeSmartTV)
        this.netflix = hasNetflix;
    }
    increaseVolume(){
        this.volumeTV +=10 ;
        console.log(`The new volume is ${this.volumeTV}`)
     }
}

const smartSamsungTV = new SmartTV(`Samsung`, 23, 20, false)
console.log(smartSamsungTV);
smartSamsungTV.increaseVolume();