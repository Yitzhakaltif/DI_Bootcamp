// Exercise
// # Async Await
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject (use the endWith string method)
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"


/*
async function getNames(fnOne,fnTwo) {
    if(typeof fnOne !== "string" || typeof fnTwo !== "string") {
        throw new Error("not a string")
    } else {
        return [fnOne,fnTwo];
    }

}

async function getNoun(noun) {
    if(noun.length <= 3) {
        throw new Error("too small")
    } else {
        return noun
    }
}


async function getCity(city){
    if(city.charAt(0) === city.charAt(0).toUpperCase()){
        return city
    } else {
        throw new Error("not good city")
    }
}

async function getVerb(verb){
    if (verb.endsWith("ing")) {
        return verb
    } else {
        throw new Error("not good verb")
    }
} 

async function getSentence(){
    try {
        let names = await getNames("Beyonce", "Barack Obama");
        let noun = await getNoun("fo");
        let city = await getCity("Paris");
        let verb = await getVerb("playing");
        return `${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`
    } catch(error) {
        console.log(error.message)
    }
}

getSentence()
*/

// async await with fetch
/*
async function getUser () { 
	let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
	if (response.status >= 400 && response.status < 600){
		throw new Error("Bad response from server");
	} else {
	    return response.json();
	}
}


async function getGifs(user) {
	let responsegif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    if (responsegif.status >= 400 && responsegif.status < 600) {
      	throw new Error("Bad response from server");
    } else {
    	return responsegif.json();
    }
}

async function displayAll(){
	try {
		let user = await getUser();
		let gif = await getGifs(user);
		console.log(gif["data"]["title"])
	} catch (err){
		console.log(err.message)
	}
}
*/

//PROJECT WORD AND GIF rewriiting using asyc awat
/*
function fetchWord () {
	fetch('http://random-word-api.herokuapp.com/word?number=1')
	.then(response => response.json())
	.then(result => {
		let [word] = result;
		fetchGif(word)
	})
	.catch(error => console.log("IN THE CATCH", error)) //catch an error if there is
}

function fetchGif (wordrandom) {
	fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
	.then(response => {
		if (response.status !== 200){
			throw new Error ("404 ERROR")	
		} else {
			return response.json(); //returns a promise
		}
	})
	.then(result => {
		console.log(result)
		if (result["data"] == []){
			throw new Error ("GIF NOT FOUND");
		} else {
			let gif = result["data"]["images"]["original"]["url"];
			let imageGif =  document.createElement("img");
			imageGif.setAttribute("src", gif);
			document.body.appendChild(imageGif)
		}
		
	})
	.catch(error => {
		let imageGif = document.createElement("img");
		imageGif.setAttribute("src", "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif");
		document.body.appendChild(imageGif)
		console.log("IN THE CATCH", error)
	})
}

fetchWord()
*/

//rewriiting using async await
async function fetchWord(){
	let responseFetch = await fetch('http://random-word-api.herokuapp.com/word?number=1');
	//Response object
	console.log(responseFetch)
	if(responseFetch.status !== 200){
		throw new Error ("Not good")
	} else{
		let word = await responseFetch.json()
		return word[0];
	}
}


async function getGif (wordrandom){
	let responseFetchGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
	if(responseFetchGif.status !== 200){
		throw new Error ("Not good - get gif")
	} else{
		let gif = await responseFetchGif.json()
		return gif;
	}
}

// async function displayGif(){
// 	try {
// 		let word = await fetchWord();
// 		let gif = await getGif(word);
// 		if (gif["data"].length == 0){
// 			throw new Error ("GIF NOT FOUND")
// 		} else {
// 			let url = gif["data"]["images"]["original"]["url"];
// 			let imageGif =  document.createElement("img");
// 			imageGif.setAttribute("src", url);
// 			document.body.appendChild(imageGif);
// 		}
// 	} catch (error){
// 		console.log(error.message)
// 	}
// }


// displayGif()


