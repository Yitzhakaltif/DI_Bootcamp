const express = require('express');
// const {getProducts,setProducts} = require('./modules/data.js');
const {getAllProducts,
        getProduct,
        searchProduct,
      insertProduct, updateProduct} = require('./modules/db.js');

const app = express();

// const products = getProducts();
// console.log(products);
// CRUD
// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE

app.use('/',express.static(__dirname+'/public'));

// BodyParser - npm
// to get the body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(5000, ()=>{
  console.log('Server is running on port 5000');
})

// GET - Read
app.get('/api/products/search', (req,res)=>{

  const name = req.query.q;
  searchProduct(name)
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
  })
  // const filterProducts = products.filter(item=>{
  //   return item.name.toLowerCase().includes(name.toLowerCase())
  // })
  // if(filterProducts.length === 0){
  //   return res.status(201).json({msg:'Not Found'})
  // }
  // res.json(filterProducts);
})

// GET - Read
app.get('/api/products/:id',(req,res)=>{
  const pid = req.params.id;
  getProduct(pid)
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
  })
  // const product = products.find(item=>{
  //   return item.id==pid
  // })
  // if(!product){
  //   return res.status(404).json({msg:'ID Not Found'})
  // }
  // res.json(product)
});


// GET - Read all product
app.get('/api/products',(req,res)=>{
  getAllProducts()
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
  })
})

// POST - create a new product
app.post('/api/products',(req,res)=>{
  console.log(req.body);
  insertProduct(req.body)
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
  })

  // const newProduct = {
  //   id:products.length+1,
  //   name: req.body.name,
  //   price: req.body.price
  // }
  // products.push(newProduct);
  // // write the new arr to the file
  // setProducts(products)
  //
  // res.json(products)
})

// PUT - Update
app.put('/api/products/:id', (req,res)=>{
  const id = req.params.id;
  updateProduct(id, req.body)
  .then(data=>{res.json(data)})
  .catch(e=>{
    console.log(e)
  })

  // const index = products.findIndex(item => {
  //   return item.id == id
  // });
  // const updateProduct = {
  //   id: products[index].id,
  //   name: req.body.name,
  //   price: req.body.price
  // }
//
//
//   products[index] = updateProduct;
//
//   setProducts(products);
//
//   res.json(products)
})


// DELETE - delete a product
// app.delete('/api/products/:id', (req,res)=>{
//   const id = req.params.id;
//   const index = products.findIndex(item=>{
//     return item.id == id
//   })
//
//   products.splice(index,1);
//
//   setProducts(products);
//
//   res.json(products)
// })














//above is from ziv

// const express = require('express');
// const {getProducts, setProducts} = require('./modules/data.js');
// const products = getProducts();
// console.log(products)
// const app = express();

// app.use('/',express.static(__dirname+'/public'));

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// app.listen(5000, ()=>{
//   console.log('Server is running on port 5000');
// })

// app.get('/api/products',(req,res)=>{
//   res.json(products)
// })

// //app.get
// //app.post
// //app.put
// //app.put
// //app.delete



// //GET - read all products


// app.get(`/api/products/search`, (req, res)=>{
//   const name = req.query.q;
//   const filterProducts = products.filter(item=>{
//   return item.name.toLowerCase().includes(name.toLowerCase())
// })
// if(filterProducts.length === 0){
//   return res.status(201).json({msg:`Not Found`})
// }
// res.json(filterProducts)
// })

// app.get(`/api/products`, (req, res)=>{
//   res.json(products)
// })


// app.get('/api/products/:id',(req,res)=>{
//     const pid = req.params.id;
//     const product = products.find(item=>{
//       return item.id==pid
//     })
//     if(!product){
//       return res.status(404).json({msg:'ID Not Found'})
//     }
//     res.json(product)
//   });




// //POST - create a new product

// app.post(`/api/products`, (req, res)=>{
//   console.log(req.body);
//   const newProduct = {
//     id:products.length+1,
//     name: req.body.name,
//     price: req.body.price
//   }
//   products.push(newProduct);
//   //write a new array to the file
//   setProducts(products)
//   res.json(products)
// })


// app.get(`/api`, (req, res)=>{
//   res.send(`api route`)
// })


// //PUT - Update 

// app.put(`/api/products/:id`, (req, res)=>{
//   const id = req.params.id;
//   const index = products.findIndex(item=>{
//     return item.id == id
//   });
//   const updateProducts = {
//     id: products[index].id,
//     name: req.body.name,
//     price: req.body.price
//   }

//   products[index]= updateProducts;


//   setProducts(products);
//   res.json(products);


// })

// //DELETE - delete a product

// app.delete(`/api/products/:id`, (req, res)=>{
//   const id =  req.params.id
//   const indexProducts = products.findIndex(item=>{
//     return item.id == id
//   })
//   products.splice(indexProducts, 1)

//   setProducts(products)

//   res.json(products)
// })


