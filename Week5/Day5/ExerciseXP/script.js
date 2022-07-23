// const xhr = new XMLHttpRequest();
// const button = document.querySelector('#button');
// // const names = document.querySelectorAll('#name');
// const height = document.querySelector('#height');
// const gender = document.querySelector('#gender');
// const birthYear = document.querySelector('#birth-year');
// const homeWorld = document.querySelector('#home-world');
let displayDiv = document.getElementById("displayDiv");


const getCharacter = async () => {
  displayDiv.innerHTML = `<i class="fas fa-spinner fa-spin fa-5x"></i>`
  let randomNum = Math.floor(Math.random() * 184);

  try {
    let response = await fetch(`https://swapi.dev/api/people/${randomNum}/`);
    let data = await response.json();
    if (data.homeworld) {
      data.homeworld = await getPlanet(data.homeworld);
      display(data);
    } else {
      displayDiv.innerHTML = `Sorry, someone's missing! Please try again.`;
    }
  } catch {
    displayDiv.innerHTML = `Sorry, someone's missing! Please try again.`;
  }
}



const getPlanet = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data.name;
}

const display = (data) => {
  displayDiv.innerHTML = `<h1>${data.name}</h1>
	<p>Height: ${data.height}</p>
	<p>Gender: ${data.gender}</p>
	<p>Birth Year: ${data.birth_year}</p>
	<p>Home World: ${data.homeworld}</p>`;
}

// async function getInfo(){
//     let randomNumber = Math.floor((Math.random()*88)+1)
//     let apiUrl = `https://www.swapi.tech/api/people/${randomNumber}`;

//     await fetch(apiUrl).then(function(response){
//         updateInfo(response.data)
//     })
// }

// function updateInfo(data){
//     const names = document.querySelectorAll('#name');
//     names.innerText = data.names
// }

// button.addEventListener(`click`, getInfo);








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

