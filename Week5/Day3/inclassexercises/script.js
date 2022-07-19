// # Promises
// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")

// const checkParam = function (input) {
// 	const checkInput = new Promise ((resolve, reject) => {
// 		setTimeout(() => {
// 			if (typeof input === 'string'){
// 				resolve(input.toUpperCase())
// 			} else {
// 				reject(`error ${input}`)
// 			}
// 		}
// 		, 5000)
// 	})

// 	return checkInput;
// }

// checkParam("hello")
// .then(res => console.log(res+res)) //HELLOHELLO
// .catch(error => console.log(error))

// checkParam(123)
// .then(res => console.log(res+res))
// .catch(error => console.log(error)) //error 123


// # Fetch
// # Exercise 2 : use fetch
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
let p1 = () =>{
let body = document.getElementsByTagName("body")[0];
fetch("https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then(res => {
    return res.json();
})
.then(objSun => {
    let img = document.createElement("img");
    img.setAttribute("src", objSun.data.images.original.url);
    body.appendChild(img);
})}
p1();





// console.log(fetch(`http://random-word-api.herokuapp.com/word?number=1`))

// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page
// PART 2
fetch("http://random-word-api.herokuapp.com/word?number=1")
.then(res => {
	if (res.status !== 200){
		throw new Error ("Wrong response")
	} else {
		return res.json()
	}
})
.then(res => fetch(`https://api.giphy.com/v1/gifs/random?tag=${res[0]}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`))
.catch(error => displayError(error))
.then(res => {
	if (res.status !== 200){
		throw new Error ("Wrong response")
	} else {
		return res.json()
	}
})
.then(res => displayGif(res))
.catch(error => displayError(error))

function displayGif(object) {

	let div = document.getElementById("div");
	let img = document.createElement("img");
	img.src = object["data"]["images"]["original"]["url"];
	div.appendChild(img)

}

function displayError(object) {

	let div = document.getElementById("div");
	let h1 = document.createElement("h1");
	let text = document.createTextNode("Error, please try later...")
	h1.appendChild(text)
	div.appendChild(h1)

}










// # Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

