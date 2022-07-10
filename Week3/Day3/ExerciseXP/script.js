/*exercise: 1
//1
let alrt = setTimeout(function() { alert("Hello World"); }, 2000);

//2
let para = document.getElementById("container");
setTimeout( function(){
    let p = document.createElement('p');
    p.textContent ='Hello World';
    para.appendChild(p)}, 2000);

//3
let para2 = document.getElementById("container");
let interval = setInterval(function p3(){
 p2 = document.createElement('p');
p2.textContent = 'Hello World';
para2.appendChild(p2)
}, 2000);

function stop(){
    clearInterval(interval);
}
document.getElementById("clear").addEventListener("click", stop);


setTimeout(function(){
    clearInterval(interval);
}, 10000);
*/





/*exercise: 2
  let redBox = document.getElementById('animate')  
  function myMove() {
        let start = Date.now();
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          console.log(timePassed)
          redBox.style.left = timePassed / 5 + 'px';
          if (timePassed > 1725) {
            clearInterval(timer);
          }
        }, 30);
      }
      */

/*Exercise: 3*/
let item = document.getElementById("box");
item.addEventListener("dragstart", startDragging);

function startDragging(evt) {
  evt.dataTransfer.setData("text/plain", evt.target.id);
}

let dropZon = document.getElementById("target");

function manipulateDropZone() {
  dropZon.addEventListener("dragover", draggingOver);
  dropZon.addEventListener("drop", dropping);
}

manipulateDropZone();

function draggingOver(evt) {
  evt.preventDefault();
  evt.target.style.border = "2px dashed red";
}

function dropping(evt) {
  evt.preventDefault();
  let dataNeeded = evt.dataTransfer.getData("text/plain");
  let box = document.getElementById(dataNeeded);
  evt.target.appendChild(box);
}

