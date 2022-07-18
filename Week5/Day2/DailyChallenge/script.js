let search = document.querySelector("#search");
let add = document.querySelector("#submit");
let deleteAll = document.querySelector("#deleteall");
let gif = new XMLHttpRequest();
let container = document.querySelector(".container");
let img = document.createElement("img");
let xBtn = document.createElement("button");

function displayGif() {
 gif.open(
      "GET", `https://api.giphy.com/v1/gifs/search?q=hilarious&limit=25&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    gif.responseType = "json";
    gif.send();
    gif.onload = function () {
      if (gif.status != 200) {
        console.log("error status");
      } else {
        console.log("Finished Loading");
        console.log(gif.response);
        attach(gif.response);
      }
    };

    function attach() {
      add.addEventListener("click", addGif);
      deleteAll.addEventListener("click", deleteGif);
    }
  
    function addGif() {
      console.log(gif.response);
      gif.open(
        "GET",
        `https://api.giphy.com/v1/gifs/search?q=${search.value}&limit=50&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
      );
      gif.send();
      gif.onload = function () {
        xBtn.setAttribute("type", "button");
        xBtn.innerText = "X";
        xBtn.addEventListener("click", x);
        container.append(xBtn);
        img.setAttribute(
          "src",
          gif.response.data[Math.floor(Math.random() * 51)].images.downsized.url 
        );
        container.append(img);
      };
    }
    function deleteGif() {
        let container = document.querySelector(".container");
        container.innerHTML = ""; 
      }

      function x() {
        img.remove();
        xBtn.remove();
      }
  }
  displayGif();