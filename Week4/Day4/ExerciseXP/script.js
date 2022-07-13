/*Exercise 1 : Location

//1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//The output will be ...
*/


/* Exercise 2: Display Student Info
//1
function displayStudentInfo({ first, last }) {
    console.log(`Your full name is ${first} ${last}`);
  }
  
  displayStudentInfo({ first: `Elie`, last: `Schoppik` });
  */ 

  /* Exercise 3: User & Id 
  const users = { user1: 18273, user2: 92833, user3: 90315 }
  //1
const usersArray = Object.entries(users);
console.log(usersArray);

//2
for (let Id of usersArray) {
    Id[1] *= 2;
  }
*/

/*Exercise 4 : Person Class

//1
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//The output will be ...
*/

/* Exercise 5 : Dog Class 

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  //1
  //Number 2 successfully Extends the Dog class. which is:
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  */
/*Exercise 5 :  Challenges*/

/*//1
 [2] === [2] //false
 {} === {} //false
*/
/*
//2

const object1 = { number: 5 }; //object 1 has the value of 5 at first, but changes to 4, because of line 86.
const object2 = object1; // object 2 has the value of 4.
const object3 = object2; // object 3 has the value of 4.
const object4 = { number: 5 }; // object4 has the value of 5.
object1.number = 4; // this changes all the objects to 4 except object 4 which has the value of 5.
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
*/
//a
class Animal {
    constructor(name, type, color) {
      this.animalName = name;
      this.animalType = type;
      this.animalColor = color;
    }
  }
  //b
  class Mamal extends Animal {
    constructor(name, type, color, sound) {
      super(name, type, color);
      this.animalSound = sound;
      this.sound = function (voice) {
        console.log(
          `${this.animalSound}, I'm a ${this.animalType}, named ${this.animalName} and I'm ${this.animalColor}`
        );
        return voice;
      };
    }
  }
  //c
  let farmerCow = new Mamal("Lily", "cow", "white with black spots", "Mooooo!!!");
farmerCow.sound();
  let huskyDog = new Mamal("Kinder", "Husky", "Copper", "Wuff Wuff");
  huskyDog.sound();
  


