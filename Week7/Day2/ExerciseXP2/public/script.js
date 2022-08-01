function exercise3() {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", click);
  
    function click() {
      alert("Hello from Javascript!");
    }
  }
  exercise3();