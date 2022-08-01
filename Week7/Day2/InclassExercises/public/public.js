
function searchProduct(){
    const txtToSearch = document.getElementById(`search`).value;
    fetch(`http://localhost:5000/api/products/search?q=${txtToSearch}`)
    .then(res=>res.json())
    .then(data=>{
        addProductsToPage(data);
    })
    
        .catch(e=>{
    console.log(e)
})

}

function getProducts (){
    fetch(`http://localhost:5000/api/products`)
    .then(res=>res.json())
    .then(data=>{
        addProductsToPage(data)
    }).catch(e=>{
        console.log(e)
    })
}
getProducts();

function addProductsToPage(arr){
    const root = document.getElementById('root');
    root.innerHTML = ``;
    arr.forEach((item, i) => {
      const div = document.createElement('div');
      div.classList.add('dib')
      const h2 = document.createElement('h2');
      h2.innerText= item.name;
      div.appendChild(h2)
      const p = document.createElement('p');
      p.innerText= item.price;
      div.appendChild(p)
      root.appendChild(div)
    });
  }


