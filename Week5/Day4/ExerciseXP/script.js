
//Exercise: 1
// await fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));

    async function One() {
        let response = await fetch("https://swapi.dev/api/starships/9/");
        if (response.status === 200) {
          let jsObject = await response.json();
          console.log(jsObject);
        } else {
          throw new Error("404");
        }
      }
      One();





//Exercise: 2


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}


async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();


// we are going to first get the string "calling" and because in the first function it has a set timeout of 2 seconds it will console.log "resolved after 2 seconds"




