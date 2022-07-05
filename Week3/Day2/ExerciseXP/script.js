/*exercise: 1*/
//1
let a = document.getElementsByTagName('h1');
console.log(a);
//2
let b = document.querySelectorAll('article')[0];
b.removeChild(b.children[6]);
console.log(b);
//3
function h2Click() {
let c = document.querySelectorAll('h2')[0];
c.style.backgroundColor = 'red';
}
//4
function h3Click(){
let d = document.querySelectorAll("h3")[0];
d.style.display = "none";
}
//5

function txtClick(){
    let e = document.querySelectorAll("article")[0];
    e.style.fontWeight = 'bold';
    }

/*Exercise: 2*/
//1
let form = document.forms[0];
console.log(form);
//2
console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"))
// console.log(document.getElementById('submit')); //commented because of ex:4
//3
console.log(document.getElementsByName('fname'));
console.log(document.getElementsByName('lname'));
//4
form.addEventListener("submit", List);
function List(ev) {
  ev.preventDefault();
    firstName = form.elements.fname.value;
    lastName = form.elements.lname.value;
    if (firstName != "" && lastName != "") {
        ul = document.getElementsByClassName("usersAnswer")[0];
        fNameAnswer = document.createElement("li");
        fNameAnswer.innerText = firstName;
        lNameAnswer = document.createElement("li");
        lNameAnswer.innerText = lastName;
        ul.appendChild(fNameAnswer);
        ul.appendChild(lNameAnswer);
    }
}

/*Exercise: 3*/
//1
let allBoldItems;

//2
function getBold_items() {
  allBoldItems = document.querySelectorAll('strong'); 
}
//3
function highlight(){
    for (let i=0; i<allBoldItems.length; i++)
    {                                                    
     allBoldItems[i].style.color = "blue";
     }

}
//4
function return_normal()
{
  for (let i=0; i<allBoldItems.length; i++) 
  {
       allBoldItems[i].style.color = "black";
  }
}
//5
getBold_items();
highlight();
return_normal();

/*exercise: 4*/
let forms = document.forms[1];

forms.addEventListener("submit", volumeCalculater);

function volumeCalculater(ev){
  
    let radius = forms.radius.value;

    let volume = 4/3*Math.PI*Math.pow(radius,3);
    
    ev.preventDefault();

    console.log(`Radius = ${radius}, Volume = ${volume} `);

    forms.volume.value = volume;

}










