// Exercise 1
let request = new XMLHttpRequest();
function gif() {
   
    request.open("GET","https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"); 
    request.send();
 
  }
  
  request.onload = function () {
    let obj1 = JSON.parse(request.response);
    console.log(obj1); 
  };
  gif();



  //Exercise 2

  let sungifs = new XMLHttpRequest();
  function sun() {
    sungifs.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"); 
    sungifs.send();
  }

  sungifs.onload = function () {
    let obj2 = JSON.parse(sungifs.response);
    console.log(obj2);
  };
  sun();