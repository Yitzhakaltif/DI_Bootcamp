 
 //Exercise 1
 function compareToTen(num) {
	const checkNum = new Promise ((resolve, reject) => {
		setTimeout(() => {
			if (num <10){
				resolve(`${num} is less than 10`)
			} else {
				reject(`${num} is a huge number`)
			}
		}
		, 100)
	})

	return checkNum;
}
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
  

  //Exercise 2
  function exercise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (1+1 == 2 && 2+2 == 4) {
          resolve("success");
        } else {
          reject("Oops something went wrong");
        }
      }, 4000);
    });
    
  }
  exercise2()
    .then((res) => console.log(res)) 
    .catch((error) => console.log(error)); 


//Exercise 3
//1
Promise.resolve(3)
.then(
    (value) => {
      console.log(value); 
    }
  );
//2
  Promise.reject('Boo!')
    .catch((Error) => console.log(Error)); 