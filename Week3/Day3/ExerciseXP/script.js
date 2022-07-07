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