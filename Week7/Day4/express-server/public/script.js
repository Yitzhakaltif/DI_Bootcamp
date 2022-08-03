const sendGetData = ()=>{
    const email = document.getElementById(`email`).value;
    const password = document.getElementById(`password`).value;
    fetch(`http://localhost:5000/userlogin?email=${email}&password=${password}`)

    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const root = document.getElementById(`root`);
        root.innerText = data.msg + " " + data.status;
    })
    .catch(e=>{
        console.log(e)
    })
}   





const sendPostData = ()=>{

    const email = document.getElementById(`emailpost`).value;
    const password = document.getElementById(`passwordpost`).value;


// let obj = {
//     email,
//     password
// }

fetch(`http://localhost:5000/register`, {
    method:`POST`,
    headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    .catch(e=>{
        console.log(e)
    })

}



const sendLogin = ()=>{

    const email = document.getElementById(`email`).value;
    const password = document.getElementById(`password`).value;
    // console.log(email, password)

// let obj = {
//     email,
//     password
// }

fetch(`http://localhost:5000/login`, {
    method:`POST`,
    headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const root = document.getElementById('root');
        root.innerText = data.msg;
      })
    .catch(e=>{
        console.log(e)
    })

}



