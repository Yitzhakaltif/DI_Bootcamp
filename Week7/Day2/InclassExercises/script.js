const express = require('express');
const {products} = require('./modules/data.js');

const app = express();

app.use('/',express.static(__dirname+'/public'));

app.listen(5000, ()=>{
  console.log('Server is running on port 5000');
})

app.get('/api/products',(req,res)=>{
  res.json(products)
})

//app.get
//app.post
//app.put
//app.put
//app.delete

app.get(`/api`, (req, res)=>{
    res.send(`api route`)
})


app.get('/api/products/:id',(req,res)=>{
    const pid = req.params.id;
    const product = products.find(item=>{
      return item.id==pid
    })
    if(!product){
      return res.status(404).json({msg:'ID Not Found'})
    }
    res.json(product)
  });





app.get(`/api/products/search`, (req, res)=>{
    const name = req.query.q;
    const filterProducts = products.filter(item=>{
    return item.name.toLowerCase().includes(name.toLowerCase())
})
if(filterProducts.length === 0){
    return res.status(201).json({msg:`Not Found`})
}
  res.json(filterProducts)
})

app.get(`/api/products`, (req, res)=>{
    // res.send(`product route data`)
    res.json(products)
})



