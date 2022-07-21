const xhr = new XMLHttpRequest();
const button = document.querySelector('#button');
// const names = document.querySelectorAll('#name');
const height = document.querySelector('#height');
const gender = document.querySelector('#gender');
const birthYear = document.querySelector('#birth-year');
const homeWorld = document.querySelector('#home-world');

async function getInfo(){
    let randomNumber = Math.floor((Math.random()*88)+1)
    let apiUrl = `https://www.swapi.tech/api/` + randomNumber

    await fetch(apiUrl).then(function(response){
        updateInfo(response.data)
    })
}

function updateInfo(data){
    const names = document.querySelectorAll('#name');
    names.innerText = data.names
}

button.addEventListener(`click`, getInfo);








// (function button() {
//     const btn = document.getElementById('#button');
//     btn.addEventListener("click");
//     btn.innerText = "Find Someone";
//     document.body.append(btn);
//   })();


// async function getData(){
//     const API = await fetch(`https://www.swapi.tech/`);



//     console.log(API);
// }
// getData();

// const displayData = async ()=>{
//     const response = await fetch(`https://www.swapi.tech/`);
//     const jsonUserData = await response.json();
// console.log(jsonUserData);
//     return jsonUserData;

// }

// displayData();

