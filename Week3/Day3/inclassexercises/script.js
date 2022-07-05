//Exercise1

// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

let colors = ["blue", "yellow", "green", "pink"]; //declared the colors array for the buttons

function addButton(){
	let div = document.getElementById("containerbtn") //declared a div variable
	for (let i = 0; i<colors.length; i++){ //created a loop for the button's colors
		let btn = document.createElement("button"); // created a button variable and created a new button element on the dom
		let text = document.createTextNode(colors[i]); // created a variable that gives each button the name that is in the array above.
		btn.classList.add("btn-big"); // linked the css that gives the button its style
		btn.addEventListener("click", changeBackground); // added an event that changes the background color when clicking on the button; for each button.
		btn.appendChild(text); //appended the btn variable to the text variable
		div.appendChild(btn); //appended the div variable to the btn variable
	}
}

addButton() // called the function


function changeBackground (ev){ //created a function that changes the backgroun color of the body when clicking on each button; diff color per button
	let colorBtn = ev.target.textContent //declared a variable that finds the name of the button when clicked on 
	document.body.style.backgroundColor = colorBtn; // gave the body the color of the "colorBtn" when clicking on the buttons.
}

// Exercise 2

let pics = [
	"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

//1. retrieve the button
let btnImage = document.getElementById("btnimg");
let div = document.getElementById("container");

btnImage.addEventListener("click", addImages)

function addImages(){
	for (let i = 0; i<pics.length; i++) {
		let newimg = document.createElement("img");
		newimg.classList.add("img-small")
		newimg.setAttribute("src", pics[i]);

		//create a deletebutton
		let btndelete =  document.createElement("button");
		let textbtn = document.createTextNode(`delete pic ${i+1}`)
		btndelete.appendChild(textbtn)
		btndelete.addEventListener("click", deleteImg)

		div.appendChild(btndelete)
		div.appendChild(newimg);
	}
}


function deleteImg(ev){
	// console.log(ev.target) //button we clicked
	// console.log(ev.target.nextElementSibling) //image that is a next sibling of the button
	let imgsibling = ev.target.nextElementSibling;
	imgsibling.remove()
}