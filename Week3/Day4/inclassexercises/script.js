// // let banner = document.getElementById("banner");
// // let idInterval;
// // function startAdding(){
// // 	idInterval=setInterval(addbanner,1000)
// // }

// // setTimeout(makeAppear, 3000);

// // function makeAppear(){
// // 	banner.classList.remove("disappear");
// // }

// let spanSeconds = document.getElementById('spanNumber');

// let counter = 10;

// let idInterval = setInterval(decreaseSecond, 1000);
// function decreaseSecond(){
//     if (counter == 0){
//         clearInterval(idInterval)
//     } else{
//         counter--;
//         spanSeconds.textContent = counter;
//     }
// }

//retrieve the item

let item =  document.getElementById("boxToDrop"); //declared a variable and assigned it to the element with the id boxToDrop
item.addEventListener("dragstart", startDragging); //added an eventlistener (dragstart) and assigned it to the function startDragging

function startDragging (evt) {
	item.classList.replace("draggedItem", "startDragging");//style the elements with the ids written in the paranthesis.
	// in the future, I will drop an element of type
	// "text/plain" because it's an element from the DOM
	// and I will use the id of the item
	// console.log(evt.dataTransfer)
	evt.dataTransfer.setData("text/plain", evt.target.id); //transfering the data to the drop zone that has the tupe textplain
	// this line prepares what will happen in the drop
	// console.log(evt.dataTransfer)
}

//retrieve all the dropzones
let alldropzones = document.getElementsByClassName("dropzone");

function manipulateDropZone(){
	for (let zone of alldropzones){
		zone.addEventListener("dragover", draggingOver);
		zone.addEventListener("drop", dropping)
	}
}

manipulateDropZone()

function draggingOver(evt){
	evt.preventDefault()
	evt.target.style.border = "2px dashed red"; //styled the border to become dashed after we drag the item over the drag zone
}

function dropping(evt){ 
	evt.preventDefault();
	let dataNeeded = evt.dataTransfer.getData("text/plain"); //retrieve the item that is linked to the item with the type text plain.
	let box = document.getElementById(dataNeeded); //assigned a new variable to the element with the id dataNeeded
	evt.target.appendChild(box) //appended the variable box to the each dropzone which gets the item ragged over it.
}


// button.addEventListener("click")