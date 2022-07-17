



document.querySelector('form').addEventListener("submit", function(ev) {
    ev.preventDefault();
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let obj = {
        name: fname,
        lastname: lname
    }
    
    console.log(JSON.stringify(obj))
    console.log("Hello");
    document.write(JSON.stringify(obj))
    
});

// function send (){
//     document.querySelector("#submit")
    
// }