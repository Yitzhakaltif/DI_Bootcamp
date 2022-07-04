/*exercise: 1
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
*/

/*Exercise: 3
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
*/







//dont do exercises with forms and other things we didnt cover in class.
