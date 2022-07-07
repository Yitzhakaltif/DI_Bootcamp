let arrayColors = ['#FF6633', '#fff', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D','#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D'];
// you can use an array rgba colors or hex colors


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}


addColors()

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)
	}

}

addGrid()

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked)
}


function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)
	}

}

addGrid();

let colorSelect;

function pickColor(evt){
	colorSelect = evt.target.style.backgroundColor;
	console.log(colorSelect)
}

let divGridPaint = document.querySelectorAll("#gridPaint div");

function colorChange() {
	let mouseDown = 0;
	document.body.onmousedown = function() { 
 	 mouseDown++;
	}
	document.body.onmouseup = function() {
  	mouseDown--;
	}
	for (div of divGridPaint) {
		div.addEventListener("click", function(evt) {
			evt.target.style.backgroundColor = colorSelect;
		});
		div.addEventListener("mouseover",function(evt) {
			if (mouseDown){evt.target.style.backgroundColor = colorSelect;}
		});
	}
}

colorChange();
  
let clearButton = document.getElementById('clearbtn')
clearButton.addEventListener('click', clrBtn);
function clrBtn(){
	for (div of divGridPaint){
		div.style.backgroundColor = 'white';
	}
}
